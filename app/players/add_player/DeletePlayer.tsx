"use client";
import { useRouter } from "next/navigation";

const DeletePlayer = ({ id }: { id: number }) => {
  const router = useRouter();
  return (
    <button
      className="btn btn-danger"
      onClick={async () => {
        await fetch(`http://localhost:3000/api/players/${id}`, {
          method: "DELETE",
        });

        router.refresh();
      }}
    >
      Delete
    </button>
  );
};

export default DeletePlayer;
