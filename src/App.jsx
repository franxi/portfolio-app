import {
  NavBar,
  Home,
  About,
  Education,
  Skills,
  // Projects,
  Contact,
} from "./components";
import ScrollToTopButton from "./utils/ScrollToTopButton";
import "./App.css";

function App() {
  return (
    <section>
      <NavBar />
      <Home />
      <About />
      <Education />
      <Skills />
      {/* <Projects /> */}
      <Contact />
      <ScrollToTopButton />
    </section>
  );
}

export default App;
