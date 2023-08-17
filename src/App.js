import { useMemo, useRef, useState } from 'react';
import RegisterCard from "./components/registerCard/Registercard.js"
import DoneCard from "./components/doneCard/DoneCard.js"
import './App.css';
const regex = /^\w+@\w+.com$/;
let email = "";
function App() {
  let [signedIn, upadteSignIn] = useState(() => false);
  let input = useRef(null);
  let invalidMessage = useRef(null);
  function handleClick() {
    console.log(regex.test(input.current.value));
    if (!regex.test(input.current.value)) {
      input.current.className = "invalidBox";
      invalidMessage.current.className = "invalidMessage active";
    }
    else {
      email = input.current.value;
      input.current.removeAttribute("class");
      invalidMessage.current.className = "invalidMessage";
      upadteSignIn(true);
    }
  }
  return (
    <>
      {signedIn ? <DoneCard emailAddress={email} update={upadteSignIn} /> : <RegisterCard handleClick={handleClick} input={input} message={invalidMessage} />}
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Your Name Here</a>.
      </div>
    </>
  );
}

export default App;
