import { useState, useEffect } from "react";
// import { useLocation } from 'react-router-dom';

import Input from "components/Input";
import Logo from "components/Logo";
import ThemeButton from "components/ThemeButton";
import ResultsList from "./sub/ResultsList";

import "./Results.css";

function Results() {
  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);
  // const query = queryParams.get("query");
  const [results, setResults] = useState([]);
  const baseURL = process.env.REACT_APP_BASE_URL;
  // pagination logic variables
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10;
  const [pageResults, setPageResults] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    fetch(`${baseURL}/results`, {
      method: "GET",
      // headers: {
      //   "Content-Type": "application/json"
      // },
      // body: JSON.stringify({query: query})
    })
      .then((response) => {
        if (!response.ok) {
          setResults([]);
          throw new Error('Network response was not ok');
        };
        return response.json();
      })
      .then((data) => setResults(data))
      .catch((e) => {
        console.error("Can't reach server");
      });
  }, []);

  useEffect(() => {
    const lastResultIndex = currentPage * resultsPerPage;
    const firstResultIndex = lastResultIndex - resultsPerPage;
    setPageResults(results.slice(firstResultIndex, lastResultIndex));
  }, [currentPage]);

  return (
    <>
      <ThemeButton />
      <div className="Gap-Container">
        <div className="Gap" />
        <div id="Logo-and-Input">
          <Logo showText={false} size={10} />
          <Input />
        </div>
      </div>
      <div id="Horizontal-Line" />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </>
  );
}

export default Results;
