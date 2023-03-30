import axios from "axios";
import React, { useEffect, useState } from "react";
import { RAPID_API_KEY } from "react-native-dotenv";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
    headers: {
      "X-RapidAPI-Key": RAPID_API_KEY,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      if (error.response.status === 429) {
        // 429(트래픽 초과) 에러 시, 2초마다 한 번씩 요청 다시 보내기
        await new Promise((resolve) => setTimeout(resolve, 2000));
        fetchData();
      } else {
        setError(error);
        alert("There is an error");
      }
    } finally {
      setIsLoading(false);
    }
  };

  // const fetchData = async () => {
  //   setIsLoading(true);

  //   try {
  //     const response = await axios.request(options);

  //     setData(response.data.data);
  //     setIsLoading(false);
  //   } catch (error) {
  //     setError(error);
  //     console.log(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
