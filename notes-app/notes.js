const fs = require('fs')
const chalk = require('chalk')
const getNotes=function(){
    return `Your notes...`;
}

const addNotes = (title,body)=>{
       const notes = loadNotes()
       const duplicatenotes=notes.find((note)=>note.title===title)
       
       //returns undef if none
    //const duplicatenotes=notes.filter( (note)=>note.title==title) //will go through all regardless if found duplicate or not
    if (!duplicatenotes){
                notes.push({
            title:title,
            body:body
        })
       savenotes(notes) 
       console.log(chalk.green('New note added!'));
    }
    else{
        console.log(chalk.red.inverse('Note with same title already exists'));
    }
    
}
const removeNotes =  (title)=>{
    //console.log(`title of note to be removed ${title}`);
    const notes = loadNotes()
    const oldlength=notes.length
    const changedNotes = notes.filter( (note)=>  note.title!=title)
if (oldlength!=changedNotes.length){
    savenotes(changedNotes)
    console.log(chalk.green.inverse(`Note with title:${title} removed successfully!`));
}
else{
    console.log(chalk.red.inverse(`No note with title: ${title} exists`));
}
}
const loadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON= dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch(e){
return []
    }    
}

const savenotes = (notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON);

}

const listNotes =()=>{
    const notes = loadNotes()
    console.log(chalk.blue.inverse("Your notes are:"));
    notes.forEach(note => {
        console.log(chalk.cyan.bold(` ${note.title}`));
        
    });
}

const readNote=(title)=>{
    const notes = loadNotes()
    wantedNote=notes.find((note)=>note.title==title)
    if (wantedNote){
    console.log(chalk.blue.bold.inverse(wantedNote.title+": ")+ chalk.cyan.inverse(wantedNote.body));}
    else{
        console.log(chalk.red.bold.inverse("No note found"));
    }

}
//module.exports=getNotes; to export one
module.exports={
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote:readNote
}