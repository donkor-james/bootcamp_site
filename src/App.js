import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Options from "./components/Options";
import Fundamentals from "./components/Fundamentals";
import Learn from "./components/Learn";
import Questions from "./components/Questions";
import Instructors from "./components/Instructors";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Options />
      <Fundamentals />
      <Learn />
      <Questions />
      <Instructors />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
