import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";

function App() {
    return (
        <div>
            <Header />
            {notes.map(note => {
                let { key, title, content } = note;
                return (
                    <Note
                        key={key}
                        title={title}
                        content={content}
                    />
                )
            })}
            <Footer />
        </div>
    )
}

export default App;