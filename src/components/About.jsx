// import { useState } from "react";
// import "./About.css";

// import {FaInfoCircle} from 'react-icons/fa'
// import { useNavigate } from "react-router-dom";
// const About = ({ aboutMe }) => {
//   const [showAbout, setShowAbout] = useState(true);
//   const navigate = useNavigate();
//   return (
//     <div className="about">
//       <h3 onClick={() => setShowAbout(!showAbout)}><FaInfoCircle/></h3>
//       {showAbout ? (
//         <div className="cont-style">
//           {aboutMe.map((item) => {
//             return (
//               <div className="info" key={JSON.stringify(item)}>
//                 <p>{item.info}</p>
//               </div>
//             );
//           })}
//           <button onClick={()=>navigate('/')}>Back to Home</button>
//         </div>
//       ) : (
//         <div></div>
//       )}
//     </div>
//   );
// };

// export default About;
