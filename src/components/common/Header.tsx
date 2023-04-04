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


function Header({title,description}: Theader) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <div className='z-50'>
            <Head>
                <title>{title}</title>
                <meta name="description" content={`${description}`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="https://i.im.ge/2023/04/05/IxXAb6.favicon-32x32.png" />
            </Head>
            <section className=" h-[100px] p-10 flex justify-between items-center">
                <HiOutlineMenuAlt1 color="black" onClick={onOpen} size={30} />
                <Image src={"../assets/logo/PiShoppingMall.svg"} alt="pi shopping mall's logo" width={250} height={250} />
                <section>
                    <HiShoppingCart color="black" size={30} />
                </section>
            </section>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Create your account</DrawerHeader>

                    <DrawerBody>
                        <Input placeholder='Type here...' />
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