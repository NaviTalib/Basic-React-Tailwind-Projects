import React from 'react'

const Student = ({name,age,skills,city,isWorking}) => {
  return (
    <div>
        <h2>Hello {name}</h2>
        <p><strong>Age:</strong> {age}</p>
        <p><strong>City:</strong> {city}</p>
        <p><strong>isWorking:</strong> {isWorking ? "Working":"NO"}</p>
        <h3>Skills</h3>
        <div>
          {
            skills.map((skill)=>(
              <p key={skill}>{skill}</p>
            ))
          }
        </div>
    </div>
    
  )
}

export default Student