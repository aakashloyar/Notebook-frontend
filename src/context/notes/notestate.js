import NoteContext from "./noteContext";
import React,{ useState } from "react";
export default function NoteState(props) {
    const s1 = {
    "name": "Harry",
    "class": "5b"
    }
    const [state, setState] = useState(s1);
    const update = ()=>{
        setTimeout(() => {
            setState({
                "name": "Larry",
                "class": "10b"
            })
        }, 1000);
    }
    return (
    <div>
        <NoteContext.Provider value={{state:state, update:update}}>
            {props.children}
        </NoteContext.Provider>
    </div>
    )
}
