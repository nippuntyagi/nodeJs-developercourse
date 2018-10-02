const fs = require('fs');
const _ = require ('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
const command = argv._[0];

if(command === 'add'){
    // console.log('Adding New Note');
    var note = notes.addNote(argv.title, argv.body);
    if(note){
        console.log('Note Created');
        notes.logNote(note);
        // console.log("--");
        // console.log(`Title: ${note.title}`);
        // console.log(`Body: ${note.body}`);
    } else{
        console.log('Note Title taken')
    }
} else if(command === 'list'){
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} notes(s).`);
    allNotes.forEach((note) => notes.logNote(note));
} else if(command === 'read'){
    // console.log('fetching node')
    const readNote = notes.getNote(argv.title);
    if(readNote){
        console.log('Note Found');
        notes.logNote(readNote);
        // console.log("--");
        // console.log(`Title: ${readNote.title}`);
        // console.log(`Body: ${readNote.body}`);
    } else{
        console.log('Note not found')
    }
} else if(command === 'remove'){
    // console.log('removing node')
    const noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
}else{
    console.log('Command not found');
}