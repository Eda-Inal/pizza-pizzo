import React from 'react'
import Link from 'next/link';
import { Flex, Spacer,Box,Heading,ButtonGroup,Button} from '@chakra-ui/react'
import { BsBasket } from "react-icons/bs";
import { Text } from '@chakra-ui/react'
import Home from '../page';

function Navbar() {
  return (
    <Flex minWidth='max-content' p={2} alignItems='center' bg="gray.900" color="white" border='1px' borderColor='gray.200'  gap='2'>
    <Box p='2'>
      <Text size='lg' as='b' marginLeft={{base:0,md:2,lg:3}}>Pizzo</Text>
    </Box>
    <Spacer />
    <ButtonGroup gap={{base:0,sm:1,md:2,lg:3}}>
      <Button colorScheme="gray.900">
        <Link href='/home'>Home</Link>
      </Button>
      <Button colorScheme="gray.900" >Menu</Button>
      <Button colorScheme="red" marginRight={{base:0,md:2,lg:3}}><BsBasket /></Button>
    </ButtonGroup>
  </Flex>
  )
}

export default Navbar
