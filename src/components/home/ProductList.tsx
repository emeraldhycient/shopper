import React, { useState, useEffect } from 'react'
import { Tabs, TabList, Tab, TabPanels, TabPanel, Text } from '@chakra-ui/react'
import ProductCard from './ProductCard'
import storeData from "../../constants/products.json"
import { TproductCards } from '@/types';

function ProductList() {

    function shuffle(array: TproductCards[]) {
       return array.sort(() => Math.random() - 0.5);
    }

    const shuffledData = shuffle(storeData);

    const [phones, setphones] = useState<any>([])
    const [laptops, setlaptops] = useState<any>([])
    const [Accessories, setAccessories] = useState<any>([])

    useEffect(() => {
        const phonesList = shuffledData.filter((item) => item.category === "phones")
        setphones(phonesList)
        const laptopList = shuffledData.filter((item) => item.category === "laptops")
        setlaptops(laptopList)
        const accessoryList = shuffledData.filter((item) => item.category === "accessories")
        setAccessories(accessoryList)
    }, [shuffledData])


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
                                shuffledData.map((item) => (
                                    <ProductCard image={item.image} title={item.title} price={item.price} description={item.shortDescription} id={item.id} key={item?.id} />
                                ))
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7 pt-10">
                            {
                                phones.map((item :  any) => (
                                    <ProductCard image={item.image} title={item.title} price={item.price} description={item.shortDescription} id={item.id} key={item?.id} />
                                ))
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7 pt-10">
                            {
                                laptops.map((item: any) => (
                                    <ProductCard image={item.image} title={item.title} price={item.price} description={item.shortDescription} id={item.id} key={item?.id} />
                                ))
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7 pt-10">
                            {
                                Accessories.map((item: any) => (
                                    <ProductCard image={item.image} title={item.title} price={item.price} description={item.shortDescription} id={item.id} key={item?.id} />
                                ))
                            }
                        </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </section>
    )
}

export default ProductList