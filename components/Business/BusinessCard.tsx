"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { PlaceProps } from "./BusinessComponent.types";
export default function BusinessCard({
  name,
  address,
  rating,
  photo,
  onClick,
}: PlaceProps) {
  const [img, setImg] = useState<string>("");

  useEffect(() => {
    if (!photo) return;

    const abortCtr = new AbortController();
    const signal = abortCtr.signal;

    const getPhoto = async () => {
      try {
        const res = await fetch(`/api/places/photo?reference=${photo}`, {
          signal,
        });
        const blob = await res.blob();
        setImg(URL.createObjectURL(blob));
      } catch (error: unknown) {
        console.error(error);
      }
    };

    getPhoto();

    return () => abortCtr.abort();
  }, []);

  return (
    <div
      onClick={onClick}
      title={name}
      className="bg-white rounded-lg shadow-md border border-cyan-700 cursor-pointer self-stretch min-h-fit w-64"
    >
      <Image
        className="rounded-lg h-40 w-full object-cover"
        src={photo && img ? img : "/placeholder.png"}
        alt={`${name} photo`}
        width={200}
        height={200}
      />
      <div className="p-2">
        <h1 className="text-l font-bold mb-3">{name}</h1>
        <div className="flex item-center gap-3 mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-red-500 flex-shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          <p className="text-gray-500 text-sm" title={address}>
            {address}
          </p>
        </div>
        <div className="flex item-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
          <p className="text-gray-500">{rating}</p>
        </div>
      </div>
    </div>
  );
}
