import { useEffect, useState } from "react";
import yelp from "../api/yelp";
export default () => {
  const [data, setData] = useState([]);

  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchWord) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,

          term: searchWord,

          location: "los angeles",
        },
      });

      setData(response.data.businesses);

      console.log(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong !");

      setData([]);
    }
  };

  useEffect(() => {
    searchApi("pizza");
    console.log("useEffect called");
  }, []);

  return [errorMessage, data, searchApi];
};
