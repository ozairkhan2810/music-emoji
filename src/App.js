import React, { useState } from "react";
import "./styles.css";

const musicDictionary = {
  "🎼": "musical score",
  "🎤": "microphone",
  "🎧": "headphone",
  "🎷": "saxophone",
  "🪕": "banjo",
  "🎸": "guitar",
  "🎹": "musical keyboard",
  "🎺": "trumpet",
  "🎻": "violin",
  "🥁": "drum"
};

var musicsWeKnow = Object.keys(musicDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function musicInputHandler(event) {
    var userInput = event.target.value;

    var meaning = musicDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }

    setMeaning(meaning);
  }

  function musicClickHandler(music) {
    var userInput = musicDictionary[music];

    setMeaning(userInput);
  }

  return (
    <div className="App">
      <h1>Musical emoji</h1>
      <input onChange={musicInputHandler} placeholder="Select/ Enter" />
      <h2> {meaning} </h2>

      <h3> Musical instruments we know </h3>
      {musicsWeKnow.map(function (music) {
        return (
          <span
            onClick={() => musicClickHandler(music)}
            key={music}
            style={{ fontSize: "2rem", padding: "0.5rem" }}
          >
            {music}
          </span>
        );
      })}
    </div>
  );
}
