
// **** typeOf guard *********


// Note : TypeScript is aware of the usage of  instanceof and typeof operators.
//  If you use these in a conditional block

function doSomething(x: number | string) {
    if (typeof x === 'string') { // Within the block TypeScript knows that `x` must be a string
        // console.log(x.subtr(1)); // Error, 'subtr' does not exist on `string`
        console.log(x.substr(1)); // OK
    }
    // x.substr(1); // Error: There is no guarantee that `x` is a `string`
}


// *********** instanceof ***********


class Foo {
    foo = 123;
    common = '123';
}

class Bar {
    bar = 123;
    common = '123';
}

function doStuff(arg: Foo | Bar) {
    if (arg instanceof Foo) {
        console.log(arg.foo); // OK
        console.log(arg.bar); // Error!
    }
    if (arg instanceof Bar) {
        //   console.log(arg.foo); // Error!
        console.log(arg.bar); // OK
    }

    console.log(arg.common); // OK
    //   console.log(arg.foo); // Error!
    console.log(arg.bar); // Error!
}

doStuff(new Foo());
doStuff(new Bar());



//*******  @ in operator   -- check property x exists in instance using in operator.


interface A {
    x: number;
}
interface B {
    y: string;
}

const prop = 'x';

function doStuff_in(q: A | B) {
    if ('x' in q) {    // check property x exists in instance using in operator.
        // q: A
    }
    else {
        // q: B
    }
}
