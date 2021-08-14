import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import IPage from '../interfaces/page'
import notfound from '../assets/images/svg/not-found.svg'

const NotFound: FC<IPage> = (props) => {
    return (
        <div className="bg-gradient-to-r from-red-100 via-gray-300 to-red-50 dark:from-gray-900 dark:to-gray-900 dark:bg-gray-900 text-black dark:text-white transition duration-500 min-h-screen flex items-center">
            <div className="container mx-auto p-4 flex flex-wrap items-center">
                <div className="w-full md:w-5/12 text-center p-4">
                    <img src={notfound} alt="" />
                </div>
                <div className="w-full md:w-7/12 text-center md:text-left p-4">
                    <div className="text-6xl font-medium">404</div>
                    <div className="text-xl md:text-3xl font-medium mb-4">
                        Oops. This page has gone missing.
                    </div>
                    <div className="text-lg mb-8 ">
                        You may have mistyped the address or the page may have moved.
                    </div>
                    <Link to="/" className="whitespace-nowrap inline-flex items-center justify-center px-5 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-black dark:text-black dark:bg-white transition duration-500">Go Home</Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound