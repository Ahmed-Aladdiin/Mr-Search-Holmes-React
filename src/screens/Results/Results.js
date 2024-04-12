import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Input from "components/Input";
import Logo from "components/Logo";
import ThemeButton from "components/ThemeButton";

import "./Results.css"

function Results() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");
  const [results, setResults] = useState(null);
  const baseURL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    fetch(`${baseURL}/results`, {
      method: "GET", 
      headers: {
        "Content-Type": "application/json"
      },
      // body: JSON.stringify({query: query})
    })
    .then(response => response.json())
    .then(data => setResults(data));
  }, []);

  return (
    <>
      <ThemeButton/>
      <div id="Logo-and-Input">
        <Logo showText={false} size={10}/>
        <Input/>
      </div>
      <div id="Horizontal-Line"/>
      <div id="results">

      </div>
    </>
  );
}

export default Results;