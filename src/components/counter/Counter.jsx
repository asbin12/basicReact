import { useState } from "react"
// import '../../App.css'
import '../../assets/css/style.css'
import './counter.css'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const Counter = () => {

  let [counter, setCounter] = useState(0)

  let countApp = () => {
    setCounter(counter+1)
  }
  let countLesser = () => {
    if (counter <= 0) {
      alert("Number is less than 0 and limit is 0")
    }
    else {
    setCounter(counter-1)
      
    }
}
  return (
    <>
      <section className="bg-black ">
        <div className=" flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-center text-white pb-8">Counter App</h1>
      <div className="flex flex-col items-center justify-center gap-10" >
        <p className="text-white text-2xl font-bold">{counter}</p>
        <div className=" flex gap-4">
              <button onClick={countApp} className="btn">
              <span></span>
                <span></span>
                <span></span>
                <span></span>
                <FaPlus /></button>
              
         
              <button
                onClick={countLesser} className="btn ">
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

export default Counter
{/* {counter>0? <button onClick={countLesser}>-</button>:alert("Number is 0 so you cannot decrease it from here")} */}