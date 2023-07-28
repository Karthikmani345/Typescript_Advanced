// *** @ nullish
//  null == undefined
// both are grouped into one and termed as Nullish


type crew = {
    name: string;
    industry?: {
        category?: string
    };
    airlineName?: string;
    rating?: number;

}


// @ optional channing operator

const girlA: crew = {
    name: 'fo',
    airlineName: "acme",
    // industry: {
    //     category: 'flight'
    // }
};

console.log(girlA);
console.log(girlA?.industry?.category);


// @ nullish coalescing

