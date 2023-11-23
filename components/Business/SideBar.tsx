import { useEffect, useState } from "react";
import { ISidebarProps } from "./BusinessComponent.types";
import Link from "next/link";
import Image from "next/image";

export default function Sidebar({ business, setSidebarToggle }: ISidebarProps) {
  const [image, setImage] = useState<string | null>(null);
  const [mapSource, setMapSource] = useState<string | null>(null);

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

    return () => abortCtr.abort();
  }, [business?.placeId]);

  useEffect(() => {
    if (!business) {
      return;
    }
    const abortCtr = new AbortController();
    const signal = abortCtr.signal;
    const getMap = async () => {
      try {
        const res = await fetch(`/api/places/map?place=${business.placeId}`, {
          signal,
        });
        const data = await res.blob();
        setMapSource(URL.createObjectURL(data));
      } catch (error: unknown) {
        console.log(error);
      }
    };

    getMap();

    return () => abortCtr.abort();
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
          <p className="text-gray-700 text-sm" title={business.address}>
            {business.address}
          </p>
        </div>
        <div className="flex item-center gap-3 mb-5">
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
          {mapSource && (
            <iframe
              className="w-full"
              width="450"
              height="250"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={mapSource}
            ></iframe>
          )}
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      {content}
    </aside>
  );
}
