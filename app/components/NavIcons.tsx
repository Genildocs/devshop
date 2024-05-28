"use client";
import { useState } from "react";
import Link from "next/link";
import { IoNotifications } from "react-icons/io5";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { useRouter } from "next/navigation";
import CartModal from "./CartModal";
export default function NavIcons() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const router = useRouter();

  const isLoggedIn = false;
  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }

    setIsProfileOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <BsFillPeopleFill
        className="w-[22px] h-[22px] cursor-pointer"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
          <Link href="/">Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}
      <IoNotifications className="w-[22px] h-[22px] cursor-pointer" />
      <div className="relative cursor-pointer">
        <FaShoppingCart
          className="w-[22px] h-[22px] "
          onClick={() => setIsCartOpen((prev) => !prev)}
        />
        <div className="absolute bottom-4 left-4 bg-red-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center">
          1
        </div>
      </div>

      {isCartOpen && <CartModal />}
    </div>
  );
}
