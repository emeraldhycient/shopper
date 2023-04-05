import React from 'react'
import { Tabs, TabList, Tab, TabPanels, TabPanel, Text } from '@chakra-ui/react'
import ProductCard from './ProductCard'

function ProductList() {
    return (
        <section className="py-10">
            <Tabs align='center' variant='enclosed'>
                <TabList>
                    <Tab>All</Tab>
                    <Tab>Phones</Tab>
                    <Tab>Laptops</Tab>
                    <Tab>Accessories</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel id='products'>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7 pt-10">
                            <ProductCard image={''} title={''} price={''} description={''}/>
                            <ProductCard image={''} title={''} price={''} description={''}/>

                            <ProductCard image={''} title={''} price={''} description={''}/>

                            <ProductCard image={''} title={''} price={''} description={''}/>

                            <ProductCard image={''} title={''} price={''} description={''}/>

                            <ProductCard image={''} title={''} price={''} description={''}/>

                            <ProductCard image={''} title={''} price={''} description={''}/>

                            <ProductCard image={''} title={''} price={''} description={''}/>

                            <ProductCard image={''} title={''} price={''} description={''}/>

                            <ProductCard image={''} title={''} price={''} description={''}/>

                            <ProductCard image={''} title={''} price={''} description={''}/>

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