import AboutMe from "./Components/AboutMe";
import Education from "./Components/Education";
import Header from "./Components/Header";
import IntroductionProfile from "./Components/IntroductionProfile";

function App() {
  return (
    <div className="App">
      <Header />
      <IntroductionProfile />
      <AboutMe />
      <Education />
    </div>
  );
}

export default App;
