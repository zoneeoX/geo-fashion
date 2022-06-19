import React from "react";
import { motion } from "framer-motion";
import Footer from "../Components/Footer/Footer";
import Summary from "../Components/Summary/Summary";
import Sun from "../Images/sunglasses.jpg";
import { useNavigate } from "react-router-dom";

function Home() {
  const toGallery = useNavigate();

  
  return (
    <>
        <div>
          <img
            src={Sun}
            alt="gambar"
            className="w-screen h-screen object-center object-cover -z-10 fixed brightness-50"
          />
          <div className="w-screen h-screen flex items-center">
            <motion.div
              className="mx-[16vw] flex gap-6 flex-col"
              initial={{ x: "-5vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.3 }}
            >
              <h1 className="sm:text-8xl text-6xl text-white font-paci flex flex-col w-40 gap-6">
                Fashion Your Clothing
              </h1>
              <motion.h2 className="text-white font-josef sm:text-2xl text-lg sm:w-72 w-50">
                Wear something new, feels like brand new,
                <span className="text-amber-600 font-bold"> Geo</span> got it
                all for you.
              </motion.h2>
              <button
                className="bg-amber-600 hover:bg-amber-700 transition duration-200 font-josef rounded-full text-white px-4 py-1 text-xl w-fit"
                onClick={() => toGallery("/gallery")}
              >
                Explore Gallery
              </button>
            </motion.div>
          </div>
          <Summary />
          <Footer />
        </div>
    </>
  );
}

export default Home;
