import {  useReducer} from "react"
import '../../assets/css/style.css'
import './counter.css'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const initialState = 0;
const reducer = (state, action) => {
  if (action.type === "Increment") {
     state+=1
  }
  if (action.type === "Decrement") {
    if (state <= 0) {
     alert("the number is less than 0 so cannot perform operation")
    }
    else {
      state-=1
    }
 
 }

  return state;
}
const UseReducerExam = () => {
  // let [counter, setCounter] = useState(0)

  const[state,dispatch]=useReducer(reducer,initialState)

//   let countApp = () => {
//     setCounter(counter+1)
//   }
//   let countLesser = () => {
//     if (counter <= 0) {
//       alert("Number is less than 0 and limit is 0")
//     }
//     else {
//     setCounter(counter-1)
      
//     }
// }
 
  return (
    <>
      <section className="bg-black ">
        <div className=" flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-center text-white pb-8">Counter App</h1>
      <div className="flex flex-col items-center justify-center gap-10" >
        <p className="text-white text-2xl font-bold"> {state}</p>
        <div className=" flex gap-4">
              <button onClick={()=>dispatch({type:"Increment"})} className="btn">
              <span></span>
                <span></span>
                <span></span>
                <span></span>
                <FaPlus /></button>
                <button
                onClick={()=>dispatch({type:"Decrement"})} className="btn ">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <FaMinus /></button>
        </div>
   <p className=""></p>
   
          </div>
          </div>
      </section>
      
    </>
  )
}


export default UseReducerExam