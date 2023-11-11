"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const RegistrationForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  return (
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={async (e) => {
        e.preventDefault();

        if (
          nameRef.current &&
          nameRef.current.value &&
          emailRef.current &&
          emailRef.current.value &&
          passwordRef.current &&
          passwordRef.current.value
        ) {
          await fetch("http://localhost:3000/api/register", {
            method: "POST",
            body: JSON.stringify({
              email: emailRef.current.value,
              name: nameRef.current.value,
              password: passwordRef.current.value,
            }),
          });

          router.push("/");
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
      <button className="btn btn-primary mr-3" type="submit">
        Register
      </button>
      OR
      <button className="btn btn-primary ml-3">
        <Link href="/change-password">Forget Your Password?</Link>
      </button>
    </form>
  );
};

export default RegistrationForm;
