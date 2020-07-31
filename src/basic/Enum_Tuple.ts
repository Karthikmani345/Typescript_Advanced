
// ***** @Declare a tuple type

let x: [string, number, boolean];

x = ["hello", 10, false]; // OK

// Initialize it incorrectly
// x = [10, "hello"]; // Error

x[0] = "hello world";
console.log(x[0]);
console.log(x[1]);


enum test {
    yellow = 1,
    red = 2
}

console.log(test.red);


type q = keyof typeof test;

