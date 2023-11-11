"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";

const ChangePassword = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  return (
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={async (e) => {
        e.preventDefault();

        if (
          emailRef.current &&
          emailRef.current.value &&
          passwordRef.current &&
          passwordRef.current.value
        ) {
          await fetch("http://localhost:3000/api/change-password", {
            method: "PUT",
            body: JSON.stringify({
              email: emailRef.current.value,
              password: passwordRef.current.value,
            }),
          });

          router.push("/register");
        }
      }}
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="shadow border rounded w-full py-2 px-3 text-gray-700"
          id="email"
          type="text"
          name="email"
          ref={emailRef}
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="shadow border rounded w-full py-2 px-3 text-gray-700 mb-3"
          id="password"
          type="password"
          name="password"
          ref={passwordRef}
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Change Password
      </button>
    </form>
  );
};

export default ChangePassword;
