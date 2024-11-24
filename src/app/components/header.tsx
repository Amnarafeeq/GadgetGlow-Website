import Link from "next/link";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-around p-4 items-center bg-[#0E2954] text-white max-sm:flex-wrap max-sm:px-0">
      <h1 className="text-3xl font-bold text-[#9dbde7] hover:scale-110 max-sm:mb-3">
        GadgetGlow
      </h1>
      <nav>
        <ul className="flex space-x-5 text-lg text-gray-300 max-sm:text-sm max-sm:space-x-2 ">
          <li>
            <Link href="/" className="hover:underline ">
              Phone
            </Link>
          </li>
          <li>
            <Link href="/phone-case" className="hover:underline">
              PhoneCase
            </Link>
          </li>
          <li>
            <Link href="/watches" className="hover:underline">
              Watches
            </Link>
          </li>
          <li>
            <Link href="/accessories" className="hover:underline">
              Accessories
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex space-x-1 text-2xl items-center text-sky-300 max-sm:hidden">
        <FaShoppingCart className="hover:scale-110" />
        <CiHeart className="hover:scale-110" />
      </div>
    </div>
  );
};

export default Header;
