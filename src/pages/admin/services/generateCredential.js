import { Field, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Validators } from "../../../utils";

function GenerateCredential(props) {

    const validate = Yup.object({
        email: Validators.emailRequired,
        full_name: Validators.nameRequired,
        phone: Validators.mobileRequired,
        eventid: Validators.stringRequired,
    });

    function checkIsTeamEvent(eventid) {
        return props.events?.find(event => event?._id === eventid)?.teamSize > 1 ? true : false;
    }

    return (props.loading ? props.loader :
        <div className="w-full flex justify-center items-center z-10">
            {props.toast.container}
            <div className=" w-80 md:w-[400px] p-2 bg-black/20 backdrop-blur-md space-y-2 font-light">
                <Formik
                    initialValues={{
                        email: "",
                        full_name: "",
                        phone: "",
                        eventid: "",
                        teamName: ""
                    }}
                    validationSchema={validate}
                    onSubmit={async (values) => {
                        props.setLoading(true);
                        await axios.post(process.env.REACT_APP_API_URL + "/razorpay/verification", {
                            "entity": "event",
                            "account_id": "acc_BFQ7uQEaa7j2z7",
                            "event": "payment.authorized",
                            "contains": [
                                "payment"
                            ],
                            "payload": {
                                "payment": {
                                    "entity": {
                                        "id": "pay_DESlfW9H8K9uqM",
                                        "entity": "payment",
                                        "amount": 100,
                                        "currency": "INR",
                                        "status": "authorized",
                                        "order_id": "order_DESlLckIVRkHWj",
                                        "invoice_id": null,
                                        "international": false,
                                        "method": "netbanking",
                                        "amount_refunded": 0,
                                        "refund_status": null,
                                        "captured": false,
                                        "description": null,
                                        "card_id": null,
                                        "bank": "HDFC",
                                        "wallet": null,
                                        "vpa": null,
                                        "email": "gaurav.kumar@example.com",
                                        "contact": "+919876543210",
                                        "notes": values,
                                        "fee": null,
                                        "tax": null,
                                        "error_code": null,
                                        "error_description": null,
                                        "error_source": null,
                                        "error_step": null,
                                        "error_reason": null,
                                        "acquirer_data": {
                                            "bank_transaction_id": "0125836177"
                                        },
                                        "created_at": 1567674599
                                    }
                                }
                            },
                            "created_at": 1567674606
                        })
                            .then((res) => {
                                props.setLoading(false);
                                if (res?.data?.message?.code === 11000) props.toast.toast.error("Error: User already exists and registered for this event!");
                                else if (res?.data?.status === 200) {
                                    props.toast.toast.success("Successfully created " + values.full_name + "'s account and credentials for eventID: " + values.eventid);
                                } else props.toast.toast.error("Error while creating account: " + res?.data?.error?.message);
                            }).catch((err) => {
                                props.setLoading(false);
                                props.toast.toast.error("Error while creating account: " + err.message);
                            });
                        setTimeout(() => {
                            // window.location.reload(true);
                        }, 1900);
                    }}
                >
                    {(formik) => {
                        return (
                            <>
                                <div className="text-white text-2xl mx-auto w-full text-center mb-4 tracking-widest">
                                    Create Account and Participation
                                </div>
                                <Field
                                    className="w-full rounded border bg-gray-100 border-gray-200 p-2"
                                    placeholder={"Full Name"}
                                    name={"full_name"}
                                    type={"text"}
                                    onChange={formik.handleChange}
                                    required={true}
                                />
                                {formik.errors.full_name && (
                                    <div className="text-red-500 font-light text-sm">
                                        {formik.errors.full_name}
                                    </div>
                                )}
                                <Field
                                    className="w-full rounded border bg-gray-100 border-gray-200 p-2"
                                    placeholder={"Email"}
                                    name={"email"}
                                    type={"text"}
                                    onChange={formik.handleChange}
                                    required={true}
                                />
                                {formik.errors.email && (
                                    <div className="text-red-500 font-light text-sm">
                                        {formik.errors.email}
                                    </div>
                                )}
                                <select
                                    className="w-full rounded border bg-gray-100 border-gray-200 p-2"
                                    placeholder={"Event Name"}
                                    value={formik.values.eventid}
                                    name={"eventid"}
                                    as={"select"}
                                    onChange={formik.handleChange}
                                    required={true}
                                >
                                    <option value="" disabled>Select Event Name</option>
                                    {props.events.map(event => (<option value={event?._id}>{event?.name}</option>))}
                                </select>
                                <Field
                                    className="w-full rounded border bg-gray-100 border-gray-200 p-2"
                                    placeholder={"Phone"}
                                    name={"phone"}
                                    type={"text"}
                                    onChange={formik.handleChange}
                                    required={true}
                                />
                                {formik.errors.phone && (
                                    <div className="text-red-500 font-light text-sm">
                                        {formik.errors.phone}
                                    </div>
                                )}
                                {checkIsTeamEvent(formik.values.eventid) ?
                                    <>
                                        <Field
                                            className="w-full rounded border bg-gray-100 border-gray-200 p-2"
                                            placeholder={"Team Name"}
                                            name={"teamName"}
                                            type={"text"}
                                            onChange={formik.handleChange}
                                            required={true}
                                        />
                                        {formik.errors.teamName && (
                                            <div className="text-red-500 font-light text-sm">
                                                {formik.errors.teamName}
                                            </div>
                                        )}
                                    </> : <></>
                                }
                                <div className="w-full">
                                    <button
                                        className="mx-auto p-2 bg-green-600 px-4 m-auto text-white"
                                        onClick={formik.handleSubmit}
                                        type={"submit"}
                                    >
                                        Create and Send Credentials
                                    </button>
                                </div>
                            </>
                        )
                    }}
                </Formik>
            </div>
        </div >
    )
}

export default GenerateCredential;