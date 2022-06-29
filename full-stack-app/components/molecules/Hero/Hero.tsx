import React from 'react'
import { Container,Flex,Heading,Text } from "@chakra-ui/react";


export const Hero = ()=>(
    <Flex w='100%' backgroundColor='blue.300'>  
       <Container py='64px'>
          <Heading>
            Increase your productivity
            <br/>
            Make your app in minutes
          </Heading>
          <Text mt='16px' fontSize='30px' color='gray.700'>Your Fullstack React app</Text>
        </Container>
    </Flex>
)