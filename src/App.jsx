import "./App.css";
import CV from "./utils/CV";
import MyData from "./components/MyData";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Languages from "./components/Languages";
import Habilities from "./components/Habilities";


const { myData, education, experience, languages, habilities } = CV;
const App = () => {
  return (
    <div className="app">
      <div className="container">
        <aside className="aside">
          <section>
            <MyData info={myData} />
          </section>
          <section>
            <About aboutMe={myData.aboutMe} />
          </section>
        </aside>
        <main className="main">
          <nav className="nav">
            <div className="div-nav">
              <section>
                <Education education={education} />
              </section>
              <section>
                <Experience experience={experience} />
              </section>
              <section>
                <Languages languages={languages} />
              </section>
              <section>
                <Habilities habilities={habilities} />
              </section>
            </div>
          </nav>
        </main>
      </div>
    </div>
  );
};

export default App;
