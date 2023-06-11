import { useState } from 'react';
import axios from 'axios';


export const useAxios = () => {
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  axios.defaults.headers.accept = 'application/vnd.github+json';

  const request = async (
    url: string,
    params?: any,
  ) => {
    try {
      setLoading(true)
      const result = await axios.get(url, params);
      return result.data
    } catch (error) {
      setLoading(false);
      if (axios.isAxiosError(error)) {
        setError(error.response?.data.message);
      } else {
        setError(error);
      }
    } finally {
      setLoading(false);
    }
  };

  return { request, error, loading };
};