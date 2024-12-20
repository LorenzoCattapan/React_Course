import React from "react";
import emojipedia from "../emojipedia.js";
import Entry from "./Entry";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map((entry) => (
            <Entry
                key={entry.id}
                emoji={entry.emoji}
                name={entry.name}
                meaning={entry.meaning}
            />
        ))};
      </dl>
    </div>
  );
}

export default App;
