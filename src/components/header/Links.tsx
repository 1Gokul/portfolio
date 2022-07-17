import React, { PropsWithChildren } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as GatsbyLink } from "gatsby";

import {
  Default_Internal_Link_Duration,
  Default_Internal_Link_Offset
} from "../../constants/Header";

export const InternalLink = ({
  children,
  to,
  offset = Default_Internal_Link_Offset
}: PropsWithChildren<{
  to: string;
  offset: number;
}>) => (
  <ScrollLink
    to={to}
    smooth="easeOutQuad"
    offset={offset}
    duration={Default_Internal_Link_Duration}
  >
    {children}
  </ScrollLink>
);

export const ExternalLink = ({
  children,
  to
}: PropsWithChildren<{
  to: string;
}>) => <GatsbyLink to={to}>{children}</GatsbyLink>;
