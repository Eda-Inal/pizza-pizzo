'use client'
import React from 'react'
import { Container, Text, Box, FormControl, FormLabel, Input, Center, Button, Stack, Alert, AlertIcon } from '@chakra-ui/react'
import Link from 'next/link'
import { useDispatch } from 'react-redux';
import { updateSignup, changeBtn, btnShow } from '../redux/pizzasSlice';
import { useState } from 'react'

function Signup() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [equalAlert, setEqualAlert] = useState(false);
  const [emptyAlert, setEmptyAlert] = useState(false);
  const [controlName, setControlName] = useState("");
  const [nameError, setNameError] = useState("");
  const [controlPassword, setControlPassword] = useState('');
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
  const handlePassword2 = (e) => {
    setPassword2(e.target.value)
  }
  const handleForm = () => {
    if (password === password2 && name !== "" && password !== "" && password2 !== "") {
      dispatch(updateSignup({ name: name, password: password, password2: password2 }));
      dispatch(changeBtn());
   
      { password === password2 ? setEqualAlert(false) : "" }
      { name !== "" && password !== "" && password2 !== "" ? setEmptyAlert(false) : "" }
    }
    else if (password !== "" && password2 !== "" && password !== password2) {
      setEqualAlert(true)
      setEmptyAlert(false);
    }
    else if (name === "" || password === "" || password2 === "") {
      setEmptyAlert(true);
      setEqualAlert(false);
    }
  }

  return (
    <Container mt={10} centerContent>
      <Box bg="gray.100" color="black" maxWidth={500} maxHeight={500} p={15} px={[3, 6, 8, 12]} borderRadius={10}>
        <Center>
          <FormControl isRequired mt={10}>
            <FormLabel>Name,Surname</FormLabel>
            <Input border={1} onChange={handleName}
              borderColor="black"
              borderStyle="solid"
              placeholder='First name' />
            {nameError && (
              <Center>
                <Text color="red">
                  {nameError}
                </Text>
              </Center>
            )}
            <FormLabel mt={3}>Password</FormLabel>
            <Input border={1} onChange={handlePassword}
              borderColor="black" borderStyle="solid" type="password" placeholder='Password' />
            {error && (
              <Center>
                <Text color="red" mb={2}>
                  {error}
                </Text>
              </Center>
            )}
            <FormLabel mt={3}>Password</FormLabel>
            <Input border={1} onChange={handlePassword2}
              borderColor="black" borderStyle="solid" type="password" placeholder='Password again' />
          </FormControl>
        </Center>
        {equalAlert &&
          (<Stack spacing={3} mt={3} border={1}
            borderColor="red.100" borderStyle="solid">
            <Alert status='error'>
              <AlertIcon />
              Password does not match.
            </Alert>
          </Stack>)
        }
        {emptyAlert &&
          (<Stack spacing={3} mt={3} border={1}
            borderColor="red.100" borderStyle="solid">
            <Alert status='warning'>
              <AlertIcon />
              Please fill all fields.
            </Alert>
          </Stack>)
        }
        <Center>
          <Button mt={6} colorScheme='green'>
            <Link href={`${password === password2 && name !== "" && password !== "" && password2 !== "" && !nameError && !error ? "/profile" : ""}`} onClick={handleForm}>Sign Up </Link>
          </Button>
        </Center>
      </Box>
    </Container>
  )
}

export default Signup
