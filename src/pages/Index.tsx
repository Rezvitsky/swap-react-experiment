import React, { FC, Fragment } from 'react'
import { Tab } from '@headlessui/react'
import { SwitchVerticalIcon, ChevronDownIcon } from '@heroicons/react/outline'
import IPage from '../interfaces/page'

const Index: FC<IPage> = (props) => {
    return (
        <div className="bg-gray-50 dark:bg-gray-800 transition duration-500 shadow overflow-hidden max-w-lg m-auto mt-20" style={{ borderRadius: '8%' }}>

            <Tab.Group>
                <Tab.List>
                    <div className="px-5 py-8 sm:px-14 bg-gray-100 dark:bg-gray-400 transition duration-500">

                        <Tab as={Fragment}>
                            {({ selected }) => (
                                <button className={`${selected ? 'text-white bg-black dark:text-black dark:bg-white shadow-sm' : 'text-gray-500 dark:text-gray-100'} ml-8 whitespace-nowrap inline-flex items-center justify-center px-14 py-1.5 border border-transparent rounded-full text-base font-medium transition duration-500`}>
                                    Swap
                                </button>
                            )}
                        </Tab>
                        <Tab as={Fragment}>
                            {({ selected }) => (
                                <button className={`${selected ? 'text-white bg-black dark:text-black dark:bg-white shadow-sm' : 'text-gray-500 dark:text-gray-100'} ml-8 whitespace-nowrap inline-flex items-center justify-center px-14 py-1.5 border border-transparent rounded-full text-base font-medium transition duration-500`}>
                                    Buy/Sell
                                </button>
                            )}
                        </Tab>

                    </div>
                </Tab.List>

                <Tab.Panels>
                    <div className="border-t border-gray-200">

                        <Tab.Panel>
                            <div className="flex flex-col justify-center items-center max-w-5xl transition duration-500">
                                <div className="w-96 mb-1 m-14">
                                    <label className="text-black dark:text-white transition duration-500 text-sm font-bold">
                                        <span>You Send</span>
                                        <span className="float-right">Balance: 40 SWERT</span>
                                    </label>
                                    <div className="mt-6 flex mr-0 border-t border-b border-l border-r  rounded-full bg-white dark:bg-black transition duration-500">
                                        <input className="ml-4 rounded-l-full w-full font-bold text-lg py-4 px-3 text-gray-700 dark:text-white dark:bg-black transition duration-500 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="0.0" />
                                        <button className="bg-white dark:text-white dark:bg-black transition duration-500 flex space-x-2 p-4 mr-6 rounded-r-full text-lg outline-none font-medium">
                                            <span>SWERT</span>
                                            <ChevronDownIcon className="h-6 w-6 mt-0.5" />
                                        </button>
                                    </div>
                                </div>
                                <div className="mb-1 m-14">
                                    <button className="p-4 rounded-full bg-gray-300 dark:bg-black transition duration-500">
                                        <SwitchVerticalIcon className="h-6 w-6 text-white" />
                                    </button>
                                </div>
                                <div className="w-96 mb-16 m-14">
                                    <label className="text-black dark:text-white transition duration-500 text-sm font-bold">
                                        <span>You Get</span>
                                    </label>
                                    <div className="mt-6 flex mr-0 border-t border-b border-l border-r  rounded-full bg-white dark:bg-black transition duration-500">
                                        <input className="ml-4 rounded-l-full w-full font-bold text-lg py-4 px-3 text-gray-700 dark:text-white dark:bg-black transition duration-500 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="0.0" />
                                        <button className="bg-white dark:text-white dark:bg-black transition duration-500 flex space-x-2 p-4 mr-6 rounded-r-full text-lg outline-none font-medium">
                                            <span>ETH</span>
                                            <ChevronDownIcon className="h-6 w-6 mt-0.5" />
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <button className="whitespace-nowrap px-14 py-3 mb-10 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-black dark:text-black dark:bg-white transition duration-500">
                                        Swap Now
                                    </button>
                                </div>
                            </div>
                        </Tab.Panel>

                        <Tab.Panel>
                            <div className="flex flex-col justify-center items-center max-w-5xl">
                                <div className="w-96 mb-1 m-14">
                                    <label className="text-black dark:text-white transition duration-500 text-sm font-bold">
                                        <span>You Send</span>
                                    </label>
                                    <div className="mt-6 flex mr-0 border-t border-b border-l border-r  rounded-full bg-white dark:bg-black transition duration-500">
                                        <input className="ml-4 rounded-l-full w-full font-bold text-lg py-4 px-3 text-gray-700 dark:text-white dark:bg-black transition duration-500 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="0.0" />
                                        <button className="bg-white dark:text-white dark:bg-black transition duration-500 flex space-x-2 p-4 mr-6 rounded-r-full text-lg outline-none font-medium">
                                            <span>SWERT</span>
                                            <ChevronDownIcon className="h-6 w-6 mt-0.5" />
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-10">
                                    <button className="whitespace-nowrap px-14 py-3 mb-10 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-black dark:text-black dark:bg-white transition duration-500">
                                        Buy
                                    </button>
                                </div>
                            </div>
                        </Tab.Panel>

                    </div>
                </Tab.Panels>

            </Tab.Group>
        </div>
    )
}

export default Index