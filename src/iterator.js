// @flow

import type {IteratorKind, IIteration} from "./types";

export default class Iterator {
	kind:				IteratorKind;
	done: 			boolean;
	cursor: 		number = 0;
	collection: string|Array<*>|NodeList<*>;

	next (): IIteration<*> {
		this.done = this.cursor === this.collection.length;
		const result = {done: this.done, value: this.done ? undefined : (this.kind === "value" || this.kind === "key") ? this.collection[this.cursor] : [this.cursor, this.collection[this.cursor]]};
		this.cursor++;
		return result;
	}

	constructor (collection: string|Array<*>, kind: IteratorKind) {
		this.collection = collection;
		this.kind				=	kind;
	}
}
