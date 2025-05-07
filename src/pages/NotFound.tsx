
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[50vh] text-center px-4">
      <h1 className="text-9xl font-extrabold text-gray-800">404</h1>
      <h2 className="text-3xl font-bold text-gray-700 mt-4">Page Not Found</h2>
      <p className="text-gray-500 max-w-md mt-2">
        The page you're looking for doesn't exist or has been moved to another URL.
      </p>
      <Link to="/" className="mt-8">
        <Button size="lg">Return to Dashboard</Button>
      </Link>
    </div>
  );
};

export default NotFound;
