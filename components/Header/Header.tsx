import Image from "next/image";
import { linkItems } from "./Constants";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 shadow-md">
      <div className="flex gap-2 items-center">
        <Image
          src="/logo.png"
          alt="Discover, business directory logo"
          width={50}
          height={50}
        />
        <h2 className="text-xl text-red-500 tracking-widest font-semibold">
          DISCOVER
        </h2>
      </div>
      <nav>
        <ul className="flex gap-5 items-center">
          {linkItems.map((item) => (
            <li
              className="text-lg hover:text-red-500 cursor-pointer"
              key={item.id}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
