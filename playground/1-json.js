const fs = require('fs')
// const book={
//     title:'Harry Potter',
//     author:'J.K. Rowling',
// }
// const JSONbook=JSON.stringify(book)
// fs.writeFileSync('1-json.json',JSONbook);

const bufferData=fs.readFileSync('1-json.json')
console.log(bufferData);
const dataJSON =bufferData.toString();
const data = JSON.parse(dataJSON);
console.log(data.tile);
// console.log(JSONbook);
// //console.log(JSONbook.title); won't work because string not obj

// const parsedata=JSON.parse(JSONbook);
// console.log(parsedata.author);