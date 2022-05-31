import React from "react";
import "./Header.css";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import categories from "../../data/category";
const Header = ({ category, setCategory, word, setWord }) => {
  return (
    <div className="header">
      <span className="title"> {word ? word : "Word hunt"}</span>
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
          onChange={(e) => setCategory(e.target.value)}
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
