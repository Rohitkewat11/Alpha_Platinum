
import { useDispatch } from "react-redux";
import { useLocation, Link,useNavigate } from "react-router-dom";
import { setCartData } from "../../redux/Slicer";


export function ProductDetails() {
  const location = useLocation();
  const data = location.state || [];
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(data);
  
  function handleImgClick(e) {
    const filterData = (data.find((item) => item.id === e.target.id));
    navigate('/PriceDetails',{state:filterData});
  }

  //function for handle Add to cart button//
  function handleAddToCartBtn(e){
    if(localStorage.getItem("user") === null){
      alert("please login first");
    }else{
      const id = e.target.id;
      const findData = data.find((item)=>item.id === id);
      findData.count=2;
      dispatch(setCartData(findData));
    }
    
  }
  return (
    <>
      <div className="">
        <div className="mt-4">
          <div className="bg-[#addadd] p-10 px-20 grid place-items-center lg:flex lg:justify-between">
            <h4 className="text-3xl">{data[0].category_name}</h4>
            <p className="">
              <Link to="/">Home</Link>/<Link to="/category">category</Link>/
              <span className="text-gray-500">{data[0].category_name}</span>
            </p>
          </div>
          <div className="w-[80%] m-auto border shadow-md p-10 mt-10 mb-10">
            <h4 className="text-2xl font-semibold mb-4">
            {data[0].category_name}
            </h4>
            <div className="border-2 shadow-gray shadow-lg flex gap-8 p-4">
              {data.map((item) => (
                <div className="border rounded-md py-4 px-4 relative h-[100%] m-auto w-44">
                <span className="absolute left-0 px-1 bg-[#27cfc4e4] rounded-r text-white">
                  10% OFF
                </span>
                <img
                  src={item.image}
                  alt={item.name}
                  id={item.id}
                  className="cursor-pointer w-48 h-36 m-auto"
                  onClick={handleImgClick}
                />
                <div className="hover:-translate-y-2 duration-200 ease-in-out">
                  <p className="text-center">{item.name}</p>
                  <p className="text-center font-semibold">
                    &#8377;{item.min_max_price.special_price}
                  </p>
                  <button className="flex items-center  gap-1 bg-[#09a69b] p-1 rounded-md m-auto text-white active:scale-75 duration-150 ease-in-out" 
                  onClick={handleAddToCartBtn}
                  id={item.id}
                  >
                    {/* <FaCartPlus /> */}
                    Add to cart
                  </button>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
