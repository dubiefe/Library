import { controller_main } from './controller/controller_main.js'
import { controller_popup } from './controller/controller_popup.js'
import { view_main } from './view/view_main.js';
import { Library_Static } from "./model/library_static.js";

let newLibrary = new Library_Static("user1");

await newLibrary.getFile();
console.log(await newLibrary.getAllSortedBooksTitle())
await newLibrary.addBook("newTitle", "newAuthor");
console.log(await newLibrary.getAllSortedBooksTitle())

view_main.displayBooksInitialize(await newLibrary.getAllSortedBooksTitle());