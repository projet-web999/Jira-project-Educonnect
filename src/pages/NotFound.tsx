
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[60vh] text-center px-4 mt-4">
      <div className="text-9xl font-extrabold text-gray-800 flex items-center">
        <span>4</span>
        <Code className="h-24 w-24 mx-2" />
        <span>4</span>
      </div>
      <h2 className="text-3xl font-bold text-gray-700 mt-4">Page Not Found</h2>
      <p className="text-gray-500 max-w-md mt-2">
        The page you're looking for has either been moved or doesn't exist. Check the URL or return to the dashboard.
      </p>
      <div className="mt-4 text-sm text-gray-400 font-mono bg-gray-50 p-2 rounded">
        Error: Route not defined in application router
      </div>
      <Link to="/" className="mt-8">
        <Button size="lg">Return to Dashboard</Button>
      </Link>
    </div>
  );
};

export default NotFound;
