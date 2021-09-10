import React, {useState } from 'react';
import './EightBall.css';
import responses, { randomMsg } from "./helpers.js";

function EightBall() {
  const [ isAnswer, setIsAnswer ] = useState(false)
  const [ answer, setAnswer ] = useState("Think of a Question");
  const [ backgroundColor, setBackgroundColor ] = useState('black');

  function handleClick(){
    if (isAnswer) {
      setAnswer("Think of a Question");
      setBackgroundColor("black");
      setIsAnswer(false);
    } else {
      const response = randomMsg(responses);
      setAnswer(response.msg);
      setBackgroundColor(response.color);
      console.log(response.color);
      console.log(backgroundColor);
      setIsAnswer(true);
    }
  }

  return (
    <div
      className="EightBall"
      style={{ backgroundColor: { backgroundColor } }}
      onClick={handleClick}
    >
      <h3 className="EightBall-text">{answer}</h3>
    </div>
  );
}

export default EightBall;