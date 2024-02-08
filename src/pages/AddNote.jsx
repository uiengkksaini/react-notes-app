import React, { useState } from "react";

const AddNote = ({ addNoteHandler }) => {
  const [text, setText] = useState("");

  //   character limit
  let characterLimit = 200;

  //   get text from input
  const handleChange = (e) => {
    if (characterLimit - e.target.value.length >= 0) {
      setText(e.target.value);
    }
  };

  //   sending this text to app.js file
  const onAddNote = () => {
    if (text.trim().length >= 3) {
      addNoteHandler(text);
      setText("");
    }
  };

  return (
    <div className="note add-note">
      <textarea
        placeholder="Type your text to add"
        cols="30"
        rows="8"
        value={text}
        onChange={handleChange}
      ></textarea>
      <div className="add-note-action">
        <span className="remaining-text">
          {characterLimit - text.length} characters remaining
        </span>
        <button onClick={onAddNote}>Save</button>
      </div>
    </div>
  );
};

export default AddNote;
