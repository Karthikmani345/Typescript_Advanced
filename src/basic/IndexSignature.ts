let detail: { name: string };
detail = { name: 'foo' }



// ***@ Index signature.
let foo1: {
    [index: string]: { message: string }
} = {};

/**
 * Must store stuff that conforms to the structure
 */
/** Ok */
foo1['a'] = { message: 'some message' };
/** Error: must contain a `message` of type string. You have a typo in `message` */
foo1['b'] = { message: 'some message' };

console.log(foo1);


