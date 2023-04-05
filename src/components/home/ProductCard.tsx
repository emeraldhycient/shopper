import React from 'react'
import { Text} from '@chakra-ui/react'
import { TproductCards } from '@/types'
import Link from 'next/link'
import Image from 'next/image'


function ProductCard({ image, title, price, description }: TproductCards) {

    return (
        <Link href='/product/1/Poison ivy top (black and yellow)' className="">
            <div style={{ backgroundImage:"url(https://i0.wp.com/yarnoverng.com/wp-content/uploads/2023/01/unnamed-21.jpg?zoom=2&resize=433%2C516&ssl=1)",backgroundRepeat:"no-repeat",backgroundSize:"contain"}} className="h-[190px] md:h-[310px] w-full lg:w-[310px]" />
            <div className="py-5">
                <Text fontSize='lg'>Poison ivy top (black and yellow)</Text>
                <Text fontSize='sm' as="b">200π</Text>
            </div>
        </Link>
    )
}

export default ProductCard