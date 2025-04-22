// import ReactDOM from "react-dom/client";

// //Bootstrap
// import "bootstrap/dist/css/bootstrap.min.css";
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

// //Font Awesome
// import "./assets/icons/fontawesome/css/fontawesome.min.css";
// import "./assets/icons/fontawesome/css/all.min.css";

// //Box icon
// import "./assets/icons/boxicons/css/boxicons.min.css";
// import "./index.css";

// //CSS
// import "./assets/css/style.css";

// // Feather
// import "./assets/icons/feather/css/iconfont.css"

// import Approuter from "./approuter";
// import { Provider } from "react-redux";
// import store from "./components/common/redux/store.jsx";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <>
//   <Provider store={store}>
//     <Approuter />
//     </Provider>
//   </>
// );

import ReactDOM from "react-dom/client";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

// Font Awesome
import "./assets/icons/fontawesome/css/fontawesome.min.css";
import "./assets/icons/fontawesome/css/all.min.css";

// Box icon
import "./assets/icons/boxicons/css/boxicons.min.css";
import "./index.css";

// CSS
import "./assets/css/style.css";

// Feather
import "./assets/icons/feather/css/iconfont.css";

import Approuter from "./approuter";
import { Provider } from "react-redux";
import store from "./components/common/redux/store.jsx";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Import Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS

const stripePromise = loadStripe('publishable-key-here'); 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
    <Elements stripe={stripePromise}>
      <Approuter />
      <ToastContainer // Add the ToastContainer component
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        
      />
       </Elements>
    </Provider>
  </>
);
