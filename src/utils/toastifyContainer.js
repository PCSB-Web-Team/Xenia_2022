import { ToastContainer, toast } from "react-toastify";

export const ToastUtils = (props) => {
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                draggable
                pauseOnHover
                style={{ backgroundColor: "#000" }}>
                {toast(props.message, { type: props.type })}
            </ToastContainer>
        </>
    )
}