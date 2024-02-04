import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home"
import AboutUs from "./components/AboutUs";
import Connect from "./components/Connect"
import "./App.css";
import OurProjects from "./components/OurProjects";
import Navbar from "./components/Navbar/Navbar";
import Process from "./components/Process";
import Innovator from "./components/Innovator";
import Footer from "./components/Footer";
import Clients from "./components/Clients"


const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Connect/>
      <AboutUs />
      <OurProjects />
      <Process/>
      <Innovator/>
      <Clients/>
      <Footer/>
    </div>
  );
};

export default App;
