// import Search from "antd/es/input/Search";
import  {Button}  from 'antd'
import { useContext, useState } from "react";
import { PlaceContext } from "../context/PlaceContext";
import PlaceCard from "../components/PlaceCard";
import backgroundVedio from "../assets/backgroundVedio.mp4";
import HeaderLandingPage from "../components/HeaderLandingPage";
import CreateTripModal from '../components/CreateTripModal';

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
    <>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          zIndex: "-100",
          objectFit: "cover",
        }}
      >
        <source src={backgroundVedio} type="video/mp4" />
      </video>

      <HeaderLandingPage />
      <div
        className=" flex flex-col items-center justify-center min-h-screen mt-20"
        // style={{ background: "linear-gradient(to right, #ff6a00, #ee0979)" }}
      >
        
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
        {/* <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
          style={{ width: 400 }}
          className="search-button"
        /> */}
        
        <CreateTripModal />

        <div className="w-full flex flex-wrap justify-center">
          {/* Replace this with your cards */}
          <PlaceCard />
          {/* End replace */}
        </div>
      </div>
    </>
  );
}

export default Locations;
