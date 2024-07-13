import React from 'react'


import { Card, CardHeader,Grid,Box, CardBody, CardFooter,Stack,Heading,Text ,Button, Flex} from '@chakra-ui/react'
import Image from 'next/image'
import pizzas from "../pizzas.json";
function Menu() {
 
  return (
    <div >
      <Grid templateColumns={{base :'repeat(1, 1fr)',md :'repeat(2, 1fr)',lg:'repeat(3, 1fr)',xl :'repeat(4, 1fr)'} } marginTop={2}  gap={6} marginX={7} >
      {pizzas.map((item,index)=>(
     
     <Card
 direction={{ base: 'column', sm: 'row' }} 
 overflow='hidden'
 variant='outline'
 bg="black"
 color="white"
>
 <Image
   objectFit='cover'
 maxW={{ base: '200px', sm: '200px' }}
width = {150}
height = {150}
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
    <Flex>
      <Box mr={8}><Text fontSize="2xl">{item.price}</Text>
        </Box>
       <Button variant='solid' px={7} colorScheme='red'>
        <Text fontSize="xl">  Add</Text>
    
     </Button>
    </Flex>
    
   </CardFooter>
 </Stack>
</Card>


    
  )
 )}

      </Grid>
  
     
  
    </div>
  )
}

export default Menu
