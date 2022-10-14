import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState({ data: null, loading: true, error: null });

  const resolveFetch = async () => {
    const res = await fetch(url);
    const data = await res.json();

    setData({ data: data, loading: false, error: null });
  };

  useEffect(() => {
    resolveFetch();
  }, [url]);

  return { data: data.data, loading: data.loading, error: data.error };
};

export default useFetch;
