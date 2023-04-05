import React from 'react'
import { Text } from '@chakra-ui/react'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai"
import Image from 'next/image';


function Item() {
    return (
        <div className='grid grid-cols-5 gap-3 my-4'>
            <div style={{ backgroundImage: "url(https://i0.wp.com/yarnoverng.com/wp-content/uploads/2023/01/unnamed-21.jpg?zoom=2&resize=433%2C516&ssl=1)", backgroundRepeat: "no-repeat", backgroundSize: "contain" }} className=" h-24 w-24 col-span-2" />
            <div className="col-span-3">
                <Text fontSize='sm'>Poison ivy top (black and yellow)</Text>
                <Text fontSize='sm' as="b">100π</Text>
                <div className='flex items-center mt-1'>
                    <AiOutlinePlusCircle size={20} className='mr-2'/>
                    <Text fontSize='sm'>4</Text>
                    <AiOutlineMinusCircle size={20} className='ml-2' />
                </div>
            </div>
        </div>
    )
}

export default Item