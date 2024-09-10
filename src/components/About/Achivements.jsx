import { icon } from "@fortawesome/fontawesome-svg-core";
import fac from "/src/assets/images/icon/Icon-1.png";
import eng from "/src/assets/images/icon/Icon-2.png";
import ico from "/src/assets/images/icon/Icon-3.png";

export default function AboutAchivement() {
  const contents = [
    {
      number: "1500 +",
      text: "Chain of Factories",
      icon: fac,
    },
    {
      number: "1.5K",
      text: "Engineering Project",
      icon: eng,
    },
    {
      number: "266 +",
      text: "Worldwide Partner",
      icon: ico,
    },
  ];
  return (
    <>
      <div className="px-[10%] pt-20">
        <div>
          <p className="text-lg font-bold primary-color text-center pb-3">
            Achivement
          </p>
          <h2 className="text-5xl font-bold text-center">Our Achivements</h2>
        </div>
        <div className="pt-10 pb-20 grid grid-cols-3 gap-8">
          {contents.map((content, index) => (
            <div className="flex items-center gap-5 drop-shadow-xl bg-white group relative">
              <div className="primary-background flex items-center justify-center border-r-[10px] border-[#ffe0d4] h-[140px] w-[130px] rounded-tr-[40%] rounded-br-[90%]">
                <img
                  src={content.icon}
                  alt=""
                  className="size-[50px] group-hover:size-[65px] duration-500 "
                />
              </div>
              <div>
                <h3 className="text-5xl pb-3 font-semibold">
                  {content.number}
                </h3>
                <p className="text-2xl text-gray-500 font-semibold">
                  {content.text}
                </p>
              </div>
              <p className="size-4 rounded-full primary-background absolute -top-2 -right-2 scale-0 group-hover:scale-100 duration-500"></p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
