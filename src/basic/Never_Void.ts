// never type
// function should not return
// function should not have reachable code.... i.e end of the line (it can be inside while loop)



function A(): void {
    // throw Error('T');
    let K: number;
    // return K;
}

function B(): never {
    // while (true) {
    //     console.log('infinite loop');
    // }

    // let K: number;
    throw Error('T');

}


console.log(A());
console.log(B());



function throwError(errorMsg: string): never {
    throw new Error(errorMsg);
}

function keepProcessing(): never {
    while (true) {
        console.log('I always does something and never ends.')
    }
}



