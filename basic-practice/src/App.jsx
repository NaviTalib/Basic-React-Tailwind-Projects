import React from 'react'
import Student from './components/Student'
import Button from './components/Button'
import Counter from './components/Counter'
import Form from './components/Form'
import ControlledForm from './components/ControlledForm'

const App = () => {
  const skills = ['html', 'css', 'js']

  function handleClicked(name) {
    alert(`hello ${name}`)
  }

  function Greeting({ isLoggedIn }) {
    if (isLoggedIn) {
      return <h1>Hello, Navi Talib</h1>
    }

    return <h1>Please loggin first.</h1>
  }

  function  UserStatus({isOnline}) {

    return(
      <div>
        {isOnline ? ( 
          <span>Online</span>):(
            <span>Offline</span>
          )}
      </div>
    )
    
  }

  return (
    <div>
      {/* <Student name="Talib" age={28} city="Noida" isWorking="true" skills={skills}/>
      <Button onSelect={handleClicked} name="Talib" /> */}
      {/* <Counter /> */}
      {/* <Form /> */}
      <Greeting isLoggedIn={true} />
      <UserStatus isOnline = {true} />
      <ControlledForm />

    </div>
  )
}

export default App