import React from "react";
import Note from "../components/Note";
import AddNote from "./AddNote";

const NoteList = ({ notes, addNoteHandler, removeNoteHandler }) => {
  return (
    <div className="note-list">
      <AddNote addNoteHandler={addNoteHandler} />
      {notes?.map((note) => (
        <Note key={note.id} note={note} removeNoteHandler={removeNoteHandler} />
      ))}
    </div>
  );
};

export default NoteList;
