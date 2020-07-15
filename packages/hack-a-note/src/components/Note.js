import React, { useState, useEffect } from "react";
import { TagsInput } from "./TagsInput";

function Note({ defaultNote = {}, onSaveNote, onDeleteNote }) {
  const [note, setNote] = useState(defaultNote);

  useEffect(() => {
    setNote(defaultNote);
  }, [defaultNote]);

  const autoSize = event => {
    const element = event.target;

    if (element) {
      element.style.height = "100px";
      element.style.height = element.scrollHeight + "px";
    }
  };

  return (
    <div className="note">
      <textarea
        id="title"
        className="title"
        placeholder="Untitled Note"
        value={note.title}
        onChange={e => setNote({ ...note, title: e.target.value })}
        onBlur={e => onSaveNote(note)}
        onInput={autoSize}
      />

      {/* <TagsInput value onChange> INICIO - Permitir entrar tags */}

      <TagsInput
        value={note.tags}
        onTagsChanged={tags => {
          const noteToUpdate = { ...note, tags };
          setNote(noteToUpdate);
          onSaveNote(noteToUpdate);
        }}
      />

      {/* </ TagsInput> FIN */}

      <div className="note-container">
        <a
          href="/"
          onClick={e => {
            e.preventDefault();
            onDeleteNote(note.id);
          }}
        >
          Remove
          <button className="icon-button remove" />
        </a>
      </div>

      {/* Mostrar texto en modo lectura */}
      <div className="markdown">
        <p>Read move</p>
      </div>

      {/* Mostrar textarea en modo edición */}
      <textarea
        id="content"
        className="content"
        value={note.content}
        onChange={e => setNote({ ...note, content: e.target.value })}
        onBlur={e => onSaveNote(note)}
        onInput={autoSize}
      >
        Write mode
      </textarea>
    </div>
  );
}

export { Note };
