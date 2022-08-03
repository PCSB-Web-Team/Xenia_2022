import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Validators } from "../../utils";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux/es/exports";
import { loginUser, registerUser, logoutUser } from "../../store/middleware";
import { calcLength } from "framer-motion";
import "./auth.css";

const Login = () => {
  const [mode, setMode] = useState("login");

  const dispatch = useDispatch() //hook returning a reference to the dispatch function from redux store, dispatch action when needed

  const navigate = useNavigate()

  const toggleMode = () => {
    setMode((initial) => (initial === "login" ? "signup" : "login"));
  };

  return (
    <div>
      <div class="body-lg">
        <div class="main-lg">
          <input type="checkbox" id="chk-lg" aria-hidden="true" />

          {mode === "login" ? (
            <>
              <Formik
                initialValues={{
                  email: "",
                  name: "",
                  mobile: "",
                  password: "",
                }}
                onSubmit={
                  async (values) => {
                    // const requestBody = {}
                    // Object.assign(requestBody, { email, name, mobile, password })
                    await dispatch(registerUser(values || null)).unwrap().then(({ data: { error } }) => (
                      !error ? navigate(-1, { replace: true }) : console.log(error) // replace option - if the user clicks the back button, they won't be able to navigate to the previous page
                    )).catch((err) => {
                      console.log(err);
                    })
                    // await dispatch(logoutUser()) //! working, but just we need is a logout button to display in Navbar
                  }
                }
              >
                {(formik) => {
                  return (
                    <>
                      <div class="signup text-center">
                        <label
                          className="label-lg"
                          for="chk-lg"
                          aria-hidden="true"
                        >
                          Sign up
                        </label>
                        <input
                          className="input-lg"
                          type="text"
                          name="name"
                          placeholder="Full Name"
                          required=""
                          onChange={formik.handleChange}
                        />
                        <input
                          className="input-lg"
                          type="email"
                          name="email"
                          placeholder="Email"
                          required=""
                          onChange={formik.handleChange}
                        />
                        <input
                          className="input-lg"
                          type="password"
                          name="password"
                          placeholder="Password"
                          required=""
                          onChange={formik.handleChange}
                        />
                        <input
                          className="input-lg"
                          type="password"
                          name="cnf pswd"
                          placeholder="Confirm Password"
                          required=""
                          onChange={formik.handleChange}
                        />
                        <input
                          className="input-lg"
                          type="text"
                          name="mobile"
                          placeholder="Whatsapp Number"
                          required=""
                          onChange={formik.handleChange}
                        />
                        <input
                          className="input-lg"
                          type="text"
                          name="clg"
                          placeholder="College"
                          required=""
                          onChange={formik.handleChange}
                        />
                        <button className="btn69" onClick={formik.handleSubmit}>Submit</button>
                        <button
                          onClick={toggleMode}
                          className="mx-auto p-2 bg-sky-600 px-4 m-auto rounded-md text-white font-bold"
                        >
                          Login
                        </button>
                      </div>
                    </>
                  );
                }}
              </Formik>
            </>
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
              onSubmit={
                async (values) => {
                  await dispatch(loginUser(values || null)).unwrap().then(({ data: { error } }) => (
                    !error ? navigate(-1, { replace: true }) : console.log(error)
                  )).catch((err) => {
                    console.log(err);
                  })
                  // await dispatch(logoutUser()) //! working, but just we need is a logout button to display in Navbar
                }
              }
            >
              {(formik) => {
                return (
                  <div class="px-4 space-y-4">
                    <label className="label-lg">Login</label>
                    <Field
                      className="w-full rounded border bg-gray-100 border-gray-200 p-2"
                      placeholder={"Email"}
                      name={"email"}
                      type={"text"}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.email && (
                      <div className="text-red-500 font-bold">
                        {formik.errors.email}
                      </div>
                    )}
                    <Field
                      className="w-full rounded border bg-gray-100 border-gray-200 p-2"
                      placeholder={"Password"}
                      name={"password"}
                      type={"text"}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.password && (
                      <div className="text-red-500 font-bold">
                        {formik.errors.password}
                      </div>
                    )}
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
    </div >
  );
};

export default Login;
