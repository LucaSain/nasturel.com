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
    <div className="carousel relative w-full h-96 flex justify-center items-center ">
      <Suspense fallback={<div>loading</div>}>
        {
          //add all the items in the carousel and make them hidden except the current item
          carouselItems.map((item, index) => (
            <div
              key={index}
              className={`absolute w-full h-max flex justify-center items-center ${
                index === currentItem ? "block" : "hidden"
              }`}
            >
              {item.includes(".jpeg") ? (
                <Image
                  width={400}
                  height={400}
                  alt={item}
                  src={item}
                  className=" shadow-xl transition-all w-60 h-60 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-xl object-cover"
                />
              ) : (
                <video
                  className=" relative shadow-xl w-60 h-60 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-xl object-cover z-[999] "
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
      <div className="z-[99] absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
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
