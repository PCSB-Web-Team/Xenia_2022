import React, { useState } from "react";
import "./auth.css";
import Requests from "../../utils/requests";
import { Validators } from "../../utils";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import { calcLength } from "framer-motion";

const Login = () => {
  const [mode, setMode] = useState("login");

  const toggleMode = () => {
    setMode((initial) => (initial == "login" ? "signup" : "login"));
  };

  return (
    <div>
      <div class="body-lg">
        <div class="main-lg">
          <input type="checkbox" id="chk-lg" aria-hidden="true" />

          {mode == "login" ? (
            <Formik
              initialValues={{
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
                mobile: "",
                college: "",
              }}
              validationSchema={Yup.object({
                email: Validators.emailRequired,
                password: Yup.string()
                  .required("No password provided.")
                  .min(8, "Password is too short - should be 8 chars minimum.")
                  .matches(
                    /[a-zA-Z]/,
                    "Password can only contain Latin letters."
                  ),
                confirmPassword: Yup.string()
                  .oneOf([Yup.ref("password"), null], "Passwords must match")
                  .required("Enter Password"),
                name: Validators.nameRequired,
                mobile: Validators.mobileRequired,
                college: Validators.name,
              })}
            >
              {(formik) => {
                return (
                  <div class="px-4 space-y-4">
                    <label className="label-lg" for="chk-lg" aria-hidden="true">
                      Sign up
                    </label>
                    <div>
                      <Field
                        className="w-full rounded border bg-gray-100 border-gray-200 p-2"
                        placeholder={"Name"}
                        name={"name"}
                        type={"text"}
                        onChange={formik.handleChange}
                      />
                      {formik.errors.name && (
                        <div className="text-red-500 font-light text-sm">
                          {formik.errors.name}
                        </div>
                      )}
                    </div>
                    <div>
                      <Field
                        className="w-full rounded border bg-gray-100 border-gray-200 p-2"
                        placeholder={"Email"}
                        name={"email"}
                        type={"text"}
                        onChange={formik.handleChange}
                      />
                      {formik.errors.email && (
                        <div className="text-red-500 font-light text-sm">
                          {formik.errors.email}
                        </div>
                      )}
                    </div>
                    <div>
                      <Field
                        className="w-full rounded border bg-gray-100 border-gray-200 p-2"
                        placeholder={"Password"}
                        name={"password"}
                        type={"text"}
                        onChange={formik.handleChange}
                      />
                      {formik.errors.password && (
                        <div className="text-red-500 font-light text-sm">
                          {formik.errors.password}
                        </div>
                      )}
                    </div>
                    <div>
                      <Field
                        className="w-full rounded border bg-gray-100 border-gray-200 p-2"
                        placeholder={"Confirm Password"}
                        name={"confirmPassword"}
                        type={"text"}
                        onChange={formik.handleChange}
                      />
                      {formik.errors.confirmPassword && (
                        <div className="text-red-500 font-light text-sm">
                          {formik.errors.confirmPassword}
                        </div>
                      )}
                    </div>

                    <div>
                      <Field
                        className="w-full rounded border bg-gray-100 border-gray-200 p-2"
                        placeholder={"Whatsapp Number"}
                        name={"mobile"}
                        type={"text"}
                        onChange={formik.handleChange}
                      />
                      {formik.errors.mobile && (
                        <div className="text-red-500 font-light text-sm">
                          {formik.errors.mobile}
                        </div>
                      )}
                    </div>

                    <div>
                      <Field
                        className="w-full rounded border bg-gray-100 border-gray-200 p-2"
                        placeholder={"College"}
                        name={"college"}
                        type={"text"}
                        onChange={formik.handleChange}
                      />
                      {formik.errors.college && (
                        <div className="text-red-500 font-light text-sm">
                          {formik.errors.college}
                        </div>
                      )}
                    </div>
                    <button className="btn69">Submit</button>
                    <button
                      onClick={toggleMode}
                      className="mx-auto p-2 bg-sky-600 px-4 m-auto rounded-md text-white font-bold"
                    >
                      Login
                    </button>
                  </div>
                );
              }}
            </Formik>
          ) : (
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={Yup.object({
                email: Validators.emailRequired,
                password: Validators.stringRequired,
              })}
              onSubmit={async (values) => {
                console.log(values);
                await Requests.login(values)
                  .then((res) => {
                    console.log(res);
                  })
                  .catch((err) => {
                    console.log(err);
                  });

                // TODO: store data in redux
              }}
            >
              {(formik) => {
                return (
                  <div class="px-4 space-y-4">
                    <label className="label-lg">Login</label>
                    <div>
                      <Field
                        className="w-full rounded border bg-gray-100 border-gray-200 p-2"
                        placeholder={"Email"}
                        name={"email"}
                        type={"text"}
                        onChange={formik.handleChange}
                      />
                      {formik.errors.email && (
                        <div className="text-red-500 font-light text-sm">
                          {formik.errors.email}
                        </div>
                      )}
                    </div>
                    <div>
                      <Field
                        className="w-full rounded border bg-gray-100 border-gray-200 p-2"
                        placeholder={"Password"}
                        name={"password"}
                        type={"text"}
                        onChange={formik.handleChange}
                      />
                      {formik.errors.password && (
                        <div className="text-red-500 font-light text-sm">
                          {formik.errors.password}
                        </div>
                      )}
                    </div>
                    <button
                      className="btn69 mb-4"
                      onClick={formik.handleSubmit}
                    >
                      Login
                    </button>
                    <div className="mx-auto text-center items-center w-full flex flex-row justify-center space-x-2">
                      <div className="text-white">Not Registered ?</div>
                      <button
                        onClick={toggleMode}
                        className=" bg-green-700 text-white px-4 py-2 rounded-full"
                      >
                        Sign up
                      </button>
                    </div>
                  </div>
                );
              }}
            </Formik>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;