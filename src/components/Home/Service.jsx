import petrol1 from "/src/assets/images/icon/factory2.png";
import petrol2 from "/src/assets/images/home/service-image-single-1-500x405.jpg";
import metal1 from "/src/assets/images/icon/excavator.png";
import metal2 from "/src/assets/images/home/service-11-500x405.jpg";
import power1 from "/src/assets/images/icon/gear.png";
import power2 from "/src/assets/images/home/Energy-500x405.jpg";
import machanical1 from "/src/assets/images/icon/engineer1.png";
import machanical2 from "/src/assets/images/home/4455-500x405.jpg";

export default function HomeService() {
  const contents = [
    {
      icon: power1,
      bg: power2,
      heading: "Power & energy",
      subtext: "Water pipe system",
      sub: "In parallel with the repair & maintaince of pumps on floating vehicals, we...",
    },
    {
      icon: machanical1,
      bg: machanical2,
      heading: "Machanical Works",
      subtext: "Pipeline",
      sub: "In parallel with the repair & maintaince of pumps on floating vehicals, we...",
    },
    {
      icon: petrol1,
      bg: petrol2,
      heading: "Petroleum Refinery",
      subtext: "Water pipe system",
      sub: "In parallel with the repair & maintaince of pumps on floating vehicals, we...",
    },
    {
      icon: petrol1,
      bg: petrol2,
      heading: "Petroleum Refinery",
      subtext: "Water pipe system",
      sub: "In parallel with the repair & maintaince of pumps on floating vehicals, we...",
    },
    {
      icon: metal1,
      bg: metal2,
      heading: "Metal Forming",
      subtext: "Water pipe system",
      sub: "In parallel with the repair & maintaince of pumps on floating vehicals, we...",
    },

    {
      icon: power1,
      bg: power2,
      heading: "Power & energy",
      subtext: "Water pipe system",
      sub: "In parallel with the repair & maintaince of pumps on floating vehicals, we...",
    },
  ];
  return (
    <>
      <div className="mt-20">
        <div className="flex flex-col items-center justify-center pt-[100px] bg-[url('/src/assets/images/background/bg-background.jpg')] pb-[200px]">
          <p className="text-[#FA4318] text-lg font-bold mb-[-70px]">
            Our Awesome Services
          </p>
          <h4 className="text-transparent text-[110px] font-bold font-outline-2 ">
            Services
          </h4>
          <h1 className="text-5xl font-bold w-1/2 text-center mt-[-70px]">
            Building a more competitive business sectors
          </h1>
          <p className="h-[2px] w-[60px] bg-[#FA4318] mt-2 rounded-md"></p>
        </div>
        <div className="grid grid-cols-3 px-[10%] mt-[-150px] gap-5 ">
          {contents.map((content, index) => (
            <>
              <div className=" max-h-[270px] max-w-[400px] mb-10 overflow-hidden">
                <div className="group relative size-[100%] pb-5">
                  <img
                    src={content.bg}
                    alt=""
                    className="size-[100%] object-cover aspect-square rounded-xl shadow-md"
                  />
                  <div className="flex gap-5 items-center absolute z-0 bottom-1 w-[calc(100%-20px)] group-hover:-translate-y-5 group-hover:opacity-0 duration-300 ease-out">
                    <img
                      src={content.icon}
                      alt=""
                      className={
                        index % 3 == 0
                          ? "size-[90px] p-5 shadow-md bg-[#0099E2]"
                          : "" || index % 3 == 1
                          ? "size-[90px] p-5 shadow-md bg-[#FA4318]"
                          : "" || index % 3 == 2
                          ? "size-[90px] p-5 shadow-md icon-bg bg-[#28Bc00]"
                          : ""
                      }
                    />
                    <div className="bg-white h-[90px] w-full pl-5 flex flex-col justify-center shadow-md">
                      <p className="text-xl font-bold ">{content.heading}</p>
                      <p className="text-gray-500">{content.subtext}</p>
                    </div>
                  </div>
                  <div className="absolute z-10 w-[calc(100%-50px)] h-[calc(100%-20px)] top-0 left-0 bg-[#ffffffe5] rounded-l-xl translate-y-[-100%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-300 ease-out shadow-md">
                    <div className="relative pr-[90px] p-5 flex flex-col gap-5 ">
                      <div className="absolute top-0 right-[-50px]">
                        <img
                          src={content.icon}
                          alt=""
                          className={
                            index % 3 == 0
                              ? "size-[90px] p-5 shadow-md bg-[#0099E2]"
                              : "" || index % 3 == 1
                              ? "size-[90px] p-5 shadow-md bg-[#FA4318]"
                              : "" || index % 3 == 2
                              ? "size-[90px] p-5 shadow-md icon-bg bg-[#28Bc00]"
                              : ""
                          }
                        />
                      </div>
                      <div
                        className={
                          index % 3 == 0
                            ? "h-0 w-0 border-[25px] border-transparent border-t-[#25789e] border-l-[#25789e] absolute top-[90px] right-[-50px]"
                            : "" || index % 3 == 1
                            ? "h-0 w-0 border-[25px] border-transparent border-t-[#c2482c] border-l-[#c2482c] absolute top-[90px] right-[-50px]"
                            : "" || index % 3 == 2
                            ? "h-0 w-0 border-[25px] border-transparent border-t-[#3b9422] border-l-[#3b9422] absolute top-[90px] right-[-50px]"
                            : ""
                        }
                      ></div>
                      <p className="text-2xl font-bold hover:primary-color">
                        {content.heading}
                      </p>
                      <p>{content.sub}</p>
                      <button
                        className={
                          index % 3 == 0
                            ? "font-semibold text-white bg-[#0099E2] flex gap-3 items-center justify-center h-[45px] w-[130px] rounded uppercase "
                            : "" || index % 3 == 1
                            ? "font-semibold text-white bg-[#FA4318] flex gap-3 items-center justify-center h-[45px] w-[130px] rounded uppercase"
                            : "" || index % 3 == 2
                            ? "font-semibold text-white bg-[#28Bc00] flex gap-3 items-center justify-center h-[45px] w-[130px] rounded uppercase "
                            : ""
                        }
                      >
                        About Us
                        <i className="fa-solid fa-chevron-right text-sm"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
