import React, { useState } from 'react'
import "./Languages.css"
const Languages = ({languages}) => {
  const[showLanguages, setShowLanguages] = useState(false)
  return (
    <div className='languages'>
        <h3 onClick={()=>setShowLanguages(!showLanguages)}>Languages</h3>
        {showLanguages ?
        <div>
        {languages.map((item)=>{
            return(
                <div key={JSON.stringify(item)}>
                    <p>{item.language}</p>
                    <p>{item.wrlevel}</p>
                    <p>{item.splevel}</p>
                </div>
            )
        })}
        </div> 
        : <div></div>
        
        }
        

    </div>
  )
}

export default Languages