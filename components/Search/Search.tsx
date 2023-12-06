"use client";
import { FormEvent, useRef } from "react";
import { useRouter } from "next/navigation";
import { ICONS } from "../../Utils/Icons";

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
          {ICONS.searchIcon}
        </button>
      </form>
    </div>
  );
}
