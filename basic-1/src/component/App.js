import React, {useState} from "react";      
// import { ReactDOM } from 'react';
import "../stylesheets/style.css";
// import Form from './Form';
//Note:- state is a temporary storage, anything we want to stire in state variable we can store in the state variable.
//inside class cpmponent 'state = {inputValue : "---"}' we can ue only & it will work as a state variable, in functional component this
//'state = {inputValue : "---"}' will not work because function will take this as a normal object..

//=======Functional component======
const App = () => {
  const styles = {
    color: "brown",
    backgroundColor: "lightgrey",
  };
  //usestate
  const [count, setCount] = useState(0);
  
  //click function 
  const h1ClickHandler = () => {
    alert("clicked");
  };
  // const greet = (name) => {
  //   alert(`Hello ${name}`);
  // }
  // //input change
  const inputChangeHandler = () => {
    const input = document.querySelector('input');   //This will give the necessary information for this input
        console.log(input.value);
  }
  //event bubbling  --> It say on which element event ha been done we found that element.
  const inputChangeHandler1 = (event) => {
    //  console.log(event.target); //event.target means->It will tell at which tag(like <div>, <span>, <h1> etc) event is happening.
    //  console.dir(event.target);  //This will give the complete node of dom.
     console.dir(event.target.value); //This will give the value of in which html tag this value is present, the value is coming in input..
  };
  //==============counter=====================
  //Add +1
  const buttonClickHandler = () => {
    setCount(count+1)
  };
//Decrease -1
  const minusOne = () => {
    setCount(count-1)
  };
 //reset
 const resetCount = () => {
  setCount(0)
};

  return (
    <>
      <h1 style={{ color: "red" }}>Inline Style Applied</h1>
      <h1>Hello world -- External style Applied</h1>
      <h4
        style={{
          color: "white",
          backgroundColor: "grey",
          textAlign: "right",
        }}
      >
        Multiple Inline Style Applied{" "}
      </h4>
      <h3 style={styles}>Style Applied by passing object</h3>
      <h2
        style={{ color: "tomato", cursor: "pointer" }}
        onClick={() => {
          alert("Clicked");
        }}
      >
        Click me
      </h2>
      <h2
        style={{ color: "tomato", cursor: "pointer" }}
        onClick={h1ClickHandler}
      >
        Click me 2
      </h2>
      <label>Name</label><br></br>
      <input type="text" onChange={inputChangeHandler} /><br></br><br></br>

      <label>User_Id</label><br></br>
      <input type="text" onChange={inputChangeHandler1} /><br></br><br></br><br></br>
{/* Calling funfuions */}
{/* <Form  greetFunction={greet} method="post" action="/products" inputType="number" />
<Form  greetFunction={greet} method="get" action="/login" inputType="password" />
<Form  greetFunction={greet} method="post" action="/search" inputType="text" /> */}

{/* ============Counter================ */}
<h1>You clicked the button {count} times</h1>
<button onClick={buttonClickHandler}>+1</button>
<button onClick={resetCount}>Reset</button>
<button onClick={minusOne}>-1</button>
    </>
  );
};

//=======Class based components ========
// class App1 extends React.Component {
//   //Note:-- Inheritence means -> send data members from one class to another class..
//   //We are using this class as a component here.
//   //for inheritence use 'extends' keyword . 'React.Component' means inside react there is a
//   // class present name of 'Component' we have to inherit it.
//   //In class we can't declear variable.

//   //Note:- Inside Component there is a render() function present. and now we are returning something.
//   //without using any function we can't return directly.
//   render() {
//     return (
//       <>
//         <h1>Hello</h1>
//         <h3>Hello</h3>
//       </>
//     );
//   }
// };
export default App;
