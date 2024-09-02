export default function Footer() {
  return (
    <>
      <div className="px-[10%] bg-black">
        <div className="py-20 grid grid-cols-4 gap-10 border-b border-b-zinc-600">
          <div className="space-y-8">
            <img
              src="/src/assets/images/logo/logo-light.png"
              alt=""
              className="w-full"
            />
            <p className="text-gray-400 font-semibold">
              Industo is a creator of zero emission energy solutions. Our
              versatile services help bring success to companies in the
              industry.
            </p>
            <button className="primary-background uppercase px-5 py-1.5 font-semibold text-white">
              About Us
            </button>
          </div>
          <div className="space-y-8 mt-8">
            <div>
              <p className="text-2xl font-bold text-white pb-2">Newsletter</p>
              <p className="primary-background h-1 w-[50px]"></p>
            </div>
            <p className="text-gray-400 font-semibold">
              Subscribe our newsletter to get our latest update & news
            </p>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Your email address"
                className="h-[40px] w-[calc(100%-50px)] bg-zinc-700 text-gray-400 px-3 focus:outline-none"
              />
              <button className="primary-background text-white h-[40px] w-[50px] flex justify-center items-center group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="group-hover:animate-ping"
                >
                  <path d="M1.94619 9.31543C1.42365 9.14125 1.41953 8.86022 1.95694 8.68108L21.0431 2.31901C21.5716 2.14285 21.8747 2.43866 21.7266 2.95694L16.2734 22.0432C16.1224 22.5716 15.8178 22.59 15.5945 22.0876L12 14L18 6.00005L10 12L1.94619 9.31543Z"></path>
                </svg>
              </button>
            </div>
            <div className="flex gap-8 text-lg text-gray-400">
              <i className="fa-brands fa-facebook hover:text-[#FA4318]"></i>
              <i className="fa-brands fa-twitter hover:text-[#FA4318]"></i>
              <i className="fa-brands fa-dribbble hover:text-[#FA4318]"></i>
              <i className="fa-brands fa-behance hover:text-[#FA4318]"></i>
            </div>
          </div>
          <div className="space-y-8 mt-8">
            <div>
              <p className="text-2xl font-bold text-white pb-2">
                Official info
              </p>
              <p className="primary-background h-1 w-[50px]"></p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-5 font-semibold">
                <i className="fa-solid fa-location-dot text-gray-400 text-xl"></i>
                <p className="text-gray-400 hover:text-[#FA4318]">
                  30 Commercial Road ,<br />
                  Fratton, Australia
                </p>
              </div>
              <div className="flex items-center gap-5 font-semibold">
                <i className="fa-solid fa-phone-volume text-gray-400 text-xl"></i>
                <p className="text-gray-400 hover:text-[#FA4318]">
                  +(888) 452 1505
                </p>
              </div>
              <div className="text-gray-400 space-y-3 font-semibold">
                <span className="pb-1 border-b font-bold text-lg text-white">
                  We'are Open
                </span>
                <p>Mon - sat 8:00 - 18:00</p>
              </div>
            </div>
          </div>
          <div className="space-y-8 mt-8">
            <div>
              <p className="text-2xl font-bold text-white pb-2">Gallery</p>
              <p className="primary-background h-1 w-[50px]"></p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <img src="/src/assets/images/Gallery/gallery-1.jpg" alt="" />
              </div>
              <div>
                <img src="/src/assets/images/Gallery/gallery-2.jpg" alt="" />
              </div>
              <div>
                <img src="/src/assets/images/Gallery/gallery-3.jpg" alt="" />
              </div>
              <div>
                <img src="/src/assets/images/Gallery/gallery-4.jpg" alt="" />
              </div>
              <div>
                <img src="/src/assets/images/Gallery/gallery-5.jpg" alt="" />
              </div>
              <div>
                <img src="/src/assets/images/Gallery/gallery-6.jpg" alt="" />
              </div>
            </div>
          </div>
              </div>
              <p className="text-white text-center font-[400] py-5">© 2022 Industo – <span className="primary-color">CaseThemes</span>. All rights reserved.</p>
      </div>
    </>
  );
}
