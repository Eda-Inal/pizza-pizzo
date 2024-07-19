'use client'
import React from 'react'
import { Container, Text, Box, FormControl, FormLabel, Input, Center, Button, Stack, Alert, AlertIcon } from '@chakra-ui/react'
import Link from 'next/link'
import { updateLogin, changeBtn,setShowLoginBtn} from '../redux/pizzasSlice'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

function Login() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [emptyAlert, setEmptyAlert] = useState(false);
  const [controlPassword, setControlPassword] = useState('');
  const [controlName, setControlName] = useState("");
  const [nameError, setNameError] = useState("");
  const [error, setError] = useState('');

  const handleName = (e) => {
    setName(e.target.value)
    const value = e.target.value;
    setControlName(value);
    if (value.length < 5) {
      setNameError('At least 5 characters');
    } else {
      setNameError('');
    }
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
    const value = e.target.value;
    setControlPassword(value);
    if (value.length < 8) {
      setError('At least 8 characters');
    } else {
      setError('');
    }
  }
  const handleForm = () => {
    if (name !== "" && password !== "") {
      dispatch(updateLogin({ name: name, password: password }));
      dispatch(changeBtn());
      setEmptyAlert(false);
    
    
    }
    else {
      setEmptyAlert(true)
    }
  }
  return (
    <Container mt={10} centerContent>
      <Box bg="gray.100" color="black" maxWidth={600} maxHeight={600} p={15} borderRadius={10}>
        <Center>
          <FormControl width={300} isRequired mt={10}>
            <FormLabel >Name,Surname</FormLabel>
            <Input border={1}
              borderColor="black"
              borderStyle="solid"
              placeholder='First name'
              onChange={handleName}

            />
            {nameError && (
              <Center>
                <Text color="red" mb={2}>
                  {nameError}
                </Text>
              </Center>
            )}
            <FormLabel mt={3}>Password</FormLabel>
            <Input border={1}
              borderColor="black" borderStyle="solid"
              type="password"
              placeholder='Password'
              onChange={handlePassword}
              mb={3}
            />
            {error && (
              <Center>
                <Text color="red" mb={2}>
                  {error}
                </Text>
              </Center>

            )}
          </FormControl>
        </Center>
        {emptyAlert &&
          (<Stack spacing={3} mb={3} border={1}
            borderColor="red.100" borderStyle="solid">
            <Alert status='warning'>
              <AlertIcon />
              Please fill all fields.
            </Alert>
          </Stack>)
        }
        <Center>
          <Button colorScheme='red' onClick={handleForm} mt={2}>
            <Link href={`${name !== "" && password !== "" && !error && !nameError ? "/profile" : ""}`}>Log in </Link >
          </Button>
        </Center>
        <Center>
          <Text mt={2} mb={2}>
            You don't have account yet,sign up.
          </Text>
        </Center>
        <Center>
          <Button colorScheme="green" mt={2}>
            <Link href="/signup">Sign Up </Link >
          </Button>
        </Center>
      </Box>
    </Container>
  )
}

export default Login
