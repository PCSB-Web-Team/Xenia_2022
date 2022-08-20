import Request from ".././api/requests";
import { useEffect } from "react";

const PayByRazor = (props) => {

    const openPaymentModal = async () => {
        let { data } = await Request.createOrder({ eventId: props.eventId });

        const options = {
            key: process.env.REACT_APP_RAZORPAY_KEY,
            amount: data?.amount.toString(),
            currency: "INR",
            name: "PCSB Xenia 2022",
            description: "Registration payment for the event " + props.eventDetails?.eventName || "",
            order_id: data?.id,
            callback_url: `${process.env.REACT_APP_API_URL}/razorpay/verification`,
            prefill: {
                name: props.userDetails?.name || "",
                mobile: props.userDetails?.mobile.toString() || ""
            },
            notes: {
                eventId: props?.eventId || "",
                userId: data?.userId || "",
                teamName: props?.teamName || "",
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