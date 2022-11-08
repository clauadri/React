import "./App.css";
import CV from "./utils/CV";
import MyData from "./components/MyData";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Languages from "./components/Languages";
import Habilities from "./components/Habilities";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const { myData, education, experience, languages, habilities } = CV;
const App = () => {
  return (
    <div className="app">
      <div className="container">
        <aside className="aside">
          <MyData info={myData} />
        </aside>
        <main className="main">
          <div>
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={<Home aboutMe={myData.aboutMe} />}
              ></Route>
              <Route
                path="education"
                element={<Education education={education} />}
              ></Route>
              <Route
                path="experience"
                element={<Experience experience={experience} />}
              ></Route>
              <Route
                path="languages"
                element={<Languages languages={languages} />}
              ></Route>
              <Route
                path="habilities"
                element={<Habilities habilities={habilities} />}
              ></Route>
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
