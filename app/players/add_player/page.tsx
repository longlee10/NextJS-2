"use client";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const AddNewPlayer = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const numberRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  return (
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={async (e) => {
        e.preventDefault();

        if (
          nameRef.current &&
          nameRef.current.value &&
          numberRef.current &&
          numberRef.current.value
        ) {
          const name = nameRef.current.value;
          const number = parseInt(numberRef.current.value);

          await fetch("http://localhost:3000/api/players", {
            method: "POST",
            body: JSON.stringify({ name: name, number: number }),
          });

          nameRef.current.value = "";
          numberRef.current.value = "";
          router.push("/players");
          router.refresh();
        }
      }}
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="shadow border rounded w-full py-2 px-3 text-gray-700"
          id="name"
          type="text"
          name="name"
          ref={nameRef}
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="number"
        >
          Number
        </label>
        <input
          className="shadow border rounded w-full py-2 px-3 text-gray-700 mb-3"
          id="number"
          type="number"
          name="number"
          ref={numberRef}
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Add Player
      </button>
    </form>
  );
};

export default AddNewPlayer;
