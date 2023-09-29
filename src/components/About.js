
import React, { state, useState,useContext, useEffect } from 'react';
import noteContext from '../context/notes/noteContext';
export default function About() {
  const a = useContext(noteContext);
  // useEffect(()=>{
  //   a.update();
  // },[])
  return (
    <div className="container">
      This is my About
    </div>
  )
}
