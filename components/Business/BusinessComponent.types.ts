import { HTMLAttributes } from "react";

export interface PlaceProps extends HTMLAttributes<HTMLDivElement> {
  placeId: string;
  name: string;
  address: string;
  rating: number;
  photo?: string;
}

export interface ISidebarProps {
  setSidebarToggle: (value: PlaceProps | null) => void;
  business: PlaceProps | null;
}

export type PhotoType = {
  height: number;
  photo_reference: string;
  width: number;
};

export interface IApiPlace {
  name: string;
  formatted_address: string;
  rating: number;
  place_id: string;
  photos: PhotoType[];
}
