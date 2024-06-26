import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SocialMedia } from "./components/SocialMedia";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Testimonials } from "./components/Testimonials";
import { CallToAction } from "./components/CallToAction";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SocialMedia />
      <Hero></Hero>
      <Services></Services>
      <Projects></Projects>
      <Testimonials></Testimonials>
      <CallToAction></CallToAction>
    </div>
  );
}

export default App;
