import "./App.css";
import { CV } from "./utils/CV";
import MyData from "./components/MyData";
import About from "./components/About";
import "./components/MyData.css";

const App = () => {
  const { myData } = CV;

  return (
    <div className="App">
      <nav></nav>
      <main className="Main">
        <section className="Data">
          <MyData info={myData} />
        </section>
        <section className="About">
          <About aboutMe={myData.aboutMe} />
        </section>
      </main>
    </div>
  );
};

export default App;
