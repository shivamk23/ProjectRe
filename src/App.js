import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";

import AboutUs from "./components/AboutUs";

import "./App.css";
import OurProjects from "./components/OurProjects";

const App = () => {
  return (
    <div>
      <AboutUs />
      <OurProjects />
    </div>
  );
};

export default App;
