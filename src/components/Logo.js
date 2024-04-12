import { useContext } from "react";
import ThemeContext from "ThemeContext";

import whiteLogo from "imgs/sherlock-white.svg";
import darkLogo from "imgs/sherlock-black.svg";

function Logo({ showText=true }) {
  const { isDark } = useContext(ThemeContext);
  return (
    <>
      <img
        src={isDark ? whiteLogo : darkLogo}
        className="App-logo"
        alt="logo"
      />
      {showText && <p id="wordmark">Mr Searchlock Holmes</p>}
    </>
  );
}

export default Logo;
