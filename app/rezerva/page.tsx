import { redirect } from "next/navigation";
import { sendEmail } from "../mailjet/mailjet";
import Background from "../components/background";
export default function Rezerva() {
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
        action={async (formData: FormData) => {
          "use server";
          let data: names = {
            nume: "",
            prenume: "",
            telefon: "",
            email: "",
            numar_copii: "",
            numar_adulti: "",
          };
          //create object with keys
          for (let name of names) {
            data[name as keyof names] = formData.get(name) as string;
          }
          console.log(data);
          try {
            await sendEmail({
              subject: "rezervare",
              message: JSON.stringify(data),
            });
          } catch (e) {
            console.error(e);
          }
          redirect("/");
        }}
        className="w-4/5 sm:w-1/3 flex flex-col items-center space-y-4 z-30"
      >
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
