console.log('starting app.js');

const fs = require('fs');
const _ = require ('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
const command = argv._[0];
console.log('yargs', argv)

if(command === 'add'){
    // console.log('Adding New Note');
    notes.addNote(argv.title, argv.body);
} else if(command === 'list'){
    // console.log('listing all Note')
    notes.getAll();
} else if(command === 'read'){
    // console.log('fetching node')
    notes.getNote(argv.title);
} else if(command === 'remove'){
    // console.log('removing node')
    notes.removeNote(argv.title);
}else{
    console.log('Command not found');
}