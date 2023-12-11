import Image from "next/image";
import React from "react";
import Logo from "../../public/logo.svg";
import Link from "next/link";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="">
      <div className="max-w-screen-lg pt-20 pb-8 m-auto">
        <div className="flex items-center justify-between">
          <Image src={Logo} alt="website-logo" priority={true} />
          <div className="text-white text-sm">
            <ul className="flex gap-10">
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
        <div className="flex justify-between items-center pt-10">
          <div className="text-[#979797] w-3/6">
            <p className="pb-20">
              Audiophile is an all in one stop to fulfill your audio needs.
              We&apos;re a small team of music lovers and sound specialists who
              are devoted to helping you get the most out of personal audio.
              Come and visit our demo facility - we’re open 7 days a week.
            </p>
            <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
          </div>
          <div className="w-3/6 flex items-end justify-end gap-5">
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
};

export default Footer;
