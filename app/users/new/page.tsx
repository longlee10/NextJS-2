"use client";
import { useRouter } from "next/navigation";
import React from "react";

const NewUser = () => {
  const router = useRouter();
  return (
    <button className="btn" onClick={() => router.push("/users")}>
      Submit
    </button>
  );
};

export default NewUser;
