
// @ typeOf operator
var go = 123;
var to: typeof go;

console.log(typeof go);


// @ keyof Operator

const colors = {
    red: 'reddish',
    blue: 'bluish'
}

const t = typeof colors;
type Colors = keyof typeof colors;
