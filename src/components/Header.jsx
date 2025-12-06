"use client"
import Image from "next/image";
import Container from "./Container";
import Link from "next/link";
import { BaggageClaim, User } from "lucide-react";
import { useCart } from "@/context/CartContext";


const Header = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  return (
    <div className="py-4 border-b mb-10">
      <Container>
        <header className="flex flex-col md:flex-row items-start justify-between gap-2">
          <Link href={"/"}>
            <Image
              src="/images/logo.png"
              alt="Berry logo"
              width={260}
              height={120}
              priority
              className="w-26 sm:w-26 md:w-26 lg:w-26 h-auto"
            />
          </Link>

          <form className="w-full sm:w-auto sm:flex-1 sm:mx-4 sm:mt-0">
            <input
              type="text"
              name="query"
              placeholder="Search for products"
              className="bg-gray-50 text-gray-800 px-4 py-2.5 focus:outline-hidden focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 border border-gray-200 w-full max-w-4xl rounded-md hoverEffect"
            />
          </form>
          <div className="flex flex-row items-center justify-between gap-3">
            <Link
              href={"/cart"}
              className="flex flex-row items-center justify-between gap-1 bg-white rounded-lg border border-gray-200 px-2 py-2 shadow-md"
            >
              <BaggageClaim size={24} className="text-purple-400" />
              <div className="flex flex-col items-center justify-between ">
                <p className="text-xs text-gray-600">{totalItems} Items</p>
                <p className="text-xs text-gray-600 font-bold">Cart </p>
              </div>
            </Link>
            <Link
              href={"/login"}
              className="flex flex-row items-center justify-between gap-1 bg-white rounded-lg border border-gray-200 px-2 py-2 shadow-md"
            >
              <User size={24} className="text-purple-400" />
              <div className="flex flex-col items-center justify-between ">
                <p className="text-xs text-gray-600">Account</p>
                <p className="text-xs text-gray-600 font-bold">Login</p>
              </div>
            </Link>
          </div>
        </header>
      </Container>
    </div>
  );
};

export default Header;
