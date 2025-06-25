import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(emoji_list => (
          <Card 
            key = {emoji_list.id}
            emoji = {emoji_list.emoji}
            name = {emoji_list.name}
            meaning = {emoji_list.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
