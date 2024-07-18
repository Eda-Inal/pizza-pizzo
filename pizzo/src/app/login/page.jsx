'use client'
import React from 'react'
import { Container, Text,Box,FormControl,FormLabel,Input, Center,Button, useLatestRef ,Stack,Alert,AlertIcon} from '@chakra-ui/react'
import Link from 'next/link'
import { updateLogin,changeBtn } from '../redux/pizzasSlice'
import { useSelector,useDispatch } from 'react-redux'
import { useState } from 'react'
function Login() {
  const dispatch = useDispatch();
  const [name,setName] = useState("");
  const [password,setPassword] = useState("");
  const[emptyAlert,setEmptyAlert]  =useState(false);
  const handleName=(e) => {
    setName(e.target.value)
  }
  const handlePassword=(e) => {
    setPassword(e.target.value)
  }
const handleForm = () => {
  if(name !=="" && password !== ""){
    dispatch(updateLogin({name:name,password:password}));
    dispatch(changeBtn());
    setEmptyAlert(false);
  }
  else{
    setEmptyAlert(true)
  }

}

  return (
    
    <Container mt={10} centerContent>
      {password}
    <Box bg="gray.100"  color="black" maxWidth={500} maxHeight={500} p={15} px={[3,6,12,16]} borderRadius={10}>
      <Center>
      <FormControl  width={300} isRequired mt={10}>
  <FormLabel >Name,Surname</FormLabel>
  <Input border={1}
      borderColor="black"
       borderStyle="solid"  
        placeholder='First name'
        onChange = {handleName}

        />

<FormLabel mt={3}>Password</FormLabel>
  <Input border={1}
      borderColor="black" borderStyle="solid"
      type = "password"
       placeholder='Password'
       onChange = {handlePassword}
       mb = {3}
        />

 
   
  </FormControl>
      </Center>
      {emptyAlert &&
       ( <Stack spacing={3} mb={3} border={1}  
      borderColor="red.100" borderStyle="solid">
  <Alert status='warning'>
    <AlertIcon />
    Please fill all fields.
  </Alert>
  </Stack>)
   }
      <Center>
    
      
      <Button  colorScheme='red' onClick={handleForm}>  
        <Link href={`${ name !=="" && password!==""  ? "/profile" : ""}`}>Log in </Link >
      </Button>
    
      </Center>
      <Text mt={2} mb={2}>
      You don't have account yet,sign up.
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
