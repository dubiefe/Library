import { controller_main } from './controller/controller_main.js'
import { controller_popup } from './controller/controller_popup.js'
import { Library_Static } from "./model/library_static.js";

let newLibrary = new Library_Static("user1");
let newLibrary2 = new Library_Static("user2");

await newLibrary.getFile();
console.log(await newLibrary.getAllSortedBooksTitle)