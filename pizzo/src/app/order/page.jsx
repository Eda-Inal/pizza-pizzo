'use client'
import { Container, Box, Text, FormControl, FormLabel, Input, Button, Center, Stack, Alert, AlertIcon, CloseButton, AlertDescription } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
function Order() {
    const [info, setInfo] = useState({ name: "", date: "", cvv: "", number: "" });
    const [errors, setErrors] = useState({});
    const [alert, setAlert] = useState(false);
    const [orderAlert, setOrderAlert] = useState(false);
    const [close, setClose] = useState(false);
    const validate = () => {
        const newErrors = {};
        if (info.name.length < 5) newErrors.name = "Name must be at least 5 characters.";
        if (info.date.length < 4) newErrors.date = "Date must be at least 4 characters.";
        if (info.cvv.length < 3) newErrors.cvv = "CVV must be at least 3 characters.";
        if (info.number.length < 11) newErrors.number = "Card number must be at least 11 characters.";
        return newErrors;
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo({ ...info, [name]: value });
    }
    const handleForm = () => {
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            setAlert(false);
            setOrderAlert(true);
        } else {
            setErrors(validationErrors);
            setAlert(true);
        }
    }
    const handleClose = () => {
        setClose(true);
    }
    return (
        <>
            {
                !orderAlert && (
                    <Container color="black" centerContent>
                        <Box bg="gray.200" borderRadius={10} color="black" p={12}>
                            <FormControl isRequired>
                                <FormLabel mt={2}>Name</FormLabel>
                                <Input
                                    name="name"
                                    placeholder='Name'
                                    border={1}
                                    borderColor="black"
                                    onChange={handleChange}
                                    borderStyle="solid"
                                />
                                {errors.name && <Text color="red.500">{errors.name}</Text>}
                                <FormLabel mt={2}>Expiration Date</FormLabel>
                                <Input
                                    name="date"
                                    placeholder="MM/YY"
                                    onChange={handleChange}
                                    border={1}
                                    borderColor="black"
                                    borderStyle="solid"
                                />
                                {errors.date && <Text color="red.500">{errors.date}</Text>}
                                <FormLabel mt={2}>CVV</FormLabel>
                                <Input
                                    name="cvv"
                                    placeholder="123"
                                    border={1}
                                    borderColor="black"
                                    borderStyle="solid"
                                    onChange={handleChange}
                                />
                                {errors.cvv && <Text color="red.500">{errors.cvv}</Text>}
                                <FormLabel mt={2}>Card Number</FormLabel>
                                <Input
                                    name="number"
                                    placeholder="1234 1234 1234 123"
                                    border={1}
                                    borderColor="black"
                                    borderStyle="solid"
                                    onChange={handleChange}
                                />
                                {errors.number && <Text color="red.500">{errors.number}</Text>}
                            </FormControl>
                            {
                                alert && (
                                    <Stack mt={3} spacing={3} mb={3} border={1}
                                        borderColor="red.100" borderStyle="solid">
                                        <Alert status='warning'>
                                            <AlertIcon />
                                            Please fill all fields correctly.
                                        </Alert>
                                    </Stack>
                                )
                            }
                            <Center>
                                <Button mt={6} px={8} py={4} colorScheme="green" onClick={handleForm}>
                                    <Text fontSize="xl">Submit</Text>
                                </Button>
                            </Center>
                        </Box>
                    </Container>
                )
            }

            {
                orderAlert && (
                    <>
                        {!close && (
                            <Alert
                                color="black"
                                alignSelf={"flex-center"}
                                position={'relative'}
                                mx={"auto"}
                                my={"auto"}
                                width={200} status='success'>
                                <AlertIcon />
                                <Box width={100}>
                                    <AlertDescription>
                                        Ordered!
                                    </AlertDescription>
                                </Box>
                                <CloseButton
                                    alignSelf='flex-start'
                                    position='relative'
                                    right={-1}
                                    top={-1}
                                    onClick={handleClose}
                                />
                            </Alert>
                        )}

                        <Center>
                            <Text fontSize='xl' mt={3} mb={3}>
                                Click and see the orders
                            </Text>
                        </Center>
                        <Center>
                            <Button colorScheme="red" p={5}>
                                <Link href="/profile">
                                    <Text fontSize='xl'>Pizza's</Text>
                                </Link>
                            </Button>
                        </Center>
                    </>
                )
            }
        </>
    )
}
export default Order;
