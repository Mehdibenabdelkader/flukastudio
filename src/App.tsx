import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SocialMedia } from "./components/SocialMedia";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SocialMedia />
      <Hero></Hero>
      <Hero></Hero>
    </div>
  );
}

export default App;
