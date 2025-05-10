import "./App.css";
import Banner from "./components/Banner/Banner";
import Features from "./components/Features/Features";
import Integration from "./components/Integration/Integration";
import Navbar from "./components/navbar/navbar";
import Services from "./components/Services/Services";
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
    </>
  );
}

export default App;
