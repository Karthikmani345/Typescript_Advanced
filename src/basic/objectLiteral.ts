var E: { foo: number, [x: string]: any };
E = { foo: 1, baz: 2 };  // Ok, `baz` matched by index signature

E = {
    foo: 1,
    pq: 2,
    zy: 3
}