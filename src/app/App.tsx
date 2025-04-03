
import AppRouting from "./app.routing";
import { Footer, NavBar } from "@/shared/components";
import { AppProvider } from "@/context/app.context";

export default function App() {
   return (
      <AppProvider>
         <NavBar />
         <AppRouting />
         <Footer />
      </AppProvider>
   );
}
