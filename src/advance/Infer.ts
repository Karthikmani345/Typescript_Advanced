// @ infer keywords create a new type inside the body of extends like a variable behaviour

type IsArray<T> = T extends Array<infer R> ? R : T;
// type IsArray<T> = T extends (infer R)[] ? R : T;

type check3 = IsArray<number[]>;
type check4 = IsArray<string>;
