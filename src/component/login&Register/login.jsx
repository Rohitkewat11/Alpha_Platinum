import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

function Login() {
  const validation = Yup.object({
    mobile: Yup.string().required("Please enter mobile"),
    password: Yup.string().required("please enter password").min(4).max(8),
  });

  const formik = useFormik({
    initialValues: {
      mobile: "",
      password: "",
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

  return (
    <>
      <div className="mt-3">
        <p className="text-2xl py-4 font-semibold">Login</p>
        <form onSubmit={formik.handleSubmit}>
            <div>
              <input
                onChange={formik.handleChange}
                value={formik.values.name}
                name="mobile"
                className="w-full p-2 border-2 rounded-md mt-2 outline-none"
                type="text"
                placeholder="Mobile Number"
              />
              {/* {formik.errors.mobile && formik.touched.mobile ? (
              <p className="text-red-500">{formik.errors.mobile}</p>
              ) : null} */}
              <p className="text-red-500">{formik.errors.mobile}</p>
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
