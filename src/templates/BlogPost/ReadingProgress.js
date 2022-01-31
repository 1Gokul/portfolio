// Thanks to nehalist.io for the progress bar
// https://nehalist.io/creating-a-reading-progress-bar-in-react

import { Flex } from "@chakra-ui/react";
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
    <Flex
      width={`${readingProgress}%`}
      size="3.75rem"
      position="sticky"
      top="5.082rem"
      background="linear-gradient(to right, var(--theme-aqua), #00ff73)"
      color="pink.500"
      height="0.25rem"
      zIndex="3"
    />
  );
};

export default ReadingProgress;
