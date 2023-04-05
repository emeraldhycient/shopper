import Header from '@/components/common/Header'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Tabs, TabList, Tab, TabPanels, TabPanel, Text, Button } from '@chakra-ui/react'
import Footer from '@/components/common/Footer'
import { HiShoppingCart } from "react-icons/hi"
import { IoIosHeartEmpty } from "react-icons/io"
import { ImFacebook } from "react-icons/im"
import { AiOutlineInstagram } from "react-icons/ai"
import { GrPinterest } from "react-icons/gr"
import Image from 'next/image'

import storeData from "@/constants/products.json"
import { TproductCards } from '@/types'
import { useCart } from '@/states/cart'


function Productdetails() {
    const router = useRouter()
    const { id, title } = router.query

    const [details, setdetails] = useState<TproductCards | null>(null)

    useEffect(() => {
        const data = storeData.filter((item) => item?.id == Number(id))
        setdetails(data[0])
    }, [id, title])

    const addToCart = useCart((state: any) => state.addToCart)

    return (
        <section>
            <Header title={'pi shopping mall'} description={'your comfort shopping malls'} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-5 md:px-20 border-b border-gray-300 pb-20 mt-20">
                <div className="">
                    <div style={{ backgroundImage: `url(${details?.image})`, backgroundRepeat: "no-repeat", backgroundSize: "contain" }} className="h-[400px] md:h-[610px] w-[80vw]" />
                </div>
                <div className="pt-10">
                    <Text fontSize='3xl' className='text-center'>{title}</Text>
                    <Text fontSize={"sm"} className="text-gray-500 my-10 text-left md:text-center">{details?.shortDescription}</Text>
                    <Text fontSize='2xl' className='text-center mb-16 md:mb-32'><b>{details?.price}π</b></Text>
                    <Text fontSize='xz' className='text-center mb-3'>{details?.qty} in stock</Text>
                    <div className="grid md:grid-cols-2 gap-4 md:px-20 mb-10">
                        <button className='h-[50px] w-full bg-black text-white flex justify-center items-center' onClick={() => addToCart({ ...details,qty:1 })}>
                            <HiShoppingCart className='mr-4' /> Add to cart
                        </button>
                        <button className='h-[50px] w-full md:w-fit border-[0.45px] border-gray-400 text-black flex justify-center items-center px-7'>
                            <IoIosHeartEmpty className='mr-4 text-gray-500' />
                        </button>
                    </div>
                    <div className="grid grid-cols-3 gap-4 md:w-[60%] mx-auto border-t border-gray-300 py-10">
                        <div className='flex items-center'>
                            <ImFacebook className="text-gray-400" />
                            <Text fontSize='sm' className="text-gray-400" as="i">Facebook</Text>
                        </div>
                        <div className='flex items-center'>
                            <AiOutlineInstagram className="text-gray-400" />
                            <Text fontSize='sm' className="text-gray-400" as="i">Instagram</Text>
                        </div>
                        <div className='flex items-center'>
                            <GrPinterest className="text-gray-400" />
                            <Text fontSize='sm' className="text-gray-400" as="i">Pinterest</Text>
                        </div>
                    </div>
                </div>

            </div>
            <div className=" px-5 md:px-20 py-20">
                <Tabs align='center' variant='enclosed'>
                    <TabList>
                        <Tab>Description</Tab>
                        <Tab>Reviews</Tab>

                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Text fontSize={"sm"} className="text-gray-500 text-left md:text-center">
                                {details?.description}
                            </Text>
                        </TabPanel>
                        <TabPanel>
                            <p>coming soon ...</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
            <Footer />
        </section>
    )
}

export default Productdetails