import { Loading } from "@/shared/components";
import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext(
   {} as {
      appData: {
         isLoading: boolean;
         data: any;
      };
   }
);
function AppProvider({ children }: { children: React.ReactNode }) {
   const [appData, setAppData] = useState({
      isLoading: true,
      data: null,
   });

   const getAppData = async () => {
      try {
         setAppData((prev) => ({ ...prev, isLoading: true }));
         const { data } = await axios.get("/jsons/app.data.json");
         setAppData((prev) => ({ ...prev, data: data }));
      } catch (error) {
         setAppData((prev) => ({ ...prev, data: null }));
      } finally {
         setAppData((prev) => ({ ...prev, isLoading: false }));
      }
   };

   useEffect(() => {
      getAppData();
      return () => {};
   }, []);
   if (appData.isLoading) {
      return <Loading />;
   }
   return (
      <AppContext.Provider value={{ appData }}>
         {/*  */}
         {children}
         {/*  */}
      </AppContext.Provider>
   );
}

function useData() {
   return useContext(AppContext);
}
export { AppProvider, useData };
