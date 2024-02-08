import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NoteList from "./pages/NoteList";
import { nanoid } from "nanoid";
import SearchNote from "./components/SearchNote";

const notesData = [
  { id: 1, text: "Kishan kumar saini", date: "02/06/2024" },
  { id: 2, text: "Abraham Lincon", date: "02/06/2024" },
  { id: 3, text: "Netaji Subash Chandra Bose", date: "02/06/2024" },
];

const App = () => {
  // for searching
  const [searchText, setSearchText] = useState("");

  // for theming
  const [theme, setTheme] = useState("");
  const [toggleTheme, setToggleTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark";
  });

  useEffect(() => {
    setTheme(toggleTheme ? "dark" : "light");
    localStorage.setItem("theme", toggleTheme ? "dark" : "light");
  }, [toggleTheme]);


  // for adding notes list
  const [notes, setNotes] = useState(() => {
    const storedData = localStorage.getItem("react-app-db");
    return storedData ? JSON.parse(storedData) : notesData;
  });
  const handleAddNote = (noteText) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: noteText,
      date: date.toLocaleDateString(),
    };
    setNotes((prevNote) => [newNote, ...prevNote]);
  };

  // for removing note list
  const handleRemoveNote = (noteId) => {
    const deletedNote = notes.filter((note) => note.id !== noteId);
    setNotes(deletedNote);
  };

  useEffect(() => {
    localStorage.setItem("react-app-db", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className={`container-fluid ${theme}`}>
      <Header handleTheme={setToggleTheme} theme={theme} />
      <div className="content">
        <div className="container">
          <SearchNote handleSearch={setSearchText} />
          <NoteList
            notes={notes?.filter((note) =>
              note.text.toLowerCase().includes(searchText)
            )}
            addNoteHandler={handleAddNote}
            removeNoteHandler={handleRemoveNote}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
