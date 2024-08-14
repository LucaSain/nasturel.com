"use client";
import { Suspense, useEffect, useState } from "react";
import Image from "next/image";
export default function Carousel() {
  //function to stop all videos playing on the page on call
  function stopAllVideos() {
    const videos = document.querySelectorAll("video");
    videos.forEach((video) => {
      video.pause();
    });
  }

  //build a carousel with react
  const carouselItems = [
    ...Array.from({ length: 7 }).map((_, i) => "/Carousel" + (i + 1) + ".jpeg"),
    ...Array.from({ length: 7 }).map((_, i) => "/Carousel" + (i + 1) + ".mp4"),
  ];
  const [currentItem, setCurrentItem] = useState<number>(1);
  return (
    <div className="carousel relative w-screen h-[500px] sm:h-[700px] flex justify-center items-center ">
      <Suspense
        fallback={
          <div className="h-full w-full flex justify-center items-center bg-primary bg-opacity-45 rounded-xl">
            <div className="loading-spinner "></div>
          </div>
        }
      >
        {
          //add all the items in the carousel and make them hidden except the current item
          carouselItems.map((item, index) => (
            <div
              key={index}
              className={`absolute max-w-[80%] sm:max-w-[60%]  w-screen aspect-square h-full flex justify-center items-center ${
                index === currentItem ? "block" : "hidden"
              }`}
            >
              {item.includes(".jpeg") ? (
                <Image
                  width={1000}
                  height={1000}
                  alt={item}
                  src={item}
                  className=" shadow-xl transition-all h-full w-full rounded-xl object-cover"
                />
              ) : (
                <video
                  className="relative shadow-xl h-full w-full rounded-xl object-cover z-[999] "
                  muted
                  controls
                  autoPlay
                >
                  <source src={item} type="video/mp4" />
                </video>
              )}
            </div>
          ))
        }
      </Suspense>
      <div className="z-[9999] absolute left-5 right-5 top-[90%] sm:top-1/2 flex -translate-y-1/2 transform justify-between sm:justify-around">
        <button
          onClick={() => {
            stopAllVideos();
            currentItem === 0
              ? setCurrentItem(carouselItems.length - 1)
              : setCurrentItem((currentItem - 1) % carouselItems.length);
          }}
          className="btn shadow-xl btn-primary btn-circle"
        >
          ❮
        </button>
        <button
          onClick={() => {
            stopAllVideos();
            setCurrentItem((currentItem + 1) % carouselItems.length);
          }}
          className="btn shadow-xl btn-primary btn-circle"
        >
          ❯
        </button>
      </div>
    </div>
  );
}
