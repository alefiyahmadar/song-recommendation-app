import "./styles.css";
import React from "react";
import { useState } from "react";

var songGenre = {
  Pop: [
    { name: "Uptown Funk", rating: "5/5" },
    { name: "24k magic", rating: "4/5" },
    { name: "God Is Women", rating: "4/5" }
  ],
  Soul: [
    { name: "I Like Me Better", rating: "5/5" },
    { name: "Reserructing", rating: "5/5" },
    { name: "Ghost", rating: "4/5" }
  ],
  HipHop: [
    { name: "Better Nowe", rating: "5/5" },
    { name: "Starboy", rating: "4/5" },
    { name: "All The Star", rating: "4/5" }
  ]
};

export default function App() {
  var songGenreBtn = Object.keys(songGenre);

  const [meaning, setMeaning] = useState("HipHop");

  function onClickHandler(song) {
    setMeaning(song);
  }

  return (
    <div className="App">
      <h1 className="header"> 🎶 vibeyyy</h1>
      <h4 className="text">
        An app which recommends songs on the basis of genre. View by clicking
        the genre
      </h4>

      <span>
        {songGenreBtn.map(function (song) {
          return (
            <button
              key={song}
              className="songBtn"
              onClick={() => onClickHandler(song)}
            >
              {song}
            </button>
          );
        })}
      </span>

      <hr></hr>

      <div>
        <ul className="list">
          {songGenre[meaning].map(function (song) 
          { return (
            <li className="list-item">
              <div className="name">{song.name}</div>
              <div className="rating">{song.rating}</div>
            </li>
          )})}
        </ul>
      </div>
    </div>
  );
}
