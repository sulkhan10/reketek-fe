import Head from "next/head";
import Link from "next/link";
export default function Service() {
  return (
    <div>
      <Head>
        <title>Service</title>
      </Head>
      <h1>Service</h1>
      <p>This is the Service page</p>
      <p>
        <Link href="/">Go home</Link>
      </p>
    </div>
  );
}
