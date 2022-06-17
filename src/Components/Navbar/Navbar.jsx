import React, { useState } from "react";
import { BiMenuAltRight, BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import image1 from "../../Images/img1.jpg";
import image2 from "../../Images/img2.jpg";
import image3 from "../../Images/img3.jpg";
import image4 from "../../Images/pariswoman.jpg"

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [image, setImage] = useState("");

  function delayNav() {
    setTimeout(() => {
      setOpenNav(!openNav);
    }, 0);
  }

  return (
   
      <div
        className={
          openNav
            ? "fixed flex flex-row justify-between w-screen h-screen px-6 py-1 text-white text-xl z-20 overflow-hidden"
            : "fixed flex flex-row items-center justify-between w-screen h-16 px-6 text-white z-20 text-xl"
        }
      >
        <h1
          className={
            openNav ? "text-4xl font-paci z-50" : "text-4xl font-paci z-50"
          }
        >
          GEO
        </h1>
        <AnimatePresence>
          {openNav ? (
            <motion.div
              className="absolute top-0"
              initial={{ x: 2000 }}
              animate={{ x: 0 }}
              exit={{ x: 2000 }}
              transition={{ stiffness: 300, duration: 1 }}
            >
              <motion.img
                src={image || image2}
                className="absolute min-w-[1000px] -left-[200px] -scale-x-[100%]"
              />
            </motion.div>
          ) : (
            ""
          )}
        </AnimatePresence>
        <div className="z-10 flex flex-col">
          <motion.i
            className="text-4xl -z-10 transition duration-200 flex flex-row items-center group"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              ""
            ) : (
              <>
                {" "}
                <p className="text-xl mb-1">Menu</p>{" "}
                <BiMenu className="group-hover:rotate-90 transition duration-200" />
              </>
            )}
          </motion.i>

          <AnimatePresence>
            {openNav ? (
              <motion.div
                className="absolute right-0 top-0 h-screen w-screen md:w-2/4 bg-slate-800 md:before:absolute md:before:z-10 md:before:bg-slate-900 md:before:w-[30%] md:before:h-screen md:before:-skew-x-6 md:before:right-[80%]"
                initial={{ x: 900 }}
                animate={{ x: 0 }}
                exit={{ x: 900 }}
                transition={{ stiffness: 300, duration: 0.8 }}
              >
                <div className="text-6xl text-white flex justify-center md:ml-[10vw] items-center">
                  <ul className="text-white flex flex-col justify-center items-center gap-4 md:gap-4 mt-[2vw] font-josef h-screen">
                    <li
                      className="relative -top-[2vw] mx-[12vw] md:left-[7vw] group flex flex-row items-center gap-2"
                      onClick={() => setOpenNav(!openNav)}
                    >
                      <p className="text-xl transition duration-200">Close</p>
                      <p className="text-2xl group-hover:rotate-180 rotate-90 duration-200 transition">
                        <AiOutlineClose />
                      </p>
                    </li>
                    <Link to="/">
                      <li
                        className="hover:text-black/70 transition duration-200"
                        onMouseOver={() => setImage(image1)}
                        onClick={() => setOpenNav(!openNav)}
                      >
                        Home
                      </li>
                    </Link>
                    <Link to="/gallery">
                      <li
                        className="hover:text-black/70 transition duration-200"
                        onMouseOver={() => setImage(image2)}
                        onClick={() => setOpenNav(!openNav)}
                      >
                        Gallery
                      </li>
                    </Link>
                    <Link to="/about">
                      <li
                        className="hover:text-black/70 transition duration-200"
                        onMouseOver={() => setImage(image3)}
                        onClick={() => setOpenNav(!openNav)}
                      >
                        About
                      </li>
                    </Link>
                    <Link to="/contacts">
                      <li
                        className="hover:text-black/70 transition duration-200"
                        onMouseOver={() => setImage(image4)}
                        onClick={() => setOpenNav(!openNav)}
                      >
                        Contacts
                      </li>
                    </Link>
                  </ul>
                </div>
              </motion.div>
            ) : (
              ""
            )}
          </AnimatePresence>
        </div>
      </div>
   
  );
};

export default Navbar;
