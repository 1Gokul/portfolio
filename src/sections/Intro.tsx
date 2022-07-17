import React from 'react';
import { Button, Heading, Icon, Link, SlideFade } from '@chakra-ui/react';
import { VscGithubInverted } from 'react-icons/vsc';

import { HomeContainer } from '../components/LayoutComponents';

const Intro = () => {
  return (
    <HomeContainer marginTop={{ base: 0, md: 5 }}>
      <SlideFade
        in={true}
        offsetY='30px'
        transition={{ enter: { duration: 0.3, delay: 0.2 } }}
      >
        <Heading size='lg' marginY={5}>
          Hey there! My name is
        </Heading>
        <Heading
          marginY={8}
          fontSize={{ base: '6xl', md: '9xl' }}
          letterSpacing='-2px'
          bgGradient='linear(to-r, var(--theme-aqua), var(--theme-green))'
          bgClip='text'
          fontWeight='extrabold'
        >
          Gokul Viswanath.
        </Heading>
        <Heading size='xl' marginBottom={16}>
          I develop web applications from end-to-end!
          <br />I also make games on the side.
        </Heading>

        <Link href='https://github.com/1Gokul' target='_blank' rel='noreferrer'>
          <Button
            aria-label='Send Email'
            p={10}
            fontSize='2xl'
          >
            <Icon as={VscGithubInverted} marginRight={4} /> My GitHub
          </Button>
        </Link>
      </SlideFade>
    </HomeContainer>
  );
};

export default Intro;
