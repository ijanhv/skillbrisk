import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomToast = ({ message, type, setShowToast }) => {
  const toastProps = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  };

  switch (type) {
    case 'success':
      toast.success(message, toastProps);
      break;
    case 'warning':
      toast.warning(message, toastProps);
      break;
    case 'error':
      toast.error(message, toastProps);
      break;
    default:
      toast(message, toastProps);
  }

  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick 
      rtl={false}
      onExited={() => setShowToast(false)}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
};

export default CustomToast;
