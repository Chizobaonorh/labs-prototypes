/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import type { InputValues } from "@google-labs/graph-runner";

export type PropmtTemplateOutputs = {
  prompt: string;
};

export type PromptTemplateInputs = {
  template: string;
};

export const stringify = (value: unknown): string => {
  if (typeof value === "string") return value;
  if (value === undefined) return "undefined";
  return JSON.stringify(value, null, 2);
};

export const substitute = (template: string, values: InputValues) => {
  return Object.entries(values).reduce(
    (acc, [key, value]) => acc.replace(`{{${key}}}`, stringify(value)),
    template
  );
};

export const parametersFromTemplate = (template: string): string[] => {
  const matches = template.matchAll(/{{(?<name>[\w-]+)}}/g);
  const parameters = Array.from(matches).map(
    (match) => match.groups?.name || ""
  );
  const unique = Array.from(new Set(parameters));
  return unique;
};

export default async (inputs: InputValues) => {
  const template = inputs.template as string;
  const parameters = parametersFromTemplate(template);
  if (!parameters.length) return { prompt: template };

  const substitutes = parameters.reduce((acc, parameter) => {
    if (inputs[parameter] === undefined)
      throw new Error(`Input is missing parameter "${parameter}"`);
    return { ...acc, [parameter]: inputs[parameter] };
  }, {});

  const prompt = substitute(template, substitutes);
  // log.info(`Prompt: ${prompt}`);
  return { prompt };
};
