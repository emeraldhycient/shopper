import React from 'react'
import { Text } from '@chakra-ui/react'
import { ImFacebook } from "react-icons/im"
import { BsTwitter } from "react-icons/bs"
import { GrPinterest } from "react-icons/gr"
import Link from 'next/link'

function Footer() {
  return (
    <>
      <div className='h-[70px] flex items-center justify-center text-center px-5 border-t border-gray-200'>
        <Text fontSize='sm' as="i">Price is subject to change based on demand</Text>
      </div>
      <div className='h-[70px] flex justify-between items-center px-10 border-t border-gray-200'>
        <Text fontSize='sm'>Copyright © pi shopping mall 2023</Text>
        <div className="grid grid-cols-3 gap-4">
          <Link href={"https://www.facebook.com/PiCoreTeam?mibextid=LQQJ4d"}>
            <ImFacebook />
          </Link>
          <Link href={"https://twitter.com/picoreteam?s=21"}>
            <BsTwitter />
            </Link>
          <GrPinterest />
        </div>
      </div>
    </>
  )
}

export default Footer