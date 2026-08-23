import React, {useState, useEffect} from 'react'

const Timer = () => {
    const [seconds,setSeconds] = useState(0);

    if(seconds === 60){
        setSeconds(0)
    }

    useEffect(()=>{
        const interval = setInterval(()=>{
            setSeconds(prev => prev +1);
        },1000);
        return () => clearInterval(interval)
    },[]);
  return (
    <div className="flex flex-col items-center w-fit bg-purple-700 p-3 rounded">
        <p className="font-bold text-4xl font-mono bg-purple-300 p-5 rounded">Timer :{seconds}s</p>
        <button className="mt-2 text-white font-semibold bg-blue-700 py-1 px-3 rounded cursor-pointer"
            onClick = {()=>{setSeconds(0)}}
        >Reset</button>
    </div>
  )
}

export default Timer