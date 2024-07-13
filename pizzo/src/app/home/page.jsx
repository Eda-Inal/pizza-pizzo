import React from 'react'
import { Box,Button,Grid,Text,Center, Flex, Show, Hide } from "@chakra-ui/react"
import bg from"../../../public/bg-2.jpg"
import Image from 'next/image'
import styles from "./styles.module.css"
import sale1 from "../../../public/1.jpg"
import sale2 from "../../../public/4.jpg"
import { SiCodechef } from "react-icons/si";

function Home() {
  return (
    <div>
<Grid templateColumns={{base :'repeat(1, 1fr)',lg :'repeat(2, 1fr)'}} gap={16} marginX={5}>

    <Box>
      <Center>
        <Flex>
        <Text mr={2}  fontSize='5xl' mb={3}>Best pizzo since <Text as='i'>1950</Text> </Text>
       
        <Text color="yellow" fontSize='6xl' ><SiCodechef /></Text>
    
       
        </Flex>
      </Center>
      <Center>
      <Text fontSize='3xl'>This is not pizza. It is <Text as='mark'>Pizzo!</Text> </Text>
      </Center>
    

    <Box mt={8}>
      <Center>
        <Flex>
        <Button  py={8} mr={2} _hover={{bg:"yellow",color:"black"}} colorScheme="black" border={2} borderStyle="solid" borderColor="white" ><Text fontSize='xl'>Order</Text></Button> 
        <Button  py={8} colorScheme="black" _hover={{bg:"yellow",color:"black"}}  border={2} borderStyle="solid" borderColor="white"><Text fontSize='xl'>View menu</Text></Button> 
        </Flex>
     
      </Center>
 
  <Grid templateColumns='repeat(2, 1fr)' marginX={7}  mt={8} hidden>
    <Center>
    <Image  
        alt="pizza"
        src={sale1 }  
        width ={170}
        style ={{borderRadius :"70%"}}
        
        
      />
    </Center>

<Image 
        alt="pizza"
        src={sale2}  
        width ={170}  
        style ={{borderRadius :"70%"}}
        
      /> 


      

  </Grid>
    </Box>
    </Box>
    <Box  width='100%'   >
     <Image 
        alt="pizza"
        src={bg}   
        style ={{borderRadius :"20%"}}
        
      />  
    </Box>
</Grid>
  
   
  </div>
  )
}

export default Home
