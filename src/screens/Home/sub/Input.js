import send from 'imgs/send.svg'
import './Input.css'

function Input() {
  return (
    <div id="Input-Field-Container">
      <input type="text" placeholder="Enter your Query" id="Query-Input" />
      <div id="Send-Button-Container">
        <img src={send} id="Send-Button" alt="The query sending button"></img>
      </div>
    </div>
  );
}

export default Input;
