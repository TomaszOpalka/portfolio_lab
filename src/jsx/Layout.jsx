import "react";
// import Header from "./Header.jsx";
// import Header from "../jsx/Header.jsx";
import Header from "@jsx/Header";
import Hero from "./Hero.jsx";
import Statistic from "./Statistic.jsx";
import Steps from "./Steps.jsx";
import AboutUs from "./Aboutus.jsx";
import WhoWeHelp from "./Whowehelp.jsx";
import Contact from "./Contact.jsx";

function Layout() {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <Statistic />
        <Steps />
        <AboutUs />
        <WhoWeHelp />
        <Contact />
      </div>
    </>
  );
}

export default Layout;
