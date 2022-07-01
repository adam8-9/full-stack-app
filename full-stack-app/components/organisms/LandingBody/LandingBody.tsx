import { Box, Container, Flex, ListItem, SimpleGrid, Text, UnorderedList} from "@chakra-ui/react";

export const LandingBody = ()=>(

<Container>
    <SimpleGrid columns={2} spacing={10} m='4rem 0rem'>
        <Box 
        bg='gray' 
        height='225px'
        width='100%'
        borderRadius='16px'
        >
        </Box>
        <Flex flexDirection='column' bg='gray' p='1rem' justifyContent='center'>
            <Text mb='0.5rem'>Including the market standard technologies</Text>
           <UnorderedList>
                <ListItem>Nextjs</ListItem>
                <ListItem>postgreSQL</ListItem>
                <ListItem>ChakraUI</ListItem>
            </UnorderedList>
        </Flex>
   
    </SimpleGrid>
</Container>

)