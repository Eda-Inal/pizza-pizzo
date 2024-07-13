import React from 'react'
import Link from 'next/link';
import { Flex, Spacer,Box,Heading,ButtonGroup,Button,Show,Hide} from '@chakra-ui/react'
import { BsBasket } from "react-icons/bs";
import { Text } from '@chakra-ui/react'
import Home from '../page';
import Image from 'next/image';
import logo1 from "../../../public/logo.png"


function Navbar() {
  return (
    <Flex minWidth='max-content' p={2} alignItems='center' bg="gray.900" color="white"   gap='2'>
    <Box p='2'>
      <Image
      src= {logo1}
      width = {150}
     
      />
     
    </Box>
    <Spacer />
    <ButtonGroup>
      <Button colorScheme="gray.900">
        <Link href='/home'><Text fontSize='xl'>Home</Text></Link>
      </Button>
 
<Hide below='md'>
<Button colorScheme="gray.900" > <Link href='/menu'><Text fontSize='xl'>Menu</Text></Link></Button>
</Hide>
    
      <Button colorScheme="red" > <Link href="/login" ><Text fontSize='xl'>Log in</Text></Link></Button>
      <Button colorScheme="red" marginRight={{base:0,md:1,lg:2}}><BsBasket /></Button>
    </ButtonGroup>
  </Flex>
  )
}

export default Navbar
