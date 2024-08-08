import { useState, useEffect } from 'react';

export const useError = (status) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    if (status === 'loading') {
      setError(status === 'loading');
    } else if (status === 'failed') {
      setError(false);
    } else {
      setError(false);
    }
  }, [status]);

  return error;
};
