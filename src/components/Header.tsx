import React, { FC, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Transition } from '@headlessui/react'
import { MenuIcon, CogIcon, DotsHorizontalIcon, SunIcon, MoonIcon, XIcon, ChartBarIcon, CursorClickIcon, ShieldCheckIcon, ViewGridIcon } from '@heroicons/react/outline'
import useDarkMode from '../hooks/useDarkMode'

const Header: FC = () => {
    const [colorTheme, setTheme] = useDarkMode()

    return (
        <Menu>

            {({ open }) => (

                <div className="sticky bg-gradient-to-r from-red-100 via-gray-300 to-red-50 dark:from-gray-900 dark:to-gray-900 dark:bg-gray-900 transition duration-500 top-0 z-50 border-b-2">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
                            <div className="flex justify-start lg:w-0 lg:flex-1">
                                <Link to="/" className="flex">
                                    <svg className="h-10 w-auto sm:h-12" version="1.0" xmlns="http://www.w3.org/2000/svg" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" className="fill-current text-block dark:text-white">
                                            <path d="M4990 5030 c-14 -4 -113 -32 -220 -60 -107 -29 -249 -67 -315 -85
                                -66 -18 -167 -45 -225 -60 -58 -15 -116 -31 -130 -35 -14 -5 -140 -39 -280
                                -75 -140 -37 -300 -79 -355 -95 -55 -16 -152 -42 -215 -59 -63 -16 -158 -41
                                -210 -55 -52 -14 -120 -32 -150 -40 -52 -13 -199 -53 -677 -182 -115 -31 -264
                                -71 -333 -89 -69 -18 -271 -72 -450 -120 -347 -94 -379 -102 -710 -190 -221
                                -59 -504 -135 -598 -161 l-53 -15 784 -784 784 -784 89 25 c143 39 261 71 379
                                105 118 34 213 59 220 59 11 0 0 -48 -85 -352 -49 -177 -90 -328 -90 -336 0
                                -18 1557 -1575 1564 -1564 4 7 40 137 137 502 11 41 48 176 81 300 33 124 70
                                263 83 310 127 477 214 801 316 1180 11 41 29 107 39 145 78 296 172 646 180
                                675 10 35 110 406 188 700 82 309 162 606 172 640 5 19 21 78 35 130 14 52 41
                                153 60 225 19 71 35 135 35 142 0 15 -13 15 -50 3z m-1144 -1222 c-4 -23 -17
                                -81 -30 -128 -13 -47 -40 -148 -61 -225 -21 -77 -52 -194 -70 -260 -18 -66
                                -52 -192 -75 -280 -23 -88 -57 -214 -75 -280 -19 -66 -52 -192 -75 -280 -24
                                -88 -53 -200 -67 -250 -13 -49 -35 -130 -48 -180 -14 -49 -32 -120 -41 -157
                                -10 -38 -22 -68 -28 -68 -7 0 -103 91 -214 203 l-202 203 26 94 c14 52 45 167
                                70 255 24 88 51 187 60 220 9 33 20 71 24 85 4 14 15 52 24 85 9 33 27 98 40
                                145 40 142 41 153 20 147 -32 -9 -665 -185 -724 -201 -30 -8 -103 -28 -163
                                -45 -59 -17 -113 -31 -120 -31 -12 0 -417 399 -417 412 0 9 29 18 335 99 149
                                39 308 82 355 94 47 13 182 49 300 80 118 31 269 72 335 90 66 18 217 59 335
                                90 118 32 269 72 335 90 162 45 159 45 151 -7z"/>
                                            <path d="M664 2492 c-107 -121 -164 -207 -224 -335 -207 -441 -146 -969 156
                                -1347 204 -256 469 -415 791 -476 105 -20 337 -22 433 -4 263 49 484 156 665
                                323 l60 56 -185 185 -185 186 -45 -44 c-85 -83 -213 -150 -344 -180 -95 -22
                                -271 -21 -363 3 -345 90 -583 396 -583 751 0 201 82 405 213 533 l30 29 -184
                                184 c-101 101 -186 184 -189 183 -3 0 -24 -21 -46 -47z"/>
                                        </g>
                                    </svg>
                                    <span className="text-black dark:text-white text-base font-medium mt-7">Swap</span>
                                </Link>
                            </div>

                            <div className="-mr-2 -my-2 md:hidden">
                                <Menu.Button as={Fragment}>
                                    <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-800" aria-expanded="false">
                                        <span className="sr-only">Open menu</span>
                                        <MenuIcon className="h-6 w-6" />
                                    </button>
                                </Menu.Button>
                            </div>

                            <nav className="hidden md:flex space-x-10">

                                <a href="#" className="text-black text-lg font-medium hover:text-gray-900 dark:text-white dark:hover:text-gray-50 transition duration-500">
                                    Trader
                                </a>

                                <a href="#" className="text-black text-lg font-medium hover:text-gray-900 dark:text-white dark:hover:text-gray-50 transition duration-500">
                                    Miner
                                </a>

                                <a href="#" className="text-black text-lg font-medium hover:text-gray-900 dark:text-white dark:hover:text-gray-50 transition duration-500">
                                    Farmer
                                </a>

                                <a href="#" className="text-black text-lg font-medium hover:text-gray-900 dark:text-white dark:hover:text-gray-50 transition duration-500">
                                    Charts
                                </a>

                            </nav>

                            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">

                                <button className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-6 py-2 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-black dark:text-black dark:bg-white transition duration-500">
                                    Connect Wallet
                                </button>

                                <button className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-2 py-2 border border-transparent rounded-xl shadow-sm text-base font-medium text-white bg-black dark:text-black dark:bg-white transition duration-500">
                                    <CogIcon className="h-6 w-6" />
                                </button>

                                <button className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-2 py-2 border border-transparent rounded-xl shadow-sm text-base font-medium text-white bg-black dark:text-black dark:bg-white transition duration-500">
                                    <DotsHorizontalIcon className="h-6 w-6" />
                                </button>

                                <button onClick={() => setTheme(colorTheme)} className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 rounded-md text-base font-medium">
                                    {colorTheme === 'light' ? (<SunIcon className="h-7 w-7 text-white transition duration-500" />) : (<MoonIcon className="h-7 w-7 transition duration-500 text-black" />)}
                                </button>

                            </div>

                        </div>
                    </div>

                    {/* <!--
            Mobile menu, show/hide based on mobile menu state.

            Entering: "duration-200 ease-out"
                From: "opacity-0 scale-95"
                To: "opacity-100 scale-100"
            Leaving: "duration-100 ease-in"
                From: "opacity-100 scale-100"
                To: "opacity-0 scale-95"
            --> */}

                    <Transition
                        show={open}
                        enter="transition duration-200 ease-out"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition duration-100 ease-in"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items static>
                            <div className="absolute top-0 inset-x-0 p-2 origin-top-right md:hidden">
                                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-gray-800 transition duration-500 divide-y-2 divide-gray-50">
                                    <div className="pt-5 pb-6 px-5">
                                        <div className="flex items-center justify-between">
                                            <Menu.Item>
                                                <Link to="/" className="flex">
                                                    <svg className="h-8 w-auto sm:h-10" version="1.0" xmlns="http://www.w3.org/2000/svg" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                                                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" className="fill-current text-block dark:text-white">
                                                            <path d="M4990 5030 c-14 -4 -113 -32 -220 -60 -107 -29 -249 -67 -315 -85
                                -66 -18 -167 -45 -225 -60 -58 -15 -116 -31 -130 -35 -14 -5 -140 -39 -280
                                -75 -140 -37 -300 -79 -355 -95 -55 -16 -152 -42 -215 -59 -63 -16 -158 -41
                                -210 -55 -52 -14 -120 -32 -150 -40 -52 -13 -199 -53 -677 -182 -115 -31 -264
                                -71 -333 -89 -69 -18 -271 -72 -450 -120 -347 -94 -379 -102 -710 -190 -221
                                -59 -504 -135 -598 -161 l-53 -15 784 -784 784 -784 89 25 c143 39 261 71 379
                                105 118 34 213 59 220 59 11 0 0 -48 -85 -352 -49 -177 -90 -328 -90 -336 0
                                -18 1557 -1575 1564 -1564 4 7 40 137 137 502 11 41 48 176 81 300 33 124 70
                                263 83 310 127 477 214 801 316 1180 11 41 29 107 39 145 78 296 172 646 180
                                675 10 35 110 406 188 700 82 309 162 606 172 640 5 19 21 78 35 130 14 52 41
                                153 60 225 19 71 35 135 35 142 0 15 -13 15 -50 3z m-1144 -1222 c-4 -23 -17
                                -81 -30 -128 -13 -47 -40 -148 -61 -225 -21 -77 -52 -194 -70 -260 -18 -66
                                -52 -192 -75 -280 -23 -88 -57 -214 -75 -280 -19 -66 -52 -192 -75 -280 -24
                                -88 -53 -200 -67 -250 -13 -49 -35 -130 -48 -180 -14 -49 -32 -120 -41 -157
                                -10 -38 -22 -68 -28 -68 -7 0 -103 91 -214 203 l-202 203 26 94 c14 52 45 167
                                70 255 24 88 51 187 60 220 9 33 20 71 24 85 4 14 15 52 24 85 9 33 27 98 40
                                145 40 142 41 153 20 147 -32 -9 -665 -185 -724 -201 -30 -8 -103 -28 -163
                                -45 -59 -17 -113 -31 -120 -31 -12 0 -417 399 -417 412 0 9 29 18 335 99 149
                                39 308 82 355 94 47 13 182 49 300 80 118 31 269 72 335 90 66 18 217 59 335
                                90 118 32 269 72 335 90 162 45 159 45 151 -7z"/>
                                                            <path d="M664 2492 c-107 -121 -164 -207 -224 -335 -207 -441 -146 -969 156
                                -1347 204 -256 469 -415 791 -476 105 -20 337 -22 433 -4 263 49 484 156 665
                                323 l60 56 -185 185 -185 186 -45 -44 c-85 -83 -213 -150 -344 -180 -95 -22
                                -271 -21 -363 3 -345 90 -583 396 -583 751 0 201 82 405 213 533 l30 29 -184
                                184 c-101 101 -186 184 -189 183 -3 0 -24 -21 -46 -47z"/>
                                                        </g>
                                                    </svg>
                                                    <span className="text-black dark:text-white text-base font-medium mt-5">Swap</span>
                                                </Link>
                                            </Menu.Item>
                                            <div className="-mr-2">
                                                <Menu.Button as={Fragment}>
                                                    <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-800">
                                                        <span className="sr-only">Close menu</span>
                                                        <XIcon className="h-6 w-6" />
                                                    </button>
                                                </Menu.Button>
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <nav className="grid gap-y-8">
                                                <Menu.Item>
                                                    <a href="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 text-gray-900 dark:text-white dark:hover:text-gray-700 transition duration-500">
                                                        <ChartBarIcon className="flex-shrink-0 h-6 w-6" />
                                                        <span className="ml-3 text-base font-medium">
                                                            Trader
                                                        </span>
                                                    </a>
                                                </Menu.Item>

                                                <Menu.Item>
                                                    <a href="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 text-gray-900 dark:text-white dark:hover:text-gray-700 transition duration-500">
                                                        <CursorClickIcon className="flex-shrink-0 h-6 w-6" />
                                                        <span className="ml-3 text-base font-medium">
                                                            Miner
                                                        </span>
                                                    </a>
                                                </Menu.Item>

                                                <Menu.Item>
                                                    <a href="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 text-gray-900 dark:text-white dark:hover:text-gray-700 transition duration-500">
                                                        <ShieldCheckIcon className="flex-shrink-0 h-6 w-6" />
                                                        <span className="ml-3 text-base font-medium">
                                                            Famer
                                                        </span>
                                                    </a>
                                                </Menu.Item>

                                                <Menu.Item>
                                                    <a href="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 text-gray-900 dark:text-white dark:hover:text-gray-700 transition duration-500">
                                                        <ViewGridIcon className="flex-shrink-0 h-6 w-6" />
                                                        <span className="ml-3 text-base font-medium">
                                                            Charts
                                                        </span>
                                                    </a>
                                                </Menu.Item>

                                            </nav>
                                        </div>
                                    </div>
                                    <div className="py-6 px-5 space-y-6">
                                        <div className="flex">

                                            <Menu.Item>
                                                <button className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-2 py-2 border border-transparent rounded-xl shadow-sm text-base font-medium text-white bg-black dark:text-black dark:bg-white transition duration-500">
                                                    <CogIcon className="h-6 w-6" />
                                                </button>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <button className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-2 py-2 border border-transparent rounded-xl shadow-sm text-base font-medium text-white bg-black dark:text-black dark:bg-white transition duration-500">
                                                    <DotsHorizontalIcon className="h-6 w-6" />
                                                </button>
                                            </Menu.Item>

                                            <Menu.Item>
                                                <a href="#" className="ml-8 w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-black dark:text-black dark:bg-white transition duration-500">
                                                    Connect Wallet
                                                </a>
                                            </Menu.Item>

                                            <Menu.Item>
                                                <button onClick={() => setTheme(colorTheme)} className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 rounded-md text-base font-medium">
                                                    {colorTheme === 'light' ? (<SunIcon className="h-7 w-7 text-white transition duration-500" />) : (<MoonIcon className="h-7 w-7 transition duration-500 text-black" />)}
                                                </button>
                                            </Menu.Item>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Menu.Items>
                    </Transition>
                </div>

            )}

        </Menu>
    )
}

export default Header