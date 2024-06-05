interface Facility {
  id: number;
  name: string;
  phone: string;
  villageId: number;
  street: string;
  longitude: number;
  latitude: number;
  thumbnail: string;
  tags: string[];
  categories: string[];
  images: string[];
}

export const facilities: Facility[] = [
  {
    id: 1,
    name: "Zerogravitythenics",
    phone: "",
    villageId: 2,
    street: "",
    thumbnail: "/images/zero.jpg",
    tags: ["With coach"],
    categories: ["Calisthenics"],
    images: ["/images/zero.jpg"],
    latitude: 33.40723,
    longitude: 35.48333,
  },

  {
    id: 2,
    name: "Sports To Glory",
    phone: "",
    villageId: 1,
    street: "",
    thumbnail: "/images/stg.jpg",
    tags: ["With coach", "شرعي"],
    categories: ["Calisthenics", "Fitness", "Karate"],
    images: ["/images/stg.jpg"],
    latitude: 33.42899,
    longitude: 35.51546,
  },
  {
    id: 3,
    name: "Tornado Gym",
    phone: "03 085 651",
    thumbnail: "/images/tornado.jpg",
    villageId: 3,
    street: "Kafaroman above Jamaica restaurant",
    tags: ["With coach", "شرعي"],
    categories: ["GYM"],
    images: ["/images/tornado.jpg"],
    latitude: 33.38864,
    longitude: 35.50153,
  },
  {
    id: 4,
    name: "Aqua Park Gym",
    phone: "79 197 727",
    villageId: 1,
    street: "Arabsalim main street",
    thumbnail: "/images/zero.jpg",
    tags: ["With coach", "شرعي"],
    categories: ["Calisthenics", "GYM", "Fitness"],
    images: ["/images/zero.jpg"],
    latitude: 33.40723,
    longitude: 35.48333,
  },
];
