import logo from './../../imgs/sherlock-white.svg';
import './Home.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Mr Searchlock Holmes
        </p>
        <input type='text' placeholder='Enter your Query'/>
      </header>
    </div>
  );
}

export default App;
