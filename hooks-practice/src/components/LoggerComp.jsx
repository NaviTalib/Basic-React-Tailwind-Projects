import React,{useState,useEffect} from 'react'

const LoggerComp = () => {
    const [count,setCount] = useState(0);

    useEffect(()=>{
        console.log("component render on every count",count);
    });
  return (
    <div>
        <h1>Count :{count}</h1>
        <button
            onClick = {()=>setCount(count+1)}
        >Increment</button>
    </div>
  )
}

export default LoggerComp