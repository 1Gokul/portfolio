import React from "react";
import { Image } from "@chakra-ui/react";
import { Link } from "gatsby";

import LogoImg from "../../../images/website_logo.svg";

const Logo = () => {
  return (
    <Link to="/">
      <Image src={LogoImg} alt="Website Logo" width="75px" />
    </Link>
  );
};

export default Logo;
