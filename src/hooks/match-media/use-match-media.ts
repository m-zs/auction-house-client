import { useEffect, useState } from "react";

export const useMatchMedia = (query: string): boolean => {
  const [isMatchingMediaQuery, setIsMatchingMediaQuery] = useState(false);

  useEffect(() => {
    setIsMatchingMediaQuery(window?.matchMedia(query).matches);

    const handleMq = ({ matches }: { matches: boolean }) => {
      if (matches) {
        return setIsMatchingMediaQuery(true);
      }

      setIsMatchingMediaQuery(false);
    };
    const mq = window.matchMedia(query);

    mq.addListener(handleMq);

    return () => {
      mq.removeListener(handleMq);
    };
  }, [isMatchingMediaQuery, setIsMatchingMediaQuery, query]);

  return isMatchingMediaQuery;
};
