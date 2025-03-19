"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const page = () => {
  const [Images, setImages] = useState([])  
  const [randomImg, setRandomImg] = useState(null)  
  const [isLoading, setIsLoading] = useState(false)  

  
  useEffect(() => {
    getImg()
  }, [])

  
  const getImg = async () => {
    setIsLoading(true)  
    try {
      const response = await axios.get("https://picsum.photos/v2/list")
      const data = response.data;
      setImages(data)  
    } catch (error) {
      console.error("Error in fetching images", error);
    } finally {
      setIsLoading(false)  
    }
  }

  const handleClick = () => {
    if (Images.length > 0) {
     
      console.log("Button is clicked")
      const randomIndex = Math.floor(Math.random() * Images.length);
      setRandomImg(Images[randomIndex]);  
    }
  }

  return (
    <div>
     
      {isLoading ? (
        <div className="loader">Loading...</div>
      ) : (
        <button onClick={handleClick} className='px-5 py-3 bg-green-800 text-white font-bold'>
          Click Me
        </button>
      )}

     
      {randomImg && (
        <div>
          <img
            src={randomImg.download_url}
            alt="Random Image"
            width={300}
            height={400}
            className='m-10 rounded inline-block'
          />
        </div>
      )}
    </div>
  )
}

export default page
