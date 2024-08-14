import Hero from "./components/Hero";
import * as Clouds from "./components/Cloud";
import Background from "./components/background";
import Carousel from "./components/Carousel";
import CarouseSection from "./components/CarouselSection";
export default function Home() {
  const text = (
    <>
      La <b>Năsturel</b>, te așteptăm cu <b>mascotele Minnie și Mikey</b> cu
      costume venite direct din Disneyland,
      <b>jocuri de grădină, jocuri de apă, tragere cu arcul</b>
      pentru copii și pentru adulți,
      <b>ateliere de scrima cu baloane modelabile</b>, ateliere de
      <b>baloane de săpun gigantice</b>, cea mai frumoasă <b>pictura pe față</b>
      făcută de <b>artiștii de la școala de pictura</b> si cele mai faine
      <b>baloane modelate</b> in ce vrei tu. Hai să-ți faci prieteni cu
      <b>jocuri de cunoaștere, de tabără și de echipă</b>, hai la
      <b>
        atelier de magneți de frigider, de pictat pietre și inimi, de
        felicitări, de origami și semne de carte, de povești, de ritm și bătut
        la tobe, hai la ateliere de canto!
      </b>
      Vino și ia-ți prima lecție de <b>schi pe iarba</b>, să fii pregătit la
      iarna! O groaza de <b>spectacole și show-uri</b>, o grămadă de
      <b>personaje mascate</b> te așteaptă! Vino și tu costumat!
    </>
  );
  return (
    <div className="z-0 ">
      <div className=" h-screen w-screen max-w-[100vw] overflow-hidden">
        <Background />
        <Hero />
        <div className=" hidden md:block absolute bottom-10 left-20">
          <img src="arrow2.png" className="w-20" />
        </div>
      </div>
      <div className="relative h-max w-screen bg-base-100 mb-36">
        <div className="absolute z-10 w-64 hidden lg:block right-10 bottom-1/2 sm:right-3 sm:top-48">
          <Clouds.Cloud2 />
        </div>
        <div className="absolute opacity-20 z-10 w-96 left-1/4 bottom-20">
          <Clouds.Cloud3 />
        </div>
        <img
          src="baloon2.svg"
          className="absolute z-10 w-64  bottom-32 left-2 opacity-20 xl:opacity-100 sm:left-20 hover:animate-spin"
        />
        <div className="relative prose prose-sm sm:prose-lg mx-4 sm:mx-auto z-[99] rounded-xl p-10 bg-base-100 bg-opacity-80">
          {text}
        </div>
      </div>
      <CarouseSection />
    </div>
  );
}
