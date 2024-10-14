import axios from "axios";
import { useEffect, useState } from "react";
import { FaChevronRight} from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

//import swiper style 
import 'swiper/css';
import 'swiper/css/pagination';

// import requried moudles
import { Navigation, Autoplay } from "swiper/modules";
import { SwiperSlide ,Swiper} from "swiper/react";

// Import custom stylesheet
import './customCategorySlider.css';

export function CategorySlider() {
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();


  // filter data through ID's //
  function handleFinddata(e){
    const filterData = (category.find((item)=> item.id === e.target.id));
     navigate(`/category/${filterData.name}`,{state:filterData});
    } 

  useEffect(() => {
    axios
      .post(
        "https://alpha-platinum.vercel.app/api/get_categories"
      )
      .then((res) => {
        setCategory(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="border-b-2 border-gray-200 mb-10">
      <p className="text-4xl text-center my-5">Category</p>
      <div className="my-10">

      <Swiper
       pagination={{
         clickable: true,
        }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter:true
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 7,
          spaceBetween: 50,
        },
      }}
      navigation={{
        prevEl: '.custom-prev',
        nextEl: '.custom-next',
      }}
        modules={[Navigation,Autoplay]}
        className="mySwiper"
      >
      <div className="custom-prev">
        <FaChevronLeft/>
      </div>
      <div className="custom-next">
        <FaChevronRight/>
      </div>
        {
            category.map((item)=>
                 <div>
                    <SwiperSlide>
                    <img src={item.image} alt=""
                    id={item.id}
                    onClick={handleFinddata} className=" m-auto border-2 h-32 w-32 border-[#49a6a2] rounded-full cursor-pointer"/>
                    <p className="text-center">{item.name}</p>
                </SwiperSlide>
                 </div>
            )
        }
      </Swiper>
      </div>
      </div>
    </>
  );
}
