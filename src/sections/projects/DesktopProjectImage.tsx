import React from "react";
import { Image as CNImage, Transformation } from "cloudinary-react";
import { Box } from "@chakra-ui/react";

const DesktopProjectImage = ({
  name,
  source
}: {
  name: string;
  source: string;
}) => (
  <Box display={{ base: "none", md: "block" }} height="100%">
    <CNImage
      publicId={`${source}.jpg`}
      style={{
        height: "100%",
        objectFit: "cover",
        borderRadius: "var(--chakra-radii-md)"
      }}
      alt={name}
    >
      <Transformation crop="scale" />
    </CNImage>
  </Box>
);

export default DesktopProjectImage;
