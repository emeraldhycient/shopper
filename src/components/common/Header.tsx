import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Input,
    Text
} from '@chakra-ui/react'

import { HiOutlineMenuAlt1 } from "react-icons/hi"
import { HiShoppingCart } from "react-icons/hi"
import Head from 'next/head'
import Image from 'next/image'
import { Theader } from '@/types'


function Header({ title, description }: Theader) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <div className='sticky top-0 bg-white'>
            <Head>
                <title>{title}</title>
                <meta name="description" content={`${description}`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="https://i.im.ge/2023/04/05/IxXAb6.favicon-32x32.png" />
            </Head>
            <section className=" h-[100px] py-10 px-4 md:px-20 flex justify-between items-center sticky top-0">
                <img src={"https://i.im.ge/2023/04/05/IxI3C8.PiShoppingMall.png"} alt="pi shopping mall's logo" width={250} height={250} />
                <section onClick={onOpen} className="flex items-center">
                    <HiShoppingCart color="black" size={30} />
                    <div className="bg-black p-1 text-white rounded-full flex items-center justify-center h-6 w-6">
                        <Text fontSize='sm' fontWeight='bold'>
                            10
                        </Text>
                    </div>
                </section>
            </section>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef as  never}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader className='flex items-center'>Shopping Cart
                        <div className="bg-black p-1 text-white rounded-full flex items-center justify-center h-6 w-6 ml-2">
                            <Text fontSize='sm' fontWeight='bold'>
                                10
                            </Text>
                        </div>
                    </DrawerHeader>

                    <DrawerBody>
                        {/* <Input placeholder='Type here...' /> */}
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    )
}

export default Header;