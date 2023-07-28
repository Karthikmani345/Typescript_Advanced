// /// <reference path="AnimalNamespace.ts" />
// /// <reference path="birdNamespace.ts" />
// ** importing the Namespace in the file using reference path.


//  Aliases to create shorter names
// import Lion = Animal.Lion;
// const l = new Lion()
// l.lionName();



// *** the module sysytem is more better than the nameSpace approach
import { Animal } from "./AnimalNamespace";

const l = new Animal.Lion()
l.lionName();