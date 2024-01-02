import { useEffect, useState } from "react"
import img1 from "../assets/download.jfif"


const MainWork = () => {
    const[advice, setAdvice] =useState("")
    const [count, setCount] = useState(0)

    async function getAdvice() {
        const res = await fetch('https://api.adviceslip.com/advice')
        const data = await res.json()
        setAdvice(data.slip.advice)
        setCount((c) => c + 1)

    }
    useEffect(function(){
       getAdvice()
    }, [])
  return (
    <div>
      <header className=" text-center">
        <div>
          <h1 className="text-green-900 font-bold text-2xl">Hello welcome 👏</h1>
        <h1 className="text-lg mx-10">  Here is dev <strong className="text-green-900 text-xl  ">Olayiwola </strong> your all time developer </h1>
        </div>
        <div>
          <img src={img1} alt="img" className="mx-auto rounded-[20px] my-5"  />
        </div>
      </header>
      <p className="text-center mb-6 underline font-bold text-lg">Advice of the day</p>

        <h1 className="text-center shadow mx-20 rounded-md p-10 bg-slate-100">{advice}</h1>
        <button onClick={getAdvice} className="ms-8 mt-8 bg-slate-200 px-4 py-1 rounded-lg text-zinc-900 hover:bg-indigo-100">Get advice</button>
        <p className="text-center my-10">You have read <strong className="text-green-900">{count}</strong> piece of advice from here</p>
    </div>
  )
}

export default MainWork