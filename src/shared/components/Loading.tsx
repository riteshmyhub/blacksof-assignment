export function Loading() {
   return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-30">
         <div className="flex flex-col items-center space-y-4">
            <div className="w-10 h-10 border-4 border-[#5CD6FF] border-t-transparent rounded-full animate-spin"></div>
            <span className="text-white text-lg">Loading...</span>
         </div>
      </div>
   );
}
