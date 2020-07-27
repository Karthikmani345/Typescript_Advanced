// *** typeassertion is basically is not typecasting its a complie type casting

// “angle-bracket” syntax: --- will create clash in JSX file

let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;


// using as syntax
let someValue1: any = "this is a string";
let strLength1: number = (someValue1 as string).length;




interface Foo {
    bar: number;
    bas: string;
}
let foo = {} as Foo;
// ahhhh .... forget something?



// *** type assertion in function
function handler(event: Event) {
    let mouseEvent = event as MouseEvent;
}

// function handler1(event: Event) {
//     let element = event as HTMLElement; // Error: Neither 'Event' nor type 'HTMLElement' is assignable to the other
// }

// **** double assertion
function handler1(event: Event) {
    let element = event as unknown as HTMLElement; // Okay!
}
