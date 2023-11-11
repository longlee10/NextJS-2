import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/authOptions";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      {session && (
        <h1>
          Hello <span>{session.user!.name}</span>
        </h1>
      )}
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}
