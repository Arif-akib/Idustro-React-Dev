import factory from "/src/assets/images/icon/factory1.png";
import factory2 from "/src/assets/images/icon/factory2.png";
import gas from "/src/assets/images/icon/dispenser.png";
import gas2 from "/src/assets/images/icon/dispenser1.png";
import flask from "/src/assets/images/icon/flask.png";
import flask2 from "/src/assets/images/icon/flask1.png";
export default function BannerGrid() {
  const contents = [
    {
      icon: factory2,
      icon2: factory,
      heading: "Eco & Bio power",
      sub: "Manufacturing insuatry became a key sector of production and labour into the European and North America.",
    },
    {
      icon: gas,
      icon2: gas2,
      heading: "Fule & Gas Management",
      sub: "Manufacturing insuatry became a key sector of production and labour into the European and North America.",
    },
    {
      icon: flask,
      icon2: flask2,
      heading: "Chemical Research",
      sub: "Manufacturing insuatry became a key sector of production and labour into the European and North America.",
    },
  ];
  return (
    <>
      <div className="text-white grid grid-cols-3 px-[10%] gap-10 mt-16">
        {contents.map((content, index) => (
          <div key={index} className="relative group">
            <div className="bg-black p-10 rounded-md relative">
              <div className="group-hover:opacity-0 duration-500">
                <img src={content.icon} alt="" className="mb-8" />
                <h1 className="text-2xl font-bold">{content.heading}</h1>
                <p className="h-[1px] w-[60px] bg-[#FA4318] mt-2 rounded-md"></p>
                <button className="h-[50px] w-[150px] rounded bg-[#FA4318] text-lg font-semibold flex gap-2 items-center justify-center mt-8 mb-16">
                  Read More <i className="fa-solid fa-arrow-right text-sm"></i>
                </button>
                <img
                  src="./src/assets/images/background/vt-8.png"
                  alt=""
                  className="absolute top-[5%] right-0 size-[80px]"
                />
              </div>
            </div>
            <div className="absolute z-10 top-0 w-full rounded-md overflow-hidden h-0 group-hover:h-[500px] ease-in-out duration-700 bg-[url('/src/assets/images/home/bg-slide-home-1.jpg')] bg-center ">
              <div className="p-10 rounded-md w-full h-[500px] backdrop-blur-md relative translate-y-[-100%] group-hover:translate-y-0 duration-500 ease-in-out" >
                <img
                  src={content.icon2}
                  alt=""
                  className="mb-8 opacity-0 group-hover:opacity-100 delay-100"
                />
                <h1 className="text-2xl font-bold">{content.heading}</h1>
                <p className="h-[1px] w-[60px] bg-[#FA4318] mt-2 rounded-md"></p>
                <p className="mt-8">{content.sub}</p>
                <button className="h-[50px] w-[150px] rounded bg-[#FA4318] text-lg font-semibold flex gap-2 items-center justify-center mt-8 mb-16">
                  Read More <i className="fa-solid fa-arrow-right text-sm"></i>
                </button>
                <img
                  src="./src/assets/images/background/vt-7.png"
                  alt=""
                  className="absolute top-[5%] right-0 size-[120px]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
