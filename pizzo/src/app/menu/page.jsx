'use client'
import React from 'react'
import { Card, CardHeader, Grid, Box, CardBody, CardFooter, Stack, Heading, Text, Button, Flex, Spacer,useToast } from '@chakra-ui/react'
import Image from 'next/image'
import pizzas from "../pizzas.json";
import { useDispatch } from 'react-redux';
import { addBasket, calculateTotal } from '../redux/pizzasSlice';
function Menu() {
  const toast = useToast();
  const dispatch = useDispatch();
  const handleBasket = (item) => {
    dispatch(addBasket(item));
    dispatch(calculateTotal())
    toast({
      title: `${item.name} added in card.`,
      status: 'success',
      duration: 1000,
      isClosable: true,
      position: 'top-right',
    });
  }
  return (
    <div >
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)' }} marginTop={2} mb={8} gap={6} marginX={7}  >
        {pizzas.map((item, index) => (
          <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            bg="black"
            color="white"
          >
            <Box mx={{ base: "auto", sm: 0 }} width={{ base: 200, md: 250, lg: 300 }}>
              <Image
                width={200}
                height={200}
                src={item.image.src}
                alt='Caffe Latte'
              />
            </Box>
            <Stack>
              <CardBody>
                <Heading size='md'>{item.name}</Heading>
                <Text py='2'>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iste autem sint
                </Text>
              </CardBody>
              <CardFooter>
                <Flex>
                  <Box mr={8}><Text fontSize="2xl">{item.price}$</Text>
                  </Box>
                  <Button
                    variant='solid'
                    px={7}
                    colorScheme='red'
                    onClick={() => handleBasket(item)}
                  >
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
