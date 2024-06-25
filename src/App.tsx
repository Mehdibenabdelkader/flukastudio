import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SocialMedia } from "./components/SocialMedia";
import { Services } from "./components/Services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SocialMedia />
      <Hero></Hero>
      <Services></Services>
    </div>
  );
}

export default App;
