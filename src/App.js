import React from "react";
import "./styles.css";
import { useState } from "react";

var musicSong = {
  classical: [
    { name: "O mio babbino caro", rating: "4/5" },
    { name: "Piano Concerto No.", rating: "3.5/5" }
  ],
  pop: [
    { name: "Rolling in the Deep", rating: "5/5" },
    { name: "Firework", rating: "4.5/5" }
  ],
  hiphop: [
    { name: "MONTERO (Call Me By Your Name)", rating: "4.5/5" },
    { name: "Panda", rating: "5/5" }
  ]
};
var playmusic = Object.keys(musicSong);

export default function App() {
  var [selectedGenre, setGenre] = useState("classical");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>🎻Music</h1>
      <p> Are you music lover? Check this out! </p>
      <div>
        {playmusic.map(function (genre) {
          return (
            <button
              className="musicbutton"
              onClick={() => genreClickHandler(genre)}
            >
              {genre}
            </button>
          );
        })}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul>
          {musicSong[selectedGenre].map(function (musicName) {
            return (
              <li>
                <div className="songname">{musicName.name}</div>
                <div className="rating">{musicName.rating}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
