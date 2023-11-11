"use client";
import { useRouter } from "next/navigation";

const UpdatePlayer = ({ id }: { id: number }) => {
  const router = useRouter();
  return (
    <button
      className="btn btn-success"
      onClick={() => {
        router.push(`/players/update/${id}`);
      }}
    >
      Update
    </button>
  );
};

export default UpdatePlayer;
