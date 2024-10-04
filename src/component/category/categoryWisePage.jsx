import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation,Link,useNavigate,} from "react-router-dom";




export function CategoryWisePage(){
    const [product,setProduct] = useState([]);
    const location = useLocation();
    const data =location.state||{};
    const navigate = useNavigate();    

    function handleImgClick(e){
        const filterData = (product.filter((item)=> item.category_id === e.target.id));
        console.log(filterData);
        
        navigate(`details`,{state:filterData});
    }

    useEffect(()=>{
         // fetching get_products API data//
      axios
      .post(
        "https://alphasilver.productsalphawizz.com/app/v1/api/get_products"
      )
      .then((res) => {
        setProduct(res.data.data);
        
      })
      .catch((err) => {
        console.log(err);
      });
    },[]);


    
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
                        <div className="text-center" key={item.id}>
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