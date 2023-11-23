"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import BusinessCard from "@/components/Business/BusinessCard";
import type {
  IApiPlace,
  PlaceProps,
} from "@/components/Business/BusinessComponent.types";
import Sidebar from "@/components/Business/SideBar";
import LoadingList from "@/components/Utils/LoadingList";
import SearchError from "@/components/Utils/SearchError";
import NoResults from "@/components/Utils/NoResults";

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const [businesses, setBusinesses] = useState<IApiPlace[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [selectedBusiness, setSelectedBusiness] = useState<PlaceProps | null>(
    null
  );

  const handleBusinessClick = (business: IApiPlace) => {
    setSelectedBusiness({
      placeId: business.place_id,
      name: business.name,
      address: business.formatted_address,
      rating: business.rating,
      photo: business.photos?.at(0)?.photo_reference,
    });
  };

  useEffect(() => {
    if (!query) {
      router.push("/");
      return;
    }

    const abortCtr = new AbortController();
    const signal = abortCtr.signal;

    const getBusinesses = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`/api/places?query=${query}`, { signal });
        const data = await res.json();
        setBusinesses(data);
      } catch (error: unknown) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getBusinesses();
    return () => abortCtr.abort();
  }, []);

  let content;
  if (!businesses) content = <NoResults />;
  if (isLoading) content = <LoadingList />;
  if (isError) content = <SearchError />;
  if (businesses) {
    content = (
      <div className="grid grid-cols-1 justify-items-center gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {businesses.map((business) => (
          <BusinessCard
            key={business.place_id}
            placeId={business.place_id}
            name={business.name}
            address={business.formatted_address}
            rating={business.rating}
            photo={business.photos?.at(0)?.photo_reference}
            onClick={() => handleBusinessClick(business)}
          />
        ))}
      </div>
    );
  }

  return (
    <section className="max-w-7xl p-3 mt-8 mx-auto">
      <h1 className="text-xl font-semibold mb-4">{`Search results for: ${query}`}</h1>
      {content}
      {selectedBusiness && (
        <Sidebar
          business={selectedBusiness}
          setSidebarToggle={setSelectedBusiness}
        />
      )}
    </section>
  );
}
