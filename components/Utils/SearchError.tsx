import Link from "next/link";
import Image from "next/image";
export default function SearchError() {
  return (
    <section className="flex flex-col items-center justify-center">
      <Image
        src="/error.jpg"
        alt="Tiny people operating on a computer"
        width={300}
        height={300}
      />
      <h1 className="text-4xl font-bold">Oops</h1>
      <h2 className="text-2xl font-semibold mb-8">Something went wrong</h2>
      <Link
        className="font-semibold text-white bg-red-500 p-3 rounded-md"
        href="/"
        title="Go to Homepage"
      >
        Go to Homepage
      </Link>
    </section>
  );
}
