import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../footer";
import { Icon1, Icon2 } from "../../imagepath";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CourseHeader from "../course/header";
import { ArrowRight } from "lucide-react";

const EmptyCartMessage = styled.div`
  text-align: center;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  margin-top: 2rem;
`;

// const TruncatedText = styled.p`
//   max-width:70%;
//   // border:2px solid red;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   display: -webkit-box;
//   -webkit-line-clamp: 3;
//   -webkit-box-orient: vertical;
// `;

const TruncatedText = styled.p`
  max-width: 60%; /* Ensures it doesn’t overflow */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-break: break-word; /* Ensures long words don’t overflow */

  @media (max-width: 768px) {
    -webkit-line-clamp: 2; /* Show fewer lines on smaller screens */
  }

  @media (max-width: 480px) {
    -webkit-line-clamp: 1; /* Show only one line on very small screens */
  }
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
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  // const navigate = useNavigate();
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
      console.log(response.data);
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

  const handleRemove = async (course_id) => {
    if (loading) return;

    setLoading(true);
    try {
      await axios.delete(
        `https://api.novajobs.us/api/students/cart/${course_id}`,
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

  const handleCheckout = async (cartId) => {
    //  console.log(cartData)
    // console.log("It is the total price"+totalPrice)
    // console.log("It is the net total of cart"+cartData.net_total)

    //   if(cartData.net_total==0){
    //     try {
    //       const response = await axios.post(
    //         "https://api.novajobs.us/api/students/buy",
    //         {
    //           amount: 1,
    //           course_id: Number(cartData.items.course_id),
    //           net_amount: 1,
    //         },
    //         {
    //           headers: {
    //             Authorization: Token,
    //           },
    //         }
    //       );

    //       toast.success("Purchase Successful ");
    //       console.log("Purchase successful:", response.data);

    //       setTimeout(function() {
    //         window.location.reload();
    //     }, 3000);
    //         } catch (error) {
    //       console.error("Error during purchase:", error);
    //       toast.error("There was an issue with the purchase. Please try again.");
    //     }
    //   }
    //  else
    try {
      const response = await axios.post(
        "https://api.novajobs.us/api/students/payment/checkout",
        {
          cart_id: cartId,
        },
        {
          headers: {
            Authorization: `${Token}`,
          },
        }
      );
      console.log("Checkout response:", response);
      const redirectUrl = response.data.data; // Replace 'redirectUrl' with the actual key from the API response if different

      if (redirectUrl) {
        window.location.href = redirectUrl; // Redirects the user to the link
      } else {
        toast.error("No redirect URL found.");
      }
      toast.success("Checkout successful!");
      // You may want to update the cart or redirect the user after successful checkout
    } catch (error) {
      console.error(
        "Error during checkout:",
        error.response?.data || error.message
      );
      toast.error("Checkout failed. Please try again.");
    } finally {
      setCheckoutLoading(false);
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
      console.error("Error applying coupon:", error.response.data.message);
      toast.error(
        error.response.data.message ||
          "Failed to apply coupon. Please try again."
      );
    }
  };
  const handleRemoveCoupon = async () => {
    try {
      const response = await axios.post(
        `https://api.novajobs.us/api/students/remove-coupon/${cartData.cart_id}`,
        {},
        {
          headers: {
            Authorization: `${Token}`,
          },
        }
      );

      // Display a success message
      toast.success(response.data.message || "Coupon Removed Successfully!");

      // Refresh the page after the coupon is successfully removed
      window.location.reload();
    } catch (error) {
      console.error("Failed to remove coupon:", error);

      toast.error(error.response?.data?.message || "Error removing the coupon");
    }
  };

  const renderContent = () => {
    if (loading) {
      return <div className="container mt-5 text-center">Loading...</div>;
    }

    if (!cartData.items || cartData.items.length === 0) {
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
                                className={item.after_discount_price === 0 ? "free-color" : ""}
                              >
                                {item.after_discount_price === 0 ? "FREE" : `${item.after_discount_price}`}
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
                            <div className="">
                              <TruncatedText
                                dangerouslySetInnerHTML={{
                                  __html: item.description,
                                }}
                              />
                            </div>
                            <div
                              className="container"
                              style={{ display: "flex" }}
                            >
                              <div className="" style={{ marginRight: "8px" }}>
                                <button className="btn btn-primary">
                                  Quantity: {item.quantity}
                                </button>
                              </div>
                              <div className="">
                                <button
                                  className="btn btn-danger"
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
                            {cartData.discount ? (
                              <>
                                <span className="text-muted text-decoration-line-through me-2">
                                  {/* ${totalPrice} */}$
                                  {cartData.item.after_discount_price}
                                </span>
                                <span className="text-danger">
                                  ${cartData.discount}/- OFF
                                </span>
                              </>
                            ) : (
                              <span>${totalPrice}</span>
                            )}
                          </div>
                        </div>
                        {cartData.net_total ? (
                          <div className="d-flex justify-content-between align-items-center">
                            <span className="fw-bold">Net Price</span>
                            <span className="text-success fw-bold fs-4">
                              ${cartData.net_total}
                            </span>
                          </div>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* <div className="col-lg-4 col-md-6">
                    <div className="check-outs">
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
                  </div> */}
                  {/* <div className="col-lg-4 col-md-6">
                    <div className="check-outs">
                      <Link to="/course-list" className="btn btn-primary">
                        Continue Shopping
                      </Link>
                    </div>
                  </div> */}
                  <div className="col-lg-4 col-md-6">
                    <div className="check-outs">
                      <Link
                        to="/course-list"
                        className="d-inline-flex align-items-center gap-1 text-primary fw-semibold"
                      >
                        Continue Shopping
                        <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="check-outs">
                      {cartData.is_coupon ? (
                        <button
                          className="btn btn-primary"
                          onClick={handleRemoveCoupon}
                        >
                          Remove Coupon
                        </button>
                      ) : (
                        <button
                          className="btn btn-primary"
                          onClick={() => setIsModalOpen(true)}
                          disabled={totalPrice <= 0}
                        >
                          Apply Coupon
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="check-outs">
                      <button
                        className="btn btn-primary"
                        onClick={() => handleCheckout(cartData.cart_id)}
                        disabled={checkoutLoading}
                      >
                        {checkoutLoading ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm me-2"
                              role="status"
                              aria-hidden="true"
                            ></span>
                            Processing...
                          </>
                        ) : (
                          "Checkout"
                        )}
                      </button>
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
        <CourseHeader activeMenu="Cart" />

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
      </div>
      <Footer />
    </>
  );
};

export default Cart;
