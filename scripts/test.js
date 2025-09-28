import { Library } from "./library.js";

let library = new Library("user1");
await library.getFile();
let librairy2 = new Library("test");
await librairy2.getFile();

console.log(library.getNumberOfBooks() + " should be 3");
console.log(librairy2.getNumberOfBooks() + " should be 0");

console.log(library.getAllSortedBooksTitle());
console.log(librairy2.getAllSortedBooksTitle());