import { useEffect, useState } from "react"
// import '../../App.css'
import '../../assets/css/style.css'
import './counter.css'
import { FaPlus } from "react-icons/fa";

const UseEffectExample = () => {
  let [counter, setCounter] = useState(0)

  useEffect(() => {
    // console.log('Hi')
    document.title=`Chats(${counter})`
  },[counter])

  let countApp = () => {
    setCounter(counter+1)
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
        </div>
   <p className=""></p>
   
          </div>
          </div>
      </section>
      
    </>
  )
}


export default UseEffectExample