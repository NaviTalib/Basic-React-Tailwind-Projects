import React from 'react'
import Student from './components/Student'
import Button from './components/Button'
import Counter from './components/Counter'
import Form from './components/Form'

const App = () => {
    const skills = ["html","css","js"];
    function handleClicked(name) {
      alert(`hello ${name}`);
      
    }
  return (
    <div>
      {/* <Student name="Talib" age={28} city="Noida" isWorking="true" skills={skills}/>
      <Button onSelect={handleClicked} name="Talib" /> */}
      {/* <Counter /> */}
      <Form />

    </div>
  )
}

export default App