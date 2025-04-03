import { Link } from "react-router";

export default function NotFoundPage() {
   return (
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-gray-100 text-gray-800">
         <h1 className="text-6xl font-bold">404</h1>
         <p className="text-xl mt-2">Page Not Found</p>
         <Link to="/" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Go to Home
         </Link>
      </div>
   );
}
