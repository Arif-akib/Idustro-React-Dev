import {Link} from 'react-router-dom'
import NavAdd from "./NavAdd";
import NavBarContact from "./NavbarContact";

export default function Navbar() {
  return (
    <>
      <div className="relative z-50">
        <div className="relative">
          <NavAdd />
          <NavBarContact />
          <div className="absolute w-[65%] bottom-[-50px] right-0">
            <div className="bg-[#FA4318] h-[85px] text-white flex items-center justify-between w-full pr-[15%] relative">
              <ul className="flex gap-10 text-lg font-semibold items-center">
                <Link to="/"><li>Home</li></Link>
                <li>Our Services</li>
                <li>Our Team</li>
                <li>Protfolio</li>
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
              <i className="fa-solid fa-magnifying-glass"></i>
              <div className="h-0 w-0 border-[42.5px] border-transparent border-r-[#FA4318] border-b-[#FA4318] absolute translate-x-[-100%]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
