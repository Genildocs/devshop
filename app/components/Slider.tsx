'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
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
      title: 'Summer sale collections',
      description: 'Sale! 50% off on all products',
      img: 'https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      url: '/',
      bg: 'bg-gradient-to-r from-yellow-50 to-pink-50',
    },
    {
      id: 2,
      title: 'Summer sale collections',
      description: 'Sale! 50% off on all products',
      img: 'https://images.pexels.com/photos/932405/pexels-photo-932405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      url: '/',
      bg: 'bg-gradient-to-r from-yellow-50 to-pink-50',
    },
    {
      id: 3,
      title: 'Summer sale collections',
      description: 'Sale! 50% off on all products',
      img: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: '/',
      bg: 'bg-gradient-to-r from-blue-50 to-yellow-50',
    },
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}>
        {slides.map((slide: any) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
            key={slide.id}>
            {/* Text container */}
            <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                {slide.description}
              </h2>
              <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <button className="bg-black text-white px-4 py-3 rounded-md uppercase">
                  Shop Now
                </button>
              </Link>
            </div>
            {/* Image container */}
            <div className="h-1/2 xl:w-1/2 xl:h-full relative ">
              <Image
                src={slide.img}
                alt="woman"
                fill
                sizes="100%"
                className="object-cover !h-auto"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              current === index ? 'scale-150' : ''
            }`}
            onClick={() => setCurrent(index)}>
            {current === index && (
              <div className="w-[6px] h-[6px] rounded-full bg-gray-600" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
