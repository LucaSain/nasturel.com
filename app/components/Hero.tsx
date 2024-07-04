import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative hero min-h-screen z-[999]">
      <div className="hero-content flex-col lg:flex-row justify-center items-center">
        <img
          src="nasturel.png"
          className="block sm:hidden w-60 max-w-sm rounded-lg bg-gradient-radial from-base-300 via-transparent to-transparent"
        />
        <img
          src="nasturelnotext.png"
          className="hidden sm:block max-w-sm rounded-lg bg-gradient-radial from-base-300 via-transparent to-transparent"
        />
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl hidden sm:block sm:text-5xl font-extrabold">
            Festivalul Nǎsturel
          </h1>
          <p className="py-6 text-center">
            Hai la cel mai tare festival pentru copiii din Romania!
          </p>
          <Link href="/rezerva" className="btn btn-primary">
            Rezerva un bilet gratuit
          </Link>
        </div>
      </div>
    </div>
  );
}
