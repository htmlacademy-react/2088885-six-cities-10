export type TRentalOfferData = TRentalRoomData[];
type TLocation = {
  latitude: number,
  longitude: number,
  zoom: number
}

type TCity = {
  name: string,
  location: TLocation
}

type THost = {
  id: number,
  name: string,
  isPro: boolean,
  avatarUrl: string
}

export type TRentalRoomData = {
  city: TCity,
  previewImage: string,
  images: string[],
  title: string,
  isFavorite: boolean,
  isPremium: boolean,
  rating: number,
  type: string,
  bedrooms: number,
  maxAdults: number,
  price: number,
  goods: string[],
  host: THost,
  description: string,
  location: TLocation,
  id: number
};
