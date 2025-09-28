import { Library } from "./library.js";

let library = new Library("user1");
await library.getFile();
let librairy2 = new Library("test");
await librairy2.getFile();

console.log(await library.getNumberOfBooks() + " should be 3");
console.log(await librairy2.getNumberOfBooks() + " should be 0");

console.log(await library.getAllSortedBooksTitle());
console.log(await librairy2.getAllSortedBooksTitle());