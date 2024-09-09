export default function ServiceSkill() {
  const skills = [
    {
      name: "Production",
      amount: "90%",
    },
    {
      name: "Industrial",
      amount: "80%",
    },
    {
      name: "Factory",
      amount: "95%",
    },
    {
      name: "Performance",
      amount: "85%",
    },
  ];
  return (
    <>
      <div className="bg-[url('/src/assets/images/background/bg-progress-bar.jpg')] bg-center py-10 px-[10%] flex gap-10">
        <div className="w-1/2 -mb-20 rounded-md relative z-10">
          <img
            src="/src/assets/images/service/service-5-370x295.jpg"
            alt=""
            className="size-full rounded-md aspect-auto object-cover"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="88"
            height="88"
            fill="currentColor"
            className="bg-white primary-color rounded-full absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] animate-bounce"
          >
            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM10.6219 8.41459C10.5562 8.37078 10.479 8.34741 10.4 8.34741C10.1791 8.34741 10 8.52649 10 8.74741V15.2526C10 15.3316 10.0234 15.4088 10.0672 15.4745C10.1897 15.6583 10.4381 15.708 10.6219 15.5854L15.5008 12.3328C15.5447 12.3035 15.5824 12.2658 15.6117 12.2219C15.7343 12.0381 15.6846 11.7897 15.5008 11.6672L10.6219 8.41459Z"></path>
          </svg>
        </div>
        <div className="w-1/2">
          <p className="primary-color text-xl font-bold">Our Industry Skill</p>
          <h2 className="text-5xl font-bold text-white py-3 pb-5">
            Get a solution for your Industries needs.
          </h2>
          <p className="text-white">
            Industo has a rich knowledge of industrial and energy processes, a
            unique combination of specialist skills and multidisciplinary
            expertise.
          </p>
          <div className="pt-10 space-y-5 text-white">
            {skills.map((skill, index) => (
              <div key={index}>
                <p className="text-xl font-bold pb-2">{skill.name}</p>
                <div className="bg-slate-500 rounded-lg">
                  <div
                    className="primary-background py-[2px] rounded-lg relative"
                    style={{ width: skill.amount }}
                  >
                    <span className="absolute bottom-[200%] text-lg font-bold right-0 translate-x-[50%]">
                      {skill.amount}
                    </span>
                    <p className="size-4 rounded-full primary-background absolute top-[50%] translate-y-[-50%] right-0"></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
