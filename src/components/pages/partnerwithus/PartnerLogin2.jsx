import React, { useEffect } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import OwlCarousel from "react-owl-carousel";
// import FeatherIcon from "feather-icons-react";
import {  useNavigate, useParams } from "react-router-dom";
import axios from "axios";
// import logo5 from "../../header/logo5.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login2 = () => {
  
    const navigate = useNavigate();
    const { token, userType } = useParams();
   console.log(userType);
    useEffect(() => {
        const verifyAccount = async () => {
            if (token && userType) {
                try {
                    const response = await axios.get(`https://api.novajobs.us/api/${userType}/verify-account/${token}`);
                    if (response.status === 200) {
                        toast.success(response.data.message || "Account verified successfully!");
                        if (userType === "vendors") {
                            navigate("/partner-signin");
                        } else {
                            navigate("/login");
                        }
                    }
                } catch (error) {
                    console.error("Verification failed", error);
                    toast.error(error.response?.data?.message || "Account verification failed.");
                    navigate("/partner-signin");
                }
            }
        };

        verifyAccount();
    }, [token, userType, navigate]);

    return (
        <>
        
        </>
    );
};

export default Login2;