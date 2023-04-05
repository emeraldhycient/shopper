import React from 'react'
import { Text} from '@chakra-ui/react'
import { TproductCards } from '@/types'
import Link from 'next/link'
import Image from 'next/image'


function ProductCard({ image, title, price, description,id}: TproductCards) {

    return (
        <Link href={`/product/${id}/${title}`} className="">
            <div style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"contain"}} className="h-[190px] md:h-[310px] w-full" />
            {/* <div style={{ backgroundImage:"url(https://i0.wp.com/yarnoverng.com/wp-content/uploads/2023/01/unnamed-21.jpg?zoom=2&resize=433%2C516&ssl=1)",backgroundRepeat:"no-repeat",backgroundSize:"contain"}} className="h-[190px] md:h-[310px] w-full lg:w-[310px]" /> */}
            <div className="py-5">
                <Text fontSize='lg'>{title}</Text>
                <Text fontSize='sm' as="b">{price}π</Text>
            </div>
        </Link>
    )
}

export default ProductCard