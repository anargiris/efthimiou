import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="z-10 w-full border-b border-gray-800 font-neohel bg-black text-white">
      <div className="max-w-5xl lg:max-w-full mx-auto p-4 flex md:flex-row flex-col justify-between">
        <Link href="/">
          <a className="text-xl">ΕΥΘΥΜΙΟΥ - ΞΥΛΕΙΑ ΚΑΣΤΑΝΙΑΣ</a>
        </Link>

        <div>
          <ul className="flex gap-5 mt-1">
            <Link href="/">
              <motion.li
                className="cursor-pointer hover:text-yellow-700 transition duration-200"
                whileTap={{ scale: 0.9 }}
              >
                ΑΡΧΙΚΗ
              </motion.li>
            </Link>
            <Link href="/proionta">
              <motion.li
                className="cursor-pointer hover:text-yellow-700 transition duration-200"
                whileTap={{ scale: 0.9 }}
              >
                ΠΡΟΙΟΝΤΑ
              </motion.li>
            </Link>
            <Link href="/epikoinwnia">
              <motion.li
                className="cursor-pointer hover:text-yellow-700 transition duration-200"
                whileTap={{ scale: 0.9 }}
              >
                ΕΠΙΚΟΙΝΩΝΙΑ
              </motion.li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
