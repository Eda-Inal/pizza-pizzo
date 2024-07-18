'use client'
import React from 'react'
import { Container, Text,Box,FormControl,FormLabel,Input, Center,Button, Textarea } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { editProfile } from '../redux/pizzasSlice'
function Profile() {
  const dispatch = useDispatch();
  const namePassword = useSelector((state) => state.pizza.login);
  const namePassword12 = useSelector((state) => state.pizza.signup);
  const profile = useSelector((state) => state.pizza.profile);
  const [showBtn,setShowBtn] = useState(false)
  const [textArea,setTextArea] =  useState("sd");
  const handleChange = (e) => {
    setTextArea(e.target.value)
    setShowBtn(true)
  }
  const handleClick = () => {
dispatch(editProfile(textArea));
setShowBtn(false)
  }

  return (
    <Container mt={10} centerContent>
     
    <Box bg="gray.100"  color="black" maxWidth={500} maxHeight={500} p={15} px={[3,6,12,16]} borderRadius={10}>
    
    <Text fontSize="xl">
        Name : { namePassword.name || namePassword12.name}
    </Text>
    <Text mt={3} mb={1} fontSize="xl">Address:</Text>
    <Textarea width={400} height={100} fontSize="xl"border={1} 
  onChange={handleChange}

      borderColor="black" borderStyle="solid" >
        {profile.adres}
    </Textarea>
    
     {
    showBtn &&
      (
     <Button mt={2} 
     colorScheme="red"
      px={6} 
      onClick = {handleClick}
     
     >Save</Button>
      ) 
    }
    
    
    
   <Text mt={5} fontSize="xl">Orders:</Text>


 
   

   
    
     
    </Box>
    </Container>
  )
}

export default Profile
