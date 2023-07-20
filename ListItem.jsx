import './CSS/ListItem.css'
import DoneIcon from '@mui/icons-material/Done';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { createContext, useContext, useState } from 'react';
import { Context } from './App';
import { listClasses } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';



function ListItem(props) {

  const [clas, setClass] = useState(false)


  const context = useContext(Context)

  
  const DeleteItem = ()=>{
    const array = context.list.filter((i) => i.id !== props.identifier)
    context.setList(array)    
}


  return (
    <div className={clas==false ? 'Container' : 'Container-done'}>
      <div className='TextContainer'>
        <h2>{props.header}</h2>
        <p>{props.text}</p>
      </div>
      <div className='Buttons'>
        <DoneIcon onClick={() => {setClass(!clas)}}className='Icon'></DoneIcon>
        <HighlightOffIcon onClick={DeleteItem} className='Icon2'></HighlightOffIcon>

      </div>
    </div>
  )
}

export default ListItem
