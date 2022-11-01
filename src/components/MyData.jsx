
const MyData = ({ info }) =>{
    return (
        <div className="myData">
            <h2>Mis datos personales</h2>
            <img src={info.image} alt=""/>
            <div className="myData-box">
                <p>{info.name}</p>
                <p>{info.lastName}</p>
                <p>{info.city}</p>
                <p>Email: {info.email}</p>
                <p>{info.birthDate}</p>
                <p>GitHub: {info.gitHub}</p>
            </div>
        </div>
    )
}
export default MyData;