import bg1 from "/src/assets/images/client/client-1_03.png";
import bg2 from "/src/assets/images/client/client-2.png";
import bg3 from "/src/assets/images/client/client-3.png";
import bg4 from "/src/assets/images/client/client-4.png";

export default function AboutClient() {
  const contents = [
    {
      img: bg1,
    },
    {
      img: bg2,
    },
    {
      img: bg3,
    },
    {
      img: bg4,
    },
  ];
  return (
    <>
      <div className="py-16 px-[10%]">
        <div>
          <p className="text-lg font-bold primary-color text-center pb-3">
            Clients
          </p>
          <h2 className="text-5xl font-bold text-center pb-5">
            Our Trusted Sponsor
          </h2>
        </div>
        <div className="pt-10 grid grid-cols-4 gap-8">
          {contents.map((content, index) => (
            <div className="p-5 rounded-md shadow-md bg-white h-[110px] flex justify-center items-center">
              <img src={content.img} alt="" className="h-full" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
