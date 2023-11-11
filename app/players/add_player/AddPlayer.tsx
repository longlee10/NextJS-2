"use client";
import { useRouter } from "next/navigation";

const AddPlayer = () => {
  const router = useRouter();
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        router.push("/players/add_player");
      }}
    >
      Add Player
    </button>
  );
};

export default AddPlayer;
