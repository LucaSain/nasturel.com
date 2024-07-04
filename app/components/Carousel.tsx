"use client";
import { useEffect, useState } from "react";
export default function Carousel() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
    window.scrollTo(0, 0);
  }, []);

  //function to stop all videos playing on the page on call
  function stopAllVideos() {
    const videos = document.querySelectorAll("video");
    videos.forEach((video) => {
      video.pause();
    });
  }

  return (
    <div className={loaded ? "carousel w-full h-full" : "hidden"}>
      <div
        id="slide1"
        className="carousel-item relative w-full flex justify-center items-center"
      >
        <img
          src="Carousel1.jpeg"
          className="w-60 h-60 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-xl object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide21" className="btn btn-primary btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-primary btn-circle">
            ❯
          </a>
        </div>
      </div>
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          id={`slide${i + 1}`}
          className="carousel-item relative w-full flex justify-center items-center"
        >
          <img
            src={`Carousel${i + 1}.jpeg`}
            className="w-60 h-60 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-xl object-cover"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href={`#slide${i}`} className="btn btn-primary btn-circle">
              ❮
            </a>
            <a href={`#slide${i + 2}`} className="btn btn-primary btn-circle">
              ❯
            </a>
          </div>
        </div>
      ))}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i + 15}
          id={`slide${i + 15}`}
          className="carousel-item relative w-full flex justify-center items-center"
        >
          <video
            src={`Carousel${i + 1}.mp4`}
            className="w-60 h-60 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-xl object-cover"
            muted
            controls
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              onClick={stopAllVideos}
              href={`#slide${i + 14}`}
              className="btn btn-primary btn-circle"
            >
              ❮
            </a>
            <a
              onClick={stopAllVideos}
              href={`#slide${i + 16}`}
              className="btn btn-primary btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
      <div
        id="slide21"
        className="carousel-item relative w-full flex justify-center items-center"
      >
        <video
          src="Carousel7.mp4"
          className="w-60 h-60 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-xl object-cover"
          muted
          controls
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a
            onClick={stopAllVideos}
            href="#slide20"
            className="btn btn-primary btn-circle"
          >
            ❮
          </a>
          <a
            onClick={stopAllVideos}
            href="#slide1"
            className="btn btn-primary btn-circle"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}
