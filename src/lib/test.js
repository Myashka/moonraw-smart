import editJsonFile from "edit-json-file";

let file = editJsonFile(`./store.json`);

console.log(file.get());

file.set("2.content", "niggas");
file.save();

console.log(file.get());