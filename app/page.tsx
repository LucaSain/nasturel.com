import Hero from "./components/Hero";
import * as Clouds from "./components/Cloud";
import Background from "./components/background";
import Carousel from "./components/Carousel";
import CarouseSection from "./components/CarouselSection";
export default function Home() {
  const text =
    "La Năsturel, te așteptăm cu mascotele Minnie și Mikey cu costume venite direct din Disneyland, jocuri de grădină, jocuri de apă, tragere cu arcul pentru copii și pentru adulți, ateliere de scrima cu baloane modelabile, ateliere de baloane  de săpun gigantice, cea mai frumoasă pictura pe față făcută de artiștii de la școala de pictura si cele mai faine baloane modelate in ce vrei tu. Hai să-ți faci prieteni cu jocuri de cunoaștere, de tabără și de echipă, hai la atelier de magneți de frigider, de pictat pietre și inimi, de felicitări, de origami și semne de carte, de povești, de ritm și bătut la tobe, hai la ateliere de canto! Vino și ia-ți prima lecție de schi pe iarba, să fii pregătit la iarna! O groaza de spectacole și show-uri, o grămadă de personaje mascate te așteaptă! Vino și tu costumat!";
  return (
    <div className="z-0 overflow-hidden">
      <div className="h-screen w-screen">
        <Background />
        <Hero />
      </div>
      <div className="relative h-max w-screen bg-base-100 mb-36">
        <div className="absolute z-10 w-64 hidden lg:block right-10 bottom-1/2 sm:right-3 sm:top-48 rotate-180">
          <Clouds.Cloud2 />
        </div>
        <div className="absolute opacity-20 z-10 w-96 left-1/4 bottom-20">
          <Clouds.Cloud3 />
        </div>
        <img
          src="baloon2.svg"
          className="absolute z-10 w-64  bottom-32 left-2 opacity-20 xl:opacity-100 sm:left-20 hover:animate-spin"
        />
        <div className="relative prose  prose-sm sm:prose-lg mx-4 sm:mx-auto z-[99] rounded-xl p-10">
          {text}
        </div>
      </div>
      <CarouseSection />
    </div>
  );
}
