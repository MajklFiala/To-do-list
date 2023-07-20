import { useState, createContext, useContext } from 'react'
import './CSS/App.css'
import ListItem from './ListItem.jsx'


export const Context = createContext();

function App() {

  

  const [todo, setTodo] = useState()
  const [title, setTitle] = useState()

  const [list, setList] = useState([])

  const getList = () => {
    setList([...list, Item])
    setTodo('')
    setTitle('')
  }

  const Item = {
    id: crypto.randomUUID(),
    itemTitle: title,
    itemText: todo,

  }



  return (
    <Context.Provider value={{list, setList, todo, setTodo, title, setTitle}}>
    <div className='app'>
      <div className='Top'>
        <h1>To Do List</h1>
        <input value={title} placeholder='Enter title of the note...' type="text" onChange={(event) => setTitle(event.target.value)}></input>
        <textarea value={todo} placeholder='What is on your mind?' type="text" onChange={(event) => setTodo(event.target.value)}></textarea>
        <button onClick={getList}>SUBMIT</button>
      </div>
      <div className='List'>
        {list.map((it) => {return(<ListItem header={it.itemTitle} text={it.itemText} identifier={it.id}></ListItem>)})}
      </div>
    </div>
    </Context.Provider>
  )
}

export default App
