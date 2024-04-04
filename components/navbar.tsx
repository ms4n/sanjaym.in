import React from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <div className="py-8 flex justify-between font-satoshim">
      <div>
        <p className="text-lg font-playfair">Sanjay M</p>
        <p className="text-xs font-satoshim tracking-tight opacity-50 leading-none">
          Bengaluru, India
        </p>
      </div>
      <div className="flex gap-2 items-center text-sm">
        <Menu color="black" size={24} />
      </div>
    </div>
  );
};

export default Navbar;
