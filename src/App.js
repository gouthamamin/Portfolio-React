import AboutMe from "./Components/AboutMe";
import ContactMe from "./Components/ContactMe";
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
      <ContactMe />
    </div>
  );
}

export default App;
