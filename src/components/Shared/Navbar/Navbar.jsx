import {Link} from 'react-router-dom'
import NavAdd from "./NavAdd";
import NavBarContact from "./NavbarContact";

export default function Navbar() {
  return (
    <>
      <div className="relative top-0 z-50">
        <div className="relative">
          <NavAdd />
          <NavBarContact />
          <div className="absolute w-[65%] bottom-[-50px] right-0">
            <div className="bg-[#FA4318] h-[85px] text-white flex items-center justify-between w-full pr-[15%] relative">
              <ul className="flex gap-10 text-lg font-semibold items-center">
                <Link to="/"><li>Home</li></Link>
                <Link to="/Service"><li>Our Services</li></Link>
                
                <li>Our Team</li>

                <Link to="/Portfolio"><li>Portfolio</li></Link>
                <Link to="/About_Us"> <li>About Us</li></Link>
               
                
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
