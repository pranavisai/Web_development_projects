import React from "react";
import "./../public/styles.css";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
    <Header />
    {notes.map(note => (
        <Note 
        key = {note.id}
        title = {note.title}
        content = {note.content}
        />
    ))}
    <Footer />
    </div>
  );
}

export default App;