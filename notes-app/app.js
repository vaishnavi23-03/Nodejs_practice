const notes =require('./notes.js');
const yargs = require('yargs');
const chalk=require('chalk')
//console.log(getNotes());
//const command=process.argv[2];
//console.log(process.argv[3]);//start with 2 0,1 node app.js
// if (command=='add'){
//     console.log('Adding note');
// }
// else if (command=='remove'){
//     console.log('Removing note');
// }

//YARGS
//console.log(process.argv);
//console.log(yargs.argv);
//customize version
yargs.version('1.1.0')
//creating add command
yargs.command({
    command:'add',
    describe:'Adding a new note',
    builder:{
        title:{
            descibe:'note title',
            demandOption:true,//required
            type:'string'
        },
        body:{
            descibe:'note body',
            demandOption:true,
            type:'string'
        }
    },
    //ES6 + ARROW FORMAT
    handler(argv){notes.addNotes(argv.title,argv.body)}
    //OLD FORMAT

    // handler:function(argv){

    //     notes.addNotes(argv.title,argv.body)
    //     //console.log('Adding a new note!',argv);
    //     // console.log(`Title: ${argv.title}\n Body: ${argv.body}`);
    // }
})
//yargs.parse()
yargs.command({
    command:'remove',
    describe:'removing command',
    builder:{
        title:{
            describe:'note title',
            demandOption: true,
            type : 'string'
        },
    },
    handler(argv){ notes.removeNotes(argv.title)}
       
    
})
//yargs.parse()
yargs.command({
    command:'list',
    describe:'listing notes',
    handler(){
        notes.listNotes();
    }
})
//yargs.parse()
yargs.command({
    command:'read',
    describe:'read',
    handler(argv){
        notes.readNote(argv.title);
    }
})
yargs.parse()