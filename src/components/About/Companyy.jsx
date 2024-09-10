

export default function AboutCompany() {
  
  return (
    <>
          <div className="py-20 pb-26 px-[10%] flex gap-10 bg-[url('/src/assets/images/background/bg-bottom-portfolio-content.png')] bg-right bg-no-repeat overflow-hidden relative">
              <img src="/src/assets/images/background/image-holder.png" alt="" className="absolute top-0 left-0"/>
              <div className="w-1/2 relative group">
                  <img src="/src/assets/images/About/222-1-500x500.jpg" alt="" className="rounded-full size-full aspect-auto object-cover relative z-20" />
                  <p className="bg-[#b73719] size-full rounded-full absolute -bottom-[55%] right-0 text-center flex justify-center items-center text-7xl font-bold uppercase text-[#ffffff28] group-hover:text-white duration-500">About</p>
              </div>
              <div className="w-1/2">
                  <p className="text-xl font-bold">Welcome to <span className="primary-color">Industry Company</span></p>
                  <h2 className="text-5xl font-bold pt-4">We Are Expert In All Industry Works </h2>
                  <p className="text-gray-500 pt-5">As a global player, we can benefit from our overall technical experience and resources and take on large and complex assignments, wherever in the world the needs arise.</p>
                  <div className="grid grid-cols-2 font-bold text-xl pt-5 gap-x-5 gap-y-3">
                      <p className="flex items-center gap-2"><img src="/src/assets/images/icon/right.png" alt=""  className="size-[24px]"/>Our Work Growth</p>
                      <p className="flex items-center gap-2"><img src="/src/assets/images/icon/right.png" alt=""  className="size-[24px]"/>Our Employee Growth</p>
                      <p className="flex items-center gap-2"><img src="/src/assets/images/icon/right.png" alt=""  className="size-[24px]"/>1500 Employed</p>
                      <p className="flex items-center gap-2"><img src="/src/assets/images/icon/right.png" alt=""  className="size-[24px]"/>Service Management</p>
                  </div>
                  <div className="my-10 p-5 rounded-md shadow-md bg-white flex items-center gap-5 group">
                      <img src="/src/assets/images/icon/icon-fcb_03.png" alt="" className="size-[70px] group-hover:animate-bounce"/>
                      <div>
                          <h3 className="text-3xl font-semibold pb-3">Best Quality</h3>
                          <p className="text-gray-500">We have completed and achieved the Certificate of Quality Management System.</p>
                      </div>
                  </div>
                  <button className="text-white font-bold flex items-center justify-center h-[45px] w-[180px] rounded-full bg-[#151530] hover:primary-background duration-500">Explore More +</button>
              </div>
      </div>
    </>
  );
}
