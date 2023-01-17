import { useState } from "react";
import client from "../lib/client";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = () => {
    setLoading(true);
    setData('')

    client
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));

    setError(false)
    };

  return { data, loading, error, fetchData };
};

export default useFetch;
