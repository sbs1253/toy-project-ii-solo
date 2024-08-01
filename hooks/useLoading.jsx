import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export const useLoading = (status) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (status === 'loading') {
      setLoading(status === 'loading');
      setError(null);
    } else if (status === 'failed') {
      setError('Failed to load data');
    } else {
      setLoading(false);
      setError(null);
    }
  }, [status]);

  return [loading, error];
};
