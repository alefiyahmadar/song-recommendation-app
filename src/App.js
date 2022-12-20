import "./styles.css";
import React from "react";
import { useState } from "react";

var songGenre = {
  Pop: [
    {
      name: "Uptown Funk",
      des: "By Mark Ranson feat Bruno Mars",
      rating: "5/5"
    },
    { name: "24k magic", des: "By Bruno Mars", rating: "4/5" },
    { name: "God Is Women", des: "By Ariana Grande", rating: "4/5" }
  ],
  Soul: [
    { name: "I Like Me Better", des: "By Lauv", rating: "5/5" },
    { name: "Reserructing", des: "By Jess&Gabe", rating: "5/5" },
    { name: "Sage", des: "By Ritviz", rating: "4/5" }
  ],
  HipHop: [
    { name: "Better Now", des: "By Post Malone", rating: "5/5" },
    { name: "Starboy", des: "By Drake", rating: "4/5" },
    { name: "All The Star", des: "By Kendrick Lamar feat Szn", rating: "4/5" }
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
          {songGenre[meaning].map(function (song) {
            return (
              <li className="list-item">
                <div className="name">{song.name}</div>
                <div className="des">{song.des}</div>
                <div className="rating">{song.rating}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
