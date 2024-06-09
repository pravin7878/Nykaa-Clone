import { Box, Button, Flex, Link as ChakraLink, HStack, border, position, Heading, SimpleGrid, VStack, Container, Image,Text } from '@chakra-ui/react'

import { Link as RouterLink } from 'react-router-dom'
import React, { useState } from 'react'
import './dropDoun.css'

// from script
import { hendelLinks } from '../script/getRequast'

export default function Dropdoun1({ btnText, content }) {
    
    return (<>

        <Box className='dropdown'>

            <Button fontWeight={'normal'} fontSize={{ sm: '8px', md: '11px', lg: '13' }} bg={'none'} _hover={{ bg: 'none', textDecoration: 'underline' }}
            >{btnText}</Button>
            <Box className='content' >
                <Container maxW={'container.lg'} boxShadow={'dark-lg '} borderRadius={5} pb={10} bg={'RGB(245 245 255)'}>
                    <VStack>
                        <SimpleGrid columns={4} spacing={5}>
                            {content?.map((title, ind) => {
                                return <ChakraLink _hover={{ color: 'blue', textDecoration: 'underline' }}
                                key={ind}
                                >
                                    <RouterLink onClick={hendelLinks} >{title}</RouterLink>
                                </ChakraLink>
                            })}
                        </SimpleGrid>
                    </VStack>
                </Container>
            </Box>
        </Box>
    </>
    )
}
