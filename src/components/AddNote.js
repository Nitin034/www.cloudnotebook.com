import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
import addNote from "./AddNote";

const AddNote = (props) => {
  const context = useContext(noteContext);
  const {addNote} = context;

  const [note, setNote] = useState({title: "", description: "", tag: ""});
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({title: "", description: "", tag: ""});
    props.showAlert("Note Added successfully", "success")
  };
  const onChange = (e) => {
    setNote({...note, [e.target.name]: e.target.value});
  };
  return (
    <div className="card text-center" style={{marginTop:"20px"}}>
  <div className="card-header">
  <h2>Add Your Note <i class="fa-solid fa-file-circle-check"></i></h2>
  </div>
  <div className="card-body">
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label d-flex">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={note.title}
              aria-describedby="emailHelp"
              onChange={onChange}
              minLength={5}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label d-flex">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={note.description}
              onChange={onChange}
              minLength={5}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label d-flex">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              value={note.tag}
              onChange={onChange}
              minLength={5}
              required
            />
          </div>
          <button
           disabled={note.title.length<5 || note.description.length<5}
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >Add Note  
          </button> 
        </form>
      </div>
     
  <div class="card-footer text-muted">
  Your notes secured in the cloud
  </div>
</div>
     
  );
};

export default AddNote;
