import {
  Wifi,
  Coffee,
  Waves,
  Tv,
  Bath,
  Wind
} from "lucide-react";

export const rooms = [
  {
    id: 1,
    name: "Deluxe Room",
    price: 4999,
    rating: 4.8,
    image: "/images/deluxe.jpg",
    description: "Elegant comfort with city skyline views.",
    amenities: [Wifi, Coffee, Tv]
  },
  {
    id: 2,
    name: "Executive Room",
    price: 7999,
    rating: 4.9,
    image: "/images/executive.jpg",
    description: "Business luxury with premium workspace.",
    amenities: [Wifi, Bath, Tv]
  },
  {
    id: 3,
    name: "Luxury Suite",
    price: 12999,
    rating: 5.0,
    image: "/images/suite.jpg",
    description: "Panoramic balcony and king-size elegance.",
    amenities: [Wifi, Waves, Coffee]
  },
  {
    id: 4,
    name: "Presidential Suite",
    price: 24999,
    rating: 5.0,
    image: "/images/presidential.jpg",
    description: "The ultimate luxury experience.",
    amenities: [Wifi, Wind, Bath]
  }
];