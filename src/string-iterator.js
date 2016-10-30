// @flow

import type {IteratorKind, IIterator} from "./types";
import Iterator from "./iterator";

export default class StringIterator extends Iterator {
	kind:				IteratorKind;
	done: 			boolean;
	cursor: 		number;

	constructor (collection: string, kind: IteratorKind) {
		super(collection, kind);
		(this: IIterator);
	}

	toString (): string {
		return "[object String Iterator]";
	}
}
