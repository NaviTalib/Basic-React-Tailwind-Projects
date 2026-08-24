import React from 'react'

const Button = ({name,onSelect}) => {
  return (
    <button onClick={()=> onSelect(name)}>Click Me</button>
  )
}

export default Button