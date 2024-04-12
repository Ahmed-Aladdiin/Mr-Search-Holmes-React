import { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "ThemeContext";

import Moon from "imgs/moon.png";
import Sun from "imgs/sun.png";

import Logo from "./sub/Logo";
import Input from "./sub/Input";

import "./Home.css";

function App() {
  const { isDark, setDark, setLight } = useContext(ThemeContext);

  return (
    <div className="App">
      <header className="App-header">
        <div></div>
        <div>
          <Logo isDark={isDark}/>
          <Input />
        </div>
        <p id="Input-Post-Text">
          Send me your query, and surely the truth will be unveiled, or you may pay me a visit at{" "}
          <Link to="https://maps.app.goo.gl/ceR9pVoZEzKFwtLD7" className="Link">
            221B Baker Street
          </Link>
        </p>
        <div id="Theme-Switch" onClick={isDark ? setLight : setDark}>
          <img src={isDark ? Sun : Moon} alt="theme switching icon"/>
        </div>
      </header>
    </div>
  );
}

export default App;
