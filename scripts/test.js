import { Library } from "./library.js";

let library = new Library("user1");
await library.getFile();
let librairy2 = new Library("test");
await librairy2.getFile();

console.log(await library.getNumberOfBooks() + " should be 3");
console.log(await librairy2.getNumberOfBooks() + " should be 0");

console.log(await library.getAllSortedBooksTitle());
console.log(await librairy2.getAllSortedBooksTitle());

console.log(await library.getBook(1));
console.log(await library.getBook(4));
console.log(await librairy2.getBook(4));

console.log(await library.getNumberOfPassages(1));
console.log(await library.getNumberOfPassages(2));
console.log(await library.getNumberOfPassages(3));
console.log(await librairy2.getNumberOfPassages(3));

console.log(await library.getPassages(1));
console.log(await library.getPassages(2));
console.log(await library.getPassages(3));
console.log(await librairy2.getPassages(3));