import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import Header from "./components/Header/Header";
const App = () => {
  const [meanings, setMeanings] = useState([]);
  const [word, setWord] = useState("");
  const [category, setCategory] = useState("en");
  const dictionaryAPI = async () => {
    try {
      const data = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/hello"
      );

      setMeanings(data.data);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(meanings);
  useEffect(() => {
    dictionaryAPI();
  }, []);
  return (
    <div style={{ height: "100vh" }}>
      <Container
        maxWidth="md"
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
        />
      </Container>
    </div>
  );
};

export default App;
