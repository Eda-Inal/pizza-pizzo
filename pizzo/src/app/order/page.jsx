import { Container,Box, Text,FormControl,FormLabel,Input,Button, Center } from '@chakra-ui/react'
import React from 'react'

function Order() {
  return (
   <Container color="black" centerContent  >
    <Box bg="gray.200" borderRadius={10}  color="black"   p={12}>
    <FormControl isRequired>
  <FormLabel mt={2} >Name</FormLabel>
  <Input placeholder='Name'
  border={1}
  borderColor="black"
   borderStyle="solid"  />
  <FormLabel mt={2}>Expiration Date</FormLabel>
  <Input placeholder="MM/YY"

  border={1}
  borderColor="black"
   borderStyle="solid"  />
   <FormLabel mt={2}>CVV</FormLabel>
  <Input placeholder="123" 
  border={1}
  borderColor="black"
   borderStyle="solid" 
  />
   <FormLabel mt={2}>Card Number</FormLabel>
  <Input placeholder="1234 1234 1234 1234" 
  border={1}
  borderColor="black"
   borderStyle="solid" 
  />
</FormControl>

<Center>
<Button mt={6} px={8} py={4} colorScheme="green">
    <Text fontSize="xl">Submit</Text>
    </Button>
</Center>

    </Box>

   </Container>
  )
}

export default Order
