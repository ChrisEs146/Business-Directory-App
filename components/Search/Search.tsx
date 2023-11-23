"use client";
import { FormEvent, useRef } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const inputref = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleValueSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputref.current?.value) {
      console.log("No value");
      return;
    }
    const params = new URLSearchParams(`query=${inputref.current.value}`);
    router.push(`/search?${params.toString()}`);
    inputref.current.value = "";
  };

  return (
    <div className="text-center isolate">
      <form
        className="flex gap-3 items-center justify-center w-full"
        onSubmit={handleValueSearch}
      >
        <input
          type="text"
          name="search"
          required
          minLength={3}
          ref={inputref}
          placeholder="Search anything"
          className="bg-white w-[75%] max-w-lg p-3 border border-gray-500 px-5 rounded-full placeholder:text-gray-700 shadow-sm"
        />
        <button className="bg-red-600 rounded-full p-3 shadow-md cursor-pointer hover:scale-105 transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}
