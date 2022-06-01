import React from "react";
import "./Definitions.css";

const Definitions = ({ word, category, meanings, LightMode }) => {
  return (
    <div
      className="meanings"
      style={{ backgroundColor: LightMode ? "#fff" : "#808080" }}
    >
      {meanings[0] && word && category === "en" && (
        <audio
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          controls
        >
          No audio found for this word{" "}
        </audio>
      )}
      {word == "" ? (
        <span className="subtitle"> Start by typing </span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div className="singleMean">
                <b> {def.definition}</b>
                <hr />
                {def.example && (
                  <span className="example">
                    Example : <b>{def.example}</b>
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definitions;
