"use client";

import Image from "next/image";

export default function CartModal() {
  const cartItems = true;
  return (
    <div className="w-max absolute top-12 right-0 p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div className="text-center">Cart is empty</div>
      ) : (
        <>
          <h2 className="text-xl font-medium">Shopping Cart</h2>
          <div className="flex flex-col gap-8">
            <div className="flex gap-4">
              <Image
                src={
                  "https://images.pexels.com/photos/20348402/pexels-photo-20348402/free-photo-of-mulher-jaqueta-casaco-sorriso.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                width={72}
                height={96}
                alt="cart"
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div>
                  {/* title */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product name</h3>
                    <div className="p-1 bg-gray-100 rounded-sm">$100</div>
                  </div>
                  {/* description */}
                  <div className="text-sm text-gray-500">
                    Lorem ipsum dolor.
                  </div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 1</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
            {/* item */}
            <div className="flex gap-4">
              <Image
                src={
                  "https://images.pexels.com/photos/20348402/pexels-photo-20348402/free-photo-of-mulher-jaqueta-casaco-sorriso.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                width={72}
                height={96}
                alt="cart"
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div>
                  {/* title */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product name</h3>
                    <div className="p-1 bg-gray-100 rounded-sm">$100</div>
                  </div>
                  {/* description */}
                  <div className="text-sm text-gray-500">
                    Lorem ipsum dolor.
                  </div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 1</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between font-semibold">
              <span>Subtotal</span>
              <span>$49</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Shipping and taxes calculated at checkout
            </p>
            <div className="flex justify-between text-sm">
              <button className="bg-transparent border-2 border-solid border-gray-300 text-black py-2 px-4 rounded-md">
                View Cart
              </button>
              <button className="bg-black text-white py-2 px-4 rounded-md hover:bg-slate-600 active:bg-black">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
