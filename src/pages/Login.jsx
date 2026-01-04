import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { loginSchema } from "../schema/schema";
import { APP_NAME } from "../../const.js";
import loader from "../../public/loading.svg";

import { login } from "../api/api.jsx";

function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      try {
        setIsLoading(true);

        const response = await login(values);
        console.log(response);
        if (response?.userId) {
          navigate("/dashboard");
        } else {
          console.log(response);

          alert("Invalid credentials");
        }
      } catch (err) {
        alert("Login failed");
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <div className="min-h-screen w-screen bg-[#f3f4f8] flex items-center justify-center px-4">
      <div>
        {isLoading ? (
          <img src={loader} />
        ) : (
          <div className="w-full max-w-4xl bg-white rounded-3xl shadow-lg border border-slate-200 flex flex-col md:flex-row overflow-hidden">
            <div className="hidden md:flex md:w-1/2 flex-col justify-between bg-gradient-to-b from-purple-600 via-indigo-500 to-blue-500 text-white p-8">
              <div>
                <h1 className="text-3xl font-black tracking-tight">
                  {APP_NAME}
                </h1>
                <p className="mt-3 text-sm text-indigo-100">
                  Your smart space to create, manage, and find your documents in
                  one place.
                </p>
              </div>

              <div className="mt-8 text-sm text-indigo-100 space-y-2">
                <p>✨ Recent drafts at a glance</p>
                <p>🔍 Powerful search for all your docs</p>
                <p>📁 Organize notes, PDFs, and more</p>
              </div>

              <p className="mt-8 text-xs text-indigo-100/80">
                © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
              </p>
            </div>

            {/* Right Form section */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 flex items-center">
              <form
                onSubmit={formik.handleSubmit}
                className="w-full flex flex-col gap-4"
              >
                <div className="mb-2">
                  <p className="text-xs font-medium text-slate-500 uppercase">
                    Welcome back
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-semibold mt-1">
                    Log in to{" "}
                    <span className="text-purple-700 font-black">
                      {APP_NAME}
                    </span>
                  </h2>
                  <p className="text-sm text-slate-500 mt-1">
                    Continue where you left off with your documents.
                  </p>
                </div>

                {/* Email Field */}
                <div className="w-full flex flex-col gap-1">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-slate-700"
                  >
                    Email Address
                  </label>
                  <input
                    className="border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none p-3 w-full rounded-2xl text-sm bg-slate-50"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.email && formik.touched.email && (
                    <p className="text-xs text-red-500">
                      {formik.errors.email}
                    </p>
                  )}
                </div>

                {/* Password Field */}
                <div className="w-full flex flex-col gap-1">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-slate-700"
                  >
                    Password
                  </label>
                  <input
                    className="border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none p-3 w-full rounded-2xl text-sm bg-slate-50"
                    type="password"
                    name="password"
                    placeholder="Enter your password"
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
                  Log In
                </button>

                <p className="mt-2 text-sm text-slate-600 text-center">
                  Don’t have an account?{" "}
                  <button
                    type="button"
                    className="text-purple-700 font-medium hover:underline"
                    onClick={() => navigate("/signup")}
                  >
                    Create one
                  </button>
                </p>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
