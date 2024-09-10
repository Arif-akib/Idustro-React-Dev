import logo from '/src/assets/images/logo/logo.png'
export default function NavBarContact() {
    return (
        <>
            <div className="px-[10%] flex pt-3 justify-between bg-white">
                <img src={logo} alt="" className="h-[70px] my-3" />
                <div className="flex gap-10">
                    <div className="flex gap-5">
                        <i className="fa-solid fa-phone-volume text-[#FA4318] text-3xl"></i>
                        <div>
                            <p className="">Call Us for Help!</p>
                            <p className="text-gray-500 hover:text-[#FA4318]">+(888) 452 1505</p>
                        </div>
                    </div>

                    <div className="flex gap-5">
                        <i className="fa-solid fa-location-dot text-[#FA4318] text-3xl"></i>
                        <div>
                            <p className="">Main Location</p>
                            <p className="text-gray-500 hover:text-[#FA4318]">30 Commercial Road, Australia</p>
                        </div>
                    </div>

                    <div className="flex gap-5">
                        <i className="fa-solid fa-envelope text-[#FA4318] text-3xl"></i>
                        <div>
                            <p className="">Mail Us</p>
                            <p className="text-gray-500 hover:text-[#FA4318]">help@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
      </>
    );
  }
  