import { useEffect, useRef, useState } from "react";
import { useData } from "@/context/app.context";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useMediaQuery, useScroll } from "@/shared/hooks";
import { VideoCarousel } from "@/shared/components";

export default function Slider() {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: false, amount: 0.2 });
   const { appData } = useData();
   const scrollPosition = useScroll();
   const viewport = useMediaQuery();
   const data = appData.data;
   const [toggle, setToggle] = useState<"passenger_vehicles" | "heavyduty_vehicles">("passenger_vehicles");

   useEffect(() => {
      if (!viewport.md) return;
      let newToggle = toggle;
      if (scrollPosition.y > 850 && scrollPosition.y < 1300) {
         newToggle = "heavyduty_vehicles";
      } else if (scrollPosition.y >= 600 && scrollPosition.y <= 850) {
         newToggle = "passenger_vehicles";
      }
      if (newToggle !== toggle) {
         setToggle(newToggle);
      }
   }, [scrollPosition.y, viewport.md]);

   return (
      <div //
         className={`p-[20px] md:p-10 bg-black md:h-screen flex items-center justify-center ${scrollPosition.y > 600 && scrollPosition.y < 1300 && viewport.md ? "sticky top-0" : ""}`}>
         <motion.div //
            ref={ref}
            initial={{ y: 200, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full">
            <h2 className="text-center text-xl md:text-4xl font-normal text-white">
               Evolving the drive with <span className="font-semibold">360-degree</span> <br /> nonwoven solutions
            </h2>

            <div className="px-0 md:px-5 grid grid-cols-12 mt-10 items-center">
               {/* Sidebar Navigation */}
               <div className="col-span-12 md:col-span-5">
                  <div className="flex md:block relative">
                     <div
                        className="h-40 w-1 bg-white absolute transition hidden md:block"
                        style={{
                           top: toggle === "passenger_vehicles" ? "0px" : "180px",
                           transition: "all",
                           transitionDuration: "400ms",
                           left: "-1px",
                        }}
                     />
                     {(["passenger_vehicles", "heavyduty_vehicles"] as const).map((type) => (
                        <motion.div
                           key={data[type].title}
                           initial={{ opacity: 0, y: 50 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ duration: 0.5 }}
                           className={`p-2 md:p-9 w-full md:w-auto md:border-l-2 cursor-pointer border-gray-400 ${toggle === type ? "text-white" : "text-gray-400"}`}
                           onClick={() => {
                              setToggle(type);
                           }}>
                           <h3 className="text-sm md:text-2xl font-semibold mb-2">{data[type].title}</h3>
                           <p className="text-[10px] md:text-lg" dangerouslySetInnerHTML={{ __html: data[type].discription }} />
                        </motion.div>
                     ))}
                  </div>
               </div>

               {/* Video Section */}
               <div className="col-span-12 md:col-span-7">
                  <AnimatePresence mode="wait">
                     <VideoCarousel //
                        items={data[toggle]?.parts}
                        toggle={toggle === "passenger_vehicles"}
                     />
                  </AnimatePresence>
               </div>
            </div>
         </motion.div>
      </div>
   );
}
