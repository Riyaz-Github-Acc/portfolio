import { BrowserRouter } from "react-router-dom";

import {
  Navbar,
  Hero,
  About,
  Tech,
  Works,
  Experience,
  Contact,
} from "./components";
import Certificates from "./components/Certificates";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Works />
        {/* <Certificates /> */}
        <Experience />
        <Tech />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
