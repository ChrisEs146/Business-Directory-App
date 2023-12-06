"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { PlaceProps } from "./BusinessComponent.types";
import { ICONS } from "@/Utils/Icons";
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
          {ICONS.locationIcon}
          <p className="text-gray-500 text-sm" title={address}>
            {address}
          </p>
        </div>
        <div className="flex item-center gap-3">
          {ICONS.ratingIcon}
          <p className="text-gray-500">{rating}</p>
        </div>
      </div>
    </div>
  );
}
