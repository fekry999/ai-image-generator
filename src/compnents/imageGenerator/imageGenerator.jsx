import React from 'react'
import './imageGenerator.css'
import defaultImage from '../assets/defaultImage.jpg'
function ImageGenerator() {
    return (
        <div className='image-generator'>
            <div className=''>Ai Image Generator</div>
            <div >
                <input className="text-black-600 mt-3  bg-gray-300 border-3 border-gray-300 rounded-full p-2 w-1/2 mx-auto focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder='create an image' />
            </div>
            <div className='m-12 flex justify-center items-center'>
                <div className="image">
                    <img src={defaultImage} alt="default" />
                </div>
            </div>
            <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-all duration-300 mx-auto block ">Generate</button>

        </div>
    )
}

export default ImageGenerator