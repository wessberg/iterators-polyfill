// @flow

import type {IteratorKind, IIterator} from "./types";
import Iterator from "./iterator";

export default class ArrayIterator extends Iterator {
	kind:				IteratorKind;
	done: 			boolean;
	cursor: 		number;

	constructor (collection: Array<*>, kind: IteratorKind) {
		super(collection, kind);
		(this: IIterator);
	}

	toString (): string {
		return "[object Array Iterator]";
	}
}
