// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import Footer from "../../footer";
// import { Icon1, Icon2 } from "../../imagepath";
// import PageHeader from "../header";
// import axios from "axios";

// const EmptyCartMessage = styled.div`
//   text-align: center;
//   padding: 2rem;
//   background-color: #f8f9fa;
//   border-radius: 8px;
//   margin-top: 2rem;
// `;

// const TruncatedText = styled.p`
//   overflow: hidden;
//   text-overflow: ellipsis;
//   display: -webkit-box;
//   -webkit-line-clamp: 3;
//   -webkit-box-orient: vertical;
// `;

// const Cart = () => {
//   const [cartData, setCartData] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const Token = localStorage.getItem("token");
//   // const navigate = useNavigate();

//   const fetchCartData = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await axios.get(
//         "https://api.novajobs.us/api/students/cart",
//         {
//           headers: {
//             Authorization: `${Token}`,
//           },
//         }
//       );
//       setCartData(response.data.items);
//       setTotalPrice(response.data.total_price);
//     } catch (error) {
//       console.error("Error fetching cart data:", error);
//       setError("Failed to load cart data. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCartData();
//   }, [Token]);

//   const handleRemove = async (courseId) => {
//     if (loading) return;

//     setLoading(true);

//     try {
//       await axios.delete(
//         `https://api.novajobs.us/api/students/cart/${courseId}`,
//         {
//           headers: {
//             Authorization: `${Token}`,
//           },
//         }
//       );
//       await fetchCartData(); // Refresh the cart data
//     } catch (err) {
//       console.error(err);
//       setError("Failed to remove course. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const renderContent = () => {
//     if (loading) {
//       return <div className="container mt-5 text-center">Loading...</div>;
//     }

//     if (error) {
//       return (
//         <div className="container mt-5 text-center text-danger">{error}</div>
//       );
//     }

//     if (!cartData || cartData.length === 0) {
//       return (
//         <EmptyCartMessage>
//           <h3>Your cart is empty</h3>
//           <p>Please add courses to your cart.</p>
//           <Link to="/course-list" className="btn btn-primary mt-3">
//             Browse Courses
//           </Link>
//         </EmptyCartMessage>
//       );
//     }

//     return (
//       <div className="student-widget">
//         <div className="student-widget-group">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="cart-head">
//                 <h4>Your cart ({cartData.length} items)</h4>
//               </div>
//               <div className="cart-group">
//                 <div className="row">
//                   {cartData.map((item) => (
//                     <div
//                       className="col-lg-12 col-md-12 d-flex"
//                       key={item.course_id}
//                     >
//                       <div className="course-box course-design list-course d-flex">
//                         <div className="product">
//                           <div className="product-img">
//                             <Link to={`/course-details/${item.course_id}`}>
//                               <img
//                                 className="img-fluid"
//                                 alt={item.course_name}
//                                 src={
//                                   `https://api.novajobs.us${item.course_image}` ||
//                                   "default_image.jpg"
//                                 }
//                               />
//                             </Link>
//                             <div className="price">
//                               <h3
//                                 className={item.price === 0 ? "free-color" : ""}
//                               >
//                                 {item.price === 0 ? "FREE" : `$${item.price}`}
//                               </h3>
//                             </div>
//                           </div>
//                           <div className="">
//                             <div className="">
//                               <h3 className="">
//                                 <Link to={`/course-info/${item.course_id}`}>
//                                   {item.course_name}
//                                 </Link>
//                               </h3>
//                             </div>
//                             <div className="course-info d-flex align-items-center border-bottom-0 pb-0">
//                               <div className="rating-img d-flex align-items-center">
//                                 <img src={Icon1} alt="" />
//                                 <p> Lessons</p>
//                               </div>
//                               <div className="course-view d-flex align-items-center">
//                                 <img src={Icon2} alt="" />
//                                 <p>{item.duration}</p>
//                               </div>
//                             </div>
//                             {/* <div className="">
//                               <i className="fas fa-star filled me-1" />
//                               <i className="fas fa-star filled me-1" />
//                               <i className="fas fa-star filled me-1" />
//                               <i className="fas fa-star filled me-1" />
//                               <i className="fas fa-star me-1" />
//                               <span className="">
//                                 <span>4.0</span> (15)
//                               </span>
//                             </div> */}
//                             <div className="course-description mt-2">
//                               <TruncatedText
//                                 dangerouslySetInnerHTML={{
//                                   __html: item.description,
//                                 }}
//                               />
//                             </div>
//                             <div className="cart-remove">
//                               <button
//                                 className="btn btn-primary"
//                                 onClick={() => handleRemove(item.course_id)}
//                                 disabled={loading}
//                               >
//                                 {loading ? (
//                                   <span>
//                                     <span
//                                       className="spinner-border spinner-border-sm"
//                                       role="status"
//                                       aria-hidden="true"
//                                     ></span>
//                                     Loading...
//                                   </span>
//                                 ) : (
//                                   "Remove"
//                                 )}
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <div className="cart-total">
//                 <div className="row">
//                   <div className="col-lg-12 col-md-12">
//                     <div className="cart-subtotal">
//                       <p>
//                         Subtotal <span>${totalPrice}</span>
//                       </p>
//                     </div>
//                   </div>
//                   <div className="col-lg-4 col-md-6">
//                     <div className="check-outs">
//                       <Link to="/checkout" className="btn btn-primary">
//                         Checkout
//                       </Link>
//                     </div>
//                   </div>
//                   <div className="col-lg-4 col-md-6">
//                     <div className="check-outs">
//                       {cartData.total_price > 0 ? (
//                         <Link to="" className="btn btn-primary">
//                           Apply Coupon
//                         </Link>
//                       ) : (
//                         <button className="btn btn-primary" disabled>
//                           Apply Coupon
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                   <div className="col-lg-4 col-md-6">
//                     <div className="check-outs">
//                       <Link to="/course-list" className="btn btn-primary">
//                         Continue Shopping
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <>
//       <div className="main-wrapper">
//         <PageHeader activeMenu="Cart" />

//         <div className="breadcrumb-bar">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-12 col-12">
//                 <div className="breadcrumb-list">
//                   <nav
//                     aria-label="breadcrumb"
//                     className="page-breadcrumb"
//                   ></nav>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <section className="course-content cart-widget">
//           <div className="container">{renderContent()}</div>
//         </section>

//         <Footer />
//       </div>
//     </>
//   );
// };

// export default Cart;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import Footer from "../../footer";
// import { Icon1, Icon2 } from "../../imagepath";
// import PageHeader from "../header";
// import axios from "axios";

// const EmptyCartMessage = styled.div`
//   text-align: center;
//   padding: 2rem;
//   background-color: #f8f9fa;
//   border-radius: 8px;
//   margin-top: 2rem;
// `;

// const TruncatedText = styled.p`
//   overflow: hidden;
//   text-overflow: ellipsis;
//   display: -webkit-box;
//   -webkit-line-clamp: 3;
//   -webkit-box-orient: vertical;
// `;

// const Cart = () => {
//   const [cartData, setCartData] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [couponCode, setCouponCode] = useState('');
//   const Token = localStorage.getItem("token");

//   const fetchCartData = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await axios.get(
//         "https://api.novajobs.us/api/students/cart",
//         {
//           headers: {
//             Authorization: `${Token}`,
//           },
//         }
//       );
//       setCartData(response.data.items);
//       setTotalPrice(response.data.total_price);
//     } catch (error) {
//       console.error("Error fetching cart data:", error);
//       setError("Failed to load cart data. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCartData();
//   }, [Token]);

//   const handleRemove = async (courseId) => {
//     if (loading) return;

//     setLoading(true);
//     try {
//       await axios.delete(
//         `https://api.novajobs.us/api/students/cart/${courseId}`,
//         {
//           headers: {
//             Authorization: `${Token}`,
//           },
//         }
//       );
//       await fetchCartData(); // Refresh the cart data
//     } catch (err) {
//       console.error(err);
//       setError("Failed to remove course. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleApplyCoupon = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post(
//         "https://api.novajobs.us/api/students/apply-coupon",
//         { coupon: couponCode },
//         {
//           headers: {
//             Authorization: `${Token}`,
//           },
//         }
//       );
//       console.log("Coupon applied successfully:", response.data);
//       // Optionally, you can fetch cart data again to see the updated total
//       fetchCartData();
//       setIsModalOpen(false); // Close the modal after submission
//       setCouponCode(''); // Clear the input field
//     } catch (error) {
//       console.error("Error applying coupon:", error);
//       setError("Failed to apply coupon. Please try again.");
//     }
//   };

//   const renderContent = () => {
//     if (loading) {
//       return <div className="container mt-5 text-center">Loading...</div>;
//     }

//     if (error) {
//       return (
//         <div className="container mt-5 text-center text-danger">{error}</div>
//       );
//     }

//     if (!cartData || cartData.length === 0) {
//       return (
//         <EmptyCartMessage>
//           <h3>Your cart is empty</h3>
//           <p>Please add courses to your cart.</p>
//           <Link to="/course-list" className="btn btn-primary mt-3">
//             Browse Courses
//           </Link>
//         </EmptyCartMessage>
//       );
//     }

//     return (
//       <div className="student-widget">
//         <div className="student-widget-group">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="cart-head">
//                 <h4>Your cart ({cartData.length} items)</h4>
//               </div>
//               <div className="cart-group">
//                 <div className="row">
//                   {cartData.map((item) => (
//                     <div
//                       className="col-lg-12 col-md-12 d-flex"
//                       key={item.course_id}
//                     >
//                       <div className="course-box course-design list-course d-flex">
//                         <div className="product">
//                           <div className="product-img">
//                             <Link to={`/course-details/${item.course_id}`}>
//                               <img
//                                 className="img-fluid"
//                                 alt={item.course_name}
//                                 src={
//                                   `https://api.novajobs.us${item.course_image}` ||
//                                   "default_image.jpg"
//                                 }
//                               />
//                             </Link>
//                             <div className="price">
//                               <h3
//                                 className={item.price === 0 ? "free-color" : ""}
//                               >
//                                 {item.price === 0 ? "FREE" : `$${item.price}`}
//                               </h3>
//                             </div>
//                           </div>
//                           <div>
//                             <div>
//                               <h3>
//                                 <Link to={`/course-info/${item.course_id}`}>
//                                   {item.course_name}
//                                 </Link>
//                               </h3>
//                             </div>
//                             <div className="course-info d-flex align-items-center border-bottom-0 pb-0">
//                               <div className="rating-img d-flex align-items-center">
//                                 <img src={Icon1} alt="" />
//                                 <p> Lessons</p>
//                               </div>
//                               <div className="course-view d-flex align-items-center">
//                                 <img src={Icon2} alt="" />
//                                 <p>{item.duration}</p>
//                               </div>
//                             </div>
//                             <div className="course-description mt-2">
//                               <TruncatedText
//                                 dangerouslySetInnerHTML={{
//                                   __html: item.description,
//                                 }}
//                               />
//                             </div>
//                             <div className="cart-remove">
//                               <button
//                                 className="btn btn-primary"
//                                 onClick={() => handleRemove(item.course_id)}
//                                 disabled={loading}
//                               >
//                                 {loading ? (
//                                   <span>
//                                     <span
//                                       className="spinner-border spinner-border-sm"
//                                       role="status"
//                                       aria-hidden="true"
//                                     ></span>
//                                     Loading...
//                                   </span>
//                                 ) : (
//                                   "Remove"
//                                 )}
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <div className="cart-total">
//                 <div className="row">
//                   <div className="col-lg-12 col-md-12">
//                     <div className="cart-subtotal">
//                       <p>
//                         Subtotal <span>${totalPrice}</span>
//                       </p>
//                     </div>
//                   </div>
//                   <div className="col-lg-4 col-md-6">
//                     <div className="check-outs">
//                       <Link to="/checkout" className="btn btn-primary">
//                         Checkout
//                       </Link>
//                     </div>
//                   </div>
//                   <div className="col-lg-4 col-md-6">
//                     <div className="check-outs">
{
  /* {totalPrice >0 ? (
                        <button
                          className="btn btn-primary"
                          onClick={() => setIsModalOpen(true)}
                        >
                          Apply Coupon
                        </button>
                      ) : (
                        <button className="btn btn-primary" disabled>
                          Apply Coupon
                        </button>
                      )} */
}
//                       <button
//                           className="btn btn-primary"
//                           onClick={() => setIsModalOpen(true)}
//                         >
//                           Apply Coupon
//                         </button>
//                     </div>
//                   </div>
//                   <div className="col-lg-4 col-md-6">
//                     <div className="check-outs">
//                       <Link to="/course-list" className="btn btn-primary">
//                         Continue Shopping
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <>
//       <div className="main-wrapper">
//         <PageHeader activeMenu="Cart" />

//         <div className="breadcrumb-bar">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-12 col-12">
//                 <div className="breadcrumb-list">
//                   <nav
//                     aria-label="breadcrumb"
//                     className="page-breadcrumb"
//                   ></nav>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <section className="course-content cart-widget">
//           <div className="container">{renderContent()}</div>
//         </section>

//         {/* Coupon Modal */}
//         {isModalOpen && (
//           <div className="modal" onClick={() => setIsModalOpen(false)}>
//             <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//               <span
//                 className="close"
//                 onClick={() => setIsModalOpen(false)}
//               >
//                 &times;
//               </span>
//               <h2>Apply Coupon Code</h2>
//               <form onSubmit={handleApplyCoupon}>
//                 <input
//                   type="text"
//                   value={couponCode}
//                   onChange={(e) => setCouponCode(e.target.value)}
//                   placeholder="Enter coupon code"
//                   required
//                 />
//                 <button type="submit" className="btn btn-primary">
//                   Apply
//                 </button>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Cart;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import Footer from "../../footer";
// import { Icon1, Icon2 } from "../../imagepath";
// import PageHeader from "../header";
// import axios from "axios";

// const EmptyCartMessage = styled.div`
//   text-align: center;
//   padding: 2rem;
//   background-color: #f8f9fa;
//   border-radius: 8px;
//   margin-top: 2rem;
// `;

// const TruncatedText = styled.p`
//   overflow: hidden;
//   text-overflow: ellipsis;
//   display: -webkit-box;
//   -webkit-line-clamp: 3;
//   -webkit-box-orient: vertical;
// `;

// // Modal overlay that covers the entire screen
// const ModalOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background: rgba(0, 0, 0, 0.7); /* Semi-transparent background */
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 1000; /* High z-index to overlay other elements */
// `;

// // Modal content with a card-like appearance
// const ModalContent = styled.div`
//   background: white; /* White background for the modal */
//   border-radius: 8px; /* Rounded corners */
//   padding: 2rem; /* Padding for inner content */
//   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Subtle shadow */
//   width: 90%; /* Full width on small screens */
//   max-width: 500px; /* Max width for larger screens */
// `;

// // Close button styling
// const CloseButton = styled.button`
//   // background: transparent;
//   border: none;
//   font-size: 1.5rem;
//   cursor: pointer;
//   position: absolute; /* Position absolute to place it in the top right */
//   top: 15px;
//   right: 15px;
//   &:hover {
//     color: red; /* Change color on hover */
//   }
// `;

// // Input field styling
// const StyledInput = styled.input`
//   width: 100%;
//   padding: 0.5rem; /* Padding for input */
//   border: 1px solid #ced4da; /* Light border */
//   border-radius: 4px; /* Rounded corners */
//   margin-top: 1rem; /* Spacing above */
//   &:focus {
//     border-color: #80bdff; /* Blue border on focus */
//     outline: none; /* Remove default outline */
//   }
// `;

// // const ModalOverlay = styled.div`
// //   position: fixed;
// //   top: 0;
// //   left: 0;
// //   width: 100%;
// //   height: 100%;
// //   background-color: rgba(0, 0, 0, 0.5);
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// //   z-index: 1000;
// // `;

// // const ModalContent = styled.div`
// // border:2px solid red;
// //   background-color: white;
// //   padding: 2rem;
// //   border-radius: 8px;
// //   width: 90%;
// //   max-width: 400px;
// // `;

// // const CloseButton = styled.span`
// //   float: right;
// //   font-size: 1.5rem;
// //   font-weight: bold;
// //   cursor: pointer;
// // `;

// const Cart = () => {
//   const [cartData, setCartData] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [couponCode, setCouponCode] = useState('');
//   const Token = localStorage.getItem("token");

//   const fetchCartData = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await axios.get(
//         "https://api.novajobs.us/api/students/cart",
//         {
//           headers: {
//             Authorization: `${Token}`,
//           },
//         }
//       );
//       setCartData(response.data.items);
//       setTotalPrice(response.data.total_price);
//     } catch (error) {
//       console.error("Error fetching cart data:", error);
//       setError("Failed to load cart data. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCartData();
//   }, [Token]);

//   const handleRemove = async (courseId) => {
//     if (loading) return;

//     setLoading(true);
//     try {
//       await axios.delete(
//         `https://api.novajobs.us/api/students/cart/${courseId}`,
//         {
//           headers: {
//             Authorization: `${Token}`,
//           },
//         }
//       );
//       await fetchCartData(); // Refresh the cart data
//     } catch (err) {
//       console.error(err);
//       setError("Failed to remove course. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleApplyCoupon = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post(
//         "https://api.novajobs.us/api/students/apply-coupon",
//         { coupon: couponCode },
//         {
//           headers: {
//             Authorization: `${Token}`,
//           },
//         }
//       );
//       console.log("Coupon applied successfully:", response.data);
//       fetchCartData(); // Refresh cart data to reflect updated prices
//       setIsModalOpen(false);
//       setCouponCode('');
//     } catch (error) {
//       console.error("Error applying coupon:", error);
//       setError("Failed to apply coupon. Please try again.");
//     }
//   };

//   const renderContent = () => {
//     if (loading) {
//       return <div className="container mt-5 text-center">Loading...</div>;
//     }

//     if (error) {
//       return (
//         <div className="container mt-5 text-center text-danger">{error}</div>
//       );
//     }

//     if (!cartData || cartData.length === 0) {
//       return (
//         <EmptyCartMessage>
//           <h3>Your cart is empty</h3>
//           <p>Please add courses to your cart.</p>
//           <Link to="/course-list" className="btn btn-primary mt-3">
//             Browse Courses
//           </Link>
//         </EmptyCartMessage>
//       );
//     }

//     return (
//       <div className="student-widget">
//         <div className="student-widget-group">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="cart-head">
//                 <h4>Your cart ({cartData.length} items)</h4>
//               </div>
//               <div className="cart-group">
//                 <div className="row">
//                   {cartData.map((item) => (
//                     <div
//                       className="col-lg-12 col-md-12 d-flex"
//                       key={item.course_id}
//                     >
//                       <div className="course-box course-design list-course d-flex">
//                         <div className="product">
//                           <div className="product-img">
//                             <Link to={`/course-details/${item.course_id}`}>
//                               <img
//                                 className="img-fluid"
//                                 alt={item.course_name}
//                                 src={
//                                   `https://api.novajobs.us${item.course_image}` ||
//                                   "default_image.jpg"
//                                 }
//                               />
//                             </Link>
//                             <div className="price">
//                               <h3 className={item.price === 0 ? "free-color" : ""}>
//                                 {item.price === 0 ? "FREE" : `$${item.price}`}
//                               </h3>
//                             </div>
//                           </div>
//                           <div>
//                             <div>
//                               <h3>
//                                 <Link to={`/course-info/${item.course_id}`}>
//                                   {item.course_name}
//                                 </Link>
//                               </h3>
//                             </div>
//                             <div className="course-info d-flex align-items-center border-bottom-0 pb-0">
//                               <div className="rating-img d-flex align-items-center">
//                                 <img src={Icon1} alt="" />
//                                 <p> Lessons</p>
//                               </div>
//                               <div className="course-view d-flex align-items-center">
//                                 <img src={Icon2} alt="" />
//                                 <p>{item.duration}</p>
//                               </div>
//                             </div>
//                             <div className="course-description mt-2">
//                               <TruncatedText
//                                 dangerouslySetInnerHTML={{
//                                   __html: item.description,
//                                 }}
//                               />
//                             </div>
//                             <div className="cart-remove">
//                               <button
//                                 className="btn btn-primary"
//                                 onClick={() => handleRemove(item.course_id)}
//                                 disabled={loading}
//                               >
//                                 {loading ? (
//                                   <span>
//                                     <span
//                                       className="spinner-border spinner-border-sm"
//                                       role="status"
//                                       aria-hidden="true"
//                                     ></span>
//                                     Loading...
//                                   </span>
//                                 ) : (
//                                   "Remove"
//                                 )}
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <div className="cart-total">
//                 <div className="row">
//                   <div className="col-lg-12 col-md-12">
//                     <div className="cart-subtotal">
//                       <p>
//                         Subtotal <span>${totalPrice}</span>
//                       </p>
//                     </div>
//                   </div>
//                   <div className="col-lg-4 col-md-6">
//                     <div className="check-outs">
//                       <Link to="/checkout" className="btn btn-primary">
//                         Checkout
//                       </Link>
//                     </div>
//                   </div>
//                   <div className="col-lg-4 col-md-6">
//                     <div className="check-outs">
//                       <button
//                         className="btn btn-primary"
//                         onClick={() => setIsModalOpen(true)}
//                       >
//                         Apply Coupon
//                       </button>
//                     </div>
//                   </div>
//                   <div className="col-lg-4 col-md-6">
//                     <div className="check-outs">
//                       <Link to="/course-list" className="btn btn-primary">
//                         Continue Shopping
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <>
//       <div className="main-wrapper">
//         <PageHeader activeMenu="Cart" />

//         <div className="breadcrumb-bar">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-12 col-12">
//                 <div className="breadcrumb-list">
//                   <nav aria-label="breadcrumb" className="page-breadcrumb">
//                     {/* Add breadcrumb content if needed */}
//                   </nav>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <section className="course-content cart-widget">
//           <div className="container">{renderContent()}</div>
//         </section>

//         {/* {isModalOpen && (
//           <ModalOverlay onClick={() => setIsModalOpen(false)}>
//             <ModalContent onClick={(e) => e.stopPropagation()}>
//               <CloseButton onClick={() => setIsModalOpen(false)}>&times;</CloseButton>
//               <h2>Apply Coupon Code</h2>
//               <form onSubmit={handleApplyCoupon}>
//                 <StyledInput
//                   type="text"
//                   value={couponCode}
//                   onChange={(e) => setCouponCode(e.target.value)}
//                   placeholder="Enter coupon code"
//                   required
//                 />
//                 <button type="submit" className="btn btn-primary mt-3">Apply</button>
//               </form>
//             </ModalContent>
//           </ModalOverlay>
//         )} */}
//         {isModalOpen && (
//   <ModalOverlay onClick={() => setIsModalOpen(false)}>
//     <ModalContent onClick={(e) => e.stopPropagation()}>
//       <CloseButton onClick={() => setIsModalOpen(false)}>&times;</CloseButton>
//       <h2>Apply Coupon Code</h2>
//       <form onSubmit={handleApplyCoupon}>
//         <StyledInput
//           type="text"
//           value={couponCode}
//           onChange={(e) => setCouponCode(e.target.value)}
//           placeholder="Enter coupon code"
//           required
//         />
//         <button type="submit" className="btn btn-primary mt-3">Apply</button>
//       </form>
//     </ModalContent>
//   </ModalOverlay>
// )}

//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Cart;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../footer";
import { Icon1, Icon2 } from "../../imagepath";
import PageHeader from "../header";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EmptyCartMessage = styled.div`
  text-align: center;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  margin-top: 2rem;
`;

const TruncatedText = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 500px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    color: #ff0000;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ced4da;
  border-radius: 4px;
  margin-top: 1rem;
  &:focus {
    border-color: #80bdff;
    outline: none;
  }
`;

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const Token = localStorage.getItem("token");

  const fetchCartData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://api.novajobs.us/api/students/cart",
        {
          headers: {
            Authorization: `${Token}`,
          },
        }
      );
      setCartData(response.data);
      setTotalPrice(response.data.total_price);
    } catch (error) {
      console.error("Error fetching cart data:", error);
      toast.error("Failed to load cart data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCartData();
  }, [Token]);

  const handleRemove = async (courseId) => {
    if (loading) return;

    setLoading(true);
    try {
      await axios.delete(
        `https://api.novajobs.us/api/students/cart/${courseId}`,
        {
          headers: {
            Authorization: `${Token}`,
          },
        }
      );
      await fetchCartData();
      toast.success("Course removed from cart successfully");
    } catch (err) {
      console.error(err);
      toast.error("Failed to remove course. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  

  const handleApplyCoupon = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://api.novajobs.us/api/students/apply-coupon",
        { code: couponCode },
        {
          headers: {
            Authorization: `${Token}`,
          },
        }
      );
      console.log("Coupon applied successfully:", response.data);
      fetchCartData();
      // fetchCartDataAfterCoupon();
      setIsModalOpen(false);
      setCouponCode("");
      toast.success("Coupon applied successfully");
    } catch (error) {
      console.error("Error applying coupon:", error);
      toast.error(
        error.response.data.message ||
          "Failed to apply coupon. Please try again."
      );
    }
  };

  const renderContent = () => {
    if (loading) {
      return <div className="container mt-5 text-center">Loading...</div>;
    }

    if (!cartData || cartData.length === 0) {
      return (
        <EmptyCartMessage>
          <h3>Your cart is empty</h3>
          <p>Please add courses to your cart.</p>
          <Link to="/course-list" className="btn btn-primary mt-3">
            Browse Courses
          </Link>
        </EmptyCartMessage>
      );
    }

    return (
      <div className="student-widget">
        <div className="student-widget-group">
          <div className="row">
            <div className="col-lg-12">
              <div className="cart-head">
                <h4>Your cart ({cartData.items.length} items)</h4>
              </div>
              <div className="cart-group">
                <div className="row">
                  {cartData.items.map((item) => (
                    <div
                      className="col-lg-12 col-md-12 d-flex"
                      key={item.course_id}
                    >
                      <div className="course-box course-design list-course d-flex">
                        <div className="product">
                          <div className="product-img">
                            <Link to={`/course-details/${item.course_id}`}>
                              <img
                                className="img-fluid"
                                alt={item.course_name}
                                src={
                                  `https://api.novajobs.us${item.course_image}` ||
                                  "default_image.jpg"
                                }
                              />
                            </Link>
                            <div className="price">
                              <h3
                                className={item.price === 0 ? "free-color" : ""}
                              >
                                {item.price === 0 ? "FREE" : `$${item.price}`}
                              </h3>
                            </div>
                          </div>
                          <div>
                            <div>
                              <h3>
                                <Link to={`/course-info/${item.course_id}`}>
                                  {item.course_name}
                                </Link>
                              </h3>
                            </div>
                            <div className="course-info d-flex align-items-center border-bottom-0 pb-0">
                              <div className="rating-img d-flex align-items-center">
                                <img src={Icon1} alt="" />
                                <p> Lessons</p>
                              </div>
                              <div className="course-view d-flex align-items-center">
                                <img src={Icon2} alt="" />
                                <p>{item.duration}</p>
                              </div>
                            </div>
                            <div className="course-description mt-2">
                              <TruncatedText
                                dangerouslySetInnerHTML={{
                                  __html: item.description,
                                }}
                              />
                            </div>
                            <div className="cart-remove">
                              <button
                                className="btn btn-primary"
                                onClick={() => handleRemove(item.course_id)}
                                disabled={loading}
                              >
                                {loading ? (
                                  <span>
                                    <span
                                      className="spinner-border spinner-border-sm"
                                      role="status"
                                      aria-hidden="true"
                                    ></span>
                                    Loading...
                                  </span>
                                ) : (
                                  "Remove"
                                )}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="cart-total">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    {/* <div className="cart-subtotal">
                      <p>
                        Sub-Total
                         <span className="text-muted text-decoration-line-through me-2 fs-5">${totalPrice}</span>{cartData.discount}
                      </p>
                      <p>
                       Net Price<span className="text-success fw-bold fs-4">${cartData.net_total}</span>
                      </p>

                    </div> */}
                    <div className="card border-0 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">Order Summary</h5>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-muted">Sub-Total</span>
          <div>
            <span className="text-muted text-decoration-line-through me-2">${totalPrice}</span>
           { <span className="text-danger">{cartData.discount}/- OFF</span>}
          </div>
        </div>
       {cartData.net_total? <div className="d-flex justify-content-between align-items-center">
          <span className="fw-bold">Net Price</span>
          <span className="text-success fw-bold fs-4">${cartData.net_total}</span>
        </div>: <></>}
      </div>
    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="check-outs">
                      <Link to="/checkout" className="btn btn-primary">
                        Checkout
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="check-outs">
                      {/* <button
                        className="btn btn-primary"
                        onClick={() => setIsModalOpen(true)}
                      >
                        Apply Coupon
                      </button> */}
                      {totalPrice > 0 ? (
                        <button
                          className="btn btn-primary"
                          onClick={() => setIsModalOpen(true)}
                        >
                          Apply Coupon
                        </button>
                      ) : (
                        <button className="btn btn-primary" disabled>
                          Apply Coupon
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="check-outs">
                      <Link to="/course-list" className="btn btn-primary">
                        Continue Shopping
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="main-wrapper">
        <PageHeader activeMenu="Cart" />

        <div className="breadcrumb-bar">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-12">
                <div className="breadcrumb-list">
                  <nav aria-label="breadcrumb" className="page-breadcrumb">
                    {/* Add breadcrumb content if needed */}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="course-content cart-widget">
          <div className="container">{renderContent()}</div>
        </section>

        {isModalOpen && (
          <ModalOverlay onClick={() => setIsModalOpen(false)}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <CloseButton onClick={() => setIsModalOpen(false)}>
                &times;
              </CloseButton>
              <h2>Apply Coupon Code</h2>
              <form onSubmit={handleApplyCoupon}>
                <StyledInput
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Enter coupon code"
                  required
                />
                <button type="submit" className="btn btn-primary mt-3">
                  Apply
                </button>
              </form>
            </ModalContent>
          </ModalOverlay>
        )}

        {/* <ToastContainer 
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        /> */}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
