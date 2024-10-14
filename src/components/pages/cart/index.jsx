// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Footer from "../../footer";
// import { Icon1, Icon2 } from "../../imagepath";
// import PageHeader from "../header";
// import axios from "axios";

// const Cart = () => {
//   const [cartData, setCartData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const Token = localStorage.getItem('token');

//   useEffect(() => {
//     const fetchCartData = async () => {
//       try {
//         const response = await axios.get("https://api.novajobs.us/api/students/cart", {
//           headers: {
//             Authorization: `${Token}`
//           }
//         });
//         setCartData(response.data.items);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching cart data:", error);
//         setLoading(false);
//       }
//     };
//     fetchCartData();
//   }, [Token]);
//   console.log(cartData);

//   if (loading) {
//     return <div className="container mt-5 text-center">Loading...</div>;
//   }

//   if (!cartData || cartData.items.length === 0) {
//     return <div className="container mt-5 text-center">No items in the cart.</div>;
//   }

//   return (
//     <>
//       <div className="main-wrapper">
//         <PageHeader activeMenu="Cart"/>

//         <div className="breadcrumb-bar">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-12 col-12">
//                 <div className="breadcrumb-list">
//                   <nav aria-label="breadcrumb" className="page-breadcrumb">
//                     <ol className="breadcrumb">
//                       <li className="breadcrumb-item">
//                         <Link to="/home">Home</Link>
//                       </li>
//                       <li className="breadcrumb-item" aria-current="page">
//                         Pages
//                       </li>
//                       <li className="breadcrumb-item" aria-current="page">
//                         Cart
//                       </li>
//                     </ol>
//                   </nav>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <section className="course-content cart-widget">
//           <div className="container">
//             <div className="student-widget">
//               <div className="student-widget-group">
//                 <div className="row">
//                   <div className="col-lg-12">
//                     <div className="cart-head">
//                       <h4>Your cart (03 items)</h4>
//                     </div>
//                     <div className="cart-group">
//                       <div className="row">
//                         <div className="col-lg-12 col-md-12 d-flex">
//                           <div className="course-box course-design list-course d-flex">
//                             <div className="product">
//                               <div className="product-img">
//                                 <Link to="/course-details">
//                                   <img
//                                     className="img-fluid"
//                                     alt=""
//                                     src={cartData.course_banner_image}
//                                   />
//                                 </Link>
//                                 <div className="price">
//                                   <h3 className="free-color">FREE</h3>
//                                 </div>
//                               </div>
//                               <div className="product-content">
//                                 <div className="head-course-title">
//                                   <h3 className="title">
//                                     <Link to="/course-details">
//                                      {cartData.course_name}
//                                     </Link>
//                                   </h3>
//                                 </div>
//                                 <div className="course-info d-flex align-items-center border-bottom-0 pb-0">
//                                   <div className="rating-img d-flex align-items-center">
//                                     <img
//                                       src={Icon1}
//                                       alt=""
//                                     />
//                                     <p>12+ Lesson</p>
//                                   </div>
//                                   <div className="course-view d-flex align-items-center">
//                                     <img
//                                       src={Icon2}
//                                       alt=""
//                                     />
//                                     <p>9hr 30min</p>
//                                   </div>
//                                 </div>
//                                 <div className="rating">
//                                   <i className="fas fa-star filled me-1" />
//                                   <i className="fas fa-star filled me-1" />
//                                   <i className="fas fa-star filled me-1" />
//                                   <i className="fas fa-star filled me-1" />
//                                   <i className="fas fa-star me-1" />
//                                   <span className="d-inline-block average-rating">
//                                     <span>4.0</span> (15)
//                                   </span>
//                                 </div>
//                               </div>
//                               <div className="cart-remove">
//                                 <Link
//                                   to="#"
//                                   className="btn btn-primary"
//                                 >
//                                   Remove
//                                 </Link>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="cart-total">
//                       <div className="row">
//                         <div className="col-lg-12 col-md-12">
//                           <div className="cart-subtotal">
//                             <p>
//                               Subtotal <span>$600.00</span>
//                             </p>
//                           </div>
//                         </div>
//                         <div className="col-lg-6 col-md-6">
//                           <div className="check-outs">
//                             <Link to="/checkout" className="btn btn-primary">
//                               Checkout
//                             </Link>
//                           </div>
//                         </div>
//                         <div className="col-lg-6 col-md-6">
//                           <div className="condinue-shop">
//                             <Link
//                               to="/course-list"
//                               className="btn btn-primary"
//                             >
//                               Continue Shopping
//                             </Link>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <Footer/>
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

// const CartWrapper = styled.div`
//   .cart-head {
//     margin-bottom: 2rem;
//   }

//   .cart-group {
//     margin-bottom: 2rem;
//   }

//   .course-box {
//     border: 1px solid #e0e0e0;
//     border-radius: 8px;
//     margin-bottom: 1rem;
//     overflow: hidden;
//   }

//   .product {
//     display: flex;
//     align-items: center;
//   }

//   .product-img {
//     flex: 0 0 200px;
//     position: relative;
//   }

//   .price {
//     position: absolute;
//     bottom: 10px;
//     right: 10px;
//     background-color: rgba(0, 0, 0, 0.7);
//     color: white;
//     padding: 5px 10px;
//     border-radius: 4px;
//   }

//   .product-content {
//     flex: 1;
//     padding: 1rem;
//   }

//   .cart-remove {
//     padding: 1rem;
//   }

//   .cart-total {
//     background-color: #f8f9fa;
//     padding: 1rem;
//     border-radius: 8px;
//   }
// `;

// const Cart = () => {
//   const [cartData, setCartData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const Token = localStorage.getItem('token');

//   useEffect(() => {
//     const fetchCartData = async () => {
//       try {
//         const response = await axios.get("https://api.novajobs.us/api/students/cart", {
//           headers: {
//             Authorization: `${Token}`
//           }
//         });
//         setCartData(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching cart data:", error);
//         setLoading(false);
//       }
//     };
//     fetchCartData();
//   }, [Token]);

//   if (loading) {
//     return <div className="container mt-5 text-center">Loading...</div>;
//   }

//   if (!cartData || cartData.items.length === 0) {
//     return <div className="container mt-5 text-center">No items in the cart.</div>;
//   }

//   return (
//     <CartWrapper>
//       <div className="main-wrapper">
//         <PageHeader activeMenu="Cart" />

//         <div className="breadcrumb-bar bg-light">
//           <div className="container">
//             <nav aria-label="breadcrumb">
//               <ol className="breadcrumb">
//                 <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
//                 <li className="breadcrumb-item">Pages</li>
//                 <li className="breadcrumb-item active" aria-current="page">Cart</li>
//               </ol>
//             </nav>
//           </div>
//         </div>

//         <section className="course-content cart-widget">
//           <div className="container">
//             <div className="cart-head">
//               <h2>Your cart ({cartData.items.length} items)</h2>
//             </div>
//             <div className="cart-group">
//               {cartData.items.map((item) => (
//                 <div className="course-box" key={item.course_id}>
//                   <div className="product">
//                     <div className="product-img">
//                       <Link to={`/course-details/${item.course_id}`}>
//                         <img
//                           className="img-fluid"
//                           alt={item.course_name}
//                           src={`https://api.novajobs.us/${item.course_id}.jpg`}
//                         />
//                       </Link>
//                       <div className="price">
//                         <h3>${item.price.toFixed(2)}</h3>
//                       </div>
//                     </div>
//                     <div className="product-content">
//                       <h3 className="title">
//                         <Link to={`/course-details/${item.course_id}`}>
//                           {item.course_name}
//                         </Link>
//                       </h3>
//                       <div className="d-flex ">
//                       <div className="d-flex align-items-center mb-2">
//                         <img src={Icon1} alt="" className="me-2" />
//                         <p className="mb-0">{item.quantity} Item(s)</p>
//                       </div>
//                       <div className="d-flex align-items-center mb-2">
//                         <img src={Icon2} alt="" className="me-2" />
//                         <p className="mb-0">{item.description}</p>
//                       </div>
//                       </div>
//                       <div className="rating">
//                         {[...Array(4)].map((_, i) => (
//                           <i key={i} className="fas fa-star text-warning me-1" />
//                         ))}
//                         <i className="fas fa-star text-muted me-1" />
//                         <span className="text-muted">
//                           <span className="fw-bold">4.0</span> (15)
//                         </span>
//                       </div>
//                     </div>
//                     <div className="cart-remove">
//                       <button className="btn btn-danger">Remove</button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="cart-total">
//               <div className="row">
//                 <div className="col-lg-12 mb-3">
//                   <h4>Subtotal: <span className="float-end">${cartData.total_price.toFixed(2)}</span></h4>
//                 </div>
//                 <div className="col-lg-6 col-md-6 mb-3">
//                   <Link to="/checkout" className="btn btn-primary w-100">
//                     Checkout
//                   </Link>
//                 </div>
//                 <div className="col-lg-6 col-md-6 mb-3">
//                   <Link to="/course-list" className="btn btn-outline-primary w-100">
//                     Continue Shopping
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <Footer />
//       </div>
//     </CartWrapper>
//   );
// };

// export default Cart;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Footer from "../../footer";
// import { Icon1, Icon2 } from "../../imagepath";
// import PageHeader from "../header";
// import axios from "axios";

// const Cart = () => {
//   const [cartData, setCartData] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const Token = localStorage.getItem("token");

//   useEffect(() => {
//     const fetchCartData = async () => {
//       try {
//         const response = await axios.get(
//           "https://api.novajobs.us/api/students/cart",
//           {
//             headers: {
//               Authorization: `${Token}`,
//             },
//           }
//         );
//         setCartData(response.data.items);
//         console.log(response.data.total_price, "Toatal score");
//         setTotalPrice(response.data.total_price);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching cart data:", error);
//         setLoading(false);
//       }
//     };
//     fetchCartData();
//   }, [Token]);

//   if (loading) {
//     return <div className="container mt-5 text-center">Loading...</div>;
//   }

//   if (!cartData || cartData.length === 0) {
//     return (
//       <div className="container mt-5 text-center">No items in the cart.</div>
//     );
//   }
//   const handleRemove = async (courseId) => {
//     // Prevent multiple clicks
//     if (loading) return;

//     setLoading(true); // Show loader

//     try {
//       // Make the delete request
//       await axios.delete(`https://api.novajobs.us/api/students/cart/${courseId}`,{
//         headers:{
//           Authorization:`${Token}`
//         }
//       });
//       // Handle success (e.g., show a success message or update the UI)
//       console.log('Course removed successfully');
//     } catch (err) {
//       // Handle error (e.g., show an error message)
//       console.error(err);
//     } finally {
//       setLoading(false); // Hide loader
//     }
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
//           <div className="container">
//             <div className="student-widget">
//               <div className="student-widget-group">
//                 <div className="row">
//                   <div className="col-lg-12">
//                     <div className="cart-head">
//                       <h4>Your cart ({cartData.length} items)</h4>
//                     </div>
//                     <div className="cart-group">
//                       <div className="row">
//                         {cartData.map((item) => (
//                           <div
//                             className="col-lg-12 col-md-12 d-flex"
//                             key={item.course_id}
//                           >
//                             <div className="course-box course-design list-course d-flex">
//                               <div className="product">
//                                 <div className="product-img">
//                                   <Link
//                                     to={`/course-details/${item.course_id}`}
//                                   >
//                                     <img
//                                       className="img-fluid"
//                                       alt={item.course_name}
//                                       src={
//                                         `https://api.novajobs.us${item.course_image}` ||
//                                         "default_image.jpg"
//                                       }
//                                     />
//                                   </Link>
//                                   <div className="price">
//                                     <h3
//                                       className={
//                                         item.price === 0 ? "free-color" : ""
//                                       }
//                                     >
//                                       {item.price === 0
//                                         ? "FREE"
//                                         : `$${item.price}`}
//                                     </h3>
//                                   </div>
//                                 </div>
//                                 <div className="product-content">
//                                   <div className="head-course-title">
//                                     <h3 className="title">
//                                       <Link
//                                         to={`/course-info/${item.course_id}`}
//                                       >
//                                         {item.course_name}
//                                       </Link>
//                                     </h3>
//                                   </div>
//                                   <div className="course-info d-flex align-items-center border-bottom-0 pb-0">
//                                     <div className="rating-img d-flex align-items-center">
//                                       <img src={Icon1} alt="" />
//                                       <p>12+ Lesson</p>
//                                     </div>
//                                     <div className="course-view d-flex align-items-center">
//                                       <img src={Icon2} alt="" />
//                                       <p>{item.duration}</p>
//                                     </div>
//                                   </div>
//                                   <div className="rating">
//                                     <i className="fas fa-star filled me-1" />
//                                     <i className="fas fa-star filled me-1" />
//                                     <i className="fas fa-star filled me-1" />
//                                     <i className="fas fa-star filled me-1" />
//                                     <i className="fas fa-star me-1" />
//                                     <span className="d-inline-block average-rating">
//                                       <span>4.0</span> (15)
//                                     </span>
//                                   </div>

//                                   <div className="course-description mt-2">
//                                     <p
//                                       dangerouslySetInnerHTML={{
//                                         __html: item.description,
//                                       }}
//                                     />
//                                   </div>
//                                   <div className="cart-remove">
//                                     <Link
//                                       to="#"
//                                       className="btn btn-primary"
//                                       onClick={()=>handleRemove(item.course_id)}
//                                     >
//                                       {loading ? (
//                                         <span>
//                                           <span
//                                             className="spinner-border spinner-border-sm"
//                                             role="status"
//                                             aria-hidden="true"
//                                           ></span>
//                                           Loading...
//                                         </span>
//                                       ) : (
//                                         "Remove"
//                                       )}
//                                     </Link>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                     <div className="cart-total">
//                       <div className="row">
//                         <div className="col-lg-12 col-md-12">
//                           <div className="cart-subtotal">
//                             <p>
//                               Subtotal <span>${totalPrice}</span>
//                             </p>
//                           </div>
//                         </div>
//                         <div className="col-lg-6 col-md-6">
//                           <div className="check-outs">
//                             <Link to="/checkout" className="btn btn-primary">
//                               Checkout
//                             </Link>
//                           </div>
//                         </div>
//                         <div className="col-lg-6 col-md-6">
//                           <div className="check-outs">
//                             <Link to="/course-list" className="btn btn-primary">
//                               Continue Shopping
//                             </Link>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <Footer />
//       </div>
//     </>
//   );
// };

// export default Cart;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Footer from "../../footer";
import { Icon1, Icon2 } from "../../imagepath";
import PageHeader from "../header";
import axios from "axios";

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

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const Token = localStorage.getItem("token");
  // const navigate = useNavigate();

  const fetchCartData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        "https://api.novajobs.us/api/students/cart",
        {
          headers: {
            Authorization: `${Token}`,
          },
        }
      );
      setCartData(response.data.items);
      setTotalPrice(response.data.total_price);
    } catch (error) {
      console.error("Error fetching cart data:", error);
      setError("Failed to load cart data. Please try again later.");
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
      await axios.delete(`https://api.novajobs.us/api/students/cart/${courseId}`, {
        headers: {
          Authorization: `${Token}`
        }
      });
      await fetchCartData(); // Refresh the cart data
    } catch (err) {
      console.error(err);
      setError("Failed to remove course. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const renderContent = () => {
    if (loading) {
      return <div className="container mt-5 text-center">Loading...</div>;
    }

    if (error) {
      return <div className="container mt-5 text-center text-danger">{error}</div>;
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
                <h4>Your cart ({cartData.length} items)</h4>
              </div>
              <div className="cart-group">
                <div className="row">
                  {cartData.map((item) => (
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
                              <h3 className={item.price === 0 ? "free-color" : ""}>
                                {item.price === 0 ? "FREE" : `$${item.price}`}
                              </h3>
                            </div>
                          </div>
                          <div className="product-content">
                            <div className="head-course-title">
                              <h3 className="title">
                                <Link to={`/course-info/${item.course_id}`}>
                                  {item.course_name}
                                </Link>
                              </h3>
                            </div>
                            <div className="course-info d-flex align-items-center border-bottom-0 pb-0">
                              <div className="rating-img d-flex align-items-center">
                                <img src={Icon1} alt="" />
                                <p>12+ Lesson</p>
                              </div>
                              <div className="course-view d-flex align-items-center">
                                <img src={Icon2} alt="" />
                                <p>{item.duration}</p>
                              </div>
                            </div>
                            <div className="rating">
                              <i className="fas fa-star filled me-1" />
                              <i className="fas fa-star filled me-1" />
                              <i className="fas fa-star filled me-1" />
                              <i className="fas fa-star filled me-1" />
                              <i className="fas fa-star me-1" />
                              <span className="d-inline-block average-rating">
                                <span>4.0</span> (15)
                              </span>
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
                    <div className="cart-subtotal">
                      <p>
                        Subtotal <span>${totalPrice}</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="check-outs">
                      <Link to="/checkout" className="btn btn-primary">
                        Checkout
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
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
                  <nav aria-label="breadcrumb" className="page-breadcrumb"></nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="course-content cart-widget">
          <div className="container">
            {renderContent()}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Cart;