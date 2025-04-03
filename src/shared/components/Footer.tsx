import { useData } from "@/context/app.context";
import { Link } from "react-router";

export function Footer() {
   const { appData } = useData();
   const footer = appData.data?.footer;
   return (
      <div className="py-5 md:py-[80px] background-image">
         <div className="w-[90%] md:w-[70%] mx-auto">
            <div className="mb-[40px]">
               <img src="/images/logo.svg" alt="logo" className="w-[226px] h-[63px] block mx-auto md:mx-0" />
            </div>
            <div className="grid grid-cols-12">
               {footer?.list?.map((item: any, idx: number) => (
                  <div key={`main-list-${idx}`} className="col-span-6 md:col-span-3">
                     <h3 className="mt-6 md:mt-0 mb-[20px] font-bold uppercase text-[16px]">{item?.heading}</h3>
                     <ul>
                        {item?.links.map((li: any, idx: number) => (
                           <li key={`${item?.heading}-${idx}`} className="text-[14px] font-normal mb-2">
                              <Link to="/">{li?.title}</Link>
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}
               <div className="col-span-12 md:col-span-6">
                  <span className="text-[14px] font-normal block mt-[40px] text-center md:text-start">{footer?.copyright}</span>
               </div>
               <div className="hidden md:block md:col-span-6">
                  <span className="text-[14px] font-normal block mt-[40px] ">{footer?.location}</span>
               </div>
            </div>
         </div>
      </div>
   );
}
