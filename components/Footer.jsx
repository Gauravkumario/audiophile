import Image from "next/image";
import React from "react";
import Logo from "../public/logo.svg";
import Link from "next/link";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="w-full px-4">
      <div className="m-auto max-w-screen-lg pb-8 pt-10 sm:pt-20">
        <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-between">
          <Image src={Logo} alt="website-logo" priority={true} />
          <div className="mt-8 text-sm text-white sm:m-0">
            <ul className="flex flex-col items-center gap-x-10 gap-y-8 sm:flex-row">
              <li>
                <Link href={"/"}>HOME</Link>
              </li>
              <li>
                <Link href={"/headphones"}>HEADPHONES</Link>
              </li>
              <li>
                <Link href={"/speakers"}>SPEAKERS</Link>
              </li>
              <li>
                <Link href={"/earphones"}>EARPHONES</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="block items-center justify-between px-4 pt-10 sm:flex sm:px-0">
          <div className="mb-4 w-full text-center text-[#979797] sm:mb-0 sm:w-3/6 sm:text-left">
            <p className="pb-8 sm:pb-20">
              Audiophile is an all in one stop to fulfill your audio needs.
              We&apos;re a small team of music lovers and sound specialists who
              are devoted to helping you get the most out of personal audio.
              Come and visit our demo facility - we’re open 7 days a week.
            </p>
            <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
          </div>
          <div className="flex w-full items-end justify-center gap-5 sm:w-3/6 sm:justify-end">
            <Link href={"/"}>
              <ImFacebook2 size={24} color="#fff" />
            </Link>
            <Link href={"/"}>
              <FaTwitter size={24} color="#fff" />
            </Link>
            <Link href={"/"}>
              <BsInstagram size={24} color="#fff" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
