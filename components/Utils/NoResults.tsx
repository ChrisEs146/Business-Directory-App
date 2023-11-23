import Link from "next/link";
import Image from "next/image";

export default function NoResults() {
  return (
    <section className="flex flex-col items-center justify-center">
      <Image
        src="/no_results.jpg"
        alt="Illustration of a woman looking at a file"
        width={300}
        height={300}
      />
      <h2 className="text-2xl font-semibold mb-8">No results found</h2>
      <Link
        className="font-semibold text-white bg-red-500 p-3 rounded-md"
        href="/"
        title="Go to Homepage"
      >
        Go back to Homepage
      </Link>
    </section>
  );
}
