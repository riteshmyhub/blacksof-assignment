import { useState, useRef, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { CircularProgress } from "./CircularProgress";

type ThumbnailProps = {
   title: string;
   imgUrl: string;
   setVideoIndex: () => void;
   isActive: boolean;
};

const Thumbnail = ({ title, imgUrl, setVideoIndex, isActive }: ThumbnailProps) => (
   <button role="button" className={`cursor-pointer ${isActive ? "active-thumbnail" : "thumbnail"}`} onClick={setVideoIndex}>
      <img src={imgUrl} alt={title} className="block mx-auto h-[50px] md:h-[69px] w-[50px] md:w-[69px]" />
      <span className="text-xs md:text-sm font-medium text-center block">{title}</span>
   </button>
);

type VideoCarouselProps = {
   items: any[];
   toggle: boolean;
};

const VideoCarousel = ({ items, toggle }: VideoCarouselProps) => {
   const [progress, setProgress] = useState(0);
   const [isPlaying, setIsPlaying] = useState(true);
   const videoRef = useRef<HTMLVideoElement>(null);
   const [videoIndex, setVideoIndex] = useState(0);
   const current = useMemo(() => items[videoIndex]?.video, [toggle, videoIndex]);

   useEffect(() => {
      if (!videoRef.current) return;
      const video = videoRef.current;

      const handleTimeUpdate = () => {
         const percent = (video.currentTime / video.duration) * 100;
         setProgress(percent || 0);
      };

      video.addEventListener("timeupdate", handleTimeUpdate);
      return () => video.removeEventListener("timeupdate", handleTimeUpdate);
   }, [current]);

   useEffect(() => {
      setVideoIndex(0);
   }, [toggle]);

   useEffect(() => {
      if (!videoRef.current) return;
      if (isPlaying) {
         videoRef.current.play();
      } else {
         videoRef.current.pause();
      }
   }, [isPlaying]);

   const togglePlayPause = () => {
      setIsPlaying((prev) => !prev);
   };

   return (
      <div className="relative w-full">
         <motion.video
            ref={videoRef}
            key={current}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            src={current}
            autoPlay
            muted
            playsInline
            className="h-[160px] md:h-[300px] border w-full"
         />
         {/* Progress Bar */}
         <div className="grid grid-cols-12 items-center">
            <div className="col-span-12 md:col-span-7">
               <div className="flex mt-4 items-center justify-center gap-5">
                  {items.map((item: any, idx: number) => (
                     <Thumbnail key={idx} isActive={videoIndex === idx} imgUrl={item.image} title={item.title} setVideoIndex={() => setVideoIndex(idx)} />
                  ))}
               </div>
            </div>
            <div className="col-span-12 md:col-span-3 mt-3 text-center md:text-end">
               <button onClick={togglePlayPause}>
                  <CircularProgress
                     progress={Math.floor(progress)}
                     icon={
                        isPlaying ? (
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-pause-icon">
                              <rect x="14" y="4" width="4" height="16" rx="1" />
                              <rect x="6" y="4" width="4" height="16" rx="1" />
                           </svg>
                        ) : (
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-play-icon">
                              <polygon points="6 3 20 12 6 21 6 3" />
                           </svg>
                        )
                     }
                  />
               </button>
            </div>
         </div>
      </div>
   );
};

export { VideoCarousel };
