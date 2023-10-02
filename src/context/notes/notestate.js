import NoteContext from "./noteContext";
import React, { useState } from "react";
export default function NoteState(props) {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  // Add a Note
  const addNote = async (title, description, tag) => {
    // TODO: API Call
    console.log("Adding a new note");
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUxYTc1YWExMmJkMWI3YzQ1YjE0M2U1In0sImlhdCI6MTY5NjIzMjg3NH0.jc0MA8wenFBDhy8AiQ9OyfAe8Gm_gLHX5MquYXSvGq4",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const note = {
      _id: "61322f119553780e08",
      user: "6131dc5e3e4037cd4734a0664",
      title: title,
      description: description,
      tag: tag,
      date: "2021-09-03T14:20:09.668Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  // const getNotes = async () => {
  //   // API Call
  //   //const url = `${host}/api/notes/fetchallnotes`;
  //   //http://localhost:5000/api/notes/fetchallnotes
  //   const response = await fetch(`${host}/api/notes/fetchallnotes`, {
  //     method: "GET", // *GET, POST, PUT, DELETE, etc.
  //     headers: {
  //       "Content-Type": "application/json",
  //       "auth-token":
  //         -"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUxYTc1YWExMmJkMWI3YzQ1YjE0M2U1In0sImlhdCI6MTY5NjIzMjg3NH0.jc0MA8wenFBDhy8AiQ9OyfAe8Gm_gLHX5MquYXSvGq4",
  //       // 'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //   });
  //   const json = await response.json();
  //   console.log(json);
  //   setNotes(json);
  // };
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
    console.log(json)
    setNotes(json)
  }

  // Delete a Note
  const deleteNote = (id) => {
    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwZmZiYTU1MjA0Mzg4Yzc2YTgzOTU4In0sImlhdCI6MTY5NTU0NjI3N30.ym-oWftoZwMHAF3d9ZpmcLZiTAeV3im1j1A6l8qrLPE",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();

    // Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };
  return (
    <div>
      <NoteContext.Provider
        value={{ notes, setNotes, addNote, deleteNote, editNote,getNotes }}
      >
        {props.children}
      </NoteContext.Provider>
    </div>
  );
}
