import { useState, useEffect } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPendding, setIsPendding] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw Error("Unable to fetch data...");
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPendding(false);
        setError(null);
      })
      .catch((err) => {
        console.log(err.message);
        setIsPendding(false);
        setError(err.message);
      });
  }, [url]);

  return { data, isPendding, error };
};

export default UseFetch;
