import React from 'react'
import { Text } from '@chakra-ui/react'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai"

function Item() {
    return (
        <div className='grid grid-cols-5 gap-3 my-4'>
            <img src="https://i0.wp.com/yarnoverng.com/wp-content/uploads/2023/01/unnamed-21.jpg" className="h-24 w-full col-span-2"  alt="" />
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