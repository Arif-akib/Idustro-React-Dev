import { useEffect, useState } from "react";

import img1 from "/src/assets/images/home/bg-slide-home-1.jpg";
import img2 from "/src/assets/images/home/slide-1-2.jpg";
import BannerGrid from "./BannerGrid";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slide = [
    {
      img: img1,
      heading: "The UK's technology trade association",
      sub: "Championing technology's role in preparing and empowering the UK for what comes next, delivering a better future for people, society.",
    },
    {
      img: img2,
      heading: "The UK's technology trade association",
      sub: "Championing technology's role in preparing and empowering the UK for what comes next, delivering a better future for people, society.",
    },
  ];

  const slideLeft = () => {
    setCurrentIndex(currentIndex == 0 ? slide.length - 1 : currentIndex - 1);
  };
  const slideRight = () => {
    setCurrentIndex(currentIndex == slide.length - 1 ? 0 : currentIndex + 1);
  };

  useEffect(() => {
    setTimeout(() => {
      slideRight();
    }, 10000);
  });
  return (
    <>
      <div className="">
        <div className="h-[990px] relative bg-black">
          <div className="">
            {slide.map((image, index) => (
              <img
                src={image.img}
                alt=""
                key={index}
                className={
                  index == currentIndex
                    ? "h-full w-full absolute opacity-100 duration-[2s] z-10"
                    : "h-full w-full absolute opacity-0 duration-[2s] z-10"
                }
              />
            ))}
          </div>
          <div className="absolute z-30 flex flex-col gap-5 right-5 top-[350px]">
            <button
              onClick={slideRight}
              className="size-[50px] bg-white rounded-3xl hover:bg-[#FA4318] group duration-500"
            >
              <i className="fa-solid fa-arrow-right text-xl group-hover:text-white duration-500"></i>
            </button>
            <button
              onClick={slideLeft}
              className="size-[50px] bg-white rounded-3xl hover:bg-[#FA4318] group duration-500"
            >
              <i className="fa-solid fa-arrow-left text-xl group-hover:text-white duration-500"></i>
            </button>
          </div>
          
          <div className="absolute z-20 h-full w-full">
            <div className="min-h-[500px]">
              {slide.map((content, index) => (
                <div key={index} className="text-white relative h-fit">
                  <div className="absolute z-20 top-[150px] space-y-10 w-1/2 pl-[10%]">
                    <h1
                      className={
                        index == currentIndex
                          ? "text-6xl font-bold translate-y-0 duration-1000 delay-1000 opacity-100 ease-linear"
                          : "text-6xl font-bold -translate-y-[100%] opacity-0"
                      }
                    >
                      {content.heading}
                    </h1>
                    <h2
                      className={
                        index == currentIndex
                          ? "text-lg translate-y-0 delay-500 duration-1000 opacity-100 ease-linear"
                          : "text-lg -translate-y-[400%] opacity-0"
                      }
                    >
                      {content.sub}
                    </h2>
                    <button
                      className={
                        index == currentIndex
                          ? "font-bold text-lg text-white bg-[#FA4318] flex gap-3 items-center justify-center h-[55px] w-[200px] rounded uppercase translate-y-0 duration-1000 delay-100 opacity-100 ease-linear"
                          : "font-bold text-lg text-white bg-[#FA4318] flex gap-3 items-center justify-center h-[55px] w-[200px] rounded uppercase -translate-y-[600%] opacity-0"
                      }
                    >
                      Our Services{" "}
                      <i className="fa-solid fa-chevron-right text-sm"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
           <BannerGrid />
          </div>
        </div>
      </div>
    </>
  );
}
