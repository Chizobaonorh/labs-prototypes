[@google-labs/graph-integrity](../README.md) / [Exports](../modules.md) / GraphIntegrityValidator

# Class: GraphIntegrityValidator

**`Implements`**

and validates the integrity of a graph in
terms of safety.

Use one instance per id namespace. Call

**`Method`**

addGraph to add nodes to the
validator. And call

**`Method`**

getSubgraphValidator to get a new validator for
new namespaces, such as include and slot nodes

Acts as bridge between Breadboard and the generic graph validation code.

## Implements

- `BreadboardValidator`

## Table of contents

### Constructors

- [constructor](GraphIntegrityValidator.md#constructor)

### Properties

- [idMap](GraphIntegrityValidator.md#idmap)
- [parentInputs](GraphIntegrityValidator.md#parentinputs)
- [parentNode](GraphIntegrityValidator.md#parentnode)
- [policy](GraphIntegrityValidator.md#policy)
- [wholeGraph](GraphIntegrityValidator.md#wholegraph)

### Methods

- [addGraph](GraphIntegrityValidator.md#addgraph)
- [addPolicy](GraphIntegrityValidator.md#addpolicy)
- [getNodeById](GraphIntegrityValidator.md#getnodebyid)
- [getSubgraphValidator](GraphIntegrityValidator.md#getsubgraphvalidator)
- [getValidatorMetadata](GraphIntegrityValidator.md#getvalidatormetadata)
- [insertGraph](GraphIntegrityValidator.md#insertgraph)
- [toMermaid](GraphIntegrityValidator.md#tomermaid)

## Constructors

### constructor

• **new GraphIntegrityValidator**(`parentValidator?`, `parentNode?`, `parentInputs?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parentValidator?` | [`GraphIntegrityValidator`](GraphIntegrityValidator.md) |
| `parentNode?` | `NodeFromBreadboard` |
| `parentInputs?` | `string`[] |

#### Defined in

<<<<<<< HEAD
[validator.ts:80](https://github.com/Chizobaonorh/labs-prototypes/blob/102f6f2/seeds/graph-integrity/src/validator.ts#L80)
=======
[validator.ts:80](https://github.com/Chizobaonorh/labs-prototypes/blob/220f97e/seeds/graph-integrity/src/validator.ts#L80)
>>>>>>> 102f6f2 (generated docs with TSDoc command)

## Properties

### idMap

• `Protected` **idMap**: `IdMap`

#### Defined in

<<<<<<< HEAD
[validator.ts:75](https://github.com/Chizobaonorh/labs-prototypes/blob/102f6f2/seeds/graph-integrity/src/validator.ts#L75)
=======
[validator.ts:75](https://github.com/Chizobaonorh/labs-prototypes/blob/220f97e/seeds/graph-integrity/src/validator.ts#L75)
>>>>>>> 102f6f2 (generated docs with TSDoc command)

___

### parentInputs

• `Protected` **parentInputs**: `undefined` \| `string`[]

#### Defined in

<<<<<<< HEAD
[validator.ts:77](https://github.com/Chizobaonorh/labs-prototypes/blob/102f6f2/seeds/graph-integrity/src/validator.ts#L77)
=======
[validator.ts:77](https://github.com/Chizobaonorh/labs-prototypes/blob/220f97e/seeds/graph-integrity/src/validator.ts#L77)
>>>>>>> 102f6f2 (generated docs with TSDoc command)

___

### parentNode

• `Protected` **parentNode**: `undefined` \| `NodeFromBreadboard`

#### Defined in

<<<<<<< HEAD
[validator.ts:76](https://github.com/Chizobaonorh/labs-prototypes/blob/102f6f2/seeds/graph-integrity/src/validator.ts#L76)
=======
[validator.ts:76](https://github.com/Chizobaonorh/labs-prototypes/blob/220f97e/seeds/graph-integrity/src/validator.ts#L76)
>>>>>>> 102f6f2 (generated docs with TSDoc command)

___

### policy

• `Protected` **policy**: [`GraphIntegrityPolicy`](../modules.md#graphintegritypolicy)

#### Defined in

<<<<<<< HEAD
[validator.ts:78](https://github.com/Chizobaonorh/labs-prototypes/blob/102f6f2/seeds/graph-integrity/src/validator.ts#L78)
=======
[validator.ts:78](https://github.com/Chizobaonorh/labs-prototypes/blob/220f97e/seeds/graph-integrity/src/validator.ts#L78)
>>>>>>> 102f6f2 (generated docs with TSDoc command)

___

### wholeGraph

• `Protected` **wholeGraph**: `GraphFromBreadboard`

#### Defined in

<<<<<<< HEAD
[validator.ts:74](https://github.com/Chizobaonorh/labs-prototypes/blob/102f6f2/seeds/graph-integrity/src/validator.ts#L74)
=======
[validator.ts:74](https://github.com/Chizobaonorh/labs-prototypes/blob/220f97e/seeds/graph-integrity/src/validator.ts#L74)
>>>>>>> 102f6f2 (generated docs with TSDoc command)

## Methods

### addGraph

▸ **addGraph**(`newGraph`): `void`

Add nodes to the validator and validate the full graph.

#### Parameters

| Name | Type |
| :------ | :------ |
| `newGraph` | `GraphDescriptor` |

#### Returns

`void`

**`Throws`**

if the graph is not safe.

#### Implementation of

BreadboardValidator.addGraph

#### Defined in

<<<<<<< HEAD
[validator.ts:111](https://github.com/Chizobaonorh/labs-prototypes/blob/102f6f2/seeds/graph-integrity/src/validator.ts#L111)
=======
[validator.ts:111](https://github.com/Chizobaonorh/labs-prototypes/blob/220f97e/seeds/graph-integrity/src/validator.ts#L111)
>>>>>>> 102f6f2 (generated docs with TSDoc command)

___

### addPolicy

▸ **addPolicy**(`policy`): `void`

Add a policy to validate graphs against.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `policy` | [`GraphIntegrityPolicy`](../modules.md#graphintegritypolicy) | The policy to validate against. |

#### Returns

`void`

#### Defined in

<<<<<<< HEAD
[validator.ts:101](https://github.com/Chizobaonorh/labs-prototypes/blob/102f6f2/seeds/graph-integrity/src/validator.ts#L101)
=======
[validator.ts:101](https://github.com/Chizobaonorh/labs-prototypes/blob/220f97e/seeds/graph-integrity/src/validator.ts#L101)
>>>>>>> 102f6f2 (generated docs with TSDoc command)

___

### getNodeById

▸ `Protected` **getNodeById**(`node`): `undefined` \| `NodeFromBreadboard`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NodeDescriptor` |

#### Returns

`undefined` \| `NodeFromBreadboard`

#### Defined in

<<<<<<< HEAD
[validator.ts:153](https://github.com/Chizobaonorh/labs-prototypes/blob/102f6f2/seeds/graph-integrity/src/validator.ts#L153)
=======
[validator.ts:153](https://github.com/Chizobaonorh/labs-prototypes/blob/220f97e/seeds/graph-integrity/src/validator.ts#L153)
>>>>>>> 102f6f2 (generated docs with TSDoc command)

___

### getSubgraphValidator

▸ **getSubgraphValidator**(`node`, `actualInputs?`): `BreadboardValidator`

Generate a validator for a subgraph, replacing a given node. Call
.addGraph() on the returned validator to add and validate the subgraph.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | `NodeDescriptor` | The node to replace. |
| `actualInputs?` | `string`[] | Actual inputs to the node (as opposed to assuming all inputs with * or that optional ones are present) |

#### Returns

`BreadboardValidator`

A validator for the subgraph.

#### Implementation of

BreadboardValidator.getSubgraphValidator

#### Defined in

<<<<<<< HEAD
[validator.ts:143](https://github.com/Chizobaonorh/labs-prototypes/blob/102f6f2/seeds/graph-integrity/src/validator.ts#L143)
=======
[validator.ts:143](https://github.com/Chizobaonorh/labs-prototypes/blob/220f97e/seeds/graph-integrity/src/validator.ts#L143)
>>>>>>> 102f6f2 (generated docs with TSDoc command)

___

### getValidatorMetadata

▸ **getValidatorMetadata**(`node`): `GraphIntegrityValidatorMetadata`

Get the safety label of a node.

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NodeDescriptor` |

#### Returns

`GraphIntegrityValidatorMetadata`

The safety label of the node, or undefined if it wasn't computed.
         Note that the safety label's value can be undefined, meaning that
         there were no constraints on it.

#### Implementation of

BreadboardValidator.getValidatorMetadata

#### Defined in

<<<<<<< HEAD
[validator.ts:125](https://github.com/Chizobaonorh/labs-prototypes/blob/102f6f2/seeds/graph-integrity/src/validator.ts#L125)
=======
[validator.ts:125](https://github.com/Chizobaonorh/labs-prototypes/blob/220f97e/seeds/graph-integrity/src/validator.ts#L125)
>>>>>>> 102f6f2 (generated docs with TSDoc command)

___

### insertGraph

▸ `Protected` **insertGraph**(`newGraph`): `void`

Insert a new graph into this graph.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newGraph` | `GraphDescriptor` | Graph to be inserted |

#### Returns

`void`

#### Defined in

<<<<<<< HEAD
[validator.ts:165](https://github.com/Chizobaonorh/labs-prototypes/blob/102f6f2/seeds/graph-integrity/src/validator.ts#L165)
=======
[validator.ts:165](https://github.com/Chizobaonorh/labs-prototypes/blob/220f97e/seeds/graph-integrity/src/validator.ts#L165)
>>>>>>> 102f6f2 (generated docs with TSDoc command)

___

### toMermaid

▸ **toMermaid**(): `string`

#### Returns

`string`

#### Defined in

<<<<<<< HEAD
[validator.ts:320](https://github.com/Chizobaonorh/labs-prototypes/blob/102f6f2/seeds/graph-integrity/src/validator.ts#L320)
=======
[validator.ts:320](https://github.com/Chizobaonorh/labs-prototypes/blob/220f97e/seeds/graph-integrity/src/validator.ts#L320)
>>>>>>> 102f6f2 (generated docs with TSDoc command)
