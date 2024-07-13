import React from 'react'
import { Container, Text,Box,FormControl,FormLabel,Input, Center,Button } from '@chakra-ui/react'
import Link from 'next/link'
function Login() {
  return (
    <Container mt={10} centerContent>
    <Box bg="gray.100"  color="black" maxWidth={500} maxHeight={500} p={15} px={[3,6,12,16]} borderRadius={10}>
      <Center>
      <FormControl  width={300} isRequired mt={10}>
  <FormLabel >Name,Surname</FormLabel>
  <Input border={1}
      borderColor="black" borderStyle="solid" placeholder='First name' />

<FormLabel mt={3}>Password</FormLabel>
  <Input border={1}
      borderColor="black" borderStyle="solid" placeholder='First name' />

 
   
  </FormControl>
      </Center>
      <Center>
      
      <Button mt={6} colorScheme='red'>  
        <Link href="/profile">Log in </Link >
      </Button>
    
      </Center>
      <Text mt={2}>
      You don't have account yet,sign Up
      </Text>
      <Center>
      <Button colorScheme="green">
      <Link href="/signup">Sign Up </Link >
        </Button>
      </Center>
      
    
     
    </Box>
    </Container>
  )
}

export default Login
