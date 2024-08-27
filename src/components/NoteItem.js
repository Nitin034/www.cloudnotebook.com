import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext';

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div className="col-md-3 ">
      <div className="card my-3">
        <div className="card-body"> 
        <i className="fa-solid fa-file-pen mx-1 d-flex align-items-end flex-column bd-highlight" onClick={()=>{updateNote(note)}} ></i>z
          <h5 className="card-title">{note.title}</h5> 
          <p className="card-text">{note.description}</p>
          
          <i className="far fa-trash-alt mx-2 d-flex align-items-end flex-column bd-highlight"onClick={()=>{deleteNote(note._id);props.showAlert("Note Delet successfully", "success")}}></i>
           
           
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
