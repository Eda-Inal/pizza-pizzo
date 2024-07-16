'use client'
import React from 'react'
import { Card, CardHeader,Flex, CardBody,Input, Box,CardFooter,Text, Stack,Heading,Button, Container,Grid,Divider,Center, Spacer} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import  img from "../../../public/4.jpg"
import { useSelector,useDispatch } from 'react-redux'
import { increaseAmount,decreaseAmount } from '../redux/pizzasSlice'

import { GoPlusCircle } from "react-icons/go";
import { FiMinusCircle } from "react-icons/fi";
function Basket() {
  const pizzadata = useSelector((state) => state.pizza.basket);
  const totalprice = useSelector((state) => state.pizza.totalprice);
  const dispatch =  useDispatch();
const handleAmountPlus = (id) => {
dispatch(increaseAmount(id))
}
const handleAmountMinus = (id) => {
  dispatch(decreaseAmount(id))
  }

  return (
    
    <>
   

 <Grid marginX={{base:"1", sm:"2",md:"8",lg:"15",xl:"28"}} mb={12}>
   {pizzadata.map((item) => (
    <Card
    direction={{ base: 'column', sm: 'row' }}
    
    overflow='hidden'
    variant='outline'
    background="black"
    color="white"
  >
    <Image
      width ={150}
      height ={150}
      
      src={item.image.src}
      alt='Caffe Latte'
    />
  
    <Stack>
      <CardBody>
        <Heading size='md'>{item.name}</Heading>
  
        <Text py='2'>
          Caffè latte is a coffee beverage of Italian origin made with espresso
          and steamed milk.
        </Text>
      </CardBody>
  
      <CardFooter>
        <Box>
        <Flex>
        <Button colorScheme="black"><Text fontSize="3xl" onClick={()=> handleAmountMinus(item.id)}> <FiMinusCircle/></Text></Button>
        <Center></Center>
           <Box ><Text fontSize="2xl">{item.amount}</Text></Box>
            {/* <Input  value={item.amount}></Input> */}
            <Button colorScheme="black" onClick={()=> handleAmountPlus(item.id)}><Text fontSize="3xl" ><GoPlusCircle /></Text></Button>

</Flex>
        </Box>
       
      </CardFooter>
    </Stack>

  </Card>
  
   ))}

 {pizzadata.length >=1 && (
  <>

<Box   mt={3} p={3} >

  {pizzadata.map((item) => (
    <Flex>
    <Text  fontSize="2xl">{item.name}</Text>
<Spacer/>
<Text  fontSize="2xl">{item.price * item.amount}$</Text>
</Flex>

  ))}


<Divider />

<Flex mt={5}>
  <Text  fontSize="2xl"  mr={3}>
Total</Text>  
<Spacer/>
<Text fontSize="2xl" color="red">{totalprice}$</Text> 
</Flex>

 </Box>
 
 <Button mt={6} width={100} colorScheme="green" p={3}>
    <Text fontSize="xl">Order</Text>
 </Button>
 </>
)} 
 {pizzadata.length <1 && (<>
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
