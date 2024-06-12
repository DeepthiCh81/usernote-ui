import React, { useState } from 'react';
import SaveUser from './UserDetails';
function SaveNotes() {

    const noteFileds = {
        noteTitle: "",
        noteDescription:"",
        NotedDate:""
    }
    const[initialFields,setIntialFields] = useState({
        noteFileds
    })
    console.log(initialFields);

    const onChangeFields = (e)=> {
        setIntialFields({
            ...initialFields,[e.target.name] : e.target.name
        })
    }

    const saveNote = ()=> {
        
    }
    const{noteTitle,noteDescription,NotedDate} = initialFields;
  return (
    <div className="App">
      <h1>Notes Details</h1>
      <label>Note Title</label>
      <input placeholder='Enter Title' value={noteTitle} onChange={onChangeFileds} name='title'/>
      <label>Note Description</label>
      <input placeholder='Enter Description' value={noteDescription} onChange={onChangeFileds} name='description'/>

      <button onClick={saveNote}>Save Note</button>
      <SaveUser/>
    </div>
  );
}

export default SaveNotes;
