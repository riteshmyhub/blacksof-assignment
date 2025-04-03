import { Route, Routes } from "react-router";
import NotFoundPage from "./not-found/not-found.page";
import React from "react";
import { Loading } from "@/shared/components";

const LandingPage = React.lazy(() => import("./landing/landing.page"));
export default function AppRouting() {
   return (
      <Routes>
         <Route
            index
            element={
               <React.Suspense fallback={<Loading />}>
                  <LandingPage />
               </React.Suspense>
            }
         />
         <Route path="*" element={<NotFoundPage />} />
      </Routes>
   );
}
