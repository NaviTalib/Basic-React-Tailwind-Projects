import React,{useState, useEffect} from 'react'

const TimerComp = () => {
    const [seconds,setSeconds] = useState(0);

    useEffect(()=>{
        const intervalId = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds+1);
            console.log('setInterval executed');
        }, 1000);

        return () =>{
            console.log("time to stop");
            clearInterval(intervalId);
        }
    },[])
  return (
    <div>
        <h1>Seconds : {seconds}</h1>
    </div>
  )
}

export default TimerComp