import pow from "/src/assets/images/icon/gear1.png";
import mac from "/src/assets/images/icon/engineer.png";
import pet from "/src/assets/images/icon/factory1.png";
import met from "/src/assets/images/icon/excavator1.png";
import civ from "/src/assets/images/icon/plumbing.png";
import con from "/src/assets/images/icon/worker.png";
import wel from "/src/assets/images/icon/weld.png";
import agr from "/src/assets/images/icon/flask1.png";

import pow1 from "/src/assets/images/service/Energy-450x500.jpg";
import mac1 from "/src/assets/images/service/4455-450x500.jpg";
import pet1 from "/src/assets/images/service/service-image-single-1-150x150.jpg";
import met1 from "/src/assets/images/service/service-11-370x295.jpg";
import civ1 from "/src/assets/images/service/service-12-450x500.jpg";
import con1 from "/src/assets/images/service/service-2-450x500.jpg";
import wel1 from "/src/assets/images/service/post-5-150x150.jpg";
import agr1 from "/src/assets/images/service/service-7-150x150.jpg";

export default function Servicegrid() {
  const contents = [
    {
      bg: pow1,
      icon: pow,
      title: "Power & Energy",
      text: "In parallel with the repair & maintenance of pumps on floating vehicles",
    },
    {
      bg: mac1,
      icon: mac,
      title: "Mechanical Works",
      text: "In parallel with the repair & maintenance of pumps on floating vehicles",
    },
    {
      bg: pet1,
      icon: pet,
      title: "Petroleum Refinery",
      text: "In parallel with the repair & maintenance of pumps on floating vehicles",
    },
    {
      bg: met1,
      icon: met,
      title: "Metal Forming",
      text: "In parallel with the repair & maintenance of pumps on floating vehicles",
    },
    {
      bg: civ1,
      icon: civ,
      title: "Civil Engineering",
      text: "In parallel with the repair & maintenance of pumps on floating vehicles",
    },
    {
      bg: con1,
      icon: con,
      title: "Construction Services",
      text: "In parallel with the repair & maintenance of pumps on floating vehicles",
    },
    {
      bg: wel1,
      icon: wel,
      title: "Welding & Laser",
      text: "In parallel with the repair & maintenance of pumps on floating vehicles",
    },
    {
      bg: agr1,
      icon: agr,
      title: "Agricultural Automation",
      text: "In parallel with the repair & maintenance of pumps on floating vehicles",
    },
  ];

  return (
    <>
      <div className="px-[10%] pt-32 py-10 grid grid-cols-4 gap-5">
        {contents.map((content, index) => (
          <div
            key={index}
            className="h-[300px] w-full relative group overflow-hidden rounded drop-shadow-md"
          >
            <img
              src={content.bg}
              alt=""
              className="size-full aspect-auto object-cover"
            />
            <div className="absolute w-full bottom-0 flex flex-col items-center justify-center bg-gradient-to-r from-[#a8003ee1] to-[#f30031ea] group-hover:translate-y-[150%] duration-500 group-hover:opacity-0 ease-in-out">
              <div className="size-[80px] p-4 bg-white rounded-full flex items-center justify-center border-[3px] border-[#FA4318] -mt-10">
                <img src={content.icon} alt="" className=" size-[40px]" />
              </div>
              <p className="text-white text-2xl font-bold pb-5">
                {content.title}
              </p>
            </div>
            <div className="absolute size-full bottom-0 flex flex-col items-center justify-center p-5 bg-gradient-to-r from-[#a8003ee1] to-[#f30031ea] text-white text-center gap-5 translate-y-[100%] group-hover:translate-y-0 duration-500 opacity-0 group-hover:opacity-100 ease-in-out">
              <p className="text-2xl font-bold">{ content.title}</p>
              <p className="line-clamp-3">{content.text}</p>
              <button className="font-bold text-white text-sm bg-[#FA4318] flex gap-3 items-center justify-center h-[40px] w-[130px] rounded-full shadow">
                Read more
                <i className="fa-solid fa-chevron-right text-xs"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="primary-background text-white flex gap-2 w-[180px] h-[45px] font-semibold text-lg items-center justify-center rounded-full shadow mx-auto mb-20">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='24' height='24'  fill="currentColor" className=""><path d="M18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>
        Load more
  </button>
    </>
  );
}
