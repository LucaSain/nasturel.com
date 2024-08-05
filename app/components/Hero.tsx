import Link from "next/link";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="relative hero min-h-screen z-[999]">
      <div className="hero-content flex-col lg:flex-row justify-center items-center">
        <Image
          height={800}
          width={800}
          alt={"nasturel"}
          src="/nasturel.png"
          className="block sm:hidden w-60 max-w-sm rounded-lg bg-gradient-radial from-base-300 via-transparent to-transparent"
        />
        <Image
          height={800}
          width={800}
          alt={"nasturelnotext"}
          src="/nasturelnotext.png"
          className="hidden sm:block max-w-sm rounded-lg bg-gradient-radial from-base-300 via-transparent to-transparent"
        />
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-4xl hidden sm:block sm:text-5xl font-extrabold">
            Festivalul Nǎsturel
          </h1>
          <p className="py-6 text-center">
            Pregătim cel mai tare festival pentru copii din Romania!
            <br />
            Rezerva-ti un loc gratuit acum si te vom anunța data exactă cat de
            curând!
          </p>
          <Link
            href="/rezerva"
            className="btn btn-primary hover:-translate-y-1 transition-transform duration-200"
          >
            Rezerva-ti gratuit biletul!
          </Link>
          <Link
            href="https://tabere.nasturel.com/"
            className="btn btn-accent hover:-translate-y-1 transition-transform duration-200"
          >
            Pentru tabara urbana click aici!
          </Link>
        </div>
      </div>
    </div>
  );
}
