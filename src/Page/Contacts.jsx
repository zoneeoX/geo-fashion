import React from "react";
import img from "../Images/pariswoman.jpg"
import Marquee from "react-fast-marquee";
import Footer from "../Components/Footer/Footer";

function Contacts() {
  return (
    <>
      <div className="h-screen w-screen font-josef grid xl:grid-cols-2 gap-x-40 grid-cols-1  bg-slate-900 text-white -z-50 overflow-hidden">
        <header className="   py-[1vw]  ml-[8vw] grid grid-rows-2 ">
          <h1 className="text-6xl self-end">Get in touch</h1>
          <ul className="grid sm:grid-cols-2  grid-rows-2 grid-cols-1">
            <li className="">
              <h1 className="text-2xl">Cilegon</h1>
              <div>
                T +61 3 9938 6666 486 <br /> Swan St,
                <br /> Richmond VIC, 3121
              </div>
            </li>
            <li className="">
              <h1 className="text-2xl">Bandung</h1>
              <div>
                T +61 3 9938 6666 486 <br /> Swan St,
                <br /> Richmond VIC, 3121
              </div>
            </li>
          </ul>
        </header>
        <img src={img} alt="" className="z-10 xl:block  hidden brightness-75" />
      </div>
      <Footer/>
    </>
  );
}

export default Contacts;
