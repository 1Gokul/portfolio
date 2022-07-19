import { Button, IconButton } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

type NavLinkProps = {
  [property: string]: unknown; // extra Chakra UI properties
};

const NavLink = ({
  children,
  ...otherProps
}: PropsWithChildren<NavLinkProps>) => (
  <Button
    variant="ghost"
    width="100%"
    alignContent="center"
    justifyContent="flex-start"
    fontSize="2xl"
    fontWeight="medium"
    textTransform="capitalize"
    borderRadius={0}
    paddingX={5}
    paddingY={10}
    borderBottom="1px"
    borderColor="gray.500"
    {...otherProps}
  >
    {children}
  </Button>
);

export default NavLink;

export const NavMenuToggler = ({
  toggler,
  expanded
}: {
  toggler: () => void;
  expanded: boolean;
}) => (
  <IconButton
    variant="ghost"
    aria-label="Open Navigation Menu"
    display={{ base: "flex", md: "none" }}
    onClick={toggler}
    fontSize={30}
  >
    {expanded ? <RiCloseLine /> : <RiMenu3Line />}
  </IconButton>
);
