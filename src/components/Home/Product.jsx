import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";

import SheredStar from "../Shared/Star";

import gen from "/src/assets/images/product/gen.png";
import cap from "/src/assets/images/product/item2-1-150x150.png";
import drillset from "/src/assets/images/product/drill3-1-150x150.png";
import drill1 from "/src/assets/images/product/product-6-1-150x150.png";
import drill2 from "/src/assets/images/product/product-5-1-150x150.png";
import cut from "/src/assets/images/product/product-4-150x150.jpg";

export default function HomeProduct() {
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
      img: gen,
      heading: " Inverted power generator v2",
      subtext: "generator yato brand",
      oldP: "300.00",
      newP: "250.00",
      star: 3.5,
    },
    {
      img: cap,
      heading: "Slim fit chinos mens uk",
      subtext: "Compound",
      oldP: "20.00",
      newP: "",
      star: 3,
    },
    {
      img: drillset,
      heading: "Lilon compact drill cordless",
      subtext: "drill machine",
      oldP: "10.00",
      newP: "",
      star: 4,
    },
    {
      img: drill1,
      heading: "lilon compact drill driver SZ2",
      subtext: "coumpound",
      oldP: "20.00",
      newP: "",
      star: 4.5,
    },
    {
      img: drill2,
      heading: "lilon compact drill driver SZ3",
      subtext: "generator yato brand",
      oldP: "",
      newP: "20.00",
      star: 5,
    },
    {
      img: cut,
      heading: "compound saw makita brand",
      subtext: "compound",
      oldP: "20.00",
      newP: "",
      star: 4.5,
    },
  ];
  return (
    <>
      <div className="mt-20 pb-[140px] bg-gray-100 relative">
        <div className="flex flex-col items-center justify-center pt-[100px] pb-5">
          <p className="text-[#FA4318] text-lg font-bold mb-[-70px] z-20">
            Populat products
          </p>
          <h4 className="text-transparent text-[110px] font-bold font-outline-2 text-white z-10">
            Product
          </h4>
          <h1 className="text-5xl font-bold w-1/2 text-center mt-[-70px] z-20">
            We have the best quality industrial products.
          </h1>
          <p className="h-[2px] w-[60px] bg-[#FA4318] rounded-md mt-5 z-20"></p>
          <img
            src="/src/assets/images/background/img-vector1.png"
            alt=""
            className="absolute top-0 left-[13%]"
          />
          <img
            src="/src/assets/images/background/vt-2.png"
            alt=""
            className="absolute top-0 right-[10%] bg-animate2"
          />
        </div>

        <div className="px-[10%]  relative">
          <Swiper
            slidesPerView={4}
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
                <SwiperSlide key={index} className="mt-5 relative">
                  <div className="z-20 flex flex-col items-center group">
                    <div className="mb-[-70px] z-10 relative">
                      <img
                        src={content.img}
                        alt=""
                        className="size-[180px] rounded-full bg-white p-5 shadow-lg "
                      />
                      <p className="size-[180px] rounded-full primary-background absolute -z-10 top-0 group-hover:top-[-15px] duration-300 ease-linear"></p>
                    </div>

                    <div className="relative">
                      <div className="text-center bg-white px-5 rounded-xl pt-[80px] shadow-lg relative overflow-hidden">
                        <h2 className="capitalize font-bold text-2xl line-clamp-2 pb-2">
                          {content.heading}
                        </h2>
                        <p className="capitalize text-gray-500 text-lg pb-8 border-b line-clamp-1">
                          {content.subtext}
                        </p>
                        <div className="flex justify-between items-center pt-5 pb-[50px]">
                          <p
                            className={
                              content.newP == ""
                                ? "font-semibold"
                                : "font-semibold line-through"
                            }
                          >
                            ${content.oldP}
                          </p>
                          <p
                            className={
                              content.newP == ""
                                ? "hidden"
                                : "text-red-500 font-semibold"
                            }
                          >
                            ${content.newP}
                          </p>
                          <SheredStar content={content}/>
                        </div>
                        <div
                          className="text-center bg-black text-white px-5 rounded-xl pt-[80px] shadow-lg absolute top-0 left-0 translate-y-[105%] group-hover:translate-y-0 duration-300 ease-linear
                "
                        >
                          <h2 className="capitalize font-bold text-2xl line-clamp-2 pb-2">
                          {content.heading}
                        </h2>
                        <p className="capitalize text-gray-500 text-lg pb-8 border-b line-clamp-1">
                          {content.subtext}
                        </p>
                        <div className="flex justify-between items-center pt-5 pb-[50px]">
                          <p
                            className={
                              content.newP == ""
                                ? "font-semibold"
                                : "font-semibold line-through"
                            }
                          >
                            ${content.oldP}
                          </p>
                          <p
                            className={
                              content.newP == ""
                                ? "hidden"
                                : "text-red-500 font-semibold"
                            }
                          >
                            ${content.newP}
                          </p>
                          <SheredStar content={content}/>
                        </div>
                        </div>
                      </div>

                      <div className="flex justify-center absolute z-30 -bottom-4 w-full">
                        <button className="font-semibold text-white bg-[#FA4318] flex gap-3 items-center justify-center h-[45px] w-[150px] rounded uppercase">
                          About Us
                          <i className="fa-solid fa-chevron-right text-sm"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            ))}
            <div className="flex gap-3 items-center justify-center mt-10">
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
          </Swiper>
        </div>
        <img
          src="/src/assets/images/background/ite-vector-left.png"
          alt=""
          className="absolute bottom-5 h-[250px] bg-animate1 z-0"
        />
        <img
          src="/src/assets/images/background/vt-5.png"
          alt=""
          className="absolute bottom-0 right-0 z-0"
        />
      </div>
    </>
  );
}
