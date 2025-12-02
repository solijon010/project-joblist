import { useEffect, useState } from "react";

export const BASE_API = "https://vinayak9669.github.io/job-listing-mock-api/data.json";

function useFetch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function getData() {
    setLoading(true);
    try {
      const response = await fetch(BASE_API);

      if (!response.ok) {
        throw new Error("Ma'lumot olib kelishda xatolik: " + response.status);
      }

      const json = await response.json();
      setData(json); // GitHub JSON to'g'ridan-to'g'ri array qaytaradi
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return { loading, error, data };
}

export default useFetch;
