// Thanks to nehalist.io for the progress bar
// https://nehalist.io/creating-a-reading-progress-bar-in-react

import { Flex } from "@chakra-ui/react";
import React, { RefObject, useEffect, useState } from "react";

const ReadingProgress = ({
  target
}: {
  target: RefObject<HTMLInputElement>;
}) => {
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
      position="sticky"
      top="5.332rem"
      background="linear-gradient(90deg, var(--theme-green) 0%, var(--theme-aqua) 50%, var(--theme-pink) 90%)"
      color="pink.500"
      height="0.25rem"
      zIndex="2"
    />
  );
};

export default ReadingProgress;
