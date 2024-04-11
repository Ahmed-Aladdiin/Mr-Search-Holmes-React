import whiteLogo from "imgs/sherlock-white.svg";
import darkLogo from "imgs/sherlock-black.svg";

function Logo({ isDark }) {
  return (
    <>
      <img
        src={isDark ? whiteLogo : darkLogo}
        className="App-logo"
        alt="logo"
      />
      <p id="wordmark">Mr Searchlock Holmes</p>
    </>
  );
}

export default Logo;
