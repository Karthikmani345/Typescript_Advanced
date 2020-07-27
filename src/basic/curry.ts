type tuple = [string, string, number[]];

// const params: tuple = ["hello", "weclome", [1]];

function testTuple(...params: tuple) {   // spreading the tuple type  using sprea operator.
    const [a, b, c] = params;
    console.log(`${a} ${b} ${c}`)
    console.log(Object.keys(params));
}

testTuple("welcome", "hello", [1]);


const curry = (x: number) => {
    return (y: number) => {
        console.log(x, y)
    }
};


curry(1)(3);
curry(3)(5);