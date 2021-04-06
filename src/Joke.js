import React from "react";

function Joke(props) {
  // console.log(props)

  return (
    <div>
      <p style={{ display: !props.question && "none" }}>
        Question: {props.question}
      </p>
      
      <p style={{ background: !props.question && "gray" }}>
        Punch Line: {props.punchLine}
      </p>

      {/* <p style={{display:props.jokes.question ? "block" : "none"}}>Question: {props.jokes.question}</p> */}
      {/* <p style={{background:props.jokes.punchLine ? "gray" : "red"}}>Punch Line: {props.jokes.punchLine}</p> */}
      <hr />
    </div>
  );
}

export default Joke;
