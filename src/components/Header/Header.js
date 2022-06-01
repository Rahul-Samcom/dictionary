import React from "react";
import "./Header.css";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import categories from "../../data/category";

const Header = ({ category, setCategory, word, setWord, LightMode }) => {
  const handleChange = (e) => {
    setCategory(e.target.value);
    setWord("");
  };

  return (
    <div
      className="header"
      style={{ backgroundColor: LightMode ? "#fff" : "#808080" }}
    >
      <span className="title"> {word ? word : "Dictionary"}</span>
      <div className="inputs">
        <TextField
          className="search"
          id="standard-basic"
          label="Search Word"
          variant="standard"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />

        <TextField
          className="select"
          select
          label="Language"
          value={category}
          onChange={handleChange}
        >
          {categories.map((option) => (
            <MenuItem key={option.label} value={option.label}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </div>
  );
};

export default Header;
