import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="p-2 shadow-md">
      <div className="flex justify-between items-center max-w-7xl my-0 mx-auto">
        <Link className="flex gap-2 items-center" href="/" title="Homepage">
          <Image
            src="/logo.png"
            alt="Discover, business directory logo"
            width={40}
            height={40}
          />
          <h2 className="text-xl text-red-500 tracking-widest font-semibold">
            DISCOVER
          </h2>
        </Link>
        <nav>
          <Link
            href="/about"
            className="text-lg hover:text-red-500 p-2 border-2 border-red-500 rounded-full"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
