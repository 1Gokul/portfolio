import { useEffect, useState } from "react";

export const useLazyImage = (imageSource: string) => {
  const [imageLoaded, setImageLoaded] = useState<string | null>(null);

  useEffect(() => {
    const image = new Image();
    image.src = imageSource;
    image.onload = () => setImageLoaded(imageSource);
  }, [imageSource]);

  return imageLoaded;
};
