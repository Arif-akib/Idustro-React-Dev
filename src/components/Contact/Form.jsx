export default function ContactForm() {
  return (
    <>
      <div className="pb-20 px-[10%]">
        <div className="pb-5">
          <p className="text-lg font-bold primary-color text-center pb-3">
            Get In Touch
          </p>
          <h2 className="text-5xl font-bold text-center w-1/2 mx-auto">
            Feel free to contact with us any time.
          </h2>
        </div>
        <div className="pt-5">
          <div className="flex gap-10 pb-5">
            <input
              type="text"
              name=""
              id=""
              placeholder="Your Name"
              className="py-2 px-3 bg-gray-50 w-1/2 focus:outline-[1px] outline-orange-600"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Your Name"
              className="py-2 px-3 bg-gray-50 w-1/2 focus:outline-[1px] outline-orange-600"
            />
          </div>
          <div className="flex gap-10 pb-5">
            <input
              type="text"
              name=""
              id=""
              placeholder="Your Name"
              className="py-2 px-3 bg-gray-50 w-1/2 focus:outline-[1px] outline-orange-600"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Your Name"
              className="py-2 px-3 bg-gray-50 w-1/2 focus:outline-[1px] outline-orange-600"
            />
          </div>
          <textarea
            name=""
            id=""
            placeholder="Message"
            className="w-full h-[70px] bg-gray-50 focus:outline-[1px] outline-orange-600"
          ></textarea>
          <button className="font-bold text-lg text-white bg-[#FA4318] flex gap-3 items-center justify-center h-[50px] w-[200px] rounded-full mx-auto my-5">
            Send Message +
          </button>
        </div>
      </div>
    </>
  );
}
