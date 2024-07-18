'use client'
import React from 'react'
import { Container, Text,Box,FormControl,FormLabel,Input, Center,Button, Textarea } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { editProfile,directAdress } from '../redux/pizzasSlice'
import { Divider } from '@chakra-ui/react'

function Profile() {
  const dispatch = useDispatch();
  const namePassword = useSelector((state) => state.pizza.login);
  const namePassword12 = useSelector((state) => state.pizza.signup);
  const profile = useSelector((state) => state.pizza.profile);
    const pizzadata = useSelector((state) => state.pizza.basket);
  const completedOrder = useSelector((state) => state.pizza.completedOrder);
  const [showBtn,setShowBtn] = useState(false)
  const [textArea,setTextArea] =  useState("sd");
  const handleChange = (e) => {
    setTextArea(e.target.value)
    setShowBtn(true)
  }
  const handleClick = () => {
dispatch(editProfile(textArea));
setShowBtn(false)
dispatch(directAdress(false));
  }

  return (
    <Container mt={10} centerContent>
     
    <Box bg="gray.200"  color="black" maxWidth={500} maxHeight={500} p={15} px={[3,6,12,16]} borderRadius={10}>
    
    <Text fontSize="xl">
        Name : { namePassword.name || namePassword12.name}
    </Text>
    <Text mt={3} mb={1} fontSize="xl">Address:</Text>
    <Textarea width={400} pl={5} height={100} fontSize="xl"border={1} 
  onChange={handleChange}

      borderColor="black" borderStyle="solid" >
        {profile.adres}
    </Textarea>
    
     {
    showBtn &&
      (
     <Button mt={2} 
    bg="green.400"
      px={6} 
      onClick = {handleClick}
     
     ><Text fontSize='xl' color="white">Save</Text></Button>
      ) 
    }
    
    
    
   <Text mt={5} fontSize="xl">Orders: </Text>
   {completedOrder && (
          <Box mt={2} bgColor="green.400" borderRadius={10} pl={2}><Divider/>
            {pizzadata.length > 0 ? (
              
              pizzadata.map((item) => (
                <Text key={item.id} fontSize="xl" fontWeight="md">- {item.name}</Text>
              ))
            ) : (
              <Text fontSize="xl">No orders found.</Text>
            )}
          </Box>
        )}


 
   

   
    
     
    </Box>
    </Container>
  )
}

export default Profile
