import React, { FC } from 'react'
import { HeartIcon } from '@heroicons/react/solid'

const Footer: FC = () => (
    <footer className="relative z-50 bg-gradient-to-r from-red-100 via-gray-300 to-red-50 dark:from-gray-900 dark:to-gray-900 dark:bg-gray-900 transition duration-500">
        <div className="py-16 flex flex-col justify-center items-center">
        <p className="flex mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">Swertswap &copy; {new Date().getFullYear()} | Made with <HeartIcon className="ml-1 mr-1 h-5 w-5 text-red-600" /> by Swert</p>
        </div>
    </footer>
)

export default Footer