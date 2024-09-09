export default function ServiceWork() {
  const works = [
    {
      name: "Discussions About Project",
      text: "Forging relationships between multi to national corporations, governments and global NGOs.",
      mumber: "01",
    },
    {
      name: "Start Work With Team",
      text: "Design studio founded in London and expanded our services, and become a multinational firm.",
      mumber: "02",
    },
    {
      name: "Handover & Save World",
      text: "We understand the importance of approaching each work integrally and believe in the power.",
      mumber: "03",
    },
  ];
  return (
    <>
      <div className="flex gap-10 my-20 ">
        <div className="w-1/2 pr-16 pb-16 relative">
          <img
            src="/src/assets/images/service/image-banner.jpg"
            alt=""
            className="size-full rounded-md"
          />
          <div className="primary-background text-white font-bold text-4xl text-center py-5 px-8 rounded-md shadow absolute top-10 right-0">
            <p>20 +</p>
            <p>Years</p>
          </div>
          <div className="bg-white font-bold pt-4 pl-4 rounded-md absolute bottom-10 right-0">
            <img
              src="/src/assets/images/service/fcb-crs-3-255x210.jpg"
              alt=""
              className="rounded-md"
            />
          </div>
        </div>
        <div className="w-1/2">
          <p className="primary-color text-xl font-bold pb-1">How It Work</p>
          <h2 className="text-5xl font-bold">Our Company Working Process</h2>
          <div className="pt-10 space-y-10">
            {works.map((work, index) => (
              <div className="group flex gap-3 items-center">
                <p className="text-6xl font-outline-4 group-hover:font-outline-4-solid group-hover:scale-animate font-bold text-transparent duration-500 ease-in-out">
                  {work.mumber}
                </p>
                <div>
                  <h3 className="text-3xl font-bold pb-2">{work.name}</h3>
                  <p className="text-gray-600">{work.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
