const fs = require('fs');
const JSONdata = fs.readFileSync('challenge.json')
let data1=JSONdata.toString();

const data = JSON.parse(data1);
data.name="Vaishnavi S";
data.age=19;
let datastring=JSON.stringify(data);
fs.writeFileSync('challenge.json',datastring);