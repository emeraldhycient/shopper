import React from 'react'
import { Tabs, TabList, Tab, TabPanels, TabPanel, Text } from '@chakra-ui/react'
import ProductCard from './ProductCard'
import storeData from "../../constants/products.json"

function ProductList() {
    return (
        <section className="py-10" id='products'>
            <Tabs align='center' variant='enclosed'>
                <TabList>
                    <Tab>All</Tab>
                    <Tab>Phones</Tab>
                    <Tab>Laptops</Tab>
                    <Tab>Accessories</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7 pt-10">
                            {
                                storeData.map((item) => (                                 
                                    <ProductCard image={item.image} title={item.title} price={item.price} description={item.shortDescription} id={item.id} key={item?.id} />
                             ))
                            }                          
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </section>
    )
}

export default ProductList