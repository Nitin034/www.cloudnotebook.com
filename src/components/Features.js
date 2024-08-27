{
  /*import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import noteContext from '../context/notes/noteContext';
import NoteContext from "./noteContext";*/
}

const Features = (props) => {
  {
    /* const s1 ={
        "name": "NSW ALEXA",
        "class": "Application"
    }
    const [state, setState] = useState(s1);
    const update = ()=>{
        setTimeout(() => {
            setState({
                "name": "Devlopar",
                "class": "Website"
            })
        },5000);
    }

    const a = useContext(noteContext)
    useEffect(() =>{
      a.update();
      // eslint-disable-next-line
    }, [])*/
  }

  return (
    <div className="container my-3" style={{ textAlign: "center" }}>
      <h2>
        Hey I am Your personal Assistant {/*{a.state.name}*/} and I will tell
        you How you used this {/*{a.state.class}*/}
      </h2>
      <h4>Currently I am working on this project</h4>

      <div className="spinner-grow text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-warning" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-info" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-dark" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>

      {/*  <NoteContext.Provider value={{state, update}}>
            {props.children}
        </NoteContext.Provider>*/}
    </div>
  );
};

export default Features;
