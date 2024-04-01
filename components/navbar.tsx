import React from "react";
import { Mail } from "lucide-react";

const Navbar = () => {
  return (
    <div className="px-10 py-8 flex justify-between">
      <div>
        <p className="text-lg font-playfair">
          Sanjay M{" "}
          <span className="text-xs font-satoshim tracking-tight opacity-50">
            Bengaluru, India
          </span>
        </p>
      </div>
      {/* <div className="flex gap-4 items-center text-sm">
        <p>Link</p>
        <p className="h-6 w-6 bg-gray-800 flex justify-center items-center rounded-full">
          <Mail color="white" size={14} />
        </p>
      </div> */}
    </div>
  );
};

export default Navbar;
