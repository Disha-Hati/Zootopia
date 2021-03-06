//Assignment 8 for Level Zero
import React, { useState } from "react";
import "./styles.css";

const animalDictionary = {
  "🐶": "DOG",
  "🐱": "CAT",
  "🦁": "LION",
  "🐯": "TIGER",
  "🐎": "HORSE",
  "🦓": "ZEBRA",
  "🐮": "COW",
  "🐪": "CAMEL",
  "🦒": "GIRAFFE",
  "🐭": "MOUSE",
  "🐼": "PANDA",
  "🦆": "DUCK"
};

var animalsWeHave = Object.keys(animalDictionary);

export default function App() {
  var [userInput, setUserInput] = useState("");
  var [meaning, setMeaning] = useState("");
  function inputChangeHandler(event) {
    var userInput = event.target.value;
    setUserInput(userInput);

    var meaning = animalDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Not Found in our Database";
    }
    setMeaning(meaning);
  }

  function onClickHandler(x) {
    var meaning = animalDictionary[x];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Zootopia</h1>
      <h2>
        Here's a small web app for kids to learn about animals.All she need to
        do is put the animal emoji she wants to know about...
      </h2>

      <div>
        <h3>Put your Animal here:👇</h3>
        <input className="tbox" onChange={inputChangeHandler}></input>
      </div>

      <div>
        <h3>You Selected :{userInput}</h3>
      </div>

      <div>
        <h3>The Corresponding Animal is:{meaning}</h3>
      </div>

      <div>
        <h4>Emojis we have:</h4>
        {animalsWeHave.map(function (y) {
          return (
            <span
              onClick={() => onClickHandler(y)}
              style={{ fontSize: "2rem", padding: "0.3rem", cursor: "pointer" }}
            >
              {y}
            </span>
          );
        })}
      </div>
    </div>
  );
}
