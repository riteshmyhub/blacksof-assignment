import { JSX } from "react";

export function CircularProgress({ progress, color = "text-white", icon }: { progress: number; color?: string; icon?: JSX.Element }) {
   const radius = 16;
   const circumference = 2 * Math.PI * radius;
   const offset = circumference * (1 - progress / 100);

   return (
      <div className="relative h-[58px] w-[58px] inline-block">
         <svg className="h-full w-full" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
            {/* Background Circle */}
            <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-[#999999] dark:text-gray-700" strokeWidth="2" />

            {/* Progress Circle */}
            <circle cx="18" cy="18" r="16" fill="none" className={`stroke-current ${color}`} strokeWidth="2" strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" style={{
                transition:"all",
                transitionDuration:"100ms"
            }} />
         </svg>

         {/* Centered Progress Text */}
         <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white">{icon}</div>
      </div>
   );
}
