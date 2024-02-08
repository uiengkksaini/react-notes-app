import React from "react";
import { FaTrashCan } from "react-icons/fa6";

const Note = ({ note, removeNoteHandler }) => {
  const { id, text, date } = note;
  return (
    <div className="note">
      <div className="note-text">{text}</div>
      <div className="note-action">
        <span className="note-date">{date}</span>
        <span className="note-trash" onClick={() => removeNoteHandler(id)}>
          <FaTrashCan />
        </span>
      </div>
    </div>
  );
};

export default Note;
