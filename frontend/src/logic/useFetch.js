import { useEffect, useState } from "react";

const useFetch = (url) => {
  // const state
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // define fetch data function
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      
      try {
        const res = await fetch(encodeURI(url));
        const json = await res.json();

        setData(json);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
};

export default useFetch;