import React, { useState } from 'react';

// //form submission--> These all are component of form
    const Form = (props) => {
        console.log(props);
    // const [inputValue, setInputValue] = useState('hello');
	const [ variableName, setState ] = useState('');

	const inputClickHandler = (event) => {
		event.preventDefault();
        console.log( variableName);
        props.greetFunction('Anand');
        //When we click on submit button the output comes for milli second, so to hold the value use a function event.preventDefault();
		// console.log(variableName);
		// props.greetFunction('john');
	};
	// const inputChangeHandler = (event) => {
	// 	setState(event.target.value);
	// 	console.log(variableName);
		// inputValue = event.target.value
	// };
    const inputChangeHandler = (event) => {
        setState(event.target.value)
        console.log(variableName);
    }
	return (
		<React.Fragment>
			<form method={props.method} action={props.action}>
				<input type={props.inputType} onChange={inputChangeHandler}/>
				<button onClick={inputClickHandler} type="submit">
					Submit
				</button>
			</form>
		</React.Fragment>
	);
};
// //===========using '.this' keyword while rendering===-->".this" stores the address of current object=====================================
// class Form extends React.Component {
// 	state = {
// 		inputValue: ''
// 	};
// 	inputClickHandler = (event) => {
// 		event.preventDefault();
// 		console.log(this.state.inputValue);
// 	};
// 	inputChangeHandler = (event) => {
// 		// this.setState({
// 		// 	inputValue: event.target.value
// 		// });
// 		this.state.inputValue = event.target.value;
// 		console.log(this.state.inputValue);
// 	};
// 	render() {
// 		return (
// 			<React.Fragment>
// 				<form method={this.props.method} action={this.props.action}>
// 					<input type={this.props.inputType} onChange={this.inputChangeHandler}  />
// 					<button onClick={this.inputClickHandler} type="submit">
// 						Submit
// 					</button>
// 				</form>
// 			</React.Fragment>
// 		);
// 	}
// }

export default Form;