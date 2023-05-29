import React from 'react'
import './Home.css'

export const Home = () => {
    return (
        <div>
            <div className="home-container bg-gray-700 flex items-center justify-center">
                <div className="max-w-lg mx-auto p-8 bg-white rounded shadow-lg">
                    <h1 className="text-3xl font-bold mb-4">Welcome to My Landing Page</h1>
                    <p className="text-lg">This is a simple non-scroll landing page created using React and Tailwind CSS.</p>
                </div>
            </div>
        </div>
    )
}
