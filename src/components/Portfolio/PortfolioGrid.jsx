import React, { useRef, useState } from "react";

import pow1 from "/src/assets/images/service/Energy-450x500.jpg";
import mac1 from "/src/assets/images/service/4455-450x500.jpg";
import pet1 from "/src/assets/images/service/service-image-single-1-150x150.jpg";
import met1 from "/src/assets/images/service/service-11-370x295.jpg";
import civ1 from "/src/assets/images/service/service-12-450x500.jpg";
import con1 from "/src/assets/images/service/service-2-450x500.jpg";
import wel1 from "/src/assets/images/service/post-5-150x150.jpg";
import agr1 from "/src/assets/images/service/service-7-150x150.jpg";

export default function PortfolioGrid() {

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
      bg: pow1,
      title: "Building Fast",
      text: "Agricultural Automation",
    },
    {
      bg: mac1,
      title: "Areb Oil Rigs",
      text: "Civil & Art Engineering",
    },
    {
      bg: pet1,
      title: "Warehouse Industry",
      text: "Mechanical Engineering",
    },
    {
      bg: met1,
      title: "Alternative Energy",
      text: "Civil & Art Engineering",
    },
    {
      bg: civ1,
      title: "Metal Industry",
      text: "Oil & Gas Engineering",
    },
    {
      bg: con1,
      title: "Pipe and Pressure vessel Systems",
      text: "Mechanical Engineering",
    },
    {
      bg: wel1,
      title: "Quality in Project Helios",
      text: "Civil & Art Engineering",
    },
    {
      bg: agr1,
      title: "Polley Theater",
      text: "Agricultural Automation",
    },
  ];

  return (
      <>
          <div className="py-32 px-[10%]">
          <div className="grid grid-cols-3 gap-10 pb-10">
        {contents.map((content, index) => (
          <div
            key={index}
            className="h-[250px] w-full relative group overflow-hidden rounded drop-shadow-md"
          >
            <img
              src={content.bg}
              alt=""
              className="size-full aspect-auto object-cover"
            />
            <div className="absolute size-full bottom-0 flex flex-col justify-between p-5 bg-[#1b1830e1] text-white gap-5 translate-y-[-100%] group-hover:translate-y-0 duration-500 opacity-0 group-hover:opacity-100 ease-in-out">
              <div className="flex justify-end">
                <button className="font-bold text-white bg-[#FA4318] size-[50px] text-3xl flex items-center justify-center rounded-md shadow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                  >
                    <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                <p className="primary-color font-bold">{content.text}</p>
                <p className="text-3xl font-bold pb-4">{content.title}</p>
              </div>
            </div>
          </div>
        ))}
          </div>
          <div className="flex gap-3 items-center justify-center">
                  <button className="size-[40px] rounded-full primary-background text-white flex justify-center items-center font-bold">1</button>
                  <button className="size-[40px] rounded-full bg-gray-300 flex justify-center items-center font-bold">2</button>
                  <button className="size-[40px] rounded-full bg-gray-300 flex justify-center items-center font-bold">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg>
                  </button>
        </div>
          </div>
     
    </>
  );
}
