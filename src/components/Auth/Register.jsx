import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Navbar from "../Navbar";
import createAxiosInstance from "../../helper/axiosInstance";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Register() {
  /*
    User State = 0 (Register)
    User State = 1 (Login)
    */
  const [userState, setUserState] = useState(0);
  const axiosInstance = createAxiosInstance();

  const router = useNavigate()

  // Yup validation schema for Register form
  const registerValidationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  // Yup validation schema for Login form
  const loginValidationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  // Formik initialization for Register form
  const formikRegister = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerValidationSchema,
    onSubmit: (values) => {

      axiosInstance.post('/register', values)
      .then(response => {
        console.log(response,'response ????');
        if (response.data.success) {
          toast.success(response.data.message)
          setUserState(1)
        } else {
          toast.warn(response.data.message)
        }
      })
    },
  });

  // Formik initialization for Login form
  const formikLogin = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      // Handle form submission here
      axiosInstance.post("/login", values)
      .then(response => {
        if (response.data.success) {
          toast.success(response.data.message)
          router("/dashboard")
        } else {
          toast.warn(response.data.message)
        }
      })
    },
  });

  return (
    <div className="bg-primary w-full h-[100vh] flex flex-col justify-center items-center">
      {/* Navbar inside the main div */}
      <div className="w-full px-10">
        <Navbar />
      </div>

      {/* Centered Registration Form */}
      <div className="flex-grow flex justify-center items-center w-full">
        {userState === 0 && (
          <form
            onSubmit={formikRegister.handleSubmit}
            className="bg-white bg-opacity-30 backdrop-blur-md p-8 rounded-lg shadow-lg flex flex-col gap-4 w-[350px]"
          >
            <h1 className="text-2xl font-bold mb-4 text-center text-white">
              Join Now
            </h1>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={formikRegister.handleChange}
              onBlur={formikRegister.handleBlur}
              value={formikRegister.values.name}
              className="w-full p-2 border border-gray-300 rounded-md outline-none focus:border-gray-700"
            />
            {formikRegister.touched.name && formikRegister.errors.name ? (
              <p className="text-red-500">{formikRegister.errors.name}</p>
            ) : null}

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={formikRegister.handleChange}
              onBlur={formikRegister.handleBlur}
              value={formikRegister.values.email}
              className="w-full p-2 border border-gray-300 rounded-md outline-none focus:border-gray-700"
            />
            {formikRegister.touched.email && formikRegister.errors.email ? (
              <p className="text-red-500">{formikRegister.errors.email}</p>
            ) : null}

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={formikRegister.handleChange}
              onBlur={formikRegister.handleBlur}
              value={formikRegister.values.password}
              className="w-full p-2 border border-gray-300 rounded-md outline-none focus:border-gray-700"
            />
            {formikRegister.touched.password && formikRegister.errors.password ? (
              <p className="text-red-500">{formikRegister.errors.password}</p>
            ) : null}

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={formikRegister.handleChange}
              onBlur={formikRegister.handleBlur}
              value={formikRegister.values.confirmPassword}
              className="w-full p-2 border border-gray-300 rounded-md outline-none focus:border-gray-700"
            />
            {formikRegister.touched.confirmPassword &&
            formikRegister.errors.confirmPassword ? (
              <p className="text-red-500">{formikRegister.errors.confirmPassword}</p>
            ) : null}

            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Register
            </button>

            <p
              className="cursor-pointer text-white"
              onClick={() => setUserState(1)}
            >
              Already have an account?
            </p>
          </form>
        )}

        {userState === 1 && (
          <form
            onSubmit={formikLogin.handleSubmit}
            className="bg-white bg-opacity-30 backdrop-blur-md p-8 rounded-lg shadow-lg flex flex-col gap-4 w-[350px]"
          >
            <h1 className="text-2xl font-bold mb-4 text-center text-white">
              Welcome Back
            </h1>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={formikLogin.handleChange}
              onBlur={formikLogin.handleBlur}
              value={formikLogin.values.email}
              className="w-full p-2 border border-gray-300 rounded-md outline-none focus:border-gray-700"
            />
            {formikLogin.touched.email && formikLogin.errors.email ? (
              <p className="text-red-500">{formikLogin.errors.email}</p>
            ) : null}

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={formikLogin.handleChange}
              onBlur={formikLogin.handleBlur}
              value={formikLogin.values.password}
              className="w-full p-2 border border-gray-300 rounded-md outline-none focus:border-gray-700"
            />
            {formikLogin.touched.password && formikLogin.errors.password ? (
              <p className="text-red-500">{formikLogin.errors.password}</p>
            ) : null}

            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>

            <p className="cursor-pointer text-white">
              Don't have an account?{" "}
              <span className="hover:underline" onClick={() => setUserState(0)}>
                Register Now
              </span>
            </p>
          </form>
        )}
      </div>
      <h1 className="text-2xl text-red-800 font-bold">
        ! User Interface Under Development !
      </h1>
    </div>
  );
}

export default Register;
