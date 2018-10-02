const fs = require('fs');
const _ = require ('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const titleOption = {
    describe:'Title for note',
    demand: 'true',
    alias:'t'
}
const bodyOption = {
    describe:'Body for note',
    demand: 'true',
    alias:'b'
}
const argv = yargs
.command('add', 'Add a new note',{
    title:titleOption,
    body:bodyOption
})
.command('list', 'List all notes')
.command('read', 'Read a note',{
    title:titleOption
})
.command('remove', 'Remove a note',{
    title:titleOption
})
.argv;
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