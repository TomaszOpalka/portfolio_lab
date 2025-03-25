import Header from "../../jsx/Header.jsx";
import Contact from "../Contact.jsx";
import LoginHero from "./LoginHero.jsx";
import MultiStepForm from "./MultiStepForm.jsx";


function OddajRzeczy() {
  return (
    <div className="oddaj-rzeczy">
      <div className="oddaj-rzeczy-hero"></div>
      <Header />
      <LoginHero />
      <MultiStepForm />
      <Contact />
    </div>
  );
}

export default OddajRzeczy;
