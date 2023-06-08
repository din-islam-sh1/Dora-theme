"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../img/logo.png";

function Navbar() {
  return (
    <nav>
      <div className="bg-transparent  w-full">
        <div className="container mx-auto">
          <div className="flex justify-between py-4">
            <div className="">
              <Image src={logo} alt="logo" />
            </div>

            <div className="flex items-center">
              <ul className="flex gap-7">
                <li className="text-xl">
                  <Link href={"#"}>Home</Link>
                </li>

                <li className="text-xl">
                  <Link href={"#"}>Services</Link>
                </li>

                <li className="text-xl">
                  <Link href={"#"}>Works</Link>
                </li>

                <li className="text-xl">
                  <Link href={"#"}>Blog</Link>
                </li>

                <li className="text-xl">
                  <Link href={"#"}>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
