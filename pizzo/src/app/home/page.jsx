
import React from 'react'
import { Box,Button,Grid,Text,Center, Flex, Show, Hide } from "@chakra-ui/react"
import bg from"../../../public/bgpizzo.jpg"
import { BsBasket } from "react-icons/bs";
import Image from 'next/image'
import styles from "./styles.module.css"
import { SiCodechef } from "react-icons/si";
import { useSelector } from 'react-redux';
import Link from 'next/link';


function Home() {
  
  return (
    <div>
 
 <Grid mt={10} templateColumns={{base :'repeat(1, 1fr)',lg :'repeat(2, 1fr)'}} gap={16} marginX={5}>
  
 <Box  width='100%'  >
 <Center>
 <Image 
        alt="pizza"
        src={bg}   
        style ={{borderRadius :"10%"}}
        
      />
 </Center>
      
 
      
       
    </Box>

    <Box>
      <Center>
       
       
        <Text mr={2}  fontSize='5xl' mb={3} >Enjoy Your Pizza In Town </Text> 

        <Text color="yellow" fontSize='6xl' ><SiCodechef /></Text>
      
       
        
      </Center>
      <Center>
      <Text fontSize='xl' mt={5}>Italian pizza Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, cum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, facere! </Text>
      </Center>
    

    <Box mt={8}>
      <Center>
        <Flex>
         
        <Button mr={3} py={8}  colorScheme="red" border={1} borderStyle="solid" borderColor="white" > 
        <Flex>
        <Text fontSize='xl'   mr={2}><Link href ="/basket">Order now</Link></Text>
        <Text fontSize='xl'>   <BsBasket  /></Text>
     
            </Flex>
            </Button> 
        <Button  py={8} colorScheme="red"  border={1} borderStyle="solid" borderColor="white"><Text fontSize='xl'><Link href ="/menu">View menu</Link>
          
          </Text></Button> 
        </Flex>
     
      </Center>

    </Box>
    </Box>
    
    <Box  width='100%'   >
   
      
       
    </Box>
   
  
</Grid>

   
  </div>
  )
}

export default Home
