import AboutMe from "./Components/AboutMe";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Header from "./Components/Header";
import IntroductionProfile from "./Components/IntroductionProfile";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <IntroductionProfile />
      <AboutMe />
      <Education />
      <Skills />
      <Experience />
    </div>
  );
}

export default App;
