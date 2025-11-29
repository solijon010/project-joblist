import { useEffect, useState } from "react";
import { BASE_API } from "../api/url";

function useFetch() {
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(null);

  async function getData() {
    setloading(true)
    try {
      const response = await fetch(BASE_API);

      if (!response.ok) {
        throw new Error("Ma'lumot olib kelishda xatolik" + response.status);
      }
      const data = await response.json();

      setData(data.data);
    } catch (error) {
        setError(error.message)
    }finally{
        setloading(false)
    }
  }
  useEffect(() => {
    getData();
  },[]);
  
  return {loading,error,data};
}

export default useFetch;
