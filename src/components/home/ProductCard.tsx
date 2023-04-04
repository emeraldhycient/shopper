import React from 'react'
import { Text} from '@chakra-ui/react'
import { TproductCards } from '@/types'
import Link from 'next/link'

function ProductCard({ image, title, price, description }: TproductCards) {

    return (
        <Link href='/product/1/Poison ivy top (black and yellow)' className="">
            <img src="https://i0.wp.com/yarnoverng.com/wp-content/uploads/2023/01/unnamed-21.jpg?zoom=2&resize=433%2C516&ssl=1" alt="" />
            <div className="py-5">
                <Text fontSize='lg'>Poison ivy top (black and yellow)</Text>
                <Text fontSize='sm' as="b">$200</Text>
            </div>
        </Link>
    )
}

export default ProductCard