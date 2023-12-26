import { useReducer } from "react";

const initialValue = 0;
const reducer = (state,action) => {
  if (action.type === "Incr") {
    return state+1
  }
  if (action.type === "Decr") {
    return state-1
  }
  return state
}
const Basic = () => {
  const[state,dispatch]=useReducer(reducer,initialValue)
  return (
    <>
      {state}
      <button onClick={()=>dispatch({type:"Incr"})}>+</button>
      <button onClick={()=>dispatch({type:"Decr"})}>-</button>
    </>
  )
}

export default Basic