import { Box, Button, Center, Container, Flex, HStack, Heading, Input, Text, Link, Image, Menu, MenuButton, MenuList, MenuGroup, MenuItem, MenuDivider, Divider } from '@chakra-ui/react'
import { IoBagAddOutline } from "react-icons/io5";
import { FaMobileAlt, FaUser, FaGift } from "react-icons/fa";
import { IoIosNotifications } from 'react-icons/io';
import { CiMobile1, CiLocationOn } from "react-icons/ci";
import { IoMdHelp } from "react-icons/io";
import { Link as RouterLink } from 'react-router-dom';

import { Link as ChakraLink } from '@chakra-ui/react'
import Dropdoun from '../helperComponent/Dropdoun';
import DrawerExample from '../helperComponent/DrawerExample';
import { useEffect, useState } from 'react';

// from script
import { getData } from '../script/getRequast';
import { dropdaun ,dropdoun2} from '../script/navData';


import Dropdoun1 from '../helperComponent/Dropdoun1';


export default function Nevbar() {
    const [catagorys, setcatagorys] = useState([])
    const [containt, setcontaint] = useState([])
    const topRightLinks = [
        {
            text: " Get App",
            path: "https://www.nykaa.com/installApp",
            icons: <CiMobile1 />,
        },
        {
            text: "Store & Events",
            path: "https://www.nykaa.com/stores-n-events-desktop",
            icons: <CiLocationOn />,
        },
        {
            text: "Gift Card",
            path: "https://www.nykaa.com/giftcard.html?root=hdr_giftcards",
            icons: <FaGift />,
        },
        {
            text: "Help",
            path: "https://www.nykaa.com/gateway-api/omsApis/helpCenter?domain=NYKAA",
            icons: <IoMdHelp />,
        },
    ]

   

    

    return (<>
        <Box display={{ base: 'none', sm: 'none', md: 'block' }} bg={'rgb(67,145,182)'} py={2} color={'white'}>
            <Flex w={'80%'} m={'auto'} justify={'space-between'}>
                <Box>
                    <Text fontSize={{ md: '10px', lg: '13px' }}>BEAUTY BONANZA Get Your Amazing Deals!</Text>
                </Box>
                <HStack fontSize={{ md: '10px', lg: '13px' }} spacing={5} align={'center'}>
                    {topRightLinks?.map((ele, ind) => {
                        let { text, path, icons } = ele
                        return <ChakraLink href={path} isExternal key={ind}>
                            <HStack spacing={2}>
                                {icons}
                                <Text>{text}</Text>
                            </HStack>
                        </ChakraLink>
                    })
                    }
                </HStack>
            </Flex>
        </Box>
        <Container maxW={'95%'} m={'auto'} >

            <Flex justify={'space-between'} w={'100%'} m={'auto'}>
                <Flex w={'50%'} display={{ base: 'flex', sm: 'flex', md: 'none' }} align={'Center'}>
                    <DrawerExample />
                    <ChakraLink w={'40%'}>
                        <RouterLink to={'/'} w={'15%'} display={{ sm: 'block', md: 'none' }} >
                            <Image w={'90%'} display={{ sm: 'block', md: 'none' }} m={'auto'} src="https://cdn.iconscout.com/icon/free/png-512/free-nykaa-3384872-2822953.png?f=webp&w=512" />
                        </RouterLink>
                    </ChakraLink>
                </Flex>

                <Flex align={'center'} spacing={1} w={'45%'} justify={'space-around'} alignItems={'center'} display={{ base: 'none', sm: 'none', md: 'flex' }}>
                    <ChakraLink w={{ md: '15%', lg: '20%' }}>
                        <RouterLink to={'/'}  >
                            <Image w={'90%'} m={'auto'} src="https://cdn.iconscout.com/icon/free/png-512/free-nykaa-3384872-2822953.png?f=webp&w=512" />
                        </RouterLink>
                    </ChakraLink>
                    <Link to={''} fontSize={{ base: '8px', sm: '8px', md: '11px', lg: '13' }}  >Categories</Link>
                    {/* hare is the dropdoun */}
                    {
                        dropdaun.map((ele, ind) => {
                            return <Dropdoun btnText={ele.link} content={ele.Cont} key={ind} />
                        })
                    }
                </Flex>

                <Flex spacing={3} align={'Center'} w={'45%'} justify={{ base: 'end', sm: 'end', md: 'space-around', lg: 'space-around' }} >
                    <Box w={'50%'} display={{ base: 'none', sm: 'none', md: 'block', lg: 'block' }} >
                        <Input type='search' variant={'filled'} placeholder='Search Product' size='sm' m={'auto'} />
                    </Box>
                    <Flex w={'50%'} align={'Center'} justify={'space-around'}
                    >
                        <Button
                            fontSize={'20px'} colorScheme='pink'
                            display={{ base: 'none', sm: 'none', md: 'block' }}
                        >Sing In</Button>

                        <RouterLink to={'/cart'}>
                            <IoBagAddOutline size={'30px'} />
                        </RouterLink>


                        <Menu >
                            <MenuButton as={Button} display={{ md: 'none', lg: 'none', sm: 'block' }} >
                                <FaUser size={'30px'} />
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Need Help?</MenuItem>
                                <MenuItem>Authenticity</MenuItem>
                                <MenuItem>Nykaa CSR</MenuItem>
                                <MenuItem>Responsible Disclosure</MenuItem>
                                <MenuItem>Chat Now</MenuItem>
                                <MenuItem>Log In</MenuItem>
                            </MenuList>
                        </Menu>

                    </Flex>

                </Flex>
            </Flex>
            <Box w={'80%'} m={'auto'} display={{ base: 'block', sm: 'block', md: 'none', lg: 'none' }} >
                <Input type='search' variant={'filled'} placeholder='Explore Our Beauty Collection' size='sm' m={'auto'} />
            </Box>
        </Container>
        <Divider h={'1px'} bg={"black"} />
        <Flex justify={'space-around'}  px={10} display={{base:'none',sm:'none',md:'flex',lg:'flex'}}>
            {dropdoun2?.map((ele, ind) => {
                    return <Dropdoun1 btnText={ele.link} content={ele.Cont} key={ind} />
            })}
        </Flex>
        <Divider display={{base:'none',sm:'none',md:'flex',lg:'flex'}} h={'1px'} bg={"black"} />
    </>
    )
}
