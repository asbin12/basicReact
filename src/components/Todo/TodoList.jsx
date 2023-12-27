import { useState,useEffect } from 'react'
import './style.css'
// get the local storage data
const getLocalData = () => {
  const lists = localStorage.getItem("mytodolist");
if (lists) {
  return JSON.parse(lists);
  }
else {
  return []
  }
}


const TodoList = () => {
  const[inputData,setInputData]=useState("")
  const [items, setItems] = useState(getLocalData())
  const [isEditItem, setIsEditItem] = useState('')
  const [toggleButton,setToggleButton]=useState(false)
//  add items function
  const addItem = () => {
    if (!inputData) {
      alert("please enter a data")
    }
    else if (inputData && toggleButton) {
      setItems(
        items.map((curEle) => {
          if (curEle.id === isEditItem) {
            return{...curEle,name:inputData}
          }
          return curEle
        }),
        setInputData(""),
        setIsEditItem(null),
        setToggleButton(false)
      )
    }
    else {
      const newNewInputData = {
        id: new Date().getTime().toString(),
        name:inputData
      }
      setItems([...items, newNewInputData])
      setInputData("")
    }
  }
    //edit items
    const editItem = (index) => {
      const itemEdited = items.find((curEle) => {
      return curEle.id===index
      })
      setInputData(itemEdited.name)
      setIsEditItem(index);
      setToggleButton(true)
    }
  //delete section

  const deleteItem = (index) => {
    const updatedItems = items.filter((curEle) => {
      return curEle.id !==index
    })
    setItems(updatedItems)
  }

  //remove all
  const removeAll = () => {
    setItems([])
  }
  //adding local storage 
  useEffect(() => {
   localStorage.setItem("mytodolist" ,JSON.stringify(items)) 
  }, [items])
  

  return (
    <>
    <div className="main-div">
      <div className="child-div">
        <figure>
          <img src="./images/todo.png" alt="todo list" style={{background:'white'}} />
          <figcaption>Add Your Task Here</figcaption>
        </figure>
        <div className="addItems">
          <input
              type='text'
              placeholder='Add your items here'
              className='form-control'
              value={inputData}
            onChange={(e)=>setInputData(e.target.value)}/>
         {toggleButton?(   <i className='far fa-edit add-btn' onClick={addItem}></i>):(   <i className='fa fa-plus add-btn' onClick={addItem}></i>)}
          </div>
          {/* show our items */}


          <div className='showItems'>
            {items.map((curEle) => {
              return (
                <div className="eachItem" key={curEle.id}>
                <h3>{curEle.name}</h3>
                <div className="todo-btn">
                    <i className='far fa-edit add-btn' onClick={() => editItem(curEle.id)}></i>
                    <i className='far fa-trash-alt add-btn' onClick={() => {
                      deleteItem(curEle.id)
              }}></i>
                  </div>
                </div>
          )
        })}
            
          </div>
          
          <div className="showItems">
            <button className="btn " 
            onClick={removeAll}>
              <span>Remove All</span>
            </button>
          </div>
        </div>
    </div>
    </>
  )
}

export default TodoList