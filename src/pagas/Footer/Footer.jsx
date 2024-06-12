import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import { Box, Button, Container, HStack, IconButton, Input, Text, VStack, Heading, Image, Flex, Link, SimpleGrid, Stack, Spacer } from '@chakra-ui/react'
import React from 'react'
import googleplayIcon from "../../assets/google-play.png"
import appleIcon from "../../assets/icons-apple.png"
import { FaMobileScreenButton } from 'react-icons/fa6'
import { CiApple } from "react-icons/ci";
import { SiMapbox } from 'react-icons/si'


export default function Footer() {
    return (
        <Container maxW={'container.lg'}>
            <Heading fontSize={'md'}>Nykaa - The Online Beauty Store</Heading>

            <Flex
                mt={10}
                bg="rgb(58,64,71)"
                color={'white'}
                justify={'space-around'}
                py={10}
                direction={{ base: 'column-reverse', sm: 'column-reverse', md: 'row' }}
                gap={10}

            >
                <Box w={{ base: '80%', sm: '80%', md: '27%' }} m={'auto'}>

                    <Text mb={3} fontSize={[10, 13, 15, 17, 18]}> <EmailIcon /> Get special discount on your inbox</Text>

                    <HStack>
                        <Input variant='flushed' placeholder='Your Email'
                            colorScheme='white'
                            fontSize={[10, 20]}
                        />
                        <Button variant={'outline'} colorScheme='white'>SEND</Button>
                    </HStack>
                </Box>
                <Box w={{ base: '80%', sm: '80%', md: '27%' }} m={'auto'}>
                    <VStack>
                        <HStack align={'top'} >
                            <FaMobileScreenButton />
                            <Text fontSize={[10, 13, 14, 15, 16]}> EXPERIENCE THE NYKAA MOBILE APP</Text>
                        </HStack>
                        <HStack>
                        <Button  bg={'black'} py={6} color={'white'} _hover={'none'}>
                            <HStack >
                                <Image w={'25%'} src={googleplayIcon} />
                                <VStack>
                                    <Text fontSize={'7px'}>GET IT ON</Text>
                                    <Text fontSize={'12px'}>Google Play</Text>
                                </VStack>

                            </HStack>
                        </Button>

                        <Button  bg={'black'} py={6}  color={'white'} _hover={'none'}>
                            <HStack >
                                <Image  w={'25%'} src={appleIcon} />
                                <VStack>
                                    <Text fontSize={'7px'}>Download on the</Text>
                                    <Text fontSize={'12px'}>App Store</Text>
                                </VStack>

                            </HStack>
                        </Button>
                        </HStack>
                    </VStack>
                </Box>
                <Box  w={{ base: '80%', sm: '80%', md: '27%' }} m={'auto'}>
                    <VStack spacing={5}>
                        <Text fontSize={[10, 12, 13, 14, 15]}><PhoneIcon /> FOR ANY HELP, YOU MAY CALL US AT 1800-267-4444</Text>
                        <Text fontSize={[10, 12, 13, 14, 15]}>(Monday to Saturday, 8AM to 10PM and Sunday, 10AM to 7PM)</Text>
                    </VStack>
                </Box>
            </Flex>

            <SimpleGrid columns={{ base: 3, lg: 5 }} display={{ base: 'none', md: 'grid' }} spacing={5} gap={5} py={20} px={5} >
                <HStack  >
                    <Image src='https://adn-static2.nykaa.com/media/wysiwyg/2021/Free-shipping.svg' />
                    <VStack>
                        <Text fontSize={['8', '13px']}>FREE SHIPPING</Text>
                        <Text fontSize={['6', '10px']}>On Orders Above ₹299</Text>
                    </VStack>
                </HStack>

                <HStack>
                    <Image src='https://adn-static2.nykaa.com/media/wysiwyg/2021/return_accepted.svg' />
                    <VStack>
                        <Text fontSize={['8', '13px']}>EASY RETURNS</Text>
                        <Text fontSize={['6', '10px']}>15-Day Return Policy</Text>
                    </VStack>
                </HStack>

                <HStack>
                    <Image src='https://adn-static2.nykaa.com/media/wysiwyg/2021/Authenticity.svg' />
                    <VStack>
                        <Text fontSize={['8', '13px']}>100% AUTHENTIC</Text>
                        <Text fontSize={['6', '10px']}>Products Sourced Directly</Text>
                    </VStack>
                </HStack>

                <HStack>
                    <Image src='https://adn-static2.nykaa.com/media/wysiwyg/2021/Brands.svg' />
                    <VStack>
                        <Text fontSize={['8', '13px']}>1900+ BRANDS</Text>
                        <Text fontSize={['6', '10px']}>1.2 Lakh+ Products</Text>
                    </VStack>
                </HStack>

                <VStack>
                    <Text px={2}>Show us some love ❤ on social media</Text>
                    <HStack>
                        <Link href='https://www.instagram.com/mynykaa/?ref=badge'><Image src='https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-instagram-filled.svg' /></Link>
                        <Link href='https://www.facebook.com/p/Nykaa-100044142710696/'><Image src='https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-facebook-filled.svg' /></Link>
                        <Link href='https://www.youtube.com/channel/UCoaH2UtB1PsV7av17woV1BA'><Image src='https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-youtube-filled.svg' /></Link>
                        <Link href='https://twitter.com/MyNykaa'><Image src='https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-twitter-filled.svg' /></Link>
                        <Link href='https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-pinterest-filled.svg'><Image src='https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-pinterest-filled.svg' /></Link>
                    </HStack>
                </VStack>

            </SimpleGrid>

            <VStack align={'center'} py={[2, 5]} alignContent={'center'} bg={'rgb(232,0,113)'} >
                <Flex justify={'space-around'} color={'white'} fontSize={['4px', '8px', '11px', '15px']} w={'60%'} m={'auto'}  >
                    <Link href='https://www.nykaa.com/terms-conditions/lp'>Terms & Conditions</Link>
                    <Link href='https://www.nykaa.com/shipping-policy/lp'>Shipping Policy</Link>
                    <Link href='https://www.nykaa.com/cancellation-policy/lp'>Cancellation Policy</Link>
                    <Link href='https://www.nykaa.com/privacy-policy/lp'>Privacy Policy</Link>
                </Flex>
                <Text mt={{ base: 0, md: 1 }} color={'white'} textAlign={'center'} fontSize={['4px', '6px', '8px', '10px']}>© 2024 NYKAA E-RETAIL LIMITED All Rights Reserved.</Text>
            </VStack>
        </Container>
    )
}
