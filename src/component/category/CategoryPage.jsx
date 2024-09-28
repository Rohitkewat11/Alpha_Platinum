import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function CategoryPage() {
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();

  function handleFinddata(e){
 const filterData = (category.find((item)=> item.id === e.target.id));
  navigate(`${filterData.name}`,{state:filterData});
  }



  useEffect(() => {
    axios
      .post(
        "https://alphasilver.productsalphawizz.com/app/v1/api/get_categories"
      )
      .then((res) => {
        setCategory(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  return (
    <>
      <div className="w-[80%] m-auto my-10">
            <p className="text-center text-2xl font-semibold border-b  pb-5">Category</p>
        <div className="flex flex-1 flex-wrap justify-evenly items-center gap-14 mt-5 p-5">
          {category.map((item) => (
            <div key={item.id} className="h-32 w-32">
                <img
              src={item.image}
              alt={item.name}
              id={item.id}
              onClick={handleFinddata}
              className="h-32 w-32 border border-[#49a6a2] rounded-full cursor-pointer"
            />
            <p className="text-center text-wrap">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
