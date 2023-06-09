import React from 'react'
import Image from 'next/image';
import { Tabs, TabList, Tab, TabPanels, TabPanel, Text } from '@chakra-ui/react'
import Header from '../common/Header';
import { AiOutlineArrowDown } from "react-icons/ai"
import Typed from 'react-typed';
import dynamic from 'next/dynamic'


function Hero() {

    const ScrollIntoView = dynamic(import("react-scroll-into-view"), {
        ssr: false
    });
    
    return (
        <section className='h-fit' style={{ backgroundImage: "url(https://minepi.com/wp-content/uploads/2022/11/34-14-11-2.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "top center" }}>
            <Header title={'pi shopping mall'} description={'your comfort shopping malls'} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="h-full flex flex-col  pt-20 md:pt-40 px-5 md:px-16 ">
                    <Text fontSize={["3xl", " 4xl"]} className='text-white text-left mb-7 leading-relaxed' >Shop with ease and take advantage of Pi to make your purchases.</Text>
                    <Text fontSize={['xs', 'md']} className='text-white text-left leading-relaxed' >
                        <Typed
                            strings={['No more waiting for confirmations or worrying about fraud. Pi uses cutting-edge blockchain technology to ensure that your transactions are safe and secure.']}
                            typeSpeed={30}
                            loop
                        /></Text>
                    <ScrollIntoView selector="#products">

                        <button className='h-[50px] w-full md:w-[40%] bg-white text-black flex justify-center items-center mt-10 border font-bold'>
                            Start Shopping <AiOutlineArrowDown size={22} className="ml-2 bounce font-bold text-amber-500" />
                        </button>
                    </ScrollIntoView>
                </div>
                <div >
                    {/*srcSet="https://minepi.com/wp-content/uploads/2022/12/pi_video-6.webp 500w, https://minepi.com/wp-content/uploads/2022/12/pi_video-6-180x300.webp 180w, https://minepi.com/wp-content/uploads/2022/12/pi_video-6-7x12.webp 7w" */}
                    <Image width="500" height="833" src="https://minepi.com/wp-content/uploads/2022/12/pi_video-6.webp" className="attachment-full size-full" alt="Pi Phone Image" decoding="async" loading="lazy" sizes="(max-width: 500px) 100vw, 500px" />
                </div>
            </div>
        </section>
    )
}

export default Hero