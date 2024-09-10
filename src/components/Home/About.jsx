import { useEffect, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

import bg1 from '/src/assets/images/icon/engineer.png'
import bg2 from '/src/assets/images/icon/settings.png'
import bg3 from '/src/assets/images/icon/phone-call.png'
import bg4 from '/src/assets/images/home/image-banner.jpg'
import bg5 from '/src/assets/images/icon/image-cile.png'

export default function HomeAbout() {
  const [currentNumber, setCurrentNumver] = useState(false);

  const rotateText = " BestBusinessPerformanceAssessment";
  const SplitText = rotateText.split("");

  return (
    <>
      <div className="mt-[100px] px-[10%] flex gap-10">
        <div className="w-1/2 relative">
          <h4 className="text-white text-[110px] font-bold font-outline-2 absolute -z-10 top-[-40px] left-[-65px]">
            Assessments
          </h4>
          <p className="text-[#FA4318] text-lg font-bold mb-5">
            About our Company
          </p>
          <h1 className="text-5xl font-bold">
            Build a more competitive business sectors.
          </h1>
          <p className="h-[2px] w-[60px] bg-[#FA4318] mt-2 rounded-md"></p>
          <p className="mt-10 pr-[10%] text-lg">
            Our team of engineers and tecnicians are professionally trained by
            the Firm. In parallel with the repair 7 maintenance of pumps on the
            floating vehicals, we are truly reliable pump doctors.
          </p>
          <div className="grid grid-cols-2 gap-10 py-8 border-b">
            <div className="flex items-center gap-3">
              <img src={bg1} alt="" />
              <h3 className="text-2xl font-bold">Strengthening society</h3>
            </div>
            <div className="flex items-center gap-3">
              <img src={bg2} alt="" />
              <h3 className="text-2xl font-bold">Driving the economy</h3>
            </div>
          </div>
          <div className="flex items-center gap-10 mt-8">
            <button className="font-bold text-lg text-white bg-[#FA4318] flex gap-3 items-center justify-center h-[55px] w-[200px] rounded uppercase hover:bg-black duration-500 ease-in-out">
              About Us
              <i className="fa-solid fa-chevron-right text-sm"></i>
            </button>
            <div className="flex items-center gap-3">
              <div className="size-[55px] rounded-full bg-[#e6e6e6] flex items-center justify-center animate-pulse">
                <img
                  src={ bg3}
                  alt=""
                  className="size-[25px]"
                />
              </div>
              <div>
                <p className="">Call us for help!</p>
                <p className="text-lg font-semibold">+(888) 452 1505</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <ScrollTrigger
            onEnter={() => setCurrentNumver(true)}
            onExit={() => setCurrentNumver(false)}
          >
            <div className="flex gap-10 mb-10 w-[75%] mx-auto">
              <div>
                <h2 className="primary-color text-5xl font-semibold text-center flex items-center">
                  {currentNumber && (
                    <CountUp start={0} end={3010} duration={1.5}></CountUp>
                  )}

                  <span className="text-3xl font-bold">+</span>
                </h2>
                <p className="text-xl font-bold text-center pt-2">
                  Satisfied Clients
                </p>
              </div>
              <div>
                <h2 className="primary-color text-5xl font-semibold text-center flex items-center">
                  {currentNumber && (
                    <CountUp start={0} end={528} duration={1.5}></CountUp>
                  )}

                  <span className="text-3xl font-bold">+</span>
                </h2>
                <p className="text-xl font-bold text-center pt-2">
                  Active Projects
                </p>
              </div>
            </div>
          </ScrollTrigger>

          <div className="size-[75%] relative mx-auto">
            <div className="absolute top-[-25px] left-[-25px] z-10">
              <div className="size-[200px] rounded-full relative spin">
                {SplitText.map((content, index) => (
                  <p
                    key={index}
                    style={{ transform: `rotate(${index * 10.7}deg)` }}
                    className="spinText"
                  >
                    {content}
                  </p>
                ))}
              </div>
            </div>
            <div className="size-[100%] relative overflow-hidden rounded-3xl">
              <div className="relative">
                <img
                  src={ bg5}
                  alt=""
                  className="absolute top-[-50px] left-[-50px] size-[250px] spin"
                />
              </div>

              <img
                src={ bg4}
                alt=""
                className="size-full aspect-square object-cover"
              />
              <img
                src={bg5}
                alt=""
                className="absolute bottom-[-150px] right-[-150px] size-[400px] spin"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
