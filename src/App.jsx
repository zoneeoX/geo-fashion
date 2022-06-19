import { BrowserRouter as Routers, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Page/About/About";
import Contacts from "./Page/Contacts";
import Gallery from "./Page/Gallery";
import Home from "./Page/Home";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Geo from "./Images/geo.png";

function App() {
  const [loading, setLoading] = useState(false);
  const [joke, setJoke] = useState("");

  const candaanApi = async () => {
    const option = {
      url: "https://candaan-api.vercel.app/api/text/random",
    };

    try {
      await axios.request(option).then((data) => {
        const response = data;
        setJoke(response.data.data);
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    setLoading(true);
    candaanApi();

    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="w-screen h-screen flex justify-center items-center text-center fixed z-50"
            initial={{y: '-100vw'}}
            animate={{ y: 0 }}
            exit={{ y: "200vw" }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="bg-rose-400 w-screen h-screen"
              initial={{ y: "-100vw" }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                className="bg-blue-400 w-screen h-screen"
                initial={{ y: "-100vw" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.5 }}
              >
                <motion.div
                  className="bg-orange-400 w-screen h-screen"
                  initial={{ y: "-100vw" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 2 }}
                >
                  <motion.div
                    className="bg-amber-900 w-screen h-screen flex justify-center items-center flex-col"
                    initial={{ y: "-100vw" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 2.5 }}
                  >
                    <img src={Geo} alt='geologo' className="w-40" />
                    <h2 className="text-white text-lg md:text-2xl font-josef w-[30vw]">{joke}</h2>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Routers>
        <Navbar />
        <Routes>
          {!loading && <Route path="/" element={<Home />} />}
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Routers>
    </>
  );
}

export default App;
