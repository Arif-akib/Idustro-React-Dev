export default function NavAdd() {
    return (
      <>
        <div className="bg-black text-gray-400 px-[10%] h-[55px] flex justify-between items-center">
          <p className="">
            Welcome to our <span className="text-[#FA4318]">Industo</span> Company
          </p>
          <div className="flex items-center gap-10 justify-between">
            <p className="flex gap-2 items-center">
              <i className="fa-solid fa-clock text-lg"></i>
              We'are Open : Mon - sat 8:00 - 18:00
            </p>
            <p className="h-[55px] w-[1px] bg-gray-500 rotate-[30deg]"></p>
            <div className="flex gap-4 text-lg">
              <i className="fa-brands fa-facebook hover:text-[#FA4318]"></i>
              <i className="fa-brands fa-twitter hover:text-[#FA4318]"></i>
              <i className="fa-brands fa-dribbble hover:text-[#FA4318]"></i>
              <i className="fa-brands fa-behance hover:text-[#FA4318]"></i>
            </div>
          </div>
        </div>
      </>
    );
  }
  