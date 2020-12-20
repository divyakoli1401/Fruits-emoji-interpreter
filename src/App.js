import React, { useState } from "react";
import "./styles.css";
const emojiDictionary = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍍": "Pineapple",
  "🍎": "Apple",
  "🍐": " Pear",
  "🍓": "Strawberry",
  "🥝": "Kiwi",
  "🍒": "Cherry",
  "🍑": "Peach"
};

var emojiList = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      setMeaning("Sorry, Emoji unavailable in database");
    } else {
      setMeaning(meaning);
    }
  }

  function emojiClickHAndler(item) {
    var meaning = emojiDictionary[item];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Know Your Fruits</h1>
      <input onChange={emojiInputHandler}></input>
      <div className="emojiOutput">{meaning}</div>
      <div className="emojiDisplay">
        {emojiList.map((item) => {
          return (
            <span key={item} onClick={() => emojiClickHAndler(item)}>
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
