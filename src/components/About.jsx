

const About = ({aboutMe}) => {

  return (
    <div>
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