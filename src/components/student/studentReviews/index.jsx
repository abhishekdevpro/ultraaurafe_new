// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import StudentHeader from "../header";
// import StudentSidebar from "../sidebar";
// import Footer from "../../footer";
// import { Link } from "react-router-dom";
// import { User16 } from "../../imagepath";

// const StudentReviews = () => {
//   const [reviews, setReviews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const token = localStorage.getItem('token')

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await axios.get("https://api.novajobs.us/api/students/ratings", {
//           headers: {
//             Authorization: `${token}`, // Replace with your actual token
//           },
//         });
//         setReviews(response.data.data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchReviews();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className="main-wrapper">
//       <StudentHeader activeMenu={"Reviews"} />
//       {/* Breadcrumb */}
//       <div className="breadcrumb-bar breadcrumb-bar-info">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12 col-12">
//               <div className="breadcrumb-list">
//                 <h2 className="breadcrumb-title">Reviews</h2>
//                 <nav aria-label="breadcrumb" className="page-breadcrumb">
//                   <ol className="breadcrumb">
//                     <li className="breadcrumb-item">
//                       <Link to="/home">Home</Link>
//                     </li>
//                     <li className="breadcrumb-item active" aria-current="page">
//                       Reviews
//                     </li>
//                   </ol>
//                 </nav>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* /Breadcrumb */}
//       {/* Page Content */}
//       <div className="page-content">
//         <div className="container">
//           <div className="row">
//             {/* Sidebar */}
//             <StudentSidebar />
//             {/* /Sidebar */}
//             {/* Student Profile */}
//             <div className="col-xl-9 col-lg-9">
//               <div className="settings-widget card-details">
//                 <div className="settings-menu p-0">
//                   <div className="profile-heading">
//                     <h3>Reviews</h3>
//                   </div>
//                   <div className="checkout-form">
//                     {/* Reviews */}
//                     {reviews.map((review) => (
//                       <div className="review-wrap" key={review.id}>
//                         <div className="review-user-info">
//                           <div className="reviewer">
//                             <div className="review-img">
//                               <Link to="#">
//                                 <img src={User16} alt="img" />
//                               </Link>
//                             </div>
//                             <div className="reviewer-info">
//                               {/* <h6>
//                                 <Link to="#">Student {review.student_id}</Link>
//                               </h6> */}
//                               <p>{new Date(review.created_at).toLocaleDateString()}</p>
//                             </div>
//                           </div>
//                           <div className="reviewer-rating">
//                             {[...Array(review.stars)].map((_, index) => (
//                               <i key={index} className="fa-solid fa-star filled" />
//                             ))}
//                             {[...Array(5 - review.stars)].map((_, index) => (
//                               <i key={index} className="fa-solid fa-star" />
//                             ))}
//                           </div>
//                         </div>
//                         {/* <div className="review-content">
//                           <p>{review.content}</p>
//                           <div className="review-action">
//                             <Link to="#">Edit</Link>
//                             <Link to="#">Delete</Link>
//                           </div>
//                         </div> */}
//                       </div>
//                     ))}
//                     {/* /Reviews */}
//                   </div>
//                 </div>
//               </div>
//               <div className="dash-pagination">
//                 <div className="row align-items-center">
//                   <div className="col-6">
//                     <p>Page 1 of 2</p>
//                   </div>
//                   <div className="col-6">
//                     <ul className="pagination">
//                       <li className="active">
//                         <Link to="#">1</Link>
//                       </li>
//                       <li>
//                         <Link to="#">2</Link>
//                       </li>
//                       <li>
//                         <Link to="#">
//                           <i className="bx bx-chevron-right" />
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* Student Profile */}
//           </div>
//         </div>
//       </div>
//       {/* /Page Content */}
//       <Footer />
//     </div>
//   );
// };

// export default StudentReviews;



import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentHeader from "../header";
import StudentSidebar from "../sidebar";
import Footer from "../../footer";
import { Link } from "react-router-dom";
import { User16 } from "../../imagepath";
import FullPageLoader from "../../home/FullPageLoader";

const StudentReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewsPerPage] = useState(10);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          "https://api.novajobs.us/api/students/ratings",
          {
            headers: {
              Authorization: `${token}`, // Replace with your actual token
            },
          }
        );
        setReviews(response.data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  // Pagination logic
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="main-wrapper">
      <StudentHeader activeMenu={"Reviews"} />
      {/* Breadcrumb */}
      <div className="breadcrumb-bar breadcrumb-bar-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="breadcrumb-list">
                <h2 className="breadcrumb-title">Reviews</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/home">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Reviews
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="page-content">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <StudentSidebar />
            {/* /Sidebar */}
            {/* Student Profile */}
            <div className="col-xl-9 col-lg-9">
              <div className="settings-widget card-details">
                <div className="settings-menu p-0">
                  <div className="profile-heading">
                    <h3>Reviews</h3>
                  </div>
                 {loading? <FullPageLoader />: <div className="checkout-form">
                    {/* Reviews */}
                    {currentReviews.map((review) => (
                      <div className="review-wrap" key={review.id}>
                        <div className="review-user-info">
                          <div className="reviewer">
                            <div className="review-img">
                              <Link to="#">
                                <img src={User16} alt="img" />
                              </Link>
                            </div>
                            <div className="reviewer-info">
                              <p>{new Date(review.created_at).toLocaleDateString()}</p>
                            </div>
                          </div>
                          <div className="reviewer-rating">
                            {[...Array(review.stars)].map((_, index) => (
                              <i key={index} className="fa-solid fa-star filled" />
                            ))}
                            {[...Array(5 - review.stars)].map((_, index) => (
                              <i key={index} className="fa-solid fa-star" />
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* /Reviews */}
                  </div>}
                </div>
              </div>
              {/* Pagination */}
              <div className="dash-pagination">
                <div className="row align-items-center">
                  <div className="col-6">
                    <p>
                      Page {currentPage} of {totalPages}
                    </p>
                  </div>
                  <div className="col-6">
                    <ul className="pagination">
                      <li className={currentPage === 1 ? "disabled" : ""}>
                        <Link to="#" onClick={handlePrevPage}>
                          <i className="bx bx-chevron-left" />
                        </Link>
                      </li>
                      <li className={currentPage === totalPages ? "disabled" : ""}>
                        <Link to="#" onClick={handleNextPage}>
                          <i className="bx bx-chevron-right" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* /Pagination */}
            </div>
            {/* Student Profile */}
          </div>
        </div>
      </div>
      {/* /Page Content */}
      <Footer />
    </div>
  );
};

export default StudentReviews;
