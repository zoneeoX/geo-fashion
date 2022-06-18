import { BrowserRouter as Routers, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Page/About/About";
import Contacts from "./Page/Contacts";
import Gallery from "./Page/Gallery";
import Home from "./Page/Home";

function App() {
  return (
    <>
      <Routers>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Routers>
    </>
  );
}

export default App;
