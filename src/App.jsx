import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/navbar/navbar";
import Using from "./components/Using/Using";


function App() {
  return (
    <>
      <Banner>
        <Navbar></Navbar>
      </Banner>
      <Using></Using>
    </>
  );
}

export default App;
