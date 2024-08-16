import React from "react";
import Footer from "../../footer";
import { logo } from "../../imagepath";
import StudentHeader from "../header";

const ViewInvoice = () => {
  return (
    <>
      <div className="main-wrapper">
        <StudentHeader/>

        <div className="page-content">
          <div className="container">
            <div className="row justify-content-center">
              {/* Profile Details */}
              <div className="col-xl-9 col-md-8">
                <div className="settings-widget profile-details">
                  <div className="settings-menu invoice-list-blk p-0 ">
                    <div className="card pro-post border-0 mb-0">
                      <div className="card-body">
                        <div className="invoice-item">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="invoice-logo">
                                <img src={logo} alt="logo" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <p className="invoice-details">
                                <strong>Order:</strong> #00124 <br />
                                <strong>Issued:</strong> 20/10/2021
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* Invoice Item */}
                        <div className="invoice-item">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="invoice-info">
                                <strong className="customer-text">
                                  Invoice From
                                </strong>
                                <p className="invoice-details invoice-details-two">
                                  John Doe <br />
                                  806 Twin Willow Lane, Old Forge,
                                  <br />
                                  Newyork, USA <br />
                                </p>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="invoice-info invoice-info2">
                                <strong className="customer-text">
                                  Invoice To
                                </strong>
                                <p className="invoice-details">
                                  Walter Roberson <br />
                                  299 Star Trek Drive, Panama City, <br />
                                  Florida, 32405, USA <br />
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* /Invoice Item */}
                        {/* Invoice Item */}
                        <div className="invoice-item">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="invoice-info">
                                <strong className="customer-text">
                                  Payment Method
                                </strong>
                                <p className="invoice-details invoice-details-two">
                                  Debit Card <br />
                                  XXXXXXXXXXXX-2541 <br />
                                  HDFC Bank
                                  <br />
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* /Invoice Item */}
                        {/* Invoice Item */}
                        <div className="invoice-item invoice-table-wrap">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="table-responsive">
                                <table className="invoice-table table table-bordered">
                                  <thead>
                                    <tr>
                                      <th>Project</th>
                                      <th>Description</th>
                                      <th className="text-center">Quantity</th>
                                      <th className="text-end">Total</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>Research</td>
                                      <td>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit
                                      </td>
                                      <td className="text-center">1</td>
                                      <td className="text-end">$100</td>
                                    </tr>
                                    <tr>
                                      <td>Research 101</td>
                                      <td>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit
                                      </td>
                                      <td className="text-center">1</td>
                                      <td className="text-end">$250</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            <div className="col-md-6 col-xl-4 ms-auto">
                              <div className="table-responsive">
                                <table className="invoice-table-two table table-borderless">
                                  <tbody>
                                    <tr>
                                      <th>Subtotal:</th>
                                      <td>
                                        <span>$350</span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th>Discount:</th>
                                      <td>
                                        <span>-10%</span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th>Total Amount:</th>
                                      <td>
                                        <span>$315</span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* /Invoice Item */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Profile Details */}
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default ViewInvoice;
