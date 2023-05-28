import React from 'react'
import pr from '../assets/pr.png'

export const Footer = () => {
    return (

        <footer class="bg-white shadow dark:bg-gray-800 ">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8 fixed-bottom-0">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="https://www.youtube.com/watch?v=17Bz8rNJNsQ" class="flex items-center mb-4 sm:mb-0">
                        <img src={pr} class="h-8 mr-3" alt="Pato Rey" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Pato Rey</span>
                    </a>
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2001 <a href="https://www.youtube.com/watch?v=1_XRHtG-ll0" class="hover:underline">Patricio Rey™</a>. All Rights Reserved.</span>
            </div>
        </footer>


    )
}
