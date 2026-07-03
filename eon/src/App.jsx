import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";

import Hero from "./components/sections/Hero/Hero";
import Manifesto from "./components/sections/Manifesto/Manifesto";
import Pillars from "./components/sections/Pillars/Pillars";
import Availability from "./components/sections/Availability/Availability";
import Join from "./components/sections/Join/Join";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Manifesto />
        <Pillars />
        <Availability />
        <Join />
      </main>

      <Footer />
    </>
  );
}

export default App;
