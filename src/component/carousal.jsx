import { useEffect, useState } from "react"
import { FaAnglesLeft } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";


export function Carousal(){

    const images =[
        "./banner1.png",
        "./banner2.jpg",
        "./banner3.jpg"
    ]
    const [currentIndex,setCurrentIndex] = useState(0);

    useEffect(()=>{
        //Auto slide for 3 Second//
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex)=>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            )
        }, 3000);
    
        return ()=> clearInterval(intervalId);  // CleanUp mount
    },[]);

    return(
        <>
            <div className="mt-5 lg:mt-0">
                <div className="relative mt-[1px]">
                    <img src={images[currentIndex]} alt={`${images[currentIndex]}`} />
                
                <button className="hidden md:block lg:block xl:block absolute top-1/2 left-0 px-2 py-4 border rounded-r-md bg-white opacity-70" onClick={()=>{if(currentIndex !== 0){setCurrentIndex(currentIndex -1)}}}>
                    <FaAnglesLeft/>
                </button>
                <button className="hidden md:block lg:block xl:block absolute top-1/2 right-0 px-2 py-4 border rounded-s-md bg-white opacity-70" onClick={()=>{if(currentIndex !== images.length-1){setCurrentIndex(currentIndex +1)}}}>
                    <FaAnglesRight/>
                </button>
                </div>
            
            </div>
        </>
    )
}