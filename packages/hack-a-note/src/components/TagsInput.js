import React from "react";

function TagsInput({ value, onTagsChanged }) {
  return (
    <div className="tags-container">
      <ul>
        {value.map(tag => (
          <li>
            {tag}
            <button
              onClick={() => {
                onTagsChanged(value.filter(t => t !== tag));
              }}
            >
              x
            </button>
          </li>
        ))}
        <div className="tags-input-container">
          <input
            type="text"
            placeholder="Enter tag"
            onKeyPress={e => {
              if (value.includes(e.target.value)) {
                return;
              }

              if (e.key === "Enter") {
                onTagsChanged([...value, e.target.value]);
                e.target.value = "";
              }
            }}
          />
        </div>
      </ul>
    </div>
  );
}

export { TagsInput };
