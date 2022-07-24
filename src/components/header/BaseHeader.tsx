import React, { useState } from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
import { Link } from 'gatsby';

import LogoImg from '../../images/website_logo.svg';
import MobileNavMenu from './mobileNavMenu/MobileNavMenu';
import DesktopNavMenu from './DesktopNavMenu';
import { HeaderLink } from '../../types/Header';
import { NavMenuToggler } from './mobileNavMenu/NavLink';

const Navbar = ({
  internalLinks,
  externalLinks
}: {
  internalLinks: HeaderLink[];
  externalLinks: HeaderLink[];
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    document.body.style.overflow = !expanded ? 'hidden' : 'visible';
    setExpanded(!expanded);
  };
  return (
    <Flex
      direction='column'
      position='sticky'
      width='100%'
      backgroundColor='var(--theme-bg)'
      top='0'
      as='nav'
      zIndex='3'
    >
      {/* The gradient at the top */}
      <Box
        height='0.25rem'
        background='linear-gradient(90deg, var(--theme-green) 0%, var(--theme-aqua) 50%, var(--theme-pink) 90%)'
      />

      <Flex
        zIndex='3'
        justifyContent='space-between'
        alignItems='center'
        paddingY={5}
        paddingX={10}
      >
        <Link to='/' onClick={() => (expanded ? toggleExpanded() : null)}>
          <Image src={LogoImg} alt='Website Logo' width='80px' />
        </Link>

        <DesktopNavMenu
          internalLinks={internalLinks}
          externalLinks={externalLinks}
        />

        <NavMenuToggler toggler={toggleExpanded} expanded={expanded} />
      </Flex>
      <MobileNavMenu
        toggler={toggleExpanded}
        expanded={expanded}
        internalLinks={internalLinks}
        externalLinks={externalLinks}
      />
    </Flex>
  );
};

export default Navbar;
