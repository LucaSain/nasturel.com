import * as Clouds from "./Cloud";
import Carousel from "./Carousel";
import Image from "next/image";

export default function CarouseSection() {
  return (
    <div className="h-max sm:h-screen w-screen relative -mt-28 overflow-hidden flex flex-row justify-center items-center p-3">
      <div className="h-screen w-screen absolute">
        <div className="absolute z-10 w-64 hidden sm:block right-3 bottom-1/2 sm:right-3 sm:top-48 ">
          <Clouds.Cloud2 />
        </div>
      </div>
      <div className="w-screen absolute z-40 flex flex-row justify-center items-center">
        <Carousel />
      </div>
      <div className="w-full h-full"></div>
      <Image
        alt="baloon"
        height={400}
        width={400}
        src="baloon2.svg"
        className="relative w-full z-30"
      />

      <div className="absolute hidden sm:block transition-all duration-700 z-10 w-96 top-10 left-40 rotate-180">
        <Clouds.Cloud7 />
      </div>
      <div className="absolute z-10 w-96 left-1/4 bottom-20">
        <Clouds.Cloud3 />
      </div>
    </div>
  );
}
