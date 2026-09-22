import React, {useState, memo} from 'react'

// // Re-renders every time Parent updates, even if 'name' doesn't change
// function ExpensiveChild({name}){
//     console.log('Child re - rendered');
//     return <h2>Hello, {name}</h2>
// }

// Wrapped in memo
const ExpensiveChild = memo(function ExpensiveChild({ name }) {
  console.log('Child re-rendered!'); // Only logs on initial render
  return <h3>Hello, {name}</h3>;
});

const Parent = () => {
    const [count,setCount] = useState(0);
  return (
    <div>
        <button onClick = {()=> setCount(count+1)}>Increment : {count}</button>
        <ExpensiveChild name="Samsung" />
    </div>
  )
}

export default Parent