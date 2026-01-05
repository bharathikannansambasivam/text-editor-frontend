import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signUpSchema } from "../schema/schema.js";
import { APP_NAME } from "../../const.js";
import { signup } from "../api/api.jsx";
import { useState } from "react";
import loader from "../../public/loading.svg";

function SignUp() {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: async (values) => {
      try {
        setIsLoading(true);

        const res = await signup(values);
        if (res.data.status == 400) {
          alert(response.data.message || "Something went wrong!");
        }
        navigate("/login");
      } catch (err) {
        if (err.response?.status == 400) {
          alert(err.response.data.message);
        } else {
          alert("Something went wrong! Please try again later.");
        }
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <div className="min-h-screen w-screen bg-[#f3f4f8] flex items-center justify-center px-4">
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black/10 backdrop-blur-sm">
          <img src={loader} width="50" height="50" />
        </div>
      ) : (
        <div className="w-full max-w-4xl bg-white rounded-3xl shadow-lg border border-slate-200 flex flex-col md:flex-row overflow-hidden">
          <div className="hidden md:flex md:w-1/2 flex-col justify-between bg-gradient-to-b from-purple-600 via-indigo-500 to-blue-500 text-white p-8">
            <div>
              <h1 className="text-3xl font-black tracking-tight">
                Create your account
              </h1>
              <p className="mt-3 text-sm text-indigo-100">
                Set up your workspace, save your documents, and find them
                instantly when you need them.
              </p>
            </div>

            <div className="mt-8 text-sm text-indigo-100 space-y-2">
              <p>📝 Create and edit rich documents</p>
              <p>📚 Keep everything organized</p>
              <p>☁️ Secure cloud-based storage</p>
            </div>

            <p className="mt-8 text-xs text-indigo-100/80">
              Getting started takes less than a minute.
            </p>
          </div>

          {/* Right Form */}
          <div className="w-full md:w-1/2 p-6 sm:p-8 flex items-center">
            <form
              className="w-full flex flex-col gap-4"
              onSubmit={formik.handleSubmit}
            >
              <div className="mb-2">
                <p className="text-xs font-medium text-slate-500 uppercase">
                  Sign up
                </p>
                <h2 className="text-2xl sm:text-3xl font-semibold mt-1">
                  Join{" "}
                  <span className="text-purple-700 font-black">{APP_NAME}</span>
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  Create an account to start managing all your docs in one
                  place.
                </p>
              </div>

              {/* Name */}
              <div className="w-full flex flex-col gap-1">
                <label
                  htmlFor="userName"
                  className="text-sm font-medium text-slate-700"
                >
                  Full Name
                </label>
                <input
                  className="border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none p-3 w-full rounded-2xl text-sm bg-slate-50"
                  name="userName"
                  type="text"
                  placeholder="Enter your name"
                  value={formik.values.userName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.userName && formik.touched.userName && (
                  <p className="text-xs text-red-500">
                    {formik.errors.userName}
                  </p>
                )}
              </div>

              <div className="w-full flex flex-col gap-1">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-slate-700"
                >
                  Email Address
                </label>

                <input
                  className="border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none p-3 w-full rounded-2xl text-sm bg-slate-50"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.email && formik.touched.email && (
                  <p className="text-xs text-red-500">{formik.errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div className="w-full flex flex-col gap-1">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-slate-700"
                >
                  Password
                </label>
                <input
                  className="border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none p-3 w-full rounded-2xl text-sm bg-slate-50"
                  name="password"
                  type="password"
                  placeholder="Enter a strong password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.password && formik.touched.password && (
                  <p className="text-xs text-red-500">
                    {formik.errors.password}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="mt-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 rounded-2xl text-sm shadow-md transition-transform duration-150 active:scale-[0.98]"
              >
                Create Account
              </button>

              <p className="mt-2 text-sm text-slate-600 text-center">
                Already have an account?{" "}
                <button
                  type="button"
                  className="text-purple-700 font-medium hover:underline"
                  onClick={() => navigate("/login")}
                >
                  Log in
                </button>
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignUp;
