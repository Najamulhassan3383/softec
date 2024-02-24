// import { Link } from "react-router-dom";
import useConfig from "antd/es/config-provider/hooks/useConfig";
import { PlaceContext } from "../context/PlaceContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const PlaceCard = () => {
  const { placesState } = useContext(PlaceContext);
  const navigate = useNavigate();

  const hanldeClick = (item) => {
    navigate(`/locationDetail`, { state: item });
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-20 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <>
          {placesState.map((item) => (
            <div
              className="bg-white rounded-lg shadow-md overflow-hidden"
              key={item._key}
            >
              <img
                src={item.image}
                alt=""
                className="w-full object-cover h-64"
              />
              <div className="p-4">
                <h2 className="font-bold text-gray-700 text-lg mb-2">
                  {item._key}
                </h2>
                {/* only display first 20 words of desc followed by "..." */}
                <p className="font-light text-gray-500 mb-2">
                  {item.Desc.length > 200
                    ? item.Desc.slice(0, 200) + "..."
                    : item.Desc.slice(0, 200) + "..."}
                </p>
                {/* <p className="font-medium text-gray-900 mb-2">
                  Starting from Rs.{item.cheapestPrice}
                </p> */}
                <div className="flex items-center">
                  {/* <Link to={`/hotelOverview/${item._id}`}> */}
                  <button
                    className="bg-blue-700 text-white font-bold px-3 py-1 rounded mr-2"
                    type="button"
                    onClick={() => hanldeClick(item)}
                  >
                    View
                  </button>
                  {/* </Link> */}
                </div>
              </div>
            </div>
          ))}
        </>
      </div>
    </div>
  );
};

export default PlaceCard;
