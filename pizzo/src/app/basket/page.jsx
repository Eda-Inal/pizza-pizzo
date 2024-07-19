'use client'
import React from 'react'
import { useEffect } from 'react'
import { Card, CardHeader, Flex, CardBody, Input, Box, CardFooter, Text, Stack, Heading, Button, Container, Grid, Divider, Center, Spacer } from '@chakra-ui/react'
import { LiaSmileWinkSolid } from "react-icons/lia";
import Image from 'next/image'
import Link from 'next/link'
import img from "../../../public/4.jpg"
import { useSelector, useDispatch } from 'react-redux'
import { increaseAmount, decreaseAmount,setShowLoginBtn, setShowAdresBtn } from '../redux/pizzasSlice'

import { GoPlusCircle } from "react-icons/go";
import { FiMinusCircle } from "react-icons/fi";
import { useState } from 'react'
function Basket() {
  const dispatch = useDispatch();
  const pizzadata = useSelector((state) => state.pizza.basket);
  const totalprice = useSelector((state) => state.pizza.totalprice);
  const login = useSelector((state) => state.pizza.login);
  const signup = useSelector((state) => state.pizza.signup);
  const profile = useSelector((state) => state.pizza.profile);
  const showLoginBtn = useSelector((state) => state.pizza.showLoginBtn);
  const showAdresBtn = useSelector((state) => state.pizza.showAdresBtn);

  useEffect(() => {
    if (!login.name && !signup.name) {
      dispatch(setShowLoginBtn(true));
      dispatch(setShowAdresBtn(false));
    } else if ((login.name || signup.name) && !profile.adres) {
      dispatch(setShowLoginBtn(false));
      dispatch(setShowAdresBtn(true));
    } else if ((login.name || signup.name) && profile.adres) {
      dispatch(setShowLoginBtn(false));
      dispatch(setShowAdresBtn(false));
    }
  }, [login.name, signup.name, profile.adres, dispatch]);
  

  const handleAmountPlus = (id) => {
    dispatch(increaseAmount(id))
  }
  const handleAmountMinus = (id) => {
    dispatch(decreaseAmount(id))
  }
  const handleClick = () => {

    
  
    
  }  
  const handleChange = () => {
    dispatch(setShowLoginBtn(false))
  }
  
 
  return (
    <>
      <Grid marginX={{ base: "1", sm: "2", md: "8", lg: "15", xl: "28" }} mb={12}>
        <Flex mb={3}>
        
          <Text fontSize="2xl">Time to Indulge  </Text>
          <Text fontSize="4xl">  <LiaSmileWinkSolid /></Text>
        </Flex>
        {pizzadata.map((item) => (
          <Card
            direction={{ base: 'column', sm: 'row' }}

            overflow='hidden'
            variant='outline'
            background="gray.700"
            color="white"
          ><Box mx={{ base: "auto", sm: 0 }}  >
              <Image

                width={150}
                height={150}
                src={item.image.src}
                alt='Caffe Latte'
              />
            </Box>
            <Stack>
              <CardBody mx={{ base: "auto", sm: 0 }} >
                <Text fontSize="2xl"  >{item.name}</Text>
                <Text py='2' >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, quae.
                </Text>
              </CardBody>
              <CardFooter>
                <Box mx={{ base: "auto", sm: 0 }}>
                  <Flex>
                    <Button colorScheme="black"><Text fontSize="3xl" onClick={() => handleAmountMinus(item.id)}> <FiMinusCircle /></Text></Button>
                    <Center></Center>
                    <Box ><Text fontSize="2xl">{item.amount}</Text></Box>
                    {/* <Input  value={item.amount}></Input> */}
                    <Button colorScheme="black" onClick={() => handleAmountPlus(item.id)}><Text fontSize="3xl" ><GoPlusCircle /></Text></Button>
                  </Flex>
                </Box>
              </CardFooter>
            </Stack>
          </Card>
        ))}

        {pizzadata.length >= 1 && (
          <>

            <Box mt={3} p={3} >

              {pizzadata.map((item) => (
                <Flex>
                  <Text fontSize="2xl">{item.name}</Text>
                  <Spacer />
                  <Text fontSize="2xl">{item.price * item.amount}$</Text>
                </Flex>

              ))}


              <Divider />

              <Flex mt={5}>
                <Text fontSize="2xl" mr={3}>
                  Total</Text>
                <Spacer />
                <Text fontSize="2xl" color="red">{totalprice}$</Text>
              </Flex>

            </Box>
            
            {showLoginBtn && (
              <>
              <Text fontSize="lg">Please log in first</Text>
              <Button mt={2} width={100} colorScheme="blue" p={3}>
                <Text fontSize="lg"><Link href='/login'>Log In</Link></Text>
              </Button>
              </>
            )}
            {showAdresBtn && (
              <>
              <Text fontSize="lg">Please fill the address</Text>
              <Button mt={2} width={200} colorScheme="blue" p={3}>
                <Text fontSize="xl"><Link href='/profile'>Complete Address</Link></Text>
              </Button>
              </>
            )}
            {!showLoginBtn && !showAdresBtn && (
              <Button mt={6} width={100} colorScheme="green" p={3}>
                <Text fontSize="xl"><Link href="/order">Order</Link></Text>
              </Button>
            )}
            
              
            
                
              
            

          
             
                
               
               
               
                
              
                </>
          
        )}
        {pizzadata.length < 1 && (<>
          <Text fontSize="2xl">There is no pizza in here. Let's check the menu</Text>
          <Button mt={6} width={100} colorScheme="red" p={3}>
            <Text fontSize="xl"><Link href='/menu'>Menu</Link></Text>
          </Button></>
        )}
      </Grid>
    </>

  )
}

export default Basket
