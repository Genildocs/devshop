"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
interface Slides {
  id?: number;
  title?: string;
  description?: string;
  img?: string;
  url?: string;
  bg?: string;
}
export default function Slider() {
  const slides: Slides[] = [
    {
      id: 1,
      title: "Summer sale collections",
      description: "Sale! 50% off on all products",
      img: "https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      url: "/",
      bg: "bg-red-500",
    },
    {
      id: 2,
      title: "Summer sale collections",
      description: "Sale! 50% off on all products",
      img: "https://images.pexels.com/photos/932405/pexels-photo-932405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      url: "/",
      bg: "bg-red-500",
    },
  ];
  const [current, setCurrent] = useState(0);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div className="w-max h-full flex transition-all ease-in-out duration-1000">
        {slides.map(
          (slide: any) => (
            console.log(slide),
            (
              <div
                className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
                key={slide.id}
              >
                {/* Text container */}
                <div className="h-1/2 xl:w-1/2">
                  <h2 className="">{slide.description}</h2>
                  <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
                    {slide.title}
                  </h1>
                  <Link href={slide.url}>
                    <button>Shop Now</button>
                  </Link>
                </div>
                {/* Image container */}
                <div className="h-1/2 xl:w-1/2 relative">
                  <Image
                    src={slide.img}
                    alt="woman"
                    fill
                    sizes="100%"
                    className="object-cover"
                  />
                </div>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
}
