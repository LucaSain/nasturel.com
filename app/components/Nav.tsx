import Link from "next/link";
export default function Nav() {
  return (
    <div className="navbar absolute text-base-content z-[999] overflow-x-hidden">
      <div className="navbar-start">
        <Link
          href="/"
          className="z-10 btn btn-ghost font-bold text-center text-xl text-base-content"
        >
          Festivalul <br className="sm:hidden" /> Nasturel
        </Link>
      </div>
      {/* <div className="navbar-end">
        <Link href="/rezerva" className="btn btn-primary text-neutral">
          Rezerva acum
        </Link>
      </div> */}
    </div>
  );
}
