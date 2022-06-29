import React from 'react'
import { Button, Flex, HStack, Link, Text } from "@chakra-ui/react";
import { MenuItem } from "../../molecules/MenuItem/MenuItem";

export const TopBar = ()=>(
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

      <MenuItem>
      <Link href='/blog'>
        <a>Blog</a>
      </Link>
      </MenuItem>

      <MenuItem>
      <Link href='/product'>
        <a>Product</a>
      </Link>
      </MenuItem>

      <MenuItem>
      <Link href='/pricing'>
        <a>Pricing</a>
      </Link>
      </MenuItem>

    </HStack>
    <Flex ml='86px'>
      <Button variant='solid' colorScheme='blue'>
        Get started
      </Button>
    </Flex>
</Flex>
) 