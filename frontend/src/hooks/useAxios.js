// Import necessary dependencies
import { useState } from "react";
import axios from "axios";
const BASE_URL = "http://localhost:5000";
// Custom hook to handle asynchronous requests using Axios
const useAxios = (url, method, headers = {}) => {
  // State variables to track response, error, and loading status
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to make the request
  const makeRequest = (body = null) => {
    setLoading(true); // Set loading to true while making the request

    // Make the request using axios
    axios({
      method,
      url: `${BASE_URL}${url}`,
      data: body,
      headers,
      withCredentials: true,
    })
      .then((res) => {
        setResponse(res.data); // Set the response data
        setLoading(false); // Set loading to false when request is successful
      })
      .catch((err) => {
        setError(err.response.data); // Set the error message
        setLoading(false); // Set loading to false when request fails
      });
  };

  // useEffect to make the request when the url, method, body, or headers change

  // Return the response, error, and loading state
  return { response, error, loading, makeRequest };
};

// Export the custom hook
export default useAxios;
