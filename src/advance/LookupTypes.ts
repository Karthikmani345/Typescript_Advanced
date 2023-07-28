type human = {
    male: {
        name: string,
        feature: string,
    },
    female: {
        name: string,
        skils: string[]
    }
}


// lookup types using key
type male = human['male'];

function tp(args: human['male']): void {
    console.log(args);
}

