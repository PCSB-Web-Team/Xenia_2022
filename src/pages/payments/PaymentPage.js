import React, { useState } from "react";
// import { useCallback } from "react";
import { useNavigate } from "react-router";
// import useRazorpay from "react-razorpay";
// import Backend from "../../api";
import { useParams } from "react-router-dom";
import "./styles/formSection.css";
import Gpay from "./images/GPay_Acceptance_Mark_800.png";
import { useLocation } from "react-router-dom";
import { AiOutlineFileJpg, AiFillDelete } from "react-icons/ai";

import Modal from "./modal";
import axios from "axios";
import Requests from "../../api/requests";

const Payment = (props) => {
  //   const { amount } = route.params;
  let eid = useParams().id;
  const location = useLocation();
  const data = location.state;
  const event = data.event;
  const team = data.team;
  const type = data.type;
  console.log("eventData:", data);
  const navigate = useNavigate();
  // const Razorpay = useRazorpay();
  // const [formdataToSend, setFormdataToSend] = useState({ ...formData });
  const [file, setFile] = useState();
  const [base64, setBase64] = useState();
  const [id, setId] = useState();
  const [loading, setLoading] = useState();

  // const handlePayment = useCallback(async () => {
  //   setLoading(true);
  //   var order = await Backend.createOrder(formData?.email);
  //   if (!order?.error) {
  //     if (order?.data?.payment_id) {
  //       setLoading(false);
  //       alert(
  //         `Email '${order?.data?.email}' has been already registered! Try with different email`
  //       );
  //       setPage(0);
  //       navigate(`/success?id=${order?.data?.payment_id}`);
  //       return;
  //     }
  //   } else if (order?.error) {
  //     setLoading(false);
  //     alert(`ERROR: ${order?.error}`);
  //   }

  //   const options = {
  //     key: process.env.RAZORPAY_KEY_ID,
  //     amount: "36000",
  //     currency: "INR",
  //     name: "PICT CSI STUDENT BRANCH",
  //     description: "Club Membership Registration Fee",
  //     image:
  //       "https://elasticbeanstalk-ap-south-1-255813658777.s3.ap-south-1.amazonaws.com/CSI+Logo+blue.png",
  //     order_id: order?.data,
  //     handler: async (res) => {
  //       var confirmation;
  //       while (true) {
  //         confirmation = await Backend.verifyOrder({
  //           email: formData?.email,
  //           ...res,
  //         });
  //         if (!confirmation?.error) break;
  //       }
  //       setLoading(false);
  //       setPage(0);
  //       navigate(`/success?id=${confirmation?.data?.payment_id}`);
  //     },
  //     send_sms_hash: true,
  //     prefill: {
  //       name: formData?.first_name + " " + formData?.last_name,
  //       email: formData?.email,
  //       contact: `+91${formData?.phone}`,
  //     },
  //     notes: formData || {},
  //     modal: {
  //       confirm_close: true,
  //     },
  //     theme: {
  //       color: "#3399cc",
  //     },
  //   };

  //   const razorpay = new Razorpay(options);
  //   setLoading(false);
  //   razorpay.open();
  // }, [Razorpay, formData, navigate, setPage]);

  const convertToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(blob);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  async function handleSetFile(event) {
    setFile(event.target.files[0]);
    setBase64(await convertToBase64(event.target.files[0]));
    console.log(file);
    console.log("base64: ", base64);
    // setFormdataToSend({
    //   ...formData,
    //   receiptImage: file,
    // });
    // console.log(formdataToSend);
  }
  function handleSetId(event) {
    setId(event.target.value);
  }
  const RedirectToPayment = () => {
    const url = `upi://pay?pa=thoratdhiraj444-1@okaxis&pn=Dhiraj%20Thorat&cu=INR&am=${event?.fees}`;
    window.open(url, "_blank");
  };
  const handleRegister = async () => {
    // setLoading(true);
    // try {
    //   await axios.post(
    //     `${process.env.REACT_APP_API_URL}/register`,
    //     { ...formData, trId: id, receiptImage: base64 },
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );
    //   navigate("/success");
    // } catch (error) {
    //   return alert("Wrong Information... kindly refill the form");
    //   // Handle error
    // } finally {
    //   setLoading(false);
    // }
    setLoading(true);
    let { data } = await Requests.registerEvent({
      eventId: eid,
      transactionID: id,
    });
    if (data?.status) {
      props.toast.toast.success(
        "Successfully registered for " + event?.name || ""
      );
      setLoading(false);
      return;
    }
    setLoading(false);
    props.toast.toast.error("Error: " + data?.error?.message || "");
  };

  const handleCreateTeam = async () => {
    setLoading(true);
    if (team.name === "") {
      props.toast.toast.error("Please enter valid Team Name!");
      setLoading(false);
      return;
    }
    let { data } = await Requests.createTeam({
      eventId: eid,
      teamName: team?.name,
      transactionID: id,
    });
    if (data?.status) {
      props.toast.toast.success(
        "Successfully registered team '" + team?.name + "' for " + event?.name
      );
      setLoading(false);
      return;
    }
    setLoading(false);
    props.toast.toast.error(
      "Error while creating team!, " + data?.error?.message || ""
    );
  };

  const handleJoinTeam = async () => {
    setLoading(true);
    if (team.id === "") {
      props.toast.toast.error("Please enter valid Team ID!");
      setLoading(false);
      return;
    }
    await Requests.joinTeam({
      eventId: eid,
      teamId: team?.id,
      transactionID: id,
    })
      .then((res) => {
        if (res?.data?.status) {
          props.toast.toast.success(
            "Successfully joined team with Team ID: " + team?.id
          );
        } else {
          props.toast.toast.error("Error: " + res?.data?.error?.message || "");
          setLoading(false);
          // setJoinTeamError(res?.data?.error);
        }
      })
      .catch((error) => {
        console.log(error);
        props.toast.toast.error(
          "Error: server unreachable, please try again. " + error || ""
        );
      });
    setLoading(false);
  };

  const handleClearFile = () => {
    setFile(null);
    // setFormdataToSend({
    //   ...formData,
    //   receiptImage: null,
    // });
  };

  // const openPage = () => {
  //   setLoading(true);
  //   const win = window.open(
  //     "https://pages.razorpay.com/PCSBMembershipDrive2022",
  //     "_blank"
  //   );
  //   // var next = window.confirm("Click Ok to receive receipt after completing the payments")
  //   if (win != null) {
  //     // if (next) {
  //     setLoading(false);
  //     navigate(`/success?id=${formData?.email}`);
  //     // }
  //     win.focus();
  //   }
  // };

  return (
    // <div className="login-box">
    //   <button onClick={openPage}>Click to pay Rs. 360/-</button>
    // </div>
    <>
      {/* <div className="login-box"> */}
      {/* <h1 className="text-white mt-2 py-1 px-3 text-center text-2xl font-bold">
        Upload your Payment Screenshot
      </h1> */}
      <div className="flex flex-col py-6 md:flex-row gap-10 items-center justify-center w-full mt-2">
        {/* <label
          htmlFor="dropzone-file"
          className={`flex flex-col items-center justify-center w-100 h-50 px-6 border-2 border-gray-300 border-dashed rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 ${
            !file &&
            "dark:hover:bg-bray-800 hover:bg-gray-100 dark:hover:border-gray-500 dark:hover:bg-gray-600 cursor-pointer"
          }`}
        >
          {!file ? (
            <>
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                accept="image/png, image/jpeg"
                className="hidden"
                onChange={handleSetFile}
              />
            </>
          ) : (
            <>
              <div className="flex flex-col gap-3 items-center justify-center relative">
                <span className="absolute top-0 right-0 text-black text-2xl">
                  <AiFillDelete
                    className="h-7 cursor-pointer hover:bg-gray-600"
                    onClick={handleClearFile}
                  />
                </span>
                <AiOutlineFileJpg className="h-10" />
                <span>{file.name}</span>
                <span>
                  {`${
                    file.size <= 500 * 1024
                      ? (file.size / 1024).toFixed(1) + " KB"
                      : (file.size / (1024 * 1024)).toFixed(1) + " MB"
                  }`}
                </span>
              </div>
            </>
          )}
        </label> */}
        <div className="flex flex-col items-center justify-center space-y-5">
          <div className="flex flex-col items-center justify-center space-x-3 space-y-2">
            <Modal fees={event?.fees} />
            {/* <div className="text-white md:hidden">OR</div>
            <img
              className="h-10 hover:cursor-pointer md:hidden"
              src={Gpay}
              alt="logo"
              onClick={RedirectToPayment}
            /> */}
          </div>

          <input
            type="text"
            placeholder="Enter Transaction ID"
            onChange={handleSetId}
          />
        </div>
      </div>
      <div className="flex items-center justify-center mt-10 mb-2">
        {type === "CREATE_TEAM" ? (
          <button
            onClick={handleCreateTeam}
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium px-5 py-2.5 text-center mr-2 mb-2 tracking-widest text-lg text-center"
          >
            CREATE TEAM
          </button>
        ) : type === "JOIN_TEAM" ? (
          <button
            onClick={handleJoinTeam}
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium px-5 py-2.5 text-center mr-2 mb-2 tracking-widest text-lg text-center"
          >
            JOIN TEAM
          </button>
        ) : (
          <button
            onClick={handleRegister}
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium px-5 py-2.5 text-center mr-2 mb-2 tracking-widest text-lg text-center"
          >
            Register
          </button>
        )}
      </div>
      {/* </div> */}
    </>
  );
};

export default Payment;
