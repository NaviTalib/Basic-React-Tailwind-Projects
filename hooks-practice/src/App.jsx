import React, { useEffect, useState } from 'react'
import LoggerComp from './components/LoggerComp'
import TimerComp from './components/TimerComp'
import DataFetcher from './components/DataFetcher'
import ResizeComp from './components/ResizeComp'
import MultiEffectComp from './components/MultiEffectComp'
import ChildA from './components/ChildA'

import {createContext} from 'react';

// step 1 : create context
const UserContext = createContext();

// step 2 : wrap all the child inside a provider

// step 3 : pass the value

// step 4 : consumer k andar jakar consume krlo


const App = () => {

  const [user,setUser] = useState({name : "Talib"})

  // const [count, setCount] = useState(0);
  // const [total,setTotal] = useState(1);
  // variation 1 : runs on every render
  // useEffect(() => {
  //   alert("i will run on every render")
  // })

  // variation 2 : run once

  // useEffect(() => {
  //     alert("i will run only first render")
  // }, [])
  
  // variation 3 : On dependency change

  // useEffect(() => {
  //     alert("i will run evry time when count update")
  // }, [count])

  // variation 4 : Multiple dependecies

  // useEffect(() => {
  //   alert("i will run every time when count/total updated")
  // }, [count,total])
  

  // variation 5 : add cleanup function

  // useEffect(() => {
  //   alert("count is updated")
  
  //   return () => {
  //     alert("count is unmount from UI")
  //   }
  // }, [count])
  

  // function handleClick() {
  //   setCount(count + 1);
  // }

  // function handleClickTotal(){
  //       setTotal(total+1);

  // }


  return (
    <div>
      <UserContext.Provider value={user} >
              <ChildA />
      </UserContext.Provider>

      {/* <LoggerComp /> */}

      {/* <TimerComp /> */}

      {/* <DataFetcher /> */}

      {/* <ResizeComp /> */}

      {/* <MultiEffectComp /> */}
      {/* <button
        onClick={handleClick}
      >Update Count</button>
      <br />
      Count is : {count}
      <br />
      <button
        onClick={handleClickTotal}
      >Update Total</button>
      <br />
      Total is : {total} */}

    </div>

  )
}

export default App
export {UserContext}