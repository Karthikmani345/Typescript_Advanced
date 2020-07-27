type IsNumber<T> = T extends number ? 'number' : 'string';

type check = IsNumber<number>;
type check1 = IsNumber<string>;



type Point = {
    x?: number
    y?: number
    z?: number
}
const myFunc = <T extends Point>(args: T): T => args;

function myfunc<T extends Point>(args: T): T {
    return args;
}

