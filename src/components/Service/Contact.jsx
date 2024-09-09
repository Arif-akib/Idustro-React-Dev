export default function ServiceContact() {
    
    return (
        <>
            <div className="bg-[url('/src/assets/images/background/bg-banner-poster.jpg')] h-[300px] bg-center relative overflow-hidden rounded-md">
                <p className="size-[550px] rounded-full bg-[#5e5c7ca6] absolute top-[-120%] left-[-20px]"></p>
                <p className="size-[550px] rounded-full bg-[#5e5c7ca6] absolute bottom-[-80%] right-[-10%] bg-animate2"></p>
                <div className="size-full absolute z-10 flex justify-between gap-5 px-[5%]">
                    <div className="w-1/2 flex flex-col gap-5 justify-center">
                        <h2 className="text-white text-5xl font-semibold">Gets an Quotation For Your Industry</h2>
                        <div className="flex items-center gap-5">
                            <button className="px-5 py-2 rounded-full text-lg text-white font-semibold primary-background">Get Appoinment</button>
                            <div className="text-white flex gap-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="52" height="52" fill="currentColor" className="bg-white primary-color rounded-full hover:animate-ping"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM10.6219 8.41459C10.5562 8.37078 10.479 8.34741 10.4 8.34741C10.1791 8.34741 10 8.52649 10 8.74741V15.2526C10 15.3316 10.0234 15.4088 10.0672 15.4745C10.1897 15.6583 10.4381 15.708 10.6219 15.5854L15.5008 12.3328C15.5447 12.3035 15.5824 12.2658 15.6117 12.2219C15.7343 12.0381 15.6846 11.7897 15.5008 11.6672L10.6219 8.41459Z"></path></svg>
                                <div>
                                <p>Call us Now</p>
                                <p className="text-2xl font-semibold hover:primary-color duration-300">+96 785 456 789</p>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <img src="/src/assets/images/background/Image4.png" alt="" className="h-full"/>
                </div>
            </div>
        </>
    )
}