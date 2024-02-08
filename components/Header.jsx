"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import MiniCart from "./MiniCart";
import { useState, useEffect, useRef } from "react";
import { useParams, usePathname } from "next/navigation";

export default function Header() {
  const [cart, setCart] = useState(false);
  const cartRef = useRef(null);
  const { slug } = useParams();
  const pathName = usePathname();

  const handleMiniCart = () => {
    setCart((prevCart) => !prevCart);
  };

  const handleClickOutsideCart = (event) => {
    if (cartRef.current && !cartRef.current.contains(event.target)) {
      setCart(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutsideCart);
    return () => {
      document.removeEventListener("click", handleClickOutsideCart);
    };
  }, []);

  return (
    <header>
      <nav className="m-auto flex max-w-screen-lg items-center justify-between border-b-2 border-gray-700 bg-black px-4 py-8 text-sm font-medium text-white">
        <GiHamburgerMenu
          size={20}
          onClick={handleMiniCart}
          className="block md:hidden"
        />
        <div>
          <Link href={"/"}>
            <Image src={Logo} alt="website-logo" priority={true} />
          </Link>
        </div>
        <div className="hidden md:flex">
          <ul className="flex gap-10">
            <li>
              <Link
                href={"/"}
                className={pathName === "/" ? "text-[#d87d4a]" : ""}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                href={"/headphones"}
                className={slug === "headphones" ? "text-[#d87d4a]" : ""}
              >
                HEADPHONES
              </Link>
            </li>
            <li>
              <Link
                href={"/speakers"}
                className={slug === "speakers" ? "text-[#d87d4a]" : ""}
              >
                SPEAKERS
              </Link>
            </li>
            <li>
              <Link
                href={"/earphones"}
                className={slug === "earphones" ? "text-[#d87d4a]" : ""}
              >
                EARPHONES
              </Link>
            </li>
          </ul>
        </div>
        <div className="relative" ref={cartRef}>
          <AiOutlineShoppingCart
            size={24}
            onClick={handleMiniCart}
            className="cursor-pointer"
          />
          {cart && (
            <>
              <div
                className="fixed inset-0 z-10 bg-black opacity-50"
                onClick={handleMiniCart} // Close the MiniCart when clicking on the overlay
              ></div>
              <div className="absolute right-0 top-[76px] z-20 w-[280px] sm:min-w-[320px]">
                <MiniCart />
              </div>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
