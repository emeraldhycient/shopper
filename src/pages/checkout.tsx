import React, { useState } from 'react'
import Header from '@/components/common/Header'
import { Text, Flex, Input, Button } from '@chakra-ui/react'
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';


function Checkout() {
    const { push } = useRouter();

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [house, sethouse] = useState("")
    const [state, setstate] = useState("")
    const [busstop, setbusstop] = useState("")
    const [country, setcountry] = useState("")

    const handleSubmti = (e: any) => {
        e.preventDefault();
        setTimeout(() => {
            push('/signin');
        }, 1000)
    }

    return (
        <section>
            <Header title={''} description={''} />
            <div className="h-screen w-full flex  py-12">
                <div className="w-10/12 md:w-8/12 lg:6/12 h-[100vh] m-auto" >
                    <Text fontSize='3xl' as="b">Checkout</Text>
                    <form className='mt-12' onSubmit={handleSubmti}>
                        <Text fontSize='xl' mb={4}>Contact Info</Text>
                        <Flex color='white' flexDirection={["column", "row"]} mb={4}>
                            <div className='w-full mr-4 mb-4'>
                                <Text fontSize='md' color={"blackAlpha.600"} mb={4}>Full Name</Text>
                                <input
                                    className=" appearance-none border rounded-sm w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
                                    id=""
                                    type="text"
                                    placeholder=""
                                    value={name}
                                    onChange={(e) => setname(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='w-full'>
                                <Text fontSize='md' color={"blackAlpha.600"} mb={4}>Email</Text>
                                <input
                                    className=" appearance-none border rounded-sm w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
                                    id=""
                                    type="text"
                                    placeholder=""
                                    value={email}
                                    onChange={(e) => setemail(e.target.value)}
                                    required

                                />
                            </div>
                        </Flex>
                        <Text fontSize='xl' mb={4}>Delivery Details</Text>
                        <Flex color='white' flexDirection={["column", "row"]} mb={4}>
                            <div className='w-full mr-4 mb-4'>
                                <Text fontSize='md' color={"blackAlpha.600"} mb={4}>House Number / block no</Text>
                                <input
                                    className=" appearance-none border rounded-sm w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
                                    id=""
                                    type="text"
                                    placeholder=""
                                    value={house}
                                    onChange={(e) => sethouse(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='w-full'>
                                <Text fontSize='md' color={"blackAlpha.600"} mb={4}>state</Text>
                                <input
                                    className=" appearance-none border rounded-sm w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
                                    id=""
                                    type="text"
                                    placeholder=""
                                    value={state}
                                    onChange={(e) => setstate(e.target.value)}
                                    required
                                />
                            </div>
                        </Flex>
                        <Flex color='white' flexDirection={["column", "row"]} mb={4}>
                            <div className='w-full mr-4 mb-4'>
                                <Text fontSize='md' color={"blackAlpha.600"} mb={4}>nearest landmark/bus stop</Text>
                                <input
                                    className=" appearance-none border rounded-sm w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
                                    id=""
                                    type="text"
                                    placeholder=""
                                    value={busstop}
                                    onChange={(e) => setbusstop(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='w-full'>
                                <Text fontSize='md' color={"blackAlpha.600"} mb={4}>Country</Text>
                                <input
                                    className=" appearance-none border rounded-sm w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
                                    id=""
                                    type="text"
                                    placeholder=""
                                    value={country}
                                    onChange={(e) => setcountry(e.target.value)}
                                    required
                                />
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