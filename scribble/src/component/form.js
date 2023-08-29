import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';    //Instead of button we can use fab, Fab is similar to button in react bootstrap
import Fab from '@mui/material/Fab';

const Form = (props) => {
  const [isExpended, setExpended] = useState(false);
  const [noteDetails, setNoteDetails] = useState({
    title: "", //title will be empty initially
    content: "", //content will also be empty initially
  });

  const changeNoteDetails = (event) => {
    const { className, value } = event.target;
    setNoteDetails({
      ...noteDetails,
      [className]: value, //why [] brackets on className --> beacause if we want to access variable inside objects then we can use vaiable
      // include [] these bracets otherwise object will treat it as property , without [] className is a property, with [className] it will treated
      // as object
    });
};
    const addNote = (event) => {
      event.preventDefault();
      if(noteDetails.title.length && noteDetails.content.length){
        // alert('please enter content');  ?incomplete? -->  Note:-If any user write title only then they will get an alert to fill content also
        props.addNoteToList(noteDetails);
        setNoteDetails({
          title: '',
          content: ''
        });
        setExpended(false);
      }
      // console.log(noteDetails);
    };
    const expandArea = () => {
        setExpended(true);
    }
    const shrinkArea = () => {
      // if(noteDetails.title.length === 0)  //Both are same either we can apply logic if (length === 0 ) 
      if(!noteDetails.title.length)    //or if(! not equal to)   both logic is same but way of writting is different
      setExpended(false);
    }
    return (
      <>
      <form className="create-note">
        <input onFocus={expandArea} onBlur={shrinkArea} value={noteDetails.title} className="title" onChange={changeNoteDetails} placeholder="title" />
        {isExpended ? (
        <textarea value={noteDetails.content} className="content" onChange={changeNoteDetails} placeholder="content" />
        ): null}
        {/* using <button> tag */}
        {/* <button style={{fontSize:'25px'}}onClick={addNote}>+</button> */}

        {/* using <fab> tag from react bootstrap */}
    <Fab  color="secondary" aria-label="add" onClick={addNote}>
       <AddIcon />
    </Fab>
        </form>
      </>
    );
  };
export default Form;
