import "./MyData.css";
import{FaUserAlt, FaMapMarkerAlt, FaEnvelope, FaCalendarAlt, FaPhoneAlt, FaGithub,FaLinkedin} from 'react-icons/fa'

const MyData = ({ info }) =>{
    return (
        <div className="myData">
            <h2>Mis datos personales</h2>
            <img src={info.image} alt=""/>
            <div className="myData-box">
                <p><FaUserAlt/> {info.name} {info.lastName}</p>
                <p><FaMapMarkerAlt/> {info.city}</p>
                <p><FaCalendarAlt/>{info.birthDate}</p>
                <h3>Contacto</h3>
                <p><FaEnvelope/> {info.email}</p>
                <p><FaPhoneAlt/> {info.tlf}</p>
                <p><FaGithub/><a href={info.gitHub}>GitHub</a></p>
                <p><FaLinkedin/><a href={info.linkedin}>Linkedin</a></p>
            </div>
        </div>
    )
}
export default MyData;