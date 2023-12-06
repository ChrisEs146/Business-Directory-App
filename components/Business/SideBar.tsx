import { useEffect, useState } from "react";
import { ISidebarProps } from "./BusinessComponent.types";
import Link from "next/link";
import Image from "next/image";
import { ICONS } from "@/Utils/Icons";

export default function Sidebar({ business, setSidebarToggle }: ISidebarProps) {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    if (!business) {
      return;
    }
    const abortCtr = new AbortController();
    const signal = abortCtr.signal;
    const getMapSource = async () => {
      try {
        const res = await fetch(
          `/api/places/photo?reference=${business.photo}`,
          {
            signal,
          }
        );
        const blobImage = await res.blob();
        setImage(URL.createObjectURL(blobImage));
      } catch (error: unknown) {
        console.log(error);
      }
    };

    getMapSource();

    // return () => abortCtr.abort();
  }, [business?.placeId]);

  let content;
  if (business) {
    content = (
      <>
        <h1 className="text-l font-bold mb-3">{business.name}</h1>
        <Image
          className="rounded-lg h-40 w-full object-cover mb-4"
          src={business.photo && image ? image : "/placeholder.png"}
          alt={business.name}
          width={200}
          height={200}
        />
        <div className="flex item-center gap-3 mb-2">
          {ICONS.locationIcon}
          <p className="text-gray-700 text-sm" title={business.address}>
            {business.address}
          </p>
        </div>
        <div className="flex item-center gap-3 mb-5">
          {ICONS.ratingIcon}
          <p className="text-gray-700">{business.rating}</p>
        </div>
        <Link
          className="text-white bg-red-500 p-3 mb-4 rounded-md w-full font-semibold text-center block hover:bg-red-400 transition-all"
          href={`https://www.google.com/maps/search/?api=1&query=${business.name},${business.address}`}
          target="_blank"
        >
          Get Direction
        </Link>
        <div className="w-full">
          <iframe
            className="w-full"
            width="450"
            height="250"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}&q=${business.name},${business.address}`}
          ></iframe>
        </div>
      </>
    );
  }

  return (
    <aside className="h-screen w-screen fixed top-0 right-0 md:w-96 bg-white shadow-md p-3">
      <button
        title="Close"
        className="p-2 shadow-md rounded-full bg-white hover:scale-90 transition-all"
        onClick={() => setSidebarToggle(null)}
      >
        {ICONS.crossIcon}
      </button>
      {content}
    </aside>
  );
}
