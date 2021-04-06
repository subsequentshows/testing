import React, { useState } from "react";

// import Product from "./Product";
// import productData from "./productData";

// function handleClick() {
//   alert("I was clicked")
// }

// function App() {
// const jokeCompoments = jokeData.map((joke) => {
//   return <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
// });

// Hien thi
// return Product component and pass in data from inviditual joke object: item
// const productComponents = productData.map((item) => {
//   return (
//     <Product
//       key={item.id}
//       name={item.name}
//       price={item.price}
//       phone={item.phone}
//     />
//   );
//});

// --------------------------------------------

// Declare a new state variable, which we'll call "count"
// const [count, setCount] = useState(0);

// return (
//   <div>
//     <p>You clicked {count} times</p>
//     <button onClick={() => setCount(count + 1)}>Click me</button>
//   </div>
// );

//return (
// <div>
//   {jokeCompoments}

//   {/* Not object like JSON something something*/}
//   {/* <Joke question="nani6 ?" punchLine="Wut6"/> */}
// </div>

// <div>
//   {productComponents}
//   <img onMouseOver={() => alert("hovered")}
//   src="data:image/jpeg;base64,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KKQA"/>
//   <button onMouseHover={handleClick}>Click me</button>
// </div>
//);

// ------------------------------
// class example
// constructor(props) {
//   super(props);
//   this.state = {
//     count: 0
//   };
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
  }

  // Declare a new state variable, which we'll call "test"
  // const [test, setTest] = useTest;

  render() {
    let wordDisplay;

    if (this.state.isLoggedIn === true) {
      wordDisplay = "in"
    } else {
      wordDisplay = "out"
    }

    return (
      <div>
        <h1>Random text {wordDisplay}</h1>
        {/* <ChildComponent answer={this.state.answer} /> */}
      </div>
    );
  }
}

export default App;
