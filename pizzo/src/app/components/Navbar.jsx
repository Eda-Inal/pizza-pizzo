import React from 'react'
import Link from 'next/link';
import { Flex, Spacer,Box,Heading,ButtonGroup,Button,Show,Hide, Tooltip, useLatestRef} from '@chakra-ui/react'
import { BsBasket } from "react-icons/bs";
import { Text } from '@chakra-ui/react'
import Home from '../page';
import Image from 'next/image';
import logo1 from "../../../public/logo.png"
import { color } from 'framer-motion';
import { useSelector } from 'react-redux';



function Navbar() {
  const total = useSelector((state) => state.pizza.total);
  const btn = useSelector((state) => state.pizza.btn);
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
      <Button colorScheme="gray.900"  >
        <Link href='/'><Text _hover={{color:"red.400"}}  fontSize='xl'>Home</Text></Link>
      </Button>
 
<Hide below='md'>
<Button colorScheme="gray.900" > <Link href='/menu'><Text _hover={{color:"red.400"}}  fontSize='xl'>Menu</Text></Link></Button>
</Hide>
    {
      btn && (
        <Button colorScheme="green" > <Link href="/profile" ><Text fontSize='xl'>Profile</Text></Link></Button>
      )
    }
    {
      !btn && (
        <Button colorScheme="red" > <Link href="/login" ><Text fontSize='xl'>Log in</Text></Link></Button>
      )
    }

      <Button colorScheme="red" _hover={{}} marginRight={{ base: 0, md: 1, lg: 2 }} position="relative">
          <Tooltip label="go to basket" fontSize="md">
            <Link href="/basket">
              <BsBasket />
              <Box position="absolute" top="-1" right="-1" backgroundColor="red.500" borderRadius="full" width="20px" height="20px" display="flex" alignItems="center" justifyContent="center">
                <Text fontSize="xs" color="white">{total}</Text>
              </Box>
            </Link>
          </Tooltip>
        </Button>
    </ButtonGroup>
  </Flex>
  )
}

export default Navbar
