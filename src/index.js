// @flow

import root 					from "./root";
import StringIterator from "./string-iterator";
import ArrayIterator 	from "./array-iterator";

// $FlowFixMe
if (!(typeof Array.prototype[Symbol.iterator] === "function")) {
	const HAS_VALUES_METHOD 	= "values" 	in Array.prototype;
	const HAS_ENTRIES_METHOD 	= "entries" in Array.prototype;
	const HAS_KEYS_METHOD			=	"keys"		in Array.prototype;

	// $FlowFixMe
	if (!HAS_VALUES_METHOD)		Array.prototype.values 	= function values		() { return new ArrayIterator(this, "value"); }
	// $FlowFixMe
	if (!HAS_ENTRIES_METHOD) 	Array.prototype.entries = function entries	() { return new ArrayIterator(this, "key+value"); }
	// $FlowFixMe
	if (!HAS_KEYS_METHOD)			Array.prototype.keys 		= function keys			() { return new ArrayIterator(this, "key"); }
	// $FlowFixMe
	Array.prototype[Symbol.iterator] = Array.prototype.values;
}

// $FlowFixMe
if (!(typeof NodeList.prototype[Symbol.iterator] === "function")) {
	const HAS_VALUES_METHOD 	= "values" 	in NodeList.prototype;
	const HAS_ENTRIES_METHOD 	= "entries" in NodeList.prototype;
	const HAS_KEYS_METHOD			=	"keys"		in NodeList.prototype;

	// $FlowFixMe
	if (!HAS_VALUES_METHOD)		NodeList.prototype.values 	= function values		() { return new ArrayIterator(this, "value"); }
	// $FlowFixMe
	if (!HAS_ENTRIES_METHOD) 	NodeList.prototype.entries 	= function entries	() { return new ArrayIterator(this, "key+value"); }
	// $FlowFixMe
	if (!HAS_KEYS_METHOD)			NodeList.prototype.keys 		= function keys			() { return new ArrayIterator(this, "key"); }
	// $FlowFixMe
	NodeList.prototype[Symbol.iterator] = Array.prototype.values;
}
