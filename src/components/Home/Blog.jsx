import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";

import b1 from "/src/assets/images/blog/img-33.jpg";
import b2 from "/src/assets/images/blog/image-23.jpg";
import b3 from "/src/assets/images/blog/chemical_22.jpg";
import b4 from "/src/assets/images/blog/image-22.jpg";
import b5 from "/src/assets/images/blog/team-15-400x400.jpg";
import b6 from "/src/assets/images/blog/service-image-single-2-370x220.jpg";

export default function HomeBlog() {
  const swiperRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideLeft = () => {
    swiperRef.current.slidePrev();
    setCurrentIndex(currentIndex == 0 ? contents.length - 1 : currentIndex - 1);
  };
  const slideRight = () => {
    swiperRef.current.slideNext();
    setCurrentIndex(currentIndex == contents.length - 1 ? 0 : currentIndex + 1);
  };
  const contents = [
    {
          bg: b1,
        type:"industry",
      heading: "Utilization of Titanimun In Industries",
      writer: "David parker",
          date: "04 Jan 2022",
            date2:"4TH Jan'2022",
      text: "The Supply from the standard in addition to customized",
      },
      {
          bg: b2,
          type:"industry",
        heading: "The Role Of The CNC Machine Operator",
        writer: "David parker",
            date: "29 Dec 2021",
              date2:"29TH Dec'2021",
        text: "The Supply from the standard in addition to customized",
      },
      {
          bg: b3,
          type:"factory",
        heading: "The various Industries That Take advantage",
        writer: "David parker",
            date: "29 Dec 2021",
              date2:"29TH Dec'2021",
        text: "The Supply from the standard in addition to customized",
      },
      {
          bg: b4,
          type:"factory",
        heading: "construction Industry Heading Upwrite Using",
        writer: "David parker",
            date: "29 Dec 2021",
              date2:"29TH Dec'2021",
        text: "The Supply from the standard in addition to customized",
      },
      {
          bg: b5,
          type:"Construction",
        heading: "Key headlines for the best pharmaceutical",
        writer: "David parker",
            date: "11 Nov 2021",
              date2:"11TH Nov'2021",
        text: "The Supply from the standard in addition to customized",
      },
      {
          bg: b6,
          type:"factory",
        heading: "Optimise and improve their capabilities",
        writer: "David parker",
            date: "11 nov 2021",
              date2:"11TH Nov'2021",
        text: "The Supply from the standard in addition to customized",
      },
  ];
  return (
    <>
          <div className="pb-16 bg-gray-100 relative">
              <img src="/src/assets/images/background/img-vector1.png" alt="" className="absolute top-10 left-0"/>
              <img src="/src/assets/images/background/vt-5.png" alt="" className="absolute top-10 right-0"/>
              <img src="/src/assets/images/background/ite-vector-left.png" alt="" className="absolute bottom-0 left-0"/>
        <div className="flex justify-between items-end pt-[100px] pb-5 px-[10%] z-10 relative">
          <div className="relative flex flex-col">
            <p className="text-[#FA4318] text-lg font-bold mb-[-70px] z-20">
              Latest blog
            </p>
            <h4 className="text-transparent text-[110px] font-bold font-outline-2 z-10 -ml-16">
              Blog
            </h4>
            <h1 className="text-5xl font-bold mt-[-70px] z-20">
              Learn something from blog
            </h1>
            <p className="h-[2px] w-[60px] bg-[#FA4318] rounded-md mt-5 z-20"></p>
          </div>
          <div className="flex gap-3 items-center justify-center">
            <button onClick={slideLeft} className="hover:primary-color">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
              >
                <path d="M12 13V20L4 12L12 4V11H20V13H12Z"></path>
              </svg>
            </button>
            <div className="font-semibold flex gap-2">
              {contents.map((content, index) => (
                <p
                  key={index}
                  className={index == currentIndex ? "primary-color" : ""}
                >
                  <span>{index <= 9 ? 0 : ""}</span>
                  {index + 1}
                  <span> {index < contents.length - 1 ? "/" : ""}</span>
                </p>
              ))}
            </div>
            <button onClick={slideRight} className="hover:primary-color">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
              >
                <path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="px-[10%]  relative">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            loop={true}
            modules={[Navigation, Pagination]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className=""
          >
            {contents.map((content, index) => (
              <>
                <SwiperSlide key={index} className="overflow-hidden">
                  <div className="group relative h-[350px] w-full rounded-lg">
                    <img
                      src={content.bg}
                      alt=""
                      className="size-[100%] object-cover aspect-square rounded-lg"
                    />
                    <p className="uppecase py-1.5 px-3 primary-background absolute z-10 rounded-sm text-white top-5 right-5 group-hover:-translate-y-5 group-hover:opacity-0 duration-300 ease-out">
                      {content.type}
                    </p>
                    <div className="flex flex-col p-5 bg-white rounded-b-lg gap-5 items-center absolute z-0 bottom-0 w-full group-hover:-translate-y-5 group-hover:opacity-0 duration-300 ease-out">
                      <div className="flex items-center w-full gap-5">
                        <div className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="16"
                            height="16"
                            fill="currentColor"
                          >
                            <path d="M20 22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13Z"></path>
                          </svg>
                          <p>
                            by
                            <span className="primary-color font-semibold ml-2">
                              {content.writer}
                            </span>
                          </p>
                        </div>
                        <p className="h-[20px] w-[.5px] bg-gray-500"></p>
                        <div className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="16"
                            height="16"
                            fill="currentColor"
                          >
                            <path d="M17 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9V3H15V1H17V3ZM4 9V19H20V9H4ZM6 11H8V13H6V11ZM6 15H8V17H6V15ZM10 11H18V13H10V11ZM10 15H15V17H10V15Z"></path>
                          </svg>
                                        <p className="text-gray-500">{ content.date}</p>
                        </div>
                      </div>
                      <div className="w-full ">
                        <p className="text-3xl font-bold ">
                          {content.heading}
                        </p>
                      </div>
                    </div>
                    <div className="absolute z-10 w-[calc(100%-50px)] h-full top-0 left-0 backdrop-blur-md bg-[#00000065] text-white rounded-l-lg translate-y-[-100%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-300 ease-out">
                      <div className="relative pr-[90px] p-5 flex flex-col gap-5 justify-center h-full">
                        <div className="absolute top-0 right-[-50px] primary-background text-white size-[90px] flex flex-col justify-center items-center">
                                        <p className="uppercase text-lg text-center">{ content.date2}</p>
                        </div>
                        <div className="h-0 w-0 border-[25px] border-transparent border-t-[#c2482c] border-l-[#c2482c] absolute top-[90px] right-[-50px]"></div>
                        <p className="text-3xl font-bold">{content.heading}</p>
                        <p className="line-clamp-2 text-lg">{content.text}</p>
                        <button className="font-semibold text-white bg-[#FA4318] flex gap-3 items-center justify-center h-[45px] w-[130px] rounded uppercase">
                          About Us
                          <i className="fa-solid fa-chevron-right text-sm"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
