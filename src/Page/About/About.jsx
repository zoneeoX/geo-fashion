import React from "react";
import Footer from "../../Components/Footer/Footer";
import img from "../../Images/graywoman.jpg";
import "./AboutStyle.css";
const About = () => {
  return (
    <>
      {/* <div>
        <header>
          <section className="w-full h-full text-black">
            <div className=" w-11/12  mx-auto ">
              <div className="grid grid-cols-2  pt-40 gap-y-40 pb-60">
                <div className="flex  flex-col justify-center items-start text-9xl lg:ml-[8vw]">
                  <div className="">BUILDING</div>
                  <div className="">FASHION</div>
                  <div className="">BRANDS</div>
                </div>
                <div></div>
                <div></div>
                <div className="flex  flex-col justify-end text-4xl lg:ml-[15vw]">
                  <div className="">BUILDING</div>
                  <div className="">FASHION</div>
                  <div className="">BRANDS</div>
                </div>
              </div>
            </div>
          </section>
        </header>
      </div> */}
      <div className="wrapper font-josef">
        <header className="header">
          <img src={img} className="background brightness-50" />
          <header>
            <section className="w-full h-full text-white ">
              <div className=" w-11/12  mx-auto ">
                <div className="grid grid-cols-2  pt-40 gap-y-40 pb-60">
                  <div className="flex  flex-col justify-center items-start md:text-9xl lg:ml-[8vw] text-8xl">
                    <div className="">BUILDING</div>
                    <div className="">FASHION</div>
                    <div className="">BRANDS</div>
                  </div>
                  <div></div>
                  <div></div>
                  <div className="flex  flex-col justify-start md:justify-end text-2xl lg:ml-[15vw]">
                    <div className="">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Sint, eos.
                    </div>
                    <div className="">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Sint, eos.
                    </div>
                    <div className="">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Sint, eos.
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </header>
        </header>
        <section className="section"></section>
        <Footer />
      </div>
    </>
  );
};

export default About;
