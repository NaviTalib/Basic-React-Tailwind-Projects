import React,{useState} from 'react'

const ControlledForm = () => {
    const [email,setEmail] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Submitted",email);
    };
  return (
    <form onSubmit={handleSubmit}>
        <input 
        type="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}  />
        <button type="submit">Submit</button>
    </form>
  )
}

export default ControlledForm