import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-row justify-between p-24">
      <Link href="/about">About</Link>
      <Link href="/service">Service</Link>
      <Link href="/contact">Contact</Link>
    </main>
  );
}
