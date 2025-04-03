export default function Banner() {
   return (
      <section className="h-[50vh] sm:h-[60vh] md:h-[80vh] lg:h-screen w-full relative">
         <video //
            src={"/videos/landing-bg.mp4"}
            autoPlay
            muted
            playsInline
            loop
            className="h-full w-full object-cover"
         />
         <div className="h-full w-full flex items-center justify-center absolute top-0 left-0" style={{ background: "rgb(0 0 0/0.6)" }}>
            <div className="p-4">
               <span className="text-white text-center text-[18px] md:text-[22px] font-normal block">Performance in motion</span>
               <h1 className="text-white text-center text-[25px] md:text-[48px] font-thin">
                  <span className="font-semibold">
                     Soft Trims and <span className="text-[#00BFFF]">NVH Solutions</span>{" "}
                  </span>{" "}
                  <br className=" hidden md:block" />
                  for seamless rides
               </h1>
            </div>
         </div>
      </section>
   );
}
