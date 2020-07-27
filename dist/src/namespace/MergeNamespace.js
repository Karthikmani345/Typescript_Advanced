"use strict";
// /// <reference path="AnimalNamespace.ts" />
// /// <reference path="birdNamespace.ts" />
// ** importing the Namespace in the file using reference path.
Object.defineProperty(exports, "__esModule", { value: true });
//  Aliases to create shorter names
// import Lion = Animal.Lion;
// const l = new Lion()
// l.lionName();
// *** the module sysytem is more better than the nameSpace approach
var AnimalNamespace_1 = require("./AnimalNamespace");
var l = new AnimalNamespace_1.Animal.Lion();
l.lionName();
