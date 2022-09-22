import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-sky-50 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">
              ForX
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">Categories</div>
      </div>
    </div>
  );
};

export default Header;
