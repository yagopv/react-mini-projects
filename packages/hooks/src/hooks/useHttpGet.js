import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useHttpGet(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(url).then(response => {
      setData(response.data);
      setLoading(false);
    });
  }, []);

  return {
    data,
    loading
  };
}
