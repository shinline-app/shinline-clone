import { useEffect, useState } from 'react';

const useDelayedVisibility = (initialVisibility = false, delay = 300) => {
  const [isVisible, setIsVisible] = useState(initialVisibility);

  useEffect(() => {
    if (initialVisibility) {
      setIsVisible(false);
    } else {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [initialVisibility, delay]);

  return isVisible;
};

export default useDelayedVisibility;
