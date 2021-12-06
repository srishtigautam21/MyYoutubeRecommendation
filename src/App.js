import React, { useState } from "react";
import "./styles.css";
var youtuberDictionary = {
  Travel: [
    { name: "YatriDoctor", ratings: "8.5/10" },
    { name: "NomadicIndian", ratings: "9/10" },
    { name: "NomadicShubham", ratings: "7/10" }
  ],
  Programming: [
    { name: "TanayPratap", ratings: "9/10" },
    { name: "ApnaCollege", ratings: "7/10" },
    { name: "CodeWithHarry", ratings: "8/10" }
  ],
  Fitness: [
    { name: "YogaWithKassandra", ratings: "9/10" },
    { name: "WalkAtHome", ratings: "9/10" },
    { name: "EmiWong", ratings: "8/10" }
  ]
};

export default function App() {
  var [genre, setMyfav] = useState("Programming");

  function genreClickHandler(genre) {
    setMyfav(genre);
  }

  return (
    <div className="App">
      <header className="head"> ✈️ My Fav Youtubers 👩‍💻 🏋️‍♀️</header>
      <p style={{ fontSize: "medium" }}>
        Checkout my favorite youtubers. Select a genre to get started.
      </p>
      <div>
        {Object.keys(youtuberDictionary).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              padding: "0.5rem 1rem",
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
        <hr />
      </div>
      <div style={{ textAlign: "center" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {youtuberDictionary[genre].map((youtuber) => (
            <li
              key={youtuber.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid black",
                width: "90%",
                textAlign: "center",
                margin: "1rem 0.5rem",
                borderRadius: "0.5rem",
                marginLeft: "3rem",
                backgroundColor: "#E5E7EB"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {youtuber.name} </div>
              <div style={{ fontSize: "smaller" }}> {youtuber.ratings} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
