[@google-labs/graph-integrity](../README.md) / [Exports](../modules.md) / PrincipalLattice

# Class: PrincipalLattice

Information flow control principal lattice.

Defines a lattice, with TOP being the most restrictive and BOTTOM being the
least restrictive values.

## Table of contents

### Constructors

- [constructor](PrincipalLattice.md#constructor)

### Properties

- [BOTTOM](PrincipalLattice.md#bottom)
- [PRIVATE](PrincipalLattice.md#private)
- [PUBLIC](PrincipalLattice.md#public)
- [TOP](PrincipalLattice.md#top)
- [TRUSTED](PrincipalLattice.md#trusted)
- [UNTRUSTED](PrincipalLattice.md#untrusted)
- [labels](PrincipalLattice.md#labels)

### Methods

- [get](PrincipalLattice.md#get)
- [insert](PrincipalLattice.md#insert)

## Constructors

### constructor

• **new PrincipalLattice**()

#### Defined in

<<<<<<< HEAD
[label.ts:154](https://github.com/Chizobaonorh/labs-prototypes/blob/102f6f2/seeds/graph-integrity/src/label.ts#L154)
=======
[label.ts:154](https://github.com/Chizobaonorh/labs-prototypes/blob/220f97e/seeds/graph-integrity/src/label.ts#L154)
>>>>>>> 102f6f2 (generated docs with TSDoc command)

## Properties

### BOTTOM

• `Readonly` **BOTTOM**: [`Principal`](Principal.md)

#### Defined in

<<<<<<< HEAD
[label.ts:133](https://github.com/Chizobaonorh/labs-prototypes/blob/102f6f2/seeds/graph-integrity/src/label.ts#L133)
=======
[label.ts:133](https://github.com/Chizobaonorh/labs-prototypes/blob/220f97e/seeds/graph-integrity/src/label.ts#L133)
>>>>>>> 102f6f2 (generated docs with TSDoc command)

___

### PRIVATE

• `Readonly` **PRIVATE**: [`Principal`](Principal.md)

#### Defined in

<<<<<<< HEAD
[label.ts:135](https://github.com/Chizobaonorh/labs-prototypes/blob/102f6f2/seeds/graph-integrity/src/label.ts#L135)
=======
[label.ts:135](https://github.com/Chizobaonorh/labs-prototypes/blob/220f97e/seeds/graph-integrity/src/label.ts#L135)
>>>>>>> 102f6f2 (generated docs with TSDoc command)

___

### PUBLIC

• `Readonly` **PUBLIC**: [`Principal`](Principal.md)

#### Defined in

<<<<<<< HEAD
[label.ts:136](https://github.com/Chizobaonorh/labs-prototypes/blob/102f6f2/seeds/graph-integrity/src/label.ts#L136)
=======
[label.ts:136](https://github.com/Chizobaonorh/labs-prototypes/blob/220f97e/seeds/graph-integrity/src/label.ts#L136)
>>>>>>> 102f6f2 (generated docs with TSDoc command)

___

### TOP

• `Readonly` **TOP**: [`Principal`](Principal.md)

#### Defined in

<<<<<<< HEAD
[label.ts:132](https://github.com/Chizobaonorh/labs-prototypes/blob/102f6f2/seeds/graph-integrity/src/label.ts#L132)
=======
[label.ts:132](https://github.com/Chizobaonorh/labs-prototypes/blob/220f97e/seeds/graph-integrity/src/label.ts#L132)
>>>>>>> 102f6f2 (generated docs with TSDoc command)

___

### TRUSTED

• `Readonly` **TRUSTED**: [`Principal`](Principal.md)

#### Defined in

<<<<<<< HEAD
[label.ts:140](https://github.com/Chizobaonorh/labs-prototypes/blob/102f6f2/seeds/graph-integrity/src/label.ts#L140)
=======
[label.ts:140](https://github.com/Chizobaonorh/labs-prototypes/blob/220f97e/seeds/graph-integrity/src/label.ts#L140)
>>>>>>> 102f6f2 (generated docs with TSDoc command)

___

### UNTRUSTED

• `Readonly` **UNTRUSTED**: [`Principal`](Principal.md)

#### Defined in

<<<<<<< HEAD
[label.ts:139](https://github.com/Chizobaonorh/labs-prototypes/blob/102f6f2/seeds/graph-integrity/src/label.ts#L139)
=======
[label.ts:139](https://github.com/Chizobaonorh/labs-prototypes/blob/220f97e/seeds/graph-integrity/src/label.ts#L139)
>>>>>>> 102f6f2 (generated docs with TSDoc command)

___

### labels

• `Readonly` **labels**: `Map`<`string`, `undefined` \| [`Principal`](Principal.md)\>

#### Defined in

<<<<<<< HEAD
[label.ts:142](https://github.com/Chizobaonorh/labs-prototypes/blob/102f6f2/seeds/graph-integrity/src/label.ts#L142)
=======
[label.ts:142](https://github.com/Chizobaonorh/labs-prototypes/blob/220f97e/seeds/graph-integrity/src/label.ts#L142)
>>>>>>> 102f6f2 (generated docs with TSDoc command)

## Methods

### get

▸ **get**(`name`): `undefined` \| [`Principal`](Principal.md)

Get principal by name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name of principal to find |

#### Returns

`undefined` \| [`Principal`](Principal.md)

principal or undefined

#### Defined in

<<<<<<< HEAD
[label.ts:192](https://github.com/Chizobaonorh/labs-prototypes/blob/102f6f2/seeds/graph-integrity/src/label.ts#L192)
=======
[label.ts:192](https://github.com/Chizobaonorh/labs-prototypes/blob/220f97e/seeds/graph-integrity/src/label.ts#L192)
>>>>>>> 102f6f2 (generated docs with TSDoc command)

___

### insert

▸ **insert**(`label`, `below?`, `above?`): `void`

Insert a new principal between two existing label values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `label` | [`Principal`](Principal.md) | - |
| `below` | [`Principal`](Principal.md) | {Principal} Principal below the new label value |
| `above` | [`Principal`](Principal.md) | {Principal} Principal above the new label value |

#### Returns

`void`

#### Defined in

<<<<<<< HEAD
[label.ts:166](https://github.com/Chizobaonorh/labs-prototypes/blob/102f6f2/seeds/graph-integrity/src/label.ts#L166)
=======
[label.ts:166](https://github.com/Chizobaonorh/labs-prototypes/blob/220f97e/seeds/graph-integrity/src/label.ts#L166)
>>>>>>> 102f6f2 (generated docs with TSDoc command)
