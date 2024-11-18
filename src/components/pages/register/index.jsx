import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
// import {NetIcon1, NetIcon2 } from "../../imagepath";
import axios from "axios";
import logo5 from '../../../assets/Ultra_Aura.png'
import { toast } from "react-toastify";
const hasNumber = (value) => {
  return new RegExp(/[0-9]/).test(value);
};
const hasMixed = (value) => {
  return new RegExp(/[a-z]/).test(value) && new RegExp(/[A-Z]/).test(value);
};
const hasSpecial = (value) => {
  return new RegExp(/[!#@$%^&*)(+=._-]/).test(value);
};

const strengthColor = (count) => {
  if (count < 1) return "poor";
  if (count < 2) return "weak";
  if (count < 3) return "strong";
  if (count < 4) return "heavy";
};
// const DropdownWrapper = styled.div`
//     position: relative;

//     .select-icon {
//       position: absolute;
//       right: 10px;
//       top: 50%;
//       transform: translateY(-50%);
//       pointer-events: none;
//     }

//     select {
//       appearance: none;
//       width: 100%;
//       padding-right: 35px;
//     }
//   `;
const Register = () => {
  const [loading, setLoading] = useState(false);
  const [eye, seteye] = useState(true);
  const [password, setPassword] = useState("");
  const [validationError, setValidationError] = useState("");
  const [strength, setStrength] = useState("");
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [qualifications, setQualifications] = useState([]);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    password: "",
    country_id: 0,
    state_id: 0,
    city_id: 0,
    qualification_id: 0,
  });
  // const navigate = useNavigate(); // Initialize useNavigate
  const onEyeClick = () => {
    seteye(!eye);
  };
 
  
  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  
    const { name, value } = event.target;
  
    setFormData(prevData => ({
      ...prevData,
      [name]: ["country_id", "state_id", "city_id", "qualification_id"].includes(name)
        ? parseInt(value, 10) || "" // Convert to integer, default to "" if NaN
        : value,
    }));
  };
  

  const validatePassword = (value) => {
    if (!value) {
      setValidationError(1);
    } else if (value.length < 8) {
      setValidationError(2);
    } else if (!/[0-9]/.test(value)) {
      setValidationError(3);
    } else if (!/[!@#$%^&*()]/.test(value)) {
      setValidationError(4);
    } else {
      setValidationError(5);
    }
  };

  const messages = () => {
    if (validationError == 1) {
      return "";
    } else if (validationError == 2) {
      return (
        <span
          id="poor"
          className="active"
          style={{ fontSize: 12, color: "#DC3545" }}
        >
          😠 Weak. Must contain at least 8 characters
        </span>
      );
    } else if (validationError == 3) {
      return (
        <span
          id="weak"
          className="active"
          style={{ fontSize: 12, color: "#FFC107" }}
        >
          😲 Average. Must contain at least 1 letter or number
        </span>
      );
    } else if (validationError == 4) {
      return (
        <span
          id="strong"
          className="active"
          style={{ fontSize: 12, color: "#0D6EFD" }}
        >
          🙂 Almost. Must contain special symbol
        </span>
      );
    } else if (validationError == 5) {
      return (
        <span
          id="heavy"
          className="active"
          style={{ fontSize: 12, color: "#4BB543" }}
        >
          😊 Awesome! You have a secure password.
        </span>
      );
    }
  };

  const strengthIndicator = (value) => {
    let strengths = 0;

    if (value.length >= 8) strengths = 1;
    if (hasNumber(value) && value.length >= 8) strengths = 2;
    if (hasSpecial(value) && value.length >= 8 && hasNumber(value))
      strengths = 3;
    if (
      hasMixed(value) &&
      hasSpecial(value) &&
      value.length >= 8 &&
      hasNumber(value)
    )
      strengths = 3;
    return strengths;
  };

  var settings = {
    items: 2,
    margin: 25,
    dots: true,
    nav: true,
    navText: [
      '<i className="fas fa-arrow-left"></i>',
      '<i className="fas fa-arrow-right"></i>',
    ],
    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1170: {
        items: 1,
      },
    },
  };

  useEffect(() => {
    if (password) {
      if (password !== "") {
        let strength = strengthIndicator(password);
        let color = strengthColor(strength);
        setStrength(color);
      } else {
        setStrength("");
      }
    }
  }, [password]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const apiUrl = "https://api.novajobs.us/api/students/register"
  
    const dataToSubmit = {
      ...formData,
      country_id: parseInt(formData.country_id, 10) || 0,
      state_id: parseInt(formData.state_id, 10) || 0,
      city_id: parseInt(formData.city_id, 10) || 0,
      qualification_id: parseInt(formData.qualification_id, 10) || 0,
    };
  
    try {
      const response = await axios.post(apiUrl, dataToSubmit);
      console.log("Registration successful:", response.data);
      
      // // Store the token
      // const tokenKey = userType === "student" ? "studentToken" : "trainerToken";
      // localStorage.setItem(tokenKey, response.data.token);
      
      // Show success message
      toast.success(response?.data?.message || 'Registration successful!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      // Reset form data
      setFormData({
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        password: "",
        country_id: 0,
        state_id: 0,
        city_id: 0,
        qualification_id: 0, 
      });

      // Redirect after a short delay if needed
      // setTimeout(() => {
      //   navigate('/login');
      // }, 3000);
    } catch (error) {
      console.error("Registration failed:", error);
      
      // Show error message
      console.log(error.response?.data?.message);
      toast.error(error.response?.data?.message || 'Registration failed. Please try again.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get( "https://api.novajobs.us/api/students/countries"
        );

        setCountries(response.data.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  });

  // useEffect(() => {
  //   if (formData.country_id) {
  //     const fetchStates = async () => {
  //       try {
  //         const response = await axios.get(
  //           userType === "student"
  //             ? `https://api.novajobs.us/api/students/stats/${formData.country_id}`
  //             : `https://api.novajobs.us/api/trainers/stats/${formData.country_id}`
  //         );

  //         setStates(response.data.data);
  //         console.log(response.data.data,"states");
  //       } catch (error) {
  //         console.error("Error fetching states:", error);
  //       }
  //     };
  //     fetchStates();
  //   }
  // }, [formData.country_id, userType]);
  useEffect(() => {
    if (formData.country_id) {
      const fetchStates = async () => {
        try {
          const response = await axios.get( `https://api.novajobs.us/api/students/stats/${formData.country_id}`
          );

          // Ensure response.data.data is an array before setting states
          if (Array.isArray(response.data.data)) {
            setStates(response.data.data);
          } else {
            console.error("Expected an array from API response");
            setStates([]); // Reset to empty array if not an array
          }

          console.log(response.data.data, "states");
        } catch (error) {
          console.error("Error fetching states:", error);
          setStates([]); // Reset to empty array on error
        }
      };
      fetchStates();
    } else {
      setStates([]); // Reset to empty array if country_id is not set
    }
  }, [formData.country_id]);

  useEffect(() => {
    if (formData.state_id) {
      const fetchCities = async () => {
        try {
          const response = await axios.get(
               `https://api.novajobs.us/api/students/cities/${formData.state_id}`
          );

          setCities(response.data.data);
        } catch (error) {
          console.error("Error fetching cities:", error);
        }
      };
      fetchCities();
    }
  }, [formData.state_id]);

  useEffect(() => {
      const fetchQualifications = async () => {
        try {
          const response = await axios.get(
            "https://api.novajobs.us/api/students/qualifications"
          );
          setQualifications(response.data.data);
        } catch (error) {
          console.error("Error fetching qualifications:", error);
        }
      }
      fetchQualifications();
  });

  return (
    <>
      <div className="main-wrapper log-wrap">
        <div className="row">
          {/* Login Banner */}
          <div className="col-md-6 login-bg">
            <OwlCarousel
              {...settings}
              className="owl-carousel login-slide owl-theme"
            >
              <div className="welcome-login">
                <div className="login-banner">
                  <img src={logo5} className="img-fluid" alt="Logo" />
                </div>
                <div className="mentor-course text-center">
                  <h2>
                    Welcome to <br />
                    UltraAura.
                  </h2>
    
                </div>
              </div>
              {/* <div className="welcome-login">
                <div className="login-banner">
                  <img src={logo5} className="img-fluid" alt="Logo" />
                </div>
                <div className="mentor-course text-center">
                  <h2>
                    Welcome to <br />
                    UltraAura.
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
              </div>
              <div className="welcome-login">
                <div className="login-banner">
                  <img src={logo5} className="img-fluid" alt="Logo" />
                </div>
                <div className="mentor-course text-center">
                  <h2>
                    Welcome to <br />
                    UltraAura.
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
              </div> */}
            </OwlCarousel>
          </div>
          {/* /Login Banner */}
          <div className="col-md-6 login-wrap-bg">
            {/* Login */}
            <div className="login-wrapper">
              <div className="loginbox">
                <div className="img-logo">
                  {/* <img src={logo5} className="img-fluid" alt="Logo" /> */}
                  <div className="back-home">
                    <Link to="/home">Back to Home</Link>
                  </div>
                </div>
                <h1>Sign up As an Student </h1>
                <form onSubmit={handleSubmit}>
                  {/* <div className="input-block">
                    <label className=" font-weight-bold">Register as</label>
                     <DropdownWrapper>
                        <select
                          className="form-control"
                          value={userType}
                          onChange={(e) => setUserType(e.target.value)}
                        >
                          <option value="" disabled>Select Your Role</option>
                          <option value="student">Student</option>
                          <option value="trainer">Trainer</option>
                        </select>
                        <FeatherIcon icon="chevron-down" className="select-icon" />
                      </DropdownWrapper>
                  </div> */}
                  <div className="input-block">
                    <label className="form-control-label">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your First Name"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="input-block">
                    <label className="form-control-label">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Last Name"
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="input-block">
                    <label className="form-control-label">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your phone number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="input-block">
                    <label className="form-control-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email address"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="input-block">
                    <label className="form-control-label">Country</label>
                    <select
                      name="country_id"
                      value={formData.country_id}
                      onChange={handleInputChange}
                      className="form-control"
                    >
                      <option value="">Select Country</option>
                      {countries.map((country) => (
                        <option key={country.id} value={country.id}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="input-block">
                    <label className="form-control-label">State</label>
                    <select
                      name="state_id"
                      value={formData.state_id}
                      onChange={handleInputChange}
                      className="form-control"
                    >
                      <option value="">Select State</option>
                      {states.map((state) => (
                        <option key={state.id} value={state.id}>
                          {state.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="input-block">
                    <label className="form-control-label">City</label>
                    <select
                      name="city_id"
                      value={formData.city_id}
                      onChange={handleInputChange}
                      className="form-control"
                    >
                      <option value="">Select City</option>
                      {cities.map((city) => (
                        <option key={city.id} value={city.id}>
                          {city.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                    <div className="input-block">
                      <label className="form-control-label">Grades</label>
                      <select
                        name="qualification_id"
                        value={formData.qualification_id}
                        onChange={handleInputChange}
                        className="form-control"
                      >
                        <option value="">Select Grades</option>
                        {qualifications.map((qualification) => (
                          <option key={qualification.id} value={qualification.id}>
                            {qualification.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  <div className="input-block">
                    <label className="form-control-label">Password</label>
                    <div className="pass-group" id="passwordInput">
                      <input
                        className="form-control pass-input"
                        placeholder="Enter your password"
                        type={eye ? "password" : "text"}
                        name="password"
                        value={formData.password}
                        onChange={(e) => {
                          handleInputChange(e);
                          handlePasswordChange(e);
                        }}
                      />
                      <span
                        onClick={onEyeClick}
                        className={`fa toggle-password feather-eye ${
                          eye ? "fa-eye" : "fa-eye-slash"
                        }`}
                      />
                      <span className="pass-checked">
                        <i className="feather-check"></i>
                      </span>
                    </div>
                    <div
                      id="passwordStrength"
                      style={{ display: "flex" }}
                      className={`password-strength ${
                        strength === "poor"
                          ? "poor-active"
                          : strength === "weak"
                          ? "avg-active"
                          : strength === "strong"
                          ? "strong-active"
                          : strength === "heavy"
                          ? "heavy-active"
                          : ""
                      }`}
                    >
                      <span id="poor" className="active"></span>
                      <span id="weak" className="active"></span>
                      <span id="strong" className="active"></span>
                      <span id="heavy" className="active"></span>
                    </div>
                    <div id="passwordInfo">{messages()}</div>
                  </div>

                  <div className="form-check remember-me">
                    <label className="form-check-label mb-0">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="remember"
                      />
                      I agree to the&nbsp;
                      <Link to="/term-condition">Terms of Service</Link>{" "}
                      and&nbsp;
                      <Link to="/privacy-policy">Privacy Policy.</Link>
                    </label>
                  </div>
                  <div className="d-grid">
                    {/* {console.log(userType,"Role")} */}
                    {/* <button
                      className="btn btn-primary btn-start"
                      type="submit"
                    >
                      Create Account
                    </button> */}
                     <button
        className="btn btn-primary btn-start"
        type="submit"
        disabled={loading}
      >
        {loading ? (
          <>
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            {" Creating Account..."}
          </>
        ) : (
          "Create Account"
        )}
      </button>
                  </div>
                </form>
              </div>
              <div className="google-bg text-center">
                {/* <span>
                  <Link to="#">Or sign in with</Link>
                </span>
                <div className="sign-google">
                  <ul>
                    <li>
                      <Link to="#">
                        <img src={NetIcon1} className="img-fluid" alt="Logo" />
                        Sign In using Google
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img src={NetIcon2} className="img-fluid" alt="Logo" />
                        Sign In using Facebook
                      </Link>
                    </li>
                  </ul>
                </div> */}
                <p className="mb-0">
                  Already have an account? <Link to="/login">Sign in</Link>
                </p>
              </div>
            </div>
            {/* /Login */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
