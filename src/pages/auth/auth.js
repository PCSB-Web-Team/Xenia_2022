import "./auth.css";
import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { Validators } from "../../utils";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { loginUser, registerUser } from "../../store/middleware";

const Login = (props) => {
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState("login");
  const [error, setError] = useState("");

  // const userState = useSelector(async ({ user }) => await user); //* useSelector dhkoka de rha, abhi apn props he use krre ;-)
  const dispatch = useDispatch();
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

  // return userState.loggedIn ? (
  return props.loggedIn ? (
    <Navigate to={-1} replace={true} />
  ) : (
    // <>
    //   {props.toast.container}
    //   {/* {setTimeout(() => {
    //   {/* {props.toast.toast.success("Logged In!")} */}
    //   }), 2000} */}
    // </>
    <>
      {loading ? (
        props.loading
      ) : (
        <div className="h-screen w-full flex justify-center items-center">
          {props.toast.container}
          <div className=" w-80 md:w-[400px] p-4 bg-black/20 backdrop-blur-md space-y-2 font-light">
            {mode === "login" ? (
              <Formik
                initialValues={{
                  email: "",
                  name: "",
                  mobile: "",
                  password: "",
                  confirmPassword: "",
                  year: "FE",
                }}
                validationSchema={validate}
                onSubmit={async (values) => {
                  setLoading(true);
                  setError("");
                  await dispatch(registerUser(values || null))
                    .unwrap()
                    .then(({ data: { error, status } }) => {
                      setLoading(false);
                      if (status) {
                        props.toast.toast.success("Successfully registered!");
                        setTimeout(() => {
                          navigate(-1, { replace: true });
                        }, 2500);
                      } else {
                        props.toast.toast.error("Error: " + error?.message);
                        setError(error?.message);
                      }
                    })
                    .catch((err) => {
                      props.toast.toast.error("Error: " + err?.message || "");
                      setLoading(false);
                    });
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
                        type={"password"}
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
                        type={"password"}
                        onChange={formik.handleChange}
                      />
                      {formik.errors.confirmPassword && (
                        <div className="text-red-500 font-light text-sm">
                          {formik.errors.confirmPassword}
                        </div>
                      )}
                      <select
                        className="w-full rounded border bg-gray-100 border-gray-200 p-2"
                        placeholder={"Year"}
                        value={formik.values.year}
                        name={"year"}
                        as={"select"}
                        onChange={formik.handleChange}
                      >
                        <option value="FE">FE</option>
                        <option value="SE">SE</option>
                        <option value="TE">TE</option>
                        <option value="BE">BE</option>
                      </select>
                      {formik.errors.year && (
                        <div className="text-red-500 font-light text-sm">
                          {formik.errors.year}
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
                        <div className="text-white">
                          Already have an account ?
                        </div>
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
                  setLoading(true);
                  setError("");
                  await dispatch(loginUser(values || null))
                    .unwrap()
                    .then(({ data: { data, status, error } }) => {
                      setLoading(false);
                      if (status) {
                        props.toast.toast.success("Logged In!");
                        setTimeout(() => {
                          return navigate(-1, { replace: true });
                        }, 2000);
                      } else {
                        props.toast.toast.error("Error: " + error?.message);
                        setError(error?.message);
                      }
                    })
                    .catch((err) => {
                      props.toast.toast.error("Error: " + err?.message || "");
                      setLoading(false);
                    });
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
      )}
    </>
  );
};

export default Login;
