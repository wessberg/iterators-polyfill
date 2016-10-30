// @flow

export type IteratorKind = "value"|"key"|"key+value";

export interface IIteration<T> {
	done: 		boolean;
	value?: 	Iterable<T>;
}

export interface IIterator {
	kind:				IteratorKind;
	done:				boolean;
	cursor:			number;
	collection: any;
	next(): 		IIteration<string>;
	toString(): string;
}
