import "./App.css";
import CV from "./utils/CV";
import MyData from "./components/MyData";
import About from "./components/About";


const App = () => {
  const { myData } = CV;

  return (
    <div className="app">
      <nav className="nav-bar">
      </nav>
      <aside className="aside">
        <section>
          <MyData info={myData} />
        </section>
        <section>
          <About aboutMe={myData.aboutMe} />
        </section>
      </aside>
      <main>
        
      </main>
    </div>
  );
};

export default App;
