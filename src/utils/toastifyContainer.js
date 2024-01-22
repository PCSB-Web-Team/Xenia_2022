import { ToastContainer, toast } from "react-toastify";

export const ToastUtils = () => {
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    )
}

export default toast;