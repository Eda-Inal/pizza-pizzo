'use client'
import { Container,Box, Text,FormControl,FormLabel,Input,Button, Center,Stack,Alert,AlertIcon,CloseButton,AlertTitle,AlertDescription,onClose } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'


function Order() {
    const [info,setInfo] = useState({name:"",date:"",cvv:"",number:""});
    const [alert,setAlert] = useState(false);
    const [orderAlert,setOrderAlert]=  useState(false);
    const [close,setClose] = useState(false)
 
    const handleName=(e) => {
        setInfo({ ...info, name: e.target.value });
      }
      const handleDate=(e) => {
        setInfo({ ...info, date: e.target.value });
      }
      const handleCvv=(e) => {
        setInfo({ ...info, cvv: e.target.value });
      }
      const handleNumber=(e) => {
        setInfo({ ...info, number: e.target.value });
      }
      const handleClose = () => {
        setClose(true)
      } 
      const handleForm = () => {
        if(info.name !== "" && info.date !=="" && info.cvv !== "" && info.number !==""){
            setAlert(false);
            setOrderAlert(true);


        } else{
         setAlert(true);
        }
      }
  return (
    <>
    {
        !orderAlert && (
<Container color="black" centerContent  >
    <Box bg="gray.200" borderRadius={10}  color="black"   p={12}>
    <FormControl isRequired>
  <FormLabel mt={2} >Name</FormLabel>
  <Input placeholder='Name'
  border={1}
  borderColor="black"
  onChange = {handleName}
   borderStyle="solid"  />
  <FormLabel mt={2}>Expiration Date</FormLabel>
  <Input placeholder="MM/YY"
  onChange = {handleDate}
  border={1}
  borderColor="black"
   borderStyle="solid"  />
   <FormLabel mt={2}>CVV</FormLabel>
  <Input placeholder="123" 
  border={1}
  borderColor="black"
   borderStyle="solid" 
   onChange = {handleCvv}
  />
   <FormLabel mt={2}>Card Number</FormLabel>
  <Input placeholder="1234 1234 1234 1234" 
  border={1}
  borderColor="black"
   borderStyle="solid" 
   onChange = {handleNumber}
  />
</FormControl>
{
    alert&&  ( <Stack mt={3} spacing={3} mb={3} border={1}  
        borderColor="red.100" borderStyle="solid">
    <Alert status='warning'>
      <AlertIcon />
      Please fill all fields.
    </Alert>
    </Stack>)
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
             {!close &&(
                
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
             )
            }
             
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

export default Order
