import { Box, Button, Flex, Link as ChakraLink, HStack, border, position, Heading, SimpleGrid, VStack, Container, Image,Text } from '@chakra-ui/react'

import { Link as RouterLink } from 'react-router-dom'
import React, { useState } from 'react'
import './dropDoun.css'

export default function Dropdoun({ btnText, content }) {
    const [show, setshow] = useState(false)

    const styleingDropdoun = {


    }
    const styleingDropdounBtn = {

    }



    const styleingDropdounContent = {
        border: 'solid 2px red',
        position: 'absolute',
        w: '100%',
        h: '400px'
    }

    // console.log(content)
    const { heading, linktitle } = content
    // console.log(content?.img)
    return (<>

        <Box className='dropdown'
            onMouseEnter={() => setshow(true)}
            onMouseLeave={() => setshow(false)}>
            <Button fontWeight={'normal'} fontSize={{ sm: '8px', md: '11px', lg: '13' }} bg={'none'} _hover={{ bg: 'none', textDecoration: 'underline' }}
            >{btnText}</Button>
            <Box className='content' >
                <Container maxW={'container.lg'} 
                bg={'RGB(245 245 255)'}
                boxShadow={'dark-lg'} borderRadius={5} pb={10}>
                    <VStack  >
                        <Heading fontSize={'sm'}>{heading}</Heading>
                        <SimpleGrid columns={5} spacing={5}>
                            {linktitle?.map((title, ind) => {
                                return <ChakraLink _hover={{ color: 'blue', textDecoration: 'underline' }}
                                key={ind}
                                >
                                    <RouterLink key={ind}>{title}</RouterLink>
                                </ChakraLink>
                            })}
                        </SimpleGrid>

                        <SimpleGrid columns={3} spacing={15}>
                            {content?.img?.map((ele, ind) => {
                                return <Box key={ind}>
                                    <Image h={'200px'} src={ele.imgurl}  alt={ele.imgtitle}/>
                                    <Text my={3}>{ele.imgtitle}</Text>
                                </Box>
                            })}
                        </SimpleGrid>
                    </VStack>
                </Container>
            </Box>
        </Box>




    </>
    )
}
