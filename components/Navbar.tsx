import { 
    Box, 
    Container, 
    Flex,
    Heading,
    Spacer,
    Img,
    Center
} from '@chakra-ui/react'
import Router from 'next/router'

import GithubPng from '../media/Github.png'

function Navbar() {
    return (
        <Box bg="#202023" w='100%' color="#FFFFFF" pt="2.5" pb="2.5"> 
            <Container maxW='container.md'> 
                <Flex>
                    <Center>
                        <Heading size='md' letterSpacing='1px' p='auto' _hover={{ cursor: 'pointer' }} onClick={() => Router.push('/')}>
                            TRU NGUYEN
                        </Heading>          
                    </Center>
                    <Spacer />
                    <Box>
                        <Img
                            _hover={{ cursor: 'pointer' }}
                            onClick={() => { Router.push('https://github.com/TruCypher') }}
                            borderRadius='full'
                            boxSize='30px'
                            src={GithubPng.src}
                            alt='Github Image'
                        />
                    </Box>
                </Flex>                
            </Container>
        </Box> 
    )
}

export default Navbar;