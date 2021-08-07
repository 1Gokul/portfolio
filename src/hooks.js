import { useEffect, useState } from "react"

export const useLazyImage = imageSource => {
  const [imageLoaded, setImageLoaded] = useState(null)

  useEffect(() => {
    const image = new Image()
    image.src = imageSource
    image.onload = () => setImageLoaded(imageSource)
  }, [imageSource])

  return imageLoaded
}

