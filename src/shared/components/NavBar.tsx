import { useData } from "@/context/app.context";
import { useState, useEffect } from "react";
import { Link } from "react-router";

export function NavBar() {
   const [isVisible, setIsVisible] = useState(true);
   const [lastScrollY, setLastScrollY] = useState(0);
   const { appData } = useData();
   const logo = appData.data.app_logo;

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > lastScrollY) {
            setIsVisible(false); // Hide navbar on scroll down
         } else {
            setIsVisible(true); // Show navbar on scroll up
         }
         setLastScrollY(window.scrollY);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, [lastScrollY]);

   return (
      <div className={`bg-white h-[80px] flex px-3 items-center md:px-40 fixed w-full top-0 left-0 z-10 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
         <div className="flex justify-between items-center w-full">
            <div>
               <Link to="/">
                  <img src={logo} alt="logo" className="w-[120px] md:w-[148px] h-[44px]" />
               </Link>
            </div>
            <div className="flex gap-2 md:gap-6 items-center">
               <button className="font-semibold text-xs md:text-[16px] bg-[#5CD6FF] h-[30px]  md:h-[50px] rounded-4xl cursor-pointer w-[100px] md:w-[145px] border border-[#00BFFF]">Contact Us</button>
               <Link to="/">
                  <img src="/icons/linkedin.svg" alt="linkedin" />
               </Link>
               <Link to="/">
                  <img src="/icons/lang.svg" alt="lang" />
               </Link>
            </div>
         </div>
      </div>
   );
}
