import "./auth.css";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Validators } from "../../utils";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { loginUser, registerUser, logoutUser } from "../../store/middleware";
import { calcLength } from "framer-motion";

const Login = () => {
  const [mode, setMode] = useState("login");
  const [error, setError] = useState("");

  const userState = useSelector(({ user }) => user);

  const dispatch = useDispatch(); //hook returning a reference to the dispatch function from redux store, dispatch action when needed

  const navigate = useNavigate();

  const toggleMode = () => {
    setError("");
    setMode((initial) => (initial === "login" ? "signup" : "login"));
  };

  const validate = Yup.object({
    email: Validators.emailRequired,
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Enter Password"),
    name: Validators.nameRequired,
    mobile: Validators.mobileRequired,
    branch: Validators.name,
    college: Validators.string,
  });

  return userState.loggedIn ? (
    navigate(-1, { replace: true })
  ) : (
    <div class="h-screen w-full flex justify-center items-center">
      <div className=" w-80 md:w-[400px] p-4 bg-black/20 backdrop-blur-md space-y-2 font-light">
        {mode === "login" ? (
          <Formik
            initialValues={{
              email: "",
              name: "",
              mobile: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validate}
            onSubmit={async (values) => {
              setError("");
              // const requestBody = {}
              // Object.assign(requestBody, { email, name, mobile, password })
              await dispatch(registerUser(values || null))
                .unwrap()
                .then(({ data: { error, data, status } }) => {
                  if (!error)
                    navigate(-1, {
                      replace: true,
                    });
                  // replace option - if the user clicks the back button, they won't be able to navigate to the previous page
                  else {
                    setError(error.message);
                  }
                })
                .catch((err) => {
                  console.log(err);
                });
              // await dispatch(logoutUser()) //! working, but just we need is a logout button to display in Navbar
            }}
          >
            {(formik) => {
              return (
                <>
                  <div className="text-white text-2xl mx-auto w-full text-center mb-4 tracking-widest">
                    Sign up
                  </div>

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
                  <Field
                    className="w-full rounded border bg-gray-100 border-gray-200 p-2"
                    placeholder={"Confirm password"}
                    name={"confirmPassword"}
                    type={"text"}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.confirmPassword && (
                    <div className="text-red-500 font-light text-sm">
                      {formik.errors.confirmPassword}
                    </div>
                  )}
                  <Field
                    className="w-full rounded border bg-gray-100 border-gray-200 p-2"
                    placeholder={"Mobile"}
                    name={"mobile"}
                    type={"text"}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.mobile && (
                    <div className="text-red-500 font-light text-sm">
                      {formik.errors.mobile}
                    </div>
                  )}
                  <Field
                    className="w-full rounded border bg-gray-100 border-gray-200 p-2"
                    placeholder={"Collge"}
                    name={"college"}
                    type={"text"}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.college && (
                    <div className="text-red-500 font-light text-sm">
                      {formik.errors.college}
                    </div>
                  )}
                  {error && <div className="text-red-500">{error}</div>}
                  <div className="w-full">
                    <button
                      className="mx-auto p-2 bg-green-600 px-4 m-auto text-white"
                      onClick={formik.handleSubmit}
                    >
                      Sign Up
                    </button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-white">Already have an account ?</div>
                    <button
                      onClick={toggleMode}
                      className="p-2 bg-sky-600 px-4 text-white"
                    >
                      Login
                    </button>
                  </div>
                </>
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
              setError("");
              await dispatch(loginUser(values || null))
                .unwrap()
                .then(({ data: { error } }) => {
                  if (!error) {
                    navigate(-1, { replace: true });
                  } else {
                    setError(error.message);
                  }
                })
                .catch((err) => {
                  console.log(err);
                });
              // await dispatch(logoutUser()) //! working, but just we need is a logout button to display in Navbar
            }}
          >
            {(formik) => {
              return (
                <>
                  <div className="text-white text-2xl mx-auto w-full text-center mb-4 tracking-widest">
                    Login
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
                      type={"password"}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.password && (
                      <div className="text-red-500 font-light text-sm">
                        {formik.errors.password}
                      </div>
                    )}
                  </div>
                  {error && <div className="text-red-500">{error}</div>}
                  <button
                    className="p-2 bg-sky-600 px-4 text-white"
                    type="submit"
                    onClick={formik.handleSubmit}
                  >
                    Login
                  </button>
                  <div className="mx-auto text-center items-center w-full flex space-x-2">
                    <div className="text-white">Not Registered ?</div>
                    <button
                      onClick={toggleMode}
                      className=" bg-green-600 text-white px-4 py-2"
                    >
                      Sign up
                    </button>
                  </div>
                </>
              );
            }}
          </Formik>
        )}
      </div>
    </div>
  );
};

export default Login;
