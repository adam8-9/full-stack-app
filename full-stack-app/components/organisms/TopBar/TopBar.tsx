import React from 'react'
import { Button, Flex, HStack, Text } from "@chakra-ui/react";
import { MenuItem } from "../../molecules/MenuItem/MenuItem";

export const TopBar = ()=>{
    return(
    <Flex w='100%' justifyContent='space-between' alignItems='center' p='8px 16px'> 

    <Text fontSize='36px'
     fontWeight='bold' 
     lineHeight='46px' 
     color='blue.300'
     flexGrow='1'
     >
      SuperApp
    </Text>

    <HStack spacing='16px' alignItems='center'>
      <MenuItem text='Blog' href='/blog' />
      <MenuItem text='Product' href='/product' />
      <MenuItem text='Pricing' href='/pricing' />
    </HStack>

    <Flex ml='86px'>
      <Button variant='solid' colorScheme='blue'>
        Get started
      </Button>
    </Flex>
</Flex>
    )
}