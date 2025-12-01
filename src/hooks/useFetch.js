import { useEffect, useState } from "react";

// Proxy orqali ishlash uchun BASE_API ni o'zgartirdik
export const BASE_API = "/api/project/jobs-list/jobs";

function useFetch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function getData() {
    setLoading(true);
    try {
      // Proxy orqali fetch
      const response = await fetch(BASE_API);

      if (!response.ok) {
        throw new Error("Ma'lumot olib kelishda xatolik: " + response.status);
      }

      const json = await response.json();

      // API'dan data.data qaytadi, shuni set qilamiz
      setData(json.data);
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
