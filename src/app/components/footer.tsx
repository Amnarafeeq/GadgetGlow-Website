import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0E2954] mt-20 p-5 flex flex-col items-center ">
      <p className="text-xl text-center text-sky-500">
        {" "}
        © 2024 by Amna. All rights reserved.
      </p>
      <div className="flex justify-center gap-5 my-3 text-3xl text-white">
        <Link href="" className="hover:text-sky-600">
          <FaLinkedin />
        </Link>
        <Link href="" className="hover:text-gray-500">
          <FaGithub />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
