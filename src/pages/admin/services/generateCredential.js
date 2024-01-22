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
    return props.events?.find((event) => event?._id === eventid)?.teamSize > 1
      ? true
      : false;
  }

  return props.loading ? (
    props.loader
  ) : (
    <div className="w-full flex justify-center items-center z-10">
      {props.toast.container}
      <div className=" w-80 md:w-[400px] p-2 bg-black/20 backdrop-blur-md space-y-2 font-light">
        <Formik
          initialValues={{
            email: "",
            full_name: "",
            phone: "",
            eventid: "",
            teamName: "",
          }}
          validationSchema={validate}
          onSubmit={async (values) => {
            props.setLoading(true);
            props.toast.toast.success("successsfully registered");
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
                  <option value="" disabled>
                    Select Event Name
                  </option>
                  {props.events.map((event) => (
                    <option value={event?._id}>{event?.name}</option>
                  ))}
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
                {checkIsTeamEvent(formik.values.eventid) ? (
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
                  </>
                ) : (
                  <></>
                )}
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
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default GenerateCredential;
