import React, { useState } from 'react';

const App = () => {
	// const [todoValue, setTodoValue] = useState('');
	// const [todos, setTodos] = useState([]);

	// const inputChangeHandler = (event) => {
	// 	setTodoValue(event.target.value);
	// };
	// const buttonClickHandler = () => {
	// 	setTodos((prevState) => {
	// 		return [...prevState, todoValue];    //inside ...'prevState' will store all the old value & 'todoValue'  all the new value will be store...
	// 		//==== or we can use this instead of spread operator
	// 		// let newArray = [];
	// 		// for(let todo of prevState) {
	// 		// 	newArray.push(todo);
	// 		// }
	// 		// newArray.push(todoValue);
	// 		// return newArray
	// 	});
	// };
//==========making state=============
const [inputValue, setInputValue] = useState('');
//making useState array that will store the data
const [list, setList] = useState(['todolist1, todolist2','todolist3']);
//==========Making event functions============
	const addTodoList = (event) => {
     event.preventDefault();     //this function will hold the data coming from input in console.
	 // console.log(inputValue);
	 alert(inputValue);
	 alert(list);
	};
	const updateInputValue = (event) => {
		setInputValue(event.target.value);
	}
return (
  <>
  <div className='container'>
<form>
	<input onChange={updateInputValue} />
	<button onClick={addTodoList}>Add</button>
 </form>
  </div>
  </>
);
};

export default App;
