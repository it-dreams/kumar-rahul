import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Blog",
};

export default function Page() {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/Blog">Blog</Link>
        <Link href="/dashboard">Dashboard</Link>
      </nav>
    </div>
  );
}
