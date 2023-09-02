import {
  NavBar,
  Home,
  About,
  Education,
  Skills,
  Projects,
  Contact
} from "./components";
import "./App.css";

function App() {
  return (
    <section>
      <NavBar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </section>
  );
}

export default App;
