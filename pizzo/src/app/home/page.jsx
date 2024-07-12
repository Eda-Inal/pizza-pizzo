import React from 'react'
import { Box } from "@chakra-ui/react"
import bg from"../public/bg-2.jpg"
import Image from 'next/image'
import styles from "./styles.module.css"

function Home() {
  return (
    <div>

    <Box  width='100%'  >
     <Image 
        alt="pizza"
    
        src={bg}
        

     
        
        
      />  
    </Box>
   
  </div>
  )
}

export default Home
