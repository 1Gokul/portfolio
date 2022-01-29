// Thanks to nehalist.io for the progress bar
// https://nehalist.io/creating-a-reading-progress-bar-in-react

import { CircularProgress } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const ReadingProgress = ({ target }) => {
  const [readingProgress, setReadingProgress] = useState(0);
  const scrollListener = () => {
    if (!target.current) {
      return;
    }

    const element = target.current;
    const totalHeight =
      element.clientHeight - element.offsetTop - window.innerHeight;
    const windowScrollTop =
      window.pageYOffset ??
      document.documentElement.scrollTop ??
      document.body.scrollTop ??
      0;

    if (windowScrollTop === 0) {
      return setReadingProgress(0);
    }

    if (windowScrollTop > totalHeight) {
      return setReadingProgress(100);
    }
    setReadingProgress((windowScrollTop / totalHeight) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  });

  return (
    <CircularProgress
      value={readingProgress}
      size="60px"
      color="pink.500"
      thickness="10px"
      position="fixed"
      right={{ base: "14px", md: "34.5px" }}
      bottom="73.5px"
      zIndex="0"
    />
  );
};

export default ReadingProgress;
