import { Link } from "react-router-dom";
import "./ListItem.css";
function ResultsList({ results = [] }) {
  return (
    <div className="Gap-Container">
      <div className="Gap"/>
      <div className="Gap"/>
      <div className="Gap"/>
      <div id="Results-Container">
        {results.map((result) => (
          <Result result={result} key={result.id} />
        ))}
      </div>
    </div>
  );
}

function Result({ result }) {
  return (
    <div className="ListItem">
      <Link to={result.url} className="Result-Link"><h2>{result.title}</h2></Link>
      <p className="url">{result.url}</p>
      <p className="paragraph">{result.paragraph}</p>
    </div>
  );
}

export default ResultsList;
