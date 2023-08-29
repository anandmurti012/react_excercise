import React, {useEffect, useState} from "react";

import Header from './component/header'
import Footer from "./component/footer";
import Form from "./component/form";
import List from "./component/List";

const App = ()=> {
  const [list, setList] = useState(
    localStorage.list ? JSON.parse(localStorage.list) : []
  );

  useEffect(
    () => {
      localStorage.list = JSON.stringify(list);
    }, [list]
  );
  
  const addNoteToList = (note) => {
    setList([...list, note]);
    localStorage.list = JSON.stringify(list);
  };
  const deleteNoteFromList = (index) => {
    const newArr = list.filter((item, idx) => index !== idx);
    setList(newArr);
  };
  //here is two different states
  // const [title, setTitle] = useState('');
  // const [content, setContent] = useState('');
  
  //merging above the both states in a single state
// const [noteDetails, setNoteDetails] = useState({
//   title: '',      //title will be empty initially 
//   content: ''    //content will also be empty initially
// });
//=======two different onchange event function for both <input />=========
  // const changeTitle = (event) => {
  //   setTitle(event.target.value);
  // };
  // const changeContent = (event) => {
  //   setContent(event.target.value);
  // };
  //=========================================================

  //===============Now making a single function for onchange event for both the <input />===============
// const changeNoteDetails = (event) => {
//   const {className, value} = event.target;   //we are taking 'className' property here that differentite both the inputs. 
  //(Note:- this will help to identify for which inputs, call is comming either 'title' or 'content')
  //we can take placeHolder, id as well. means Basically we have to take that property that differentiate both the inputs.

//===========This is a spread Operator this will also give the same result===============
//  setNoteDetails({
//    ...noteDetails,    
//    [className]: value    //why [] brackets on className --> beacause if we want to access variable inside objects then we can use vaiable
// // include [] these bracets otherwise object will treat it as property , without [] className is a property, with [className] it will treated
// // as object
//  });
//===========================================

//========or we can write like this also======== (both method will give same result)=
// if(className === 'title'){
//   setNoteDetails({
//     content: noteDetails.content,
//     title:value
//   })
// }else{
//   setNoteDetails({
//     content:value,
//     title: noteDetails.title
//   })
//  }
// };
//==========================================================

//when there was two different function we were passing title & content only
  // const addNote = () => {
  //   alert(title);
  //   alert(content);
  // };
//=================================================================================

  //but for now we are using a single function so we will have to pass noteDetails.title & noteDetails.content
  // const addNote = () => {
  //   alert(noteDetails.title);
  //   alert(noteDetails.content);
  // };
  //======================================

  //===========================This will display the given input data in console
  // const addNote = () => {
  //   console.log(noteDetails);
  // }
  //============================

  //Now we have to store he input value in an array
  
  return(
  <>
    {/* =======two different onchage functions are there for both input searately ==========*/}
 {/* <input onChange={changeTitle}  />  
 <input onChange={changeContent}  /> */}

{/*================= making single function for both the input================*/}
{/* Note:--we have to take two property form here that has been differentiating both the inputs (It might be className,placeholder, id or any 
other property we can take that differentiate both the inputs ) */}
<Header />
<Form addNoteToList={addNoteToList} />
<List list = {list} deleteNoteFromList={deleteNoteFromList} />
<Footer />
 </> 
  );
};

export default App;
