import React,{useState, useEffect} from 'react'

const ResizeComp = () => {
    const [windowWidth,setWindowWith] = useState(window.innerWidth);

    useEffect(()=>{
        const handleResize = () => setWindowWith(window.innerWidth);

        window.addEventListener('resize',handleResize);

        return () =>{
            window.removeEventListener('resize',handleResize);
        };
    },[]);

  return (
    <div>
        <h1>Window width :{windowWidth} px</h1>
    </div>
  )
}

export default ResizeComp