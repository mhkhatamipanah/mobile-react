import "./App.scss";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navmobile from "../Nav-mobile/Navmobile";
import Home from "../Home/Home";
import About from "../About/About";
import Portfilo from "../Portfilo/Cards/Portfilo";
import Zero from "../Portfilo/oneCard/Zero"
import Onecard from "../Portfilo/oneCard/Onecard";
import Twocard from "../Portfilo/oneCard/Twocard"
import Three from "../Portfilo/oneCard/Three"
import Four from "../Portfilo/oneCard/Four"
import Five from "../Portfilo/oneCard/Five"
import Six from "../Portfilo/oneCard/Six"
import Seven from "../Portfilo/oneCard/Seven"
import Eight from "../Portfilo/oneCard/Eight"
import Nine from "../Portfilo/oneCard/Nine"
import Ten from "../Portfilo/oneCard/Ten"
import ShowPortfilo from "../Portfilo/ShowPortfilo";
import Contact from "../Contact/Contact";
import CircleProgress from "../About/circle/CircleProgress";
import LinearProgressBar from "../About/linear/LinearProgressBar";






function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="linear" element={<LinearProgressBar />} />
          <Route path="" element={<LinearProgressBar />} />
          <Route path="circle" element={<CircleProgress />} />
        </Route>
        <Route path="/portfilo" element={<ShowPortfilo />}>
          <Route path="" element={<Portfilo />} />
          <Route path="0" element={<Zero />} />
          <Route path="1" element={<Onecard />} />
          <Route path="2" element={<Twocard />} />
          <Route path="3" element={<Three />} />
          <Route path="4" element={<Four />} />
          <Route path="5" element={<Five />} />
          <Route path="6" element={<Six />} />
          <Route path="7" element={<Seven />} />
          <Route path="8" element={<Eight />} />
          <Route path="9" element={<Nine />} />
          <Route path="10" element={<Ten />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div className="app">
        <Navmobile />
      </div>
    </Router>
  );
}

export default App;
