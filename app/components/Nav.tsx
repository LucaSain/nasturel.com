import Link from "next/link";
export default function Nav() {
  return (
    <div className="navbar absolute text-base-content z-[999]">
      <div className="navbar-start">
        <a className="z-10 btn btn-ghost font-bold text-center text-xl text-base-content">
          Festivalul Nasturel
        </a>
      </div>
      {/* <div className="navbar-end">
        <Link href="/rezerva" className="btn btn-primary text-neutral">
          Rezerva acum
        </Link>
      </div> */}
    </div>
  );
}
