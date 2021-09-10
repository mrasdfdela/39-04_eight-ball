import React, {useState } from 'react';
import './EightBall.css';
import responses, { randomMsg } from "./helpers.js";

function EightBall() {
  const [ isAnswer, setIsAnswer ] = useState(false)
  const [ answer, setAnswer ] = useState("Think of a Question");
  const [ backgroundColor, setBackgroundColor ] = useState("black");

  function eightBallClick(){
    if (isAnswer) {
      setAnswer("Think of a Question");
      setBackgroundColor("black");
      setIsAnswer(false);
    } else {
      const response = randomMsg(responses);
      setAnswer(response.msg);
      setBackgroundColor(response.color);
      setIsAnswer(true);
    }
  }

  function resetEightBall(){
    setAnswer("Think of a Question");
    setIsAnswer(false);
    setBackgroundColor("black");
  }

  return (
    <>
      <div
        className="EightBall"
        onClick={eightBallClick}
        style={{ backgroundColor: { backgroundColor } }}
        >
        <h3 className="EightBall-text">{answer}</h3>
      </div>
      <button onClick={resetEightBall}>Reset</button>
    </>
  );
}

export default EightBall;