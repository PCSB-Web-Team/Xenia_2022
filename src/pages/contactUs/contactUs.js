import PageBackground from "../../components/pageBackground";
import { useSelector } from "react-redux/es/exports";
import { Validators } from "../../utils";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import "./contactUs.css";

function ContactUs() {
    const { userDetails: { name, mobile } } = useSelector(({ user }) => user);

    return (
        <div className="contact-us">
            <PageBackground />
            <div className="container">
                <div className="screen">
                    {/* <div className="screen-header">
                        <div className="screen-header-left">
                            <div className="screen-header-button close"></div>
                            <div className="screen-header-button maximize"></div>
                            <div className="screen-header-button minimize"></div>
                        </div>
                        <div className="screen-header-right">
                            <div className="screen-header-ellipsis"></div>
                            <div className="screen-header-ellipsis"></div>
                            <div className="screen-header-ellipsis"></div>
                        </div>
                    </div> */}
                    <div className="screen-body">
                        <div className="screen-body-item left rounded-tl-xl">
                            <div className="app-title">
                                <span>ABOUT</span>
                                <span>US</span>
                            </div>
                        </div>
                        <div className="screen-body-item rounded-tr-xl">
                            <p>XENIA is an Annual Technical Fiesta organized by PICT CSI Student Branch, formerly known as Enthusia. It is a three day technical fest where bright minds all around participate to compete amongst themselves. The organizing team in XENIA consistently strives in exploring various technologies and brings you the most innovative events. XENIA emphasizes on the technical events while also bringing you the opportunity of participating in various ingenious non-technical events.</p>
                        </div>
                    </div>
                    <div className="screen-body">
                        <div className="screen-body-item left rounded-bl-xl">
                            <div className="app-title">
                                <span>CONTACT</span>
                                <span>US</span>
                            </div>
                        </div>
                        <div className="screen-body-item rounded-br-xl">
                            <Formik
                                initialValues={{
                                    name: name || "",
                                    mobile: mobile || "",
                                    email: "",
                                    message: "",
                                }}
                                validationSchema={Yup.object({
                                    email: Validators.emailRequired,
                                    mobile: Validators.mobileRequired,
                                    password: Validators.stringRequired,
                                })}
                                onSubmit={
                                    async (values) => {
                                        // Requests.contactUsForm(values)  //! We don't have the API endpoint for this request yet
                                        // .then((res) => {console.log(res);})
                                        // .catch((err) => {console.log(err);})
                                    }
                                }
                            >
                                {(formik) => {
                                    return (
                                        <div className="app-form">
                                            <div className="app-form-group">
                                                <Field
                                                    className="app-form-control"
                                                    type={"text"}
                                                    name={"name"}
                                                    placeholder={"NAME"}
                                                    onChange={formik.handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="app-form-group">
                                                <Field
                                                    className="app-form-control"
                                                    type={"email"}
                                                    name={"email"}
                                                    placeholder={"EMAIL"}
                                                    onChange={formik.handleChange}
                                                    required
                                                />
                                            </div>
                                            {formik.errors.email && (
                                                <div className="text-red-500 font-light text-sm">
                                                    {formik.errors.email}
                                                </div>
                                            )}
                                            <div className="app-form-group">
                                                <Field
                                                    className="app-form-control"
                                                    type={"number"}
                                                    name={"mobile"}
                                                    placeholder={"CONTACT NO"}
                                                    onChange={formik.handleChange}
                                                    required
                                                />
                                                {formik.errors.mobile && (
                                                    <div className="text-red-500 font-light text-sm">
                                                        {formik.errors.mobile}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="app-form-group message">
                                                <Field
                                                    className="app-form-control"
                                                    type={"textarea"}
                                                    name={"message"}
                                                    placeholder={"MESSAGE"}
                                                    onChange={formik.handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="app-form-group buttons">
                                                <button className="app-form-button">CANCEL</button>
                                                <button className="app-form-button">SEND</button>
                                            </div>
                                        </div>
                                    );
                                }}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;