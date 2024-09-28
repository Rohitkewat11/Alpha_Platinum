

import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";

export function Register() {
    const siteKey = "6Lf0XU4qAAAAAH_GIHH3tStQWPM05trwmOFbooJq"
    const [country,setCountry] = useState([]);
    const [active,setActive] = useState(false);
    var [code,setCode]= useState({
        flag :"https://flagcdn.com/w320/in.png",
        dial_code:"+91"
    })

    
    
    const validation = Yup.object({
        mobile: Yup.string().required("Please enter mobile"),
    });

  const formik = useFormik({
      initialValues: {
          mobile: "",
    },
    validationSchema: validation,
    onSubmit: (data, action) => {
        console.table(data);
        //   axios
        //     .post("https://hellostay.com/api/auth/login", data)
        //     .then((res) => {
            //       console.log(res.data);
            //     })
            //     .catch((err) => {
                //       console.log(err.message);
                //     });
                action.resetForm();
            },
        });
        
        // function handle country dropdown list//
        function handleCountryList(flag,dial_code){
            setCode({flag,dial_code}) //assign value to code object
            setActive(!active);
          }



  useEffect(()=>{
    axios.get('./country.json')
    .then((res)=>{
        setCountry(res.data.data);
    })
    .catch((err)=>{
        console.log(err);
        
    })
  },[]);

  return (
    <>
      <div className="mt-3 ">
        <p className="text-2xl py-4 font-semibold">Register</p>
        <form onSubmit={formik.handleSubmit}>
            <div className="flex border-2 rounded-md">
                <div className="min-w-fit px-1 bg-gray-300 outline-none cursor-pointer flex items-center gap-1" onClick={()=>{setActive(active=>!active)}}>
                    {
                        <img src={code.flag} alt="flag" className="h-5 w-8" />
                    }
                    {
                        code.dial_code
                    }
                </div>
              <input
                onChange={formik.handleChange}
                value={formik.values.name}
                name="mobile"
                className="w-full outline-none ps-2 p-2"
                type="text"
                placeholder="Mobile Number"
              />
            </div>
            <ol className="h-52 overflow-y-scroll" style={{display:active?"block":"none"}}>
                {
                    country.map((item,index)=>
                        <li key={index}  type="button" className="flex items-center p-1 cursor-pointer border hover:bg-gray-200" 
                        onClick={()=>{handleCountryList(item.flag,item.dial_code)}}
                        >
                            <img src={item.flag} alt="" className="h-5 w-8" />&nbsp;
                            <p>{item.name}</p>&nbsp;
                            <p>({item.dial_code})</p>
                        </li>
                    )
                }
            </ol>
              <p className="text-red-500">{formik.errors.mobile}</p>
          <div>
            {/* google recaptcha */}
            <div className="flex justify-center mt-4">
            <ReCAPTCHA 
              sitekey={siteKey}
            />
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-black text-yellow-400 font-bold rounded-md mt-4 active:scale-75 duration-200 ease-in-out"
            >
              Countinue
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

