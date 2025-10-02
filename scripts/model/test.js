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

try {
    console.log(await library.getNumberOfPassages(1));
    console.log(await library.getNumberOfPassages(2));
    console.log(await library.getNumberOfPassages(3));
    console.log(await librairy2.getNumberOfPassages(3));
} catch (error) {
    console.log(error)
}

try {
    console.log(await library.getPassages(1));
    console.log(await library.getPassages(2));
    console.log(await library.getPassages(3));
    console.log(await librairy2.getPassages(3));
} catch (error) {
    console.log(error)
}

try {
    console.log(await library.getPassage(1, 1))
    console.log(await library.getPassage(2, 1))
    console.log(await library.getPassage(3, 2))
    console.log(await librairy2.getPassage(1, 1))
} catch (error) {
    console.log(error)
}

try {
    console.log(await library.addBook("Test", "blabla"));
} catch (error) {
    console.log(error)
}

try {
    console.log(await library.addPassage(1, [2,6], "blabla"));
    console.log(await librairy2.addPassage(1, [2,6], "blabla"));
} catch (error) {
    console.log(error)
}

try {
    console.log(await library.deleteBook(2));
} catch (error) {
    console.log(error)
}

try {
    console.log(await library.deletePassage(3, 2));
    console.log(await librairy2.deletePassage(3, 2));
} catch (error) {
    console.log(error)
}

try {
    console.log(await library.updateBook(1, "NewTitle", "NewAuthor"));
} catch (error) {
    console.log(error)
}

try {
    console.log(await library.updatePassage(3, 1, [4,8,9], "NewComment"));
    console.log(await librairy2.updatePassage(3, 1, [4,8,9], "NewComment"));
} catch (error) {
    console.log(error)
}
