// Layout
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";

// Navigation
import SideNavigation from "./components/navigation/SideNavigation/SideNavigation";

// Sections
import Hero from "./components/sections/Hero/Hero";
import Manifesto from "./components/sections/Manifesto/Manifesto";
import Pillars from "./components/sections/Pillars/Pillars";
import Availability from "./components/sections/Availability/Availability";
import Join from "./components/sections/Join/Join";

function App() {
  return (
    <>
      <Header />
      <SideNavigation />

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
