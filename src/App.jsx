import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Section2 from "./Components/Section2";
import About from "./Components/About";
import OurWorkProcess from "./Components/OurWorkProcess";
import Stats from "./Components/Stats";
const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Section2 />
        <About />
        <OurWorkProcess />
        <Stats />
      </main>
    </>
  );
};

export default App;
