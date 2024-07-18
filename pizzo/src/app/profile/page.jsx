'use client'
import React from 'react'
import { Container, Text,Box,FormControl,FormLabel,Input, Center,Button, Textarea } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
function Profile() {
  const namePassword = useSelector((state) => state.pizza.login);
  const namePassword12 = useSelector((state) => state.pizza.signup);
  return (
    <Container mt={10} centerContent>
    <Box bg="gray.100"  color="black" maxWidth={500} maxHeight={500} p={15} px={[3,6,12,16]} borderRadius={10}>
    
    <Text fontSize="xl">
        Name : { namePassword.name || namePassword12.name}
    </Text>
    <Text mt={3} mb={1} fontSize="xl">Adress:</Text>
    <Textarea fontSize="xl"border={1}
      borderColor="black" borderStyle="solid" >

    </Textarea>
   <Text mt={5} fontSize="xl">Orders:</Text>


 
   

   
    
     
    </Box>
    </Container>
  )
}

export default Profile
