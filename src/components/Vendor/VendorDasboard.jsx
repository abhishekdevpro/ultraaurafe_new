import React, { useState } from "react";
import { Link } from "react-router-dom";
import VendorSidebar from "./VendorSidebar";
import { VendorHeader } from "./VendorHeader";
// import productImg from "../../../assets/Product.png"; // Placeholder image for products

export const VendorDashboard = () => {
  // Hardcoded sample data
  const sampleProducts = [
    {
      id: 1,
      product_name: "Sample Product 1",
      price: 100,
      product_image: "/path/to/image1.jpg", // Replace with actual path or leave it as is
    },
    {
      id: 2,
      product_name: "Sample Product 2",
      price: 200,
      product_image: "/path/to/image2.jpg", // Replace with actual path or leave it as is
    },
    {
      id: 3,
      product_name: "Sample Product 3",
      price: 150,
      product_image: "/path/to/image3.jpg", // Replace with actual path or leave it as is
    },
  ];

  const [isFavorite, setIsFavorite] = useState([false, false, false]);

  const toggleFavorite = (index) => {
    const updatedFavorites = [...isFavorite];
    updatedFavorites[index] = !updatedFavorites[index];
    setIsFavorite(updatedFavorites);
  };

  return (
    <div className="main-wrapper">
      <VendorHeader activeMenu={"Dashboard"} />
      {/* Breadcrumb */}
      <div className="breadcrumb-bar breadcrumb-bar-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="breadcrumb-list">
                <h2 className="breadcrumb-title">Vendor Dashboard</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/home">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Dashboard
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
            <VendorSidebar />
            {/* /Sidebar */}

            {/* Vendor Dashboard */}
            <div className="col-xl-9 col-lg-9">
              {/* Dashboard Grid */}
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex">
                  <div className="card dash-info flex-fill">
                    <div className="card-body">
                      <h5>Total Products</h5>
                      <h2>20</h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex">
                  <div className="card dash-info flex-fill">
                    <div className="card-body">
                      <h5>Active Listings</h5>
                      <h2>15</h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex">
                  <div className="card dash-info flex-fill">
                    <div className="card-body">
                      <h5>Total Sales</h5>
                      <h2>120</h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex">
                  <div className="card dash-info flex-fill">
                    <div className="card-body">
                      <h5>Total Revenue</h5>
                      <h2>$3,500</h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex">
                  <div className="card dash-info flex-fill">
                    <div className="card-body">
                      <h5>Total Revenue</h5>
                      <h2>$3,500</h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex">
                  <div className="card dash-info flex-fill">
                    <div className="card-body">
                      <h5>Total Revenue</h5>
                      <h2>$3,500</h2>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Dashboard Grid */}
              <div className="dashboard-title">
                <h4>Recently Added Products</h4>
              </div>
              {sampleProducts.length > 0 ? (
                <div className="row">
                  {sampleProducts.map((product, index) => (
                    <div className="col-md-4" key={product.id}>
                      <div className="product-box flex-fill">
                        <div className="product">
                          <div className="product-img">
                            <Link to={`/product-details/${product.id}`}>
                              <img
                                className="img-fluid"
                                src={product.product_image}
                                alt={product.product_name}
                              />
                            </Link>
                            <div className="price">
                              <h3>${product.price}</h3>
                            </div>
                          </div>
                          <div className="product-content">
                            <div className="product-name">
                              <h3 className="title">
                                <Link to={`/product-details/${product.id}`}>
                                  {product.product_name}
                                </Link>
                              </h3>
                            </div>
                            <div className="product-info d-flex align-items-center justify-content-between">
                              <div className="rating mb-0">
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star me-1" />
                                <span className="d-inline-block average-rating">
                                  <span>4.8</span> (24)
                                </span>
                              </div>
                              <div className="product-favorite">
                                <Link to="#" onClick={() => toggleFavorite(index)}>
                                  <i className={`fa-regular fa-heart ${isFavorite[index] ? 'color-active' : ''}`} />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No products available</p>
              )}
              <div className="dash-pagination">
                <div className="row align-items-center">
                  <div className="col-6">
                    <p>Page 1 of 2</p>
                  </div>
                  <div className="col-6">
                    <ul className="pagination">
                      <li className="active">
                        <Link to="#">1</Link>
                      </li>
                      <li>
                        <Link to="#">2</Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="bx bx-chevron-right" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* /Vendor Dashboard */}
          </div>
        </div>
      </div>
      {/* /Page Content */}
      {/* <Footer /> */}
    </div>
  );
};

export default VendorDashboard