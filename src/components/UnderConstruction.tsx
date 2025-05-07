
import { Construction } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface UnderConstructionProps {
  pageName: string;
}

const UnderConstruction = ({ pageName }: UnderConstructionProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="p-4 rounded-full bg-amber-100 mb-4">
        <Construction className="h-12 w-12 text-amber-600" />
      </div>
      <h1 className="text-3xl font-bold text-gray-800">Coming Soon</h1>
      <p className="mt-2 text-lg text-gray-600">
        The <span className="font-semibold">{pageName}</span> page is currently under construction.
      </p>
      <p className="mt-1 mb-6 text-gray-500">
        We're working on making this feature available to you soon.
      </p>
      <Link to="/">
        <Button>
          Return to Dashboard
        </Button>
      </Link>
    </div>
  );
};

export default UnderConstruction;
