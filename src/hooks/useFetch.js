import { useEffect, useState } from "react";

export const BASE_API = "https://vinayak9669.github.io/job-listing-mock-api/data.json";

function useFetch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);  // <-- MUHIM!!!
  const [error, setError] = useState(null);

  async function getData() {
    try {
      const response = await fetch(BASE_API);

      if (!response.ok) {
        throw new Error("Ma'lumot olib kelishda xatolik: " + response.status);
      }

      const json = await response.json();
      setData(json);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);  // fetch tugaganda loading = false
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return { loading, error, data };
}

export default useFetch;
