import React,{useState, useEffect} from 'react'

const MultiEffectComp = () => {
    const [count,setCount] = useState(0);
    const [seconds,setSeconds] = useState(0);

    useEffect(() =>{
        console.log("count changes:",count);
    },[count]);

    useEffect(()=>{
        const intervalId = setInterval(() => {
            setSeconds(prev => prev+1);
        }, 1000);

        return () => clearInterval(intervalId);
    },[]);

  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={()=> setCount(count+1)}>Increment count</button>
        <h2>Seconds: {seconds}</h2>
    </div>
  )
}

export default MultiEffectComp