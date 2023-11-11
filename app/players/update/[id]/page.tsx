"use client";
import { useEffect, useRef, useState } from "react";
import { Player } from "../../page";
import { useRouter } from "next/navigation";

interface Props {
  params: { id: number };
}

const UpdatePage = ({ params: { id } }: Props) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const numberRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [player, setPlayer] = useState<Player>({} as Player);

  useEffect(() => {
    const fetchPlayer = async () => {
      const res = await fetch(`http://localhost:3000/api/players/${id}`);
      res.json().then((player: Player) => setPlayer(player));
    };

    fetchPlayer();
  }, []);

  return (
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={async (e) => {
        e.preventDefault();

        const name = nameRef.current!.value;
        const number = numberRef.current!.value;

        await fetch(`http://localhost:3000/api/players/${id}`, {
          method: "PUT",
          body: JSON.stringify({ name: name, number: parseInt(number) }),
        });

        router.push("/players");
        router.refresh();
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
          defaultValue={player.name}
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
          defaultValue={player.number}
          ref={numberRef}
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Update Player
      </button>
    </form>
  );
};

export default UpdatePage;
