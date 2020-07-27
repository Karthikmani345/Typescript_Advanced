
function example1(arg: any) {
    const a: string = arg; // no error
    const b: number = arg; // no error
}

function example2(arg: unknown) {
    const a: number = arg as number; // 🔴 Type 'unknown' is not assignable to type 'string'.(2322)
    const b: number = arg; // 🔴 Type 'unknown' is not assignable to type 'number'.(2322)
}


let value: unknown;

value = true;             // OK
value = 42;               // OK
value = "Hello World";    // OK
value = [];               // OK
value = {};               // OK
value = Math.random;      // OK
value = null;             // OK
value = undefined;        // OK
value = new TypeError();  // OK




let valueA: unknown;

let value1: unknown = valueA;   // OK
let value2: any = valueA;       // OK
let value3: boolean = valueA;   // Error
let value4: number = valueA;    // Error
let value5: string = valueA;    // Error
let value6: object = valueA;    // Error
let value7: any[] = valueA;     // Error
let value8: Function = valueA;  // Error

value.foo.bar;  // Error
value.trim();   // Error
value();        // Error
new value();    // Error
value[0][1];    // Error