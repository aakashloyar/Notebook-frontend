// import NoteContext from "./noteContext";
// import React, { useState } from "react";
// // import EditNotes from '..../components/EditNotes'
// export default function NoteState(props) {
//   const host = "http://localhost:5000";
//   const notesInitial = [];
//   const [notes, setNotes] = useState(notesInitial);
//   // Add a Note
//   // const addNote = async (title, description, tag) => {
//   //   // TODO: API Call
//   //   console.log("Adding a new note");
//   //   const response = await fetch(`${host}/api/notes/addnote`, {
//   //     method: "POST",
//   //     headers: {
//   //       "Content-Type": "application/json",
//   //       "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUxYTc1YWExMmJkMWI3YzQ1YjE0M2U1In0sImlhdCI6MTY5NjIzMjg3NH0.jc0MA8wenFBDhy8AiQ9OyfAe8Gm_gLHX5MquYXSvGq4",
//   //     },
//   //     body: JSON.stringify({ title, description, tag }),
//   //   });
//   //   const note = await response.json();
//   //   console.log("Adding a note with id="+note.title)
//   //   setNotes(notes.concat(note) )
//   //   console.log(notes);
//   // };


//   const addNote = async (title, description, tag) => {
//     // TODO: API Call
//     // API Call 
//     const response = await fetch(`${host}/api/notes/addnote`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUxYTc1YWExMmJkMWI3YzQ1YjE0M2U1In0sImlhdCI6MTY5NjIzMjg3NH0.jc0MA8wenFBDhy8AiQ9OyfAe8Gm_gLHX5MquYXSvGq4"
//       },
//       body: JSON.stringify({title, description, tag})
//     });

//     const note = await response.json();
//     setNotes(notes.concat(note))
//   }
//   const getNotes = async () => {
//     // API Call 
//     const response = await fetch(`${host}/api/notes/fetchallnotes`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUxYTc1YWExMmJkMWI3YzQ1YjE0M2U1In0sImlhdCI6MTY5NjIzMjg3NH0.jc0MA8wenFBDhy8AiQ9OyfAe8Gm_gLHX5MquYXSvGq4"
//       }
//     });
//     const json = await response.json()
//     //console.log(json)
//     setNotes(json)
//   }

//   // Delete a Note
//   const deleteNote = async(id) => {
//     console.log(id);
//     const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//         "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUxYTc1YWExMmJkMWI3YzQ1YjE0M2U1In0sImlhdCI6MTY5NjIzMjg3NH0.jc0MA8wenFBDhy8AiQ9OyfAe8Gm_gLHX5MquYXSvGq4",
//       },
//       // body: JSON.stringify({ title, description, tag }),
//     });
//     console.log("Deleting the note with id" + id);
//     const json = response.json();
//     console.log(json)
    
//     const newNotes = notes.filter((note) => {
//       return note._id !== id;
//     });
//     setNotes(newNotes);
//   };
//   // Edit a Note
//   const editNote = async (id, title, description, tag) => {
//     const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         "auth-token":
//           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwZmZiYTU1MjA0Mzg4Yzc2YTgzOTU4In0sImlhdCI6MTY5NTU0NjI3N30.ym-oWftoZwMHAF3d9ZpmcLZiTAeV3im1j1A6l8qrLPE",
//       },
//       body: JSON.stringify({ title, description, tag }),
//     });
//     const json = response.json();

//     // Logic to edit in client
//     // for (let index = 0; index < notes.length; index++) {
//     //   const element = notes[index];
//     //   if (element._id === id) {
//     //     notes[index].title = title;
//     //     notes[index].description = description;
//     //     notes[index].tag = tag;
//     //     break;
//     //   }
//     // }
//   };
//   const func2=async()=> {
//     console.log("jhhjhjf");
    
//   }
//   return (
//     <div>
//       <NoteContext.Provider
//         value={{ notes, setNotes, addNote, deleteNote, editNote,getNotes,func2 }}
//       >
//         {props.children}
//       </NoteContext.Provider>
//     </div>
//   );
// }


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

    const note = await response.json() 
    setNotes(notes.concat(note));
    console.log(note._id);
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