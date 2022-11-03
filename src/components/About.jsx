import "./About.css"

const About = ({aboutMe}) => {

  return (
    <div   className='about' >
    <h3>Información sobre mi</h3>
    {aboutMe.map((item)=>{
    return (
        <div key={JSON.stringify(item)}>
            <p>{item.info}</p>
        </div>
    )
    })}
    </div>
  )
}

export default About