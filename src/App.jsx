import "./App.css";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Facts from "./components/facts/Facts";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Integration from "./components/Integration/Integration";
import Navbar from "./components/navbar/navbar";
import Pricing from "./components/Pricing/Pricing";
import Services from "./components/Services/Services";
import Testimonial from "./components/Testimonial/Testimonial";
import Using from "./components/Using/Using";

function App() {
  return (
    <>
      <Banner>
        <Navbar></Navbar>
      </Banner>
      <Using></Using>
      <Features></Features>
      <Integration></Integration>
      <Services></Services>
      <Facts></Facts>
      <Pricing></Pricing>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
