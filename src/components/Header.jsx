"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import Image from "next/image";
import Logo from "../../public/logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  const { slug } = useParams();

  return (
    <header>
      <nav className="m-auto max-w-screen-lg bg-black text-white text-sm font-medium py-8 border-b-2 border-gray-700 flex items-center justify-between">
        <div className="">
          <Link href={"/"}>
            <Image src={Logo} alt="website-logo" priority={true} />
          </Link>
        </div>
        <div>
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
        <div>
          <Link href={"/"}>
            <AiOutlineShoppingCart size={24} />
          </Link>
        </div>
      </nav>
      {slug === "headphones" || slug === "earphones" || slug === "speakers" ? (
        <div className="text-white max-w-screen-lg m-auto py-16">
          <h1 className="text-4xl font-bold text-center">
            {slug.toUpperCase()}
          </h1>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
