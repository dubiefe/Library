import { Library } from "./library.js";

let library = new Library("user1");
await library.getFile();
let librairy2 = new Library("test");
await librairy2.getFile();
