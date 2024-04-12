import { Link } from "react-router-dom";

import Logo from "../../components/Logo";
import Input from "./sub/Input";

import "./Home.css";
import ThemeButton from "components/ThemeButton";

function App() {
  const SherlockLocation = "https://maps.app.goo.gl/ceR9pVoZEzKFwtLD7";
  return (
    <div className="App">
      <header className="App-header">
        <div></div>
        <div>
          <Logo/>
          <Input />
        </div>
        <p id="Input-Post-Text">
          Send me your query, and surely the truth will be unveiled, or you may pay me a visit at{" "}
          <Link to={SherlockLocation} className="Link">
            221B Baker Street
          </Link>
        </p>
        <ThemeButton/>
      </header>
    </div>
  );
}

export default App;
