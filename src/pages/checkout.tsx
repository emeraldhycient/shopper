import React, { useState } from 'react'
import Head from 'next/head'
import axios from "axios"
import Header from '@/components/common/Header'
import { Text, Flex, Input, Button } from '@chakra-ui/react'


function Checkout() {

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [house, sethouse] = useState("")
    const [state, setstate] = useState("")
    const [busstop, setbusstop] = useState("")
    const [country, setcountry] = useState("")

    return (
        <section>
            <Header title={''} description={''} />
            <div className="h-screen w-full flex  py-12">
                <div className="w-10/12 md:w-8/12 lg:6/12 h-[100vh] m-auto" >
                    <Text fontSize='3xl' as="b">Checkout</Text>
                    <form className='mt-12'>
                        <Text fontSize='xl' mb={4}>Contact Info</Text>
                        <Flex color='white' flexDirection={["column", "row"]} mb={4}>
                            <div className='w-full mr-4 mb-4'>
                                <Text fontSize='md' color={"blackAlpha.600"} mb={4}>Full Name</Text>
                                <Input value={name} onChange={(text)=> setname(text.target.value)} placeholder='' size='md' required />
                            </div>
                            <div className='w-full'>
                                <Text fontSize='md' color={"blackAlpha.600"} mb={4}>Email</Text>
                                <Input value={email} onChange={(text) => setemail(text.target.value)} placeholder='' size='md' required />
                            </div>
                        </Flex>
                        <Text fontSize='xl' mb={4}>Delivery Details</Text>
                        <Flex color='white' flexDirection={["column", "row"]} mb={4}>
                            <div className='w-full mr-4 mb-4'>
                                <Text fontSize='md' color={"blackAlpha.600"} mb={4}>House Number / block no</Text>
                                <Input value={house} onChange={(text) => sethouse(text.target.value)} placeholder='' size='md' required />
                            </div>
                            <div className='w-full'>
                                <Text fontSize='md' color={"blackAlpha.600"} mb={4}>state</Text>
                                <Input value={state} onChange={(text) => setstate(text.target.value)} placeholder='' size='md' required />
                            </div>
                        </Flex>
                        <Flex color='white' flexDirection={["column", "row"]} mb={4}>
                            <div className='w-full mr-4 mb-4'>
                                <Text fontSize='md' color={"blackAlpha.600"} mb={4}>nearest landmark/bus stop</Text>
                                <Input value={busstop} onChange={(text) => setbusstop(text.target.value)} placeholder='' size='md' required />
                            </div>
                            <div className='w-full'>
                                <Text fontSize='md' color={"blackAlpha.600"} mb={4}>Country</Text>
                                <Input value={country} onChange={(text) => setcountry(text.target.value)} placeholder='' size='md' required />
                            </div>
                        </Flex>
                        <button className='h-[50px] w-full bg-black text-white flex justify-center items-center' onClick={() => { }}>
                            Continue to checkout
                        </button>
                    </form>
                </div>
            </div>
        </section>

    )
}

export default Checkout