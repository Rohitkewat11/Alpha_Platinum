import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';




function Login() {

  const navigate = useNavigate();

  const validation = Yup.object({
    email: Yup.string().required("Please enter email"),
    password: Yup.string().required("please enter password").min(4).max(8),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      device_name:"1",
    },
    validationSchema: validation,
    onSubmit: (data, action) => {
      console.table(data);
      axios
        .post("https://hellostay.com/api/auth/login", data)
        .then((res) => {
          const userData= res.data.user;
          swal("Login", "You clicked the button!", "success");
          localStorage.setItem("user", JSON.stringify(userData));
          navigate(0);
        })
        .catch((err) => {
          console.log(err.message);
        });
      action.resetForm();
      
    },
  });




  return (
    <>

      <div className="mt-3">
        <p className="text-2xl py-4 font-semibold">Login</p>
        <form onSubmit={formik.handleSubmit}>
            <div>
              <input
                onChange={formik.handleChange}
                value={formik.values.name}
                name="email"
                className="w-full p-2 border-2 rounded-md mt-2 outline-none"
                type="text"
                placeholder="E-mail"
              />
              {/* {formik.errors.mobile && formik.touched.mobile ? (
              <p className="text-red-500">{formik.errors.mobile}</p>
              ) : null} */}
              <p className="text-red-500">{formik.errors.email}</p>
              <input
                onChange={formik.handleChange}
                value={formik.values.password}
                name="password"
                className="w-full p-2 border-2 rounded-md mt-2 outline-none"
                type="text"
                placeholder="Password"
              />
              {/* {formik.errors.password && formik.touched.phone ? (
              <p className="text-red-500">{formik.errors.password}</p>
              ) : null} */}
              <p className="text-red-500">{formik.errors.password}</p>
            </div>
            <p className="text-end text-blue-500 mt-1">Forget Password?</p>
          <div>
            <button
              type="submit"
              className="w-full p-2 bg-black text-yellow-400 font-bold rounded-md mt-4 active:scale-75 duration-200 ease-in-out"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
