'use client'
import { Inter } from "next/font/google";
import { Providers } from "./provider";
import Navbar from "./components/Navbar";
import theme from "./theme";
import { ChakraProvider } from "@chakra-ui/react";


import "./globals.css";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider theme={theme}>
   
        <Navbar/>
        {children}
      
        </ChakraProvider>
      
        </body>
    </html>
  );
}
