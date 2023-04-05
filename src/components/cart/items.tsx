import React from 'react'
import { Text } from '@chakra-ui/react'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai"
import Image from 'next/image';
import { TproductCards } from '@/types';


function Item({ item }: { item: TproductCards }) {
    
    console.log(item)

    return (
        <div className='grid grid-cols-5 gap-3 my-4'>
            <div style={{ backgroundImage: `url(${item?.image})`, backgroundRepeat: "no-repeat", backgroundSize: "contain" }} className=" h-24 w-24 col-span-2" />
            <div className="col-span-3">
                <Text fontSize='sm'>{item?.title}</Text>
                <Text fontSize='sm' as="b">{item?.price}π</Text>
                <div className='flex items-center mt-1'>
                    <AiOutlinePlusCircle size={20} className='mr-2' />
                    <Text fontSize='sm'>{item?.qty}</Text>
                    <AiOutlineMinusCircle size={20} className='ml-2' />
                </div>
            </div>
        </div>
    )
}

export default Item