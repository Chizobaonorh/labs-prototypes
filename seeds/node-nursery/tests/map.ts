/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import test from "ava";

import map, { MapInputs, lambda } from "../src/nodes/map.js";
import { Capability, InputValues } from "@google-labs/graph-runner";
import { Board } from "@google-labs/breadboard";
import { Nursery } from "../src/nursery.js";
import Starter from "@google-labs/llm-starter";

test("map with no board just outputs list", async (t) => {
  const inputs = {
    list: [1, 2, 3],
  } as MapInputs;
  const outputs = await map(inputs);
  t.deepEqual(outputs, { list: [1, 2, 3] });
});

test("map with board", async (t) => {
  const inputs = {
    list: [1, 2, 3],
    board: {
      kind: "board",
      board: {
        kits: [],
        edges: [],
        nodes: [],
        runOnce: async (inputs: InputValues) => {
          return inputs;
        },
      },
    },
  } as MapInputs;
  const outputs = await map(inputs);
  t.deepEqual(outputs, {
    list: [
      { index: 0, item: 1, list: [1, 2, 3] },
      { index: 1, item: 2, list: [1, 2, 3] },
      { index: 2, item: 3, list: [1, 2, 3] },
    ],
  });
});

test("using map as part of a board", async (t) => {
  const board = new Board();
  const nursery = board.addKit(Nursery);
  const input = board.input();
  const map = nursery.map({
    board: {
      kind: "board",
      board: {
        kits: [],
        edges: [],
        nodes: [],
        runOnce: async (inputs: InputValues) => {
          return inputs;
        },
      },
    } as Capability, // TODO: Fix types.
  });
  input.wire("list->", map);
  map.wire("list->", board.output());
  const outputs = await board.runOnce({ list: [1, 2, 3] });
  t.deepEqual(outputs, {
    list: [
      { index: 0, item: 1, list: [1, 2, 3] },
      { index: 1, item: 2, list: [1, 2, 3] },
      { index: 2, item: 3, list: [1, 2, 3] },
    ],
  });
});

test("sending a real board to a map", async (t) => {
  const fun = new Board();
  fun.input().wire("*->", fun.output());

  const board = new Board();
  const nursery = board.addKit(Nursery);
  const input = board.input();
  const map = nursery.map({
    board: {
      kind: "board",
      board: fun,
    } as Capability, // TODO: Fix types.
  });
  input.wire("list->", map);
  map.wire("list->", board.output());
  const outputs = await board.runOnce({ list: [1, 2, 3] });
  t.deepEqual(outputs, {
    list: [
      { index: 0, item: 1, list: [1, 2, 3] },
      { index: 1, item: 2, list: [1, 2, 3] },
      { index: 2, item: 3, list: [1, 2, 3] },
    ],
  });
});

test("using lambda syntactic sugar", async (t) => {
  const board = new Board();
  const nursery = board.addKit(Nursery);
  const input = board.input();
  const map = nursery.map(
    await lambda(async (board, input, output) => {
      input.wire("*->", output);
    })
  );
  input.wire("list->", map);
  map.wire("list->", board.output());
  const outputs = await board.runOnce({ list: [1, 2, 3] });
  t.deepEqual(outputs, {
    list: [
      { index: 0, item: 1, list: [1, 2, 3] },
      { index: 1, item: 2, list: [1, 2, 3] },
      { index: 2, item: 3, list: [1, 2, 3] },
    ],
  });
});

test("using lambda with promptTemplate", async (t) => {
  const board = new Board();
  const nursery = board.addKit(Nursery);
  const input = board.input();
  const map = nursery.map(
    await lambda(async (board, input, output) => {
      const llm = board.addKit(Starter);
      const template = llm.promptTemplate("item: {{item}}");
      input.wire("item->", template.wire("prompt->", output));
    })
  );
  input.wire("list->", map);
  map.wire("list->", board.output());
  const outputs = await board.runOnce({ list: [1, 2, 3] });
  t.deepEqual(outputs, {
    list: [{ prompt: "item: 1" }, { prompt: "item: 2" }, { prompt: "item: 3" }],
  });
});

test("using lambda with promptTemplate from outer board", async (t) => {
  await t.throwsAsync(
    async () => {
      const board = new Board();
      const nursery = board.addKit(Nursery);
      const llm = board.addKit(Starter);

      const input = board.input();
      const template = llm.promptTemplate("item: {{item}}");
      const map = nursery.map(
        await lambda(async (board, input, output) => {
          input.wire("item->", template.wire("prompt->", output));
        })
      );
      input.wire("list->", map);
      map.wire("list->", board.output());
      await board.runOnce({ list: [1, 2, 3] });
    },
    { message: "Cannot wire nodes from different boards." }
  );
});
