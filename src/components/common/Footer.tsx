import React from 'react'
import { Text } from '@chakra-ui/react'
import { ImFacebook } from "react-icons/im"
import { AiOutlineInstagram } from "react-icons/ai"
import { GrPinterest } from "react-icons/gr"

function Footer() {
    return (
      <>
      <div className='h-[70px] flex items-center justify-center text-center px-5 border-t border-gray-200'>
                <Text fontSize='sm' as="i">Price is subject to change based on demand</Text>
    </div>
      <div className='h-[70px] flex justify-between items-center px-10 border-t border-gray-200'>
                <Text fontSize='sm'>Copyright © 2023 | Developed by Horlar.exe</Text>
                <div className="grid grid-cols-3 gap-4">
                    <ImFacebook />
                    <AiOutlineInstagram />
                    <GrPinterest/>
                </div>
    </div>
      </>
  )
}

export default Footer