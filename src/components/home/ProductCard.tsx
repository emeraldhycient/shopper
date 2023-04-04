import React from 'react'
import { Tabs, TabList, Tab, TabPanels, TabPanel, Text } from '@chakra-ui/react'
import { TproductCards } from '@/types'

function ProductCard({image,title,price,description}: TproductCards) {
  return (
      <div className="">
          <img src="https://i0.wp.com/yarnoverng.com/wp-content/uploads/2023/01/unnamed-21.jpg?zoom=2&resize=433%2C516&ssl=1" alt="" />
          <div className="py-5">
              <Text fontSize='lg'>Bunny balaclava</Text>
              <Text fontSize='sm' as="b">$200</Text>
          </div>
      </div>
  )
}

export default ProductCard