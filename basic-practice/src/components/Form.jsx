import React,{useState} from 'react'

const Form = () => {

    const [name,setName] = useState("");

  return (
    <div>
        <input type="text" value={name} 
            onChange = {(e) => setName(e.target.value)}
        />
        <h2>Hello, {name}</h2>
    </div>
  )
}

export default Form