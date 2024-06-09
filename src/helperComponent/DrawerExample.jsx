import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, IconButton, Image, Input, MenuButton, TabIndicator, VStack, useDisclosure } from "@chakra-ui/react"
// for tebe section
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

// script is hare
import { getData } from "../script/getRequast"
import { hendelLinks } from "../script/getRequast"

import React, { useEffect, useState } from "react"
import { IoMdCloseCircleOutline } from "react-icons/io"
import { MdMenu } from "react-icons/md";
import { Link as RouterLink } from "react-router-dom"
import { Link as ChakraLink } from "@chakra-ui/react"

export default function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [catagorys, setcatagorys] = useState([])
    const [brands, setbrands] = useState([])
    // console.log(brands)
    const getCategory = async () => {
        let res = await getData('https://dummyjson.com/products/category-list')
        setcatagorys(res)
    }
    const getBrand = async () => {
        let res = await getData('https://dummyjson.com/products?limit=100&skip=0')
        setbrands(res?.products)
    }




    useEffect(() => {
        getCategory()
        getBrand()
        //  setcatagory(data)
    }, [])
    return (
        <>
            <Button ref={btnRef} bg={'none'} m={0} p={0} onClick={onOpen}>
                <MdMenu size={'30px'} />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <RouterLink to={'/login'}>
                            <Image src={'https://images-static.nykaa.com/media/Loginbanner-specificnew.png'} />
                        </RouterLink>
                    </DrawerHeader>

                    <DrawerBody>
                        <Tabs isFitted variant='enclosed' colorScheme="pink">
                            <TabList mb='1em'>
                                <Tab>Categories</Tab>
                                <Tab>Brands</Tab>
                            </TabList>
                            <TabIndicator mt='-1.5px' height='2px' bg='RGB(232 0 113)' borderRadius='1px' />
                            <TabPanels>
                                <TabPanel>
                                    <VStack align={'left'} spacing={2} >
                                        {catagorys.map((catagory, ind) =>
                                            <ChakraLink onClick={onClose}
                                            key={ind}
                                                bg={'RGB(217 217 217)'} p={1} _hover={{ color: 'RGB(244 0 174)', boxShadow: 'dark-lg' }}>
                                                <RouterLink onClick={(e) => hendelLinks(e)} to={'/'} key={ind}>{catagory}</RouterLink></ChakraLink>)}
                                    </VStack>
                                </TabPanel>
                                <TabPanel>
                                    <VStack align={'left'} spacing={2} >
                                        {brands?.map((product, ind) => {
                                            if (product.brand) {
                                                return <ChakraLink 
                                                onClick={onClose}
                                                key={ind}
                                                bg={'RGB(217 217 217)'} p={1} _hover={{ color: 'RGB(244 0 174)', boxShadow: 'dark-lg' }}>
                                                    <RouterLink onClick={(e) => hendelLinks(e)} to={'/'} key={ind}>{product?.brand}</RouterLink></ChakraLink>
                                            }

                                        })}
                                    </VStack>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                        <Image src="https://images-static.nykaa.com/media/Frame48097857.png" />
                    </DrawerBody>

                    <DrawerFooter>

                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}