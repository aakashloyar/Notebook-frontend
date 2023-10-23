import NoteContext from "./noteContext";
import React, { useState } from "react";
// import EditNotes from '..../components/EditNotes'
export default function NoteState(props) {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  const addNote = async (title, description, tag) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUxYTc1YWExMmJkMWI3YzQ1YjE0M2U1In0sImlhdCI6MTY5NjIzMjg3NH0.jc0MA8wenFBDhy8AiQ9OyfAe8Gm_gLHX5MquYXSvGq4"
      },
      body: JSON.stringify({title, description, tag})
    });

    const note = await response.json();
    setNotes(notes.concat(note))
  }
  const getNotes = async () => {
    // API Call 
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUxYTc1YWExMmJkMWI3YzQ1YjE0M2U1In0sImlhdCI6MTY5NjIzMjg3NH0.jc0MA8wenFBDhy8AiQ9OyfAe8Gm_gLHX5MquYXSvGq4"
      }
    });
    const json = await response.json()
    //console.log(json)
    setNotes(json)
  }

  // Delete a Note
  const deleteNote = async(id) => {
    console.log(id);
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUxYTc1YWExMmJkMWI3YzQ1YjE0M2U1In0sImlhdCI6MTY5NjIzMjg3NH0.jc0MA8wenFBDhy8AiQ9OyfAe8Gm_gLHX5MquYXSvGq4",
      },
      // body: JSON.stringify({ title, description, tag }),
    });
    console.log("Deleting the note with id" + id);
    const json = await response.json();
    console.log(json)
    
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUxYTc1YWExMmJkMWI3YzQ1YjE0M2U1In0sImlhdCI6MTY5NjIzMjg3NH0.jc0MA8wenFBDhy8AiQ9OyfAe8Gm_gLHX5MquYXSvGq4",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();

    // Logic to edit in client
    // for (let index = 0; index < notes.length; index++) {
    //   const element = notes[index];
    //   if (element._id === id) {
    //     notes[index].title = title;
    //     notes[index].description = description;
    //     notes[index].tag = tag;
    //     break;
    //   }
    // }
    // setNotes(notes);
    let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag; 
        break; 
      }
    }  
    setNotes(newNotes);

  };
  const func2=async()=> {
    console.log("jhhjhjf");
    
  }
  return (
    <div>
      <NoteContext.Provider
        value={{ notes, setNotes, addNote, deleteNote, editNote,getNotes,func2 }}
      >
        {props.children}
      </NoteContext.Provider>
    </div>
  );
}


