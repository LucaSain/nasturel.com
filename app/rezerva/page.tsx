"use client";
import submit from "../actions";
import Background from "../components/background";
import { useState } from "react";
export default function Rezerva() {
  const [loading, setLoading] = useState(false);
  //Nume preune telefon adresa mail numar de copii numar de adulti
  interface names {
    nume: string;
    prenume: string;
    telefon: string;
    email: string;
    numar_copii: string;
    numar_adulti: string;
  }
  const names = [
    "nume",
    "prenume",
    "telefon",
    "email",
    "numar_copii",
    "numar_adulti",
  ];
  const formElements = [
    <input
      key="nume"
      name="nume"
      required
      type="text"
      placeholder="Nume"
      className="input w-full input-primary"
    />,
    <input
      key="prenume"
      name="prenume"
      required
      type="text"
      placeholder="Prenume"
      className="input w-full input-primary"
    />,
    <input
      key="telefon"
      name="telefon"
      required
      type="text"
      placeholder="Telefon"
      className="input w-full input-primary"
    />,
    <input
      key="email"
      name="email"
      required
      type="email"
      placeholder="Adresa de mail"
      className="input w-full input-primary"
    />,
    <div key="nr" className=" flex flex-col sm:flex-row gap-4">
      <input
        name="numar_copii"
        required
        type="number"
        placeholder="Numar copii"
        className="input w-full input-primary"
      />
      <input
        name="numar_adulti"
        required
        type="number"
        placeholder="Numar adulti"
        className="input w-full input-primary"
      />
    </div>,
  ];
  return (
    <div className="h-screen w-screen flex items-center flex-col justify-center sm:justify-around">
      <Background />
      <div className="mb-10 sm:-mb-20 text-center z-30 bg-base-100  bg-opacity-50 rounded-lg p-5">
        <h1 className="text-3xl sm:text-5xl font-bold text-white sm:text-base-content">
          Rezerva acum!
        </h1>
        <h2 className="text-white sm:text-base-content mt-4">
          Completeaza formularul de mai jos:
        </h2>
      </div>
      <form
        onSubmit={() => {
          setLoading(true);
        }}
        action={submit}
        className="w-4/5 relative h-max sm:w-1/3 flex flex-col items-center space-y-4 z-30"
      >
        {loading && (
          <div className="absolute bg-primary opacity-35 rounded-xl z-[999] h-full w-full flex justify-center">
            <span className="loading loading-spinner loading-xl text-neutral-content scale-110"></span>
          </div>
        )}

        {formElements.map((formelement) => {
          return (
            <div className="w-full" key={formElements.indexOf(formelement)}>
              {formelement}
            </div>
          );
        })}
        <button type="submit" className="btn btn-primary">
          Rezerva
        </button>
      </form>
    </div>
  );
}
