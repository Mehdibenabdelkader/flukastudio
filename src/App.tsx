import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SocialMedia } from "./components/SocialMedia";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SocialMedia />
      <Hero></Hero>
      <Services></Services>
      <Projects></Projects>
    </div>
  );
}

export default App;
