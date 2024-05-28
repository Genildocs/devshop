"use client";
import Link from "next/link";
import { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <FiAlignJustify
        className="w-[28px] h-[28px] cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute left-0 top-20 w-full h-[calc(100vh-80px)] bg-black text-white flex flex-col items-center justify-center gap-8 text-xl z-10">
          <Link href="/">Home</Link>
          <Link href="/">Shop</Link>
          <Link href="/">Details</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Logout</Link>
          <Link href="/">Cart(1)</Link>
        </div>
      )}
    </div>
  );
}
