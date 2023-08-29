import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';
import Note from './Note';

const List = (props) => {
    const deleteNoteFromList = (idx) => {
        props.deleteNoteFromList(idx);
    };
  

  return <>
    {props.list.map((item, idx) => {
        return (
            <div key={idx} className='note'>
           <Note title={item.title} content={item.content}/>
              {/* import & using <fab> tag from react bootstrap instead of button */}
              <Fab onClick={() => {
                deleteNoteFromList(idx);
              }}>
              <DeleteIcon />
              </Fab>      
        </div>
        )
    })}
    </>
};

export default List;