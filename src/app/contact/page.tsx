import Head from "next/head";
import Link from "next/link";
export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>
      <h1>Contact</h1>
      <p>This is the Contact page</p>
      <p>
        <Link href="/">Go home</Link>
      </p>
    </div>
  );
}
