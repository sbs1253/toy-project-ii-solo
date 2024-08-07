import { useState, useEffect } from 'react';

export const useLoading = (status) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (status === 'loading') {
      setLoading(status === 'loading');
    } else if (status === 'failed') {
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [status]);

  return loading;
};
