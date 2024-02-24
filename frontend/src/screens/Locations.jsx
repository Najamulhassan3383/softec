import Search from "antd/es/input/Search";
import { useContext, useState } from "react";
import { PlaceContext } from "../context/PlaceContext";
import PlaceCard from "../components/PlaceCard";

const filters = [
  "Historical Places",
  "Cultural Attractions",
  "Adventure Spots",
  "Natural Adventures",
];

function Locations() {
  const [activeFilter, setActiveFilter] = useState("Historical Places");

  const onSearch = (value) => console.log(value);
  const { placesState, setPlacesState } = useContext(PlaceContext);

  console.log(placesState);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-blue-100"
      style={{ background: "linear-gradient(to right, #ff6a00, #ee0979)" }}
    >
      {/* <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      /> */}
      <h1 className="text-4xl font-bold tracking-tight text-gray-700 mb-10">
        Must-see attractions in Pakistan
      </h1>
      <div className="mb-10">
        {filters.map((filter) => (
          <button
            className={`font-bold py-2 px-4 rounded-3xl m-2 ${
              activeFilter === filter
                ? "bg-black text-white"
                : "bg-white hover:bg-blue-500 text-gray-700"
            }`}
            key={filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="w-full flex flex-wrap justify-center">
        {/* Replace this with your cards */}
        <PlaceCard />
        {/* End replace */}
      </div>
    </div>
  );
}

export default Locations;
