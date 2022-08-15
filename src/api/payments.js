import Request from ".././api/requests";
import { useEffect } from "react";

const PayByRazor = (props) => {

    const openPaymentModal = async () => {
        const { data: { amount, id, userId } } = await Request.createOrder(props?.eventId || "").then(res => res.data).catch(error => {
            console.error(error)
        })

        const options = {
            key: process.env.REACT_APP_RAZORPAY_KEY,
            amount,
            currency: "INR",
            name: "PCSB Xenia 2022",
            description: "Registration payment for the event " + props.eventDetails?.eventName || "",
            order_id: id,
            callback_url: `${process.env.REACT_APP_API_URL}/event/payment-verification`, //* razorpay's server request to this endpoint containing this req.body:{razorpay_order_id, razorpay_payment_id, razorpay_signature}
            prefill: {
                name: props.userDetails?.name || "",
                contact: props.userDetails?.mobile || ""
            },
            notes: {
                eventId: props?.eventID || "",
                userId,
                name: props?.userDetails.name || "",
                eventName: props?.eventDetails.eventName || "",
            },
            theme: {
                "color": "#A020F0"
            }
        }

        const razorDisplay = new window.Razorpay(options);
        razorDisplay.open();
    }

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);
    }, [])

    return (
        <>
            <button className={props.className} onClick={openPaymentModal}>{props.buttonName}</button>
        </>
    )
}

export default PayByRazor;