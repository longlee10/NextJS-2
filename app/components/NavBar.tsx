"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <nav className="flex space-x-3 mb-3 bg-slate-400 p-4 text-white font-bold">
      <Link href="/">Home</Link>
      <Link href="/products">Products</Link>
      <Link href="/users">Users</Link>
      <Link href="/players">Players</Link>
      <Link href="/register">Register</Link>
      <Link href="/admin">Admin</Link>
      {status === "authenticated" && (
        <div>
          {session.user!.name}
          <Link href="/api/auth/signout" className="ms-3">
            Sign Out
          </Link>
        </div>
      )}
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin">Sign In</Link>
      )}
    </nav>
  );
};

export default NavBar;
