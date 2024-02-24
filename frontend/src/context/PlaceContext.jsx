import { createContext, useContext, useEffect, useState } from "react";
const places = [
  {
    _key: "Ansoo Lake",
    Desc: 'Ansoo Lake is situated in Kaghan Valley of Pakistan. It is located near in the Himalayan range at the altitude of 4,245 meters (13,927 ft). This lake is considered to be one of the most beautiful lakes of the world. The name "Ansoo" comes from its tear-like shape. The lake also resembles a human eye with a central ice island resembling the iris and a ridge resembling an eyebrow, which becomes even more prominent when ice melts on the "eyebrow" during the summer. The lake is said to have been discovered in 1993 by Pakistan Air Force pilots who were flying low in the area.\n(Photo Credit: pakfocus.com )',
    category: "Lake",
    district: "Khyber Pakhtunkhwa",
    latitude: 34.8141186,
    longitude: 73.67642783,
    image: "https://picsum.photos/900",
  },
  {
    _key: "Astola Island",
    Desc: "Astola Island, also known as Jezira Haft Talar Satadip or 'Island of the Seven Hills', is a small uninhabited Pakistani island in the Arabian Sea approximately 25 km (16 mi) south of the nearest part of the coast and 39 km (24 mi) southeast of the fishing port of Pasni. Astola is Pakistan's largest offshore island at approximately 6.7 km (4.2 mi) long with a maximum width of 2.3 km (1.4 mi) and an area of approximately 6.7 km2 (2.6 sq mi). The highest point is 246 ft (75 m) above sea level. \n (Photo Credit: Buzzpk )",
    category: "Island",
    district: "Balochistan",
    latitude: 25.1223206,
    longitude: 63.84794782,
    image: "https://picsum.photos/900",
  },
  {
    _key: "Attabad Lake",
    Desc: "Attabad Lake is a lake in the Gojal Valley of northern Pakistan created in January 2010 by a landslide dam.The lake was formed due to a massive landslide at Attabad village in Gilgit-Baltistan, 9 miles (14 km) upstream (east) of Karimabad that occurred on January 4, 2010.It reached 13 miles (21 km) long and over 100 metres (330 ft) in depth by the first week of June 2010 when it began flowing over the landslide dam, completely submerging lower Shishkat and partly flooding Gulmit .\n(Photo Credit: HumansOfHunza | Twitter )",
    category: "Lake",
    district: "Gilgit−Baltistan",
    latitude: 36.3458274,
    longitude: 74.86543579,
    image: "https://picsum.photos/900",
  },
  {
    _key: "Baltoro Glacier",
    Desc: "The Baltoro Glacier, at 63 km (39 mi) in length, is one of the longest glaciers outside the Polar Regions. It is located in Baltistan, in the Gilgit-Baltistan region of Pakistan, and runs through part of the Karakoram mountain range.\n (Photo Credit:aishanoor.deviantart.com )",
    category: "Mountainous",
    district: "Gilgit−Baltistan",
    latitude: 35.7106418,
    longitude: 76.55314235,
    image: "https://picsum.photos/900",
  },
  {
    _key: "Bhurban",
    Desc: "Bhurban is a small town resort and hill station situated between Murree and Kashmir Road in Punjab province of Pakistan. It is just 11 km away from Murree and 68.8 km away from Islamabad. It is one of the best hill stations with a unique variety of species to visit with friends and families.",
    category: "Hill Station",
    district: "Punjab",
    latitude: 33.9550872,
    longitude: 73.4518727,
    image: "https://picsum.photos/500",
  },
];

export const PlaceContext = createContext();

export const PlaceProvider = ({ children }) => {
  const [placesState, setPlacesState] = useState(places);

  return (
    <PlaceContext.Provider value={{ placesState, setPlacesState }}>
      {children}
    </PlaceContext.Provider>
  );
};
