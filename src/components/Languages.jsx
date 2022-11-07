import React, { useState } from 'react'
import "./Languages.css"
import { FaLanguage } from 'react-icons/fa'
const Languages = ({languages}) => {
  const[showLanguages, setShowLanguages] = useState(false)
  return (
    <div className='languages'>
        <h3 onClick={()=>setShowLanguages(!showLanguages)}><FaLanguage/> Languages</h3>
        {showLanguages ?
        <div className="cont-style">
        {languages.map((item)=>{
            return(
                <div className='info' key={JSON.stringify(item)}>
                <div>
                    <p>Idioma: {item.language}</p>
                    <p>Nivel Escrito: {item.wrlevel}</p>
                    <p>Nivel Hablado: {item.splevel}</p>
                </div>
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