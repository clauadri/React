import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";
import "./Contact.css";
export const Contact = () => {
  const navigate = useNavigate();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g5udyau",
        "template_vfmggzr",
        e.target,
        "78a5yQYIk0QckgXXE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={sendEmail}>
        <div className="form">
          <label>Nombre</label>
          <input type="text" name="user_name" placeholder="Nombre" />
        </div>
        <div className="form">
          <label>Email</label>
          <input type="email" name="user_email" placeholder="Email" />
        </div>
        <div className="form">
          <label>Asunto</label>
          <input type="text" name="subject" placeholder="Asunto" />
        </div>
        <div className="form">
          <label>Message</label>
          <textarea name="message" placeholder="Mensaje" />
        </div>
        <div className="form">
          <input type="submit" value="Send"  className="send"/>
        </div>
        <button onClick={() => navigate("/")}>Volver al inicio</button>
      </form>
    </div>
  );
};
