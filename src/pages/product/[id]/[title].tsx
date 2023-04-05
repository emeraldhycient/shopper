import Header from '@/components/common/Header'
import React from 'react'
import { useRouter } from 'next/router'
import { Tabs, TabList, Tab, TabPanels, TabPanel, Text, Button } from '@chakra-ui/react'
import Footer from '@/components/common/Footer'
import { HiShoppingCart } from "react-icons/hi"
import { IoIosHeartEmpty } from "react-icons/io"
import { ImFacebook } from "react-icons/im"
import { AiOutlineInstagram } from "react-icons/ai"
import { GrPinterest } from "react-icons/gr"
import Image from 'next/image'



function Productdetails() {
    const router = useRouter()
    const { id, title } = router.query
    return (
        <section>
            <Header title={'pi shopping mall'} description={'your comfort shopping malls'} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-5 md:px-20 border-b border-gray-300 pb-20 mt-20">
                <div className="">
                    <div style={{ backgroundImage: "url(https://i0.wp.com/yarnoverng.com/wp-content/uploads/2023/01/unnamed-21.jpg?zoom=2&resize=433%2C516&ssl=1)", backgroundRepeat: "no-repeat", backgroundSize: "contain" }} className="h-[400px] md:h-[610px] w-[100vw]" />
                    {/* <Image src="https://i0.wp.com/yarnoverng.com/wp-content/uploads/2023/01/BF917D9F-28E4-40B3-9D06-841DB5151693-scaled.jpeg?w=1920&ssl=1" alt="" /> */}
                </div>
                <div className="pt-10">
                    <Text fontSize='3xl' className='text-center'>{title}</Text>
                    <Text fontSize={"sm"} className="text-gray-500 my-10 text-left md:text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus veniam laborum, aut reiciendis eaque suscipit laudantium voluptatum libero ea hic deleniti soluta rerum ex distinctio ab maiores tempore nulla.</Text>
                    <Text fontSize='2xl' className='text-center mb-16 md:mb-32'><b>200π</b></Text>
                    <Text fontSize='xz' className='text-center mb-3'>1 in stock</Text>
                    <div className="grid md:grid-cols-2 gap-4 md:px-20 mb-10">
                        <button className='h-[50px] w-full bg-black text-white flex justify-center items-center'>
                            <HiShoppingCart className='mr-4' /> Add to cart
                        </button>
                        <button className='h-[50px] w-full md:w-fit border-[0.45px] border-gray-400 text-black flex justify-center items-center px-7'>
                            <IoIosHeartEmpty className='mr-4 text-gray-500' />
                        </button>
                    </div>
                    <div className="grid grid-cols-3 gap-4 md:w-[60%] mx-auto border-t border-gray-300 py-10">
                        <div className='flex items-center'>
                            <ImFacebook className="text-gray-400"/>
                            <Text fontSize='sm' className="text-gray-400" as="i">Facebook</Text>
                        </div>
                        <div className='flex items-center'>
                            <AiOutlineInstagram className="text-gray-400"/>
                            <Text fontSize='sm' className="text-gray-400"  as="i">Instagram</Text>
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
                            <Text fontSize={"sm"} className="text-gray-500 text-left md:text-center">                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus veniam laborum, aut reiciendis eaque suscipit laudantium voluptatum libero ea hic deleniti soluta rerum ex distinctio ab maiores tempore nulla.
                                Vel atque, laborum quisquam nam doloribus illum soluta accusantium praesentium itaque molestiae saepe recusandae, reprehenderit ullam veritatis magni optio, ad culpa reiciendis minima quos dolor dicta quod tempore. Modi, magnam?
                                Ut ipsam nulla repudiandae magnam sint commodi quod fugit! Aspernatur quam enim nisi adipisci dolore dolores! Blanditiis alias eum aspernatur. Inventore minus tempora consectetur obcaecati, molestias assumenda vitae sunt est.
                                Consectetur commodi eius reiciendis id maxime ipsa aut officia distinctio accusantium, aliquid consequatur illo saepe velit optio aspernatur iste dolores ipsam iure nam porro facere sint eveniet eum debitis. Neque!
                                Natus exercitationem recusandae accusamus ut tempore odit nostrum aliquid, et, reprehenderit voluptatum molestias quam totam corrupti quos nulla quas eum suscipit cumque. Ducimus quae architecto, maiores ex amet eveniet similique.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus veniam laborum, aut reiciendis eaque suscipit laudantium voluptatum libero ea hic deleniti soluta rerum ex distinctio ab maiores tempore nulla.
                            </Text>
                        </TabPanel>
                        <TabPanel>
                            <p>two!</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
            <Footer />
        </section>
    )
}

export default Productdetails