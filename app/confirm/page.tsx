import Link from "next/link";
import Background from "../components/background";

export default function Page() {
  return (
    <div className="h-screen w-screen">
      <Background />
      <div className="relative z-[40] h-full w-full flex flex-col gap-4 justify-center items-center">
        <div className="text-2xl sm:text-4xl">
          Rezervarea ta a fost inregistrata!
        </div>
        <div className="text-2xl">Ne vedem in curand.</div>
        <Link className="btn btn-primary" href="/">
          Acasa
        </Link>
      </div>
    </div>
  );
}
