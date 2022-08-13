import Request from ".././api/requests";
import { useEffect } from "react";

const PayByRazor = (props) => {

    const openPaymentModal = async () => {
        const { data: { key, amount, id } } = await Request.createOrder(props.eventId).then(res => res.data).catch(error => {
            console.error(error)
        })

        const options = {
            key,
            amount,
            currency: "INR",
            name: "PCSB Xenia 2022",
            description: "Registration payment for the event " + props.eventName,
            order_id: id,
            callback_url: `${process.env.REACT_APP_API_URL}/event/payment-verification`, //* request to this endpoint containing this object {razorpay_order_id, razorpay_payment_id, razorpay_signature}
            prefill: {
                name: props.userDetails.name,
                contact: props.userDetails.mobile
            },
            notes: {
                "address": "PICT, Dhankawadi, Pune",
                "contact": "Satyajit Roy | Vedant Daigavane"
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
            <button className={props.className} onClick={openPaymentModal}>Register</button>
        </>
    )
}

export default PayByRazor;