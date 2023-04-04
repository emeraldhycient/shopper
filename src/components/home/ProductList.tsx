import React from 'react'
import { Tabs, TabList, Tab, TabPanels, TabPanel, Text } from '@chakra-ui/react'

function ProductList() {
    return (
        <section className="py-10">
            <Tabs align='center' variant='enclosed'>
                <TabList>
                    <Tab>One</Tab>
                    <Tab>Two</Tab>
                    <Tab>Two</Tab>
                    <Tab>Two</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-7 pt-10">
                            <div className="">
                                <img src="https://i0.wp.com/yarnoverng.com/wp-content/uploads/2023/01/unnamed-21.jpg?zoom=2&resize=433%2C516&ssl=1" alt="" />
                                <div className="py-5">
                                    <Text fontSize='lg'>Bunny balaclava</Text>
                                    <Text fontSize='sm' as="b">$200</Text>
                                </div>
                            </div>
                            <div className="">
                                <img src="https://i0.wp.com/yarnoverng.com/wp-content/uploads/2023/01/unnamed-21.jpg?zoom=2&resize=433%2C516&ssl=1" alt="" />
                                <div className="py-5">
                                    <Text fontSize='lg'>Bunny balaclava</Text>
                                    <Text fontSize='sm' as="b">$200</Text>
                                </div>
                            </div>
                            <div className="">
                                <img src="https://i0.wp.com/yarnoverng.com/wp-content/uploads/2023/01/unnamed-21.jpg?zoom=2&resize=433%2C516&ssl=1" alt="" />
                                <div className="py-5">
                                    <Text fontSize='lg'>Bunny balaclava</Text>
                                    <Text fontSize='sm' as="b">$200</Text>
                                </div>
                            </div>
                            <div className="">
                                <img src="https://i0.wp.com/yarnoverng.com/wp-content/uploads/2023/01/unnamed-21.jpg?zoom=2&resize=433%2C516&ssl=1" alt="" />
                                <div className="py-5">
                                    <Text fontSize='lg'>Bunny balaclava</Text>
                                    <Text fontSize='sm' as="b">$200</Text>
                                </div>
                            </div>
                            <div className="">
                                <img src="https://i0.wp.com/yarnoverng.com/wp-content/uploads/2023/01/unnamed-21.jpg?zoom=2&resize=433%2C516&ssl=1" alt="" />
                                <div className="py-5">
                                    <Text fontSize='lg'>Bunny balaclava</Text>
                                    <Text fontSize='sm' as="b">$200</Text>
                                </div>
                            </div>
                            <div className="">
                                <img src="https://i0.wp.com/yarnoverng.com/wp-content/uploads/2023/01/unnamed-21.jpg?zoom=2&resize=433%2C516&ssl=1" alt="" />
                                <div className="py-5">
                                    <Text fontSize='lg'>Bunny balaclava</Text>
                                    <Text fontSize='sm' as="b">$200</Text>
                                </div>
                            </div>
                            <div className="">
                                <img src="https://i0.wp.com/yarnoverng.com/wp-content/uploads/2023/01/unnamed-21.jpg?zoom=2&resize=433%2C516&ssl=1" alt="" />
                                <div className="py-5">
                                    <Text fontSize='lg'>Bunny balaclava</Text>
                                    <Text fontSize='sm' as="b">$200</Text>
                                </div>
                            </div>
                            <div className="">
                                <img src="https://i0.wp.com/yarnoverng.com/wp-content/uploads/2023/01/unnamed-21.jpg?zoom=2&resize=433%2C516&ssl=1" alt="" />
                                <div className="py-5">
                                    <Text fontSize='lg'>Bunny balaclava</Text>
                                    <Text fontSize='sm' as="b">$200</Text>
                                </div>
                            </div>
                            <div className="">
                                <img src="https://i0.wp.com/yarnoverng.com/wp-content/uploads/2023/01/unnamed-21.jpg?zoom=2&resize=433%2C516&ssl=1" alt="" />
                                <div className="py-5">
                                    <Text fontSize='lg'>Bunny balaclava</Text>
                                    <Text fontSize='sm' as="b">$200</Text>
                                </div>
                            </div>
                            <div className="">
                                <img src="https://i0.wp.com/yarnoverng.com/wp-content/uploads/2023/01/unnamed-21.jpg?zoom=2&resize=433%2C516&ssl=1" alt="" />
                                <div className="py-5">
                                    <Text fontSize='lg'>Bunny balaclava</Text>
                                    <Text fontSize='sm' as="b">$200</Text>
                                </div>
                            </div>
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