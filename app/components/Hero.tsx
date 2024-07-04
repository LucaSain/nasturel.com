import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero z-[99 ] min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 id="test" className="text-5xl font-bold">
            Sal'tare
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <a href="#test"></a>
          <Link
            href="/rezerva"
            className="btn hover:scale-125 transition-all btn-primary"
          >
            Rezerva acum
          </Link>
        </div>
      </div>
    </div>
  );
}
