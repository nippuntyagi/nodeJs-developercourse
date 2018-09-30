console.log('Starting notes.js');

var addNote = (title, body) =>{
    console.log('Adding Note', title, body);
};

var getAll = () =>{
    console.log('Getting all Note');
};

var getNote = (title)=>{
    console.log('Get Note');
}

var removeNote = (title)=>{
    console.log('Remove Note');
}

module.exports = {
    addNote,
    getAll,
    removeNote,
    getNote
}
