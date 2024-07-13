import React from 'react'
import { Card, CardHeader,Flex, CardBody,Input, Box,CardFooter,Text, Stack,Heading,Button, Container,Grid} from '@chakra-ui/react'
import Image from 'next/image'
import  img from "../../../public/4.jpg"

import { GoPlusCircle } from "react-icons/go";
import { FiMinusCircle } from "react-icons/fi";
function Basket() {
  return (

<Grid marginX={{base:"1", sm:"2",md:"8",lg:"15",xl:"28"}} mb={12}>
    <Card
    direction={{ base: 'column', sm: 'row' }}
    
    overflow='hidden'
    variant='outline'
    background="black"
    color="white"
  >
    <Image
      width ={200}
      
      src={img}
      alt='Caffe Latte'
    />
  
    <Stack>
      <CardBody>
        <Heading size='md'>The perfect latte</Heading>
  
        <Text py='2'>
          Caffè latte is a coffee beverage of Italian origin made with espresso
          and steamed milk.
        </Text>
      </CardBody>
  
      <CardFooter>
        <Box>
        <Flex>
        <Button colorScheme="black"><Text fontSize="3xl" > <FiMinusCircle/></Text></Button>
           
            <Input></Input>
            <Button colorScheme="black"><Text fontSize="3xl" ><GoPlusCircle /></Text></Button>

</Flex>
        </Box>
       
      </CardFooter>
    </Stack>
  </Card>
<Button mt={6} width={100} colorScheme="green" p={3}>
    <Text fontSize="xl">Order</Text>
 </Button>
 
  </Grid>
  


  
  )
}

export default Basket
