import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";

import p1 from "/src/assets/images/team/team-12-400x400.jpg";
import p2 from "/src/assets/images/team/team-13-400x400.jpg";
import p3 from "/src/assets/images/team/team-14-400x400.jpg";
import p4 from "/src/assets/images/team/team-15-400x400.jpg";
import p5 from "/src/assets/images/team/5-400x400.jpg";
import p6 from "/src/assets/images/team/4-400x400.jpg";

export default function HomeTeam() {
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
  const navi = (index) => {
    if (currentIndex < index) {
      slideRight();
      setCurrentIndex(index);
    } else if (currentIndex > index) {
      slideLeft();
      setCurrentIndex(index);
    }
  };
  const contents = [
    {
      img: p1,
      heading: "Amy Dasliva",
      text: "Electrical Engineer",
    },
    {
      img: p2,
      heading: "KP. Jackson",
      text: "Electrical Engineer",
    },

    {
      img: p4,
      heading: "Rob Miller",
      text: "Electrical Engineer",
    },
    {
      img: p6,
      heading: "Alfread Bonaport",
      text: "Electrical Engineer",
    },
    {
      img: p5,
      heading: "Ashisha Sudra",
      text: "Marketing",
    },
    {
      img: p3,
      heading: "Engineer",
      text: "Electrical Engineer",
    },
  ];
  return (
    <>
      <div className="pb-16">
        <div className="flex justify-between items-end pt-[100px] pb-5 px-[10%]">
          <div className="relative flex flex-col">
            <p className="text-[#FA4318] text-lg font-bold mb-[-70px] z-20">
              Expert team member
            </p>
            <h4 className="text-transparent text-[110px] font-bold font-outline-2 z-10 -ml-16">
              Team
            </h4>
            <h1 className="text-5xl font-bold mt-[-70px] z-20">
              Our expert team will assist.
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
            <div className="font-semibold flex gap-2 cursor-pointer">
              {contents.map((content, index) => (
                <p
                  onClick={()=>{navi(index)}}
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
                <SwiperSlide key={index} className="mb-[90px] relative">
                  <div className="pl-3 group">
                    <div className="relative">
                      <img
                        src={content.img}
                        alt=""
                        className="grayscale group-hover:grayscale-0 duration-500"
                      />
                      <div className="absolute top-0 left-[-10px] h-full flex flex-col gap-2 justify-center ">
                        <li className="list-none p-1 bg-white shadow-lg primary-color group-hover:primary-background group-hover:text-white duration-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="18"
                            height="18"
                            fill="currentColor"
                          >
                            <path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"></path>
                          </svg>
                        </li>
                        <li className="list-none p-1 bg-white shadow-lg primary-color group-hover:primary-background group-hover:text-white duration-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="18"
                            height="18"
                            fill="currentColor"
                          >
                            <path d="M22.2125 5.65605C21.4491 5.99375 20.6395 6.21555 19.8106 6.31411C20.6839 5.79132 21.3374 4.9689 21.6493 4.00005C20.8287 4.48761 19.9305 4.83077 18.9938 5.01461C18.2031 4.17106 17.098 3.69303 15.9418 3.69434C13.6326 3.69434 11.7597 5.56661 11.7597 7.87683C11.7597 8.20458 11.7973 8.52242 11.8676 8.82909C8.39047 8.65404 5.31007 6.99005 3.24678 4.45941C2.87529 5.09767 2.68005 5.82318 2.68104 6.56167C2.68104 8.01259 3.4196 9.29324 4.54149 10.043C3.87737 10.022 3.22788 9.84264 2.64718 9.51973C2.64654 9.5373 2.64654 9.55487 2.64654 9.57148C2.64654 11.5984 4.08819 13.2892 6.00199 13.6731C5.6428 13.7703 5.27232 13.8194 4.90022 13.8191C4.62997 13.8191 4.36771 13.7942 4.11279 13.7453C4.64531 15.4065 6.18886 16.6159 8.0196 16.6491C6.53813 17.8118 4.70869 18.4426 2.82543 18.4399C2.49212 18.4402 2.15909 18.4205 1.82812 18.3811C3.74004 19.6102 5.96552 20.2625 8.23842 20.2601C15.9316 20.2601 20.138 13.8875 20.138 8.36111C20.138 8.1803 20.1336 7.99886 20.1256 7.81997C20.9443 7.22845 21.651 6.49567 22.2125 5.65605Z"></path>
                          </svg>
                        </li>
                        <li className="list-none p-1 bg-white shadow-lg primary-color group-hover:primary-background group-hover:text-white duration-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="18"
                            height="18"
                            fill="currentColor"
                          >
                            <path d="M13.0281 2.00073C14.1535 2.00259 14.7238 2.00855 15.2166 2.02322L15.4107 2.02956C15.6349 2.03753 15.8561 2.04753 16.1228 2.06003C17.1869 2.1092 17.9128 2.27753 18.5503 2.52503C19.2094 2.7792 19.7661 3.12253 20.3219 3.67837C20.8769 4.2342 21.2203 4.79253 21.4753 5.45003C21.7219 6.0867 21.8903 6.81337 21.9403 7.87753C21.9522 8.1442 21.9618 8.3654 21.9697 8.58964L21.976 8.78373C21.9906 9.27647 21.9973 9.84686 21.9994 10.9723L22.0002 11.7179C22.0003 11.809 22.0003 11.903 22.0003 12L22.0002 12.2821L21.9996 13.0278C21.9977 14.1532 21.9918 14.7236 21.9771 15.2163L21.9707 15.4104C21.9628 15.6347 21.9528 15.8559 21.9403 16.1225C21.8911 17.1867 21.7219 17.9125 21.4753 18.55C21.2211 19.2092 20.8769 19.7659 20.3219 20.3217C19.7661 20.8767 19.2069 21.22 18.5503 21.475C17.9128 21.7217 17.1869 21.89 16.1228 21.94C15.8561 21.9519 15.6349 21.9616 15.4107 21.9694L15.2166 21.9757C14.7238 21.9904 14.1535 21.997 13.0281 21.9992L12.2824 22C12.1913 22 12.0973 22 12.0003 22L11.7182 22L10.9725 21.9993C9.8471 21.9975 9.27672 21.9915 8.78397 21.9768L8.58989 21.9705C8.36564 21.9625 8.14444 21.9525 7.87778 21.94C6.81361 21.8909 6.08861 21.7217 5.45028 21.475C4.79194 21.2209 4.23444 20.8767 3.67861 20.3217C3.12278 19.7659 2.78028 19.2067 2.52528 18.55C2.27778 17.9125 2.11028 17.1867 2.06028 16.1225C2.0484 15.8559 2.03871 15.6347 2.03086 15.4104L2.02457 15.2163C2.00994 14.7236 2.00327 14.1532 2.00111 13.0278L2.00098 10.9723C2.00284 9.84686 2.00879 9.27647 2.02346 8.78373L2.02981 8.58964C2.03778 8.3654 2.04778 8.1442 2.06028 7.87753C2.10944 6.81253 2.27778 6.08753 2.52528 5.45003C2.77944 4.7917 3.12278 4.2342 3.67861 3.67837C4.23444 3.12253 4.79278 2.78003 5.45028 2.52503C6.08778 2.27753 6.81278 2.11003 7.87778 2.06003C8.14444 2.04816 8.36564 2.03847 8.58989 2.03062L8.78397 2.02433C9.27672 2.00969 9.8471 2.00302 10.9725 2.00086L13.0281 2.00073ZM12.0003 7.00003C9.23738 7.00003 7.00028 9.23956 7.00028 12C7.00028 14.7629 9.23981 17 12.0003 17C14.7632 17 17.0003 14.7605 17.0003 12C17.0003 9.23713 14.7607 7.00003 12.0003 7.00003ZM12.0003 9.00003C13.6572 9.00003 15.0003 10.3427 15.0003 12C15.0003 13.6569 13.6576 15 12.0003 15C10.3434 15 9.00028 13.6574 9.00028 12C9.00028 10.3431 10.3429 9.00003 12.0003 9.00003ZM17.2503 5.50003C16.561 5.50003 16.0003 6.05994 16.0003 6.74918C16.0003 7.43843 16.5602 7.9992 17.2503 7.9992C17.9395 7.9992 18.5003 7.4393 18.5003 6.74918C18.5003 6.05994 17.9386 5.49917 17.2503 5.50003Z"></path>
                          </svg>
                        </li>
                        <li className="list-none p-1 bg-white shadow-lg primary-color group-hover:primary-background group-hover:text-white duration-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="18"
                            height="18"
                            fill="currentColor"
                          >
                            <path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path>
                          </svg>
                        </li>
                      </div>
                      <p className="h-0 w-0 border-[25px] border-transparent border-r-white border-t-white absolute top-[0px] right-[0px]"></p>
                      <p className="h-0 w-0 border-[15px] border-transparent border-r-[#FA4318] border-t-[#FA4318] absolute top-[0px] right-[0px]"></p>
                    </div>
                    <div className="relative shadow-md rounded-b-md pt-5">
                      <p className="h-0 w-0 border-[15px] border-transparent border-r-[#FA4318] border-t-[#FA4318] absolute top-[-0px] right-[0px] z-30"></p>
                      <h2 className="capitalize font-bold text-2xl pb-2 text-center">
                        {content.heading}
                      </h2>
                      <p className="capitalize text-gray-500 text-lg pb-[50px] text-center">
                        {content.text}
                      </p>
                      <div className="flex justify-center absolute -bottom-4 w-full">
                        <button className="font-semibold text-white bg-[#FA4318] flex gap-3 items-center justify-center h-[45px] w-[150px] rounded uppercase">
                          Read More
                          <i className="fa-solid fa-chevron-right text-sm"></i>
                        </button>
                      </div>
                      <div className="bg-black text-white absolute w-full z-10 top-0 pt-5 pb-[50px] duration-500 rounded-b-md scale-0 group-hover:scale-100">
                        <p className="h-0 w-0 border-[15px] border-transparent border-r-white border-t-white absolute top-[-0px] right-[0px] z-30"></p>
                        <h2 className="capitalize font-bold text-2xl pb-2 text-center mb-3">
                          {content.heading}
                        </h2>
                        <p className="h-[2px] w-10 mx-auto primary-background"></p>
                        <p className="flex gap-2 items-center justify-center pt-5">
                          <span className="primary-color">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="20"
                              height="20"
                              fill="currentColor"
                            >
                              <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path>
                            </svg>
                          </span>
                          +91 120 6777777
                        </p>

                        <p className="flex gap-2 items-center justify-center pt-3">
                          <span className="primary-color">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="18"
                              height="18"
                              fill="currentColor"
                            >
                              <path d="M2.24283 6.85435L11.4895 1.3086C11.8062 1.11865 12.2019 1.11872 12.5185 1.30878L21.7573 6.85433C21.9079 6.9447 22 7.10743 22 7.28303V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V7.28315C2 7.10748 2.09218 6.94471 2.24283 6.85435ZM18.3456 8.24383L12.0606 13.6829L5.64722 8.23769L4.35278 9.7623L12.0731 16.3171L19.6544 9.75615L18.3456 8.24383Z"></path>
                            </svg>
                          </span>
                          envato@gmail.com
                        </p>
                        <div className="flex justify-center absolute z-30 -bottom-4 w-full">
                          <button className="font-semibold text-white bg-[#FA4318] flex gap-3 items-center justify-center h-[45px] w-[150px] rounded uppercase">
                            Read More
                            <i className="fa-solid fa-chevron-right text-sm"></i>
                          </button>
                        </div>
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
