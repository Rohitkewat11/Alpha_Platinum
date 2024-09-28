
import { useLocation,Link,useNavigate,} from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";

export function CategoryWisePage(){
    const location = useLocation();
    const data =location.state||{};
    const navigate = useNavigate();    

    function handleImgClick(e){
        const filterData = (data.children.find((item)=> item.id === e.target.id));
        navigate(`details`,{state:filterData});
    }

    
    return(
        <>
           <div className="mt-4">
           <div className="bg-[#addadd] p-10 px-20 grid place-items-center lg:flex lg:justify-between">
                <h4 className="text-3xl">{data.name}</h4>
                <p className="">
                    <Link to='/'>Home</Link>/<Link to='/category'>category</Link>/<span className="text-gray-500">{data.name}</span>
                </p>
            </div>
            <div className="w-[80%] m-auto border shadow-md p-10 mt-10 mb-10">
                <h4 className="text-2xl font-semibold mb-4">{data.name} Category</h4>
                <div className="border-2 shadow-gray shadow-lg flex gap-8 p-4">
                    {
                        data.children.map((item)=>
                        <div className="text-center">
                            <img src={item.image} alt=""
                            id={item.id}
                            onClick={handleImgClick} 
                            className="h-32 w-32 rounded-full border border-[#09a69b] cursor-pointer"/>
                            <p>{item.name}</p>
                        </div>
                        )
                    }
                </div>
            </div>
           </div>
        </>
    )
}