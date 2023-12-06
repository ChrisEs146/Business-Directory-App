import Link from "next/link";
import Image from "next/image";
export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <Image
        src="/404_not_found.jpg"
        alt="Illustration a 404 number with an astronaut"
        width={300}
        height={300}
      />
      <h1 className="text-4xl font-bold">404</h1>
      <h2 className="text-2xl font-semibold mb-8">Page not found</h2>
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
