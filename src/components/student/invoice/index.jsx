import React from "react";
import StudentHeader from "../header";
import Footer from "../../footer";
import StudentSideBar from "../sidebar";
import { Link } from "react-router-dom";
import { Download } from "react-feather";

export default function StudentInvoice() {
  return (
    <div className="main-wrapper">
      <StudentHeader activeMenu={"Invoice"} />
      {/* Student Dashboard */}
      <div className="page-content">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <StudentSideBar activeMenu={"Invoice"} />
            {/* Sidebar */}

            {/* Profile Details */}
            <div className="col-xl-9 col-md-8">
              <div className="settings-widget profile-details">
                <div className="settings-inner-blk p-0">
                  <div className="profile-heading">
                    <h3>Invoices</h3>
                    <p>You can find all of your order Invoices.</p>
                  </div>
                  <div className="comman-space pb-0">
                    <div className="settings-invoice-blk table-responsive">
                      {/* Invoice info */}
                      <table className="table table-borderless mb-0">
                        <thead>
                          <tr>
                            <th>order id</th>
                            <th>date</th>
                            <th>amount</th>
                            <th>status</th>
                            <th>&nbsp;</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <Link
                                to="view-invoice"
                                className="invoice-no"
                              >
                                #1001
                              </Link>
                            </td>
                            <td>15-01-2020, 10:45pm</td>
                            <td>$50.00</td>
                            <td>
                              <span className="badge status-due">Due</span>
                            </td>
                            <td>
                              <Link to="#" className="btn-style">
                                <Download />
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Link
                                to="view-invoice"
                                className="invoice-no"
                              >
                                #1002
                              </Link>
                            </td>
                            <td>15-02-2020, 10:45pm</td>
                            <td>$50.00</td>
                            <td>
                              <span className="badge status-completed">
                                Completed
                              </span>
                            </td>
                            <td>
                              <Link to="#" className="btn-style">
                                <Download />
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Link
                                to="view-invoice"
                                className="invoice-no"
                              >
                                #1003
                              </Link>
                            </td>
                            <td>15-03-2020, 10:45pm</td>
                            <td>$50.00</td>
                            <td>
                              <span className="badge status-completed">
                                Completed
                              </span>
                            </td>
                            <td>
                              <Link to="#" className="btn-style">
                                <Download />
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Link
                                to="view-invoice"
                                className="invoice-no"
                              >
                                #1004
                              </Link>
                            </td>
                            <td>15-04-2020, 10:45pm</td>
                            <td>$50.00</td>
                            <td>
                              <span className="badge status-completed">
                                Completed
                              </span>
                            </td>
                            <td>
                              <Link to="#" className="btn-style">
                                <Download />
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Link
                                to="view-invoice"
                                className="invoice-no"
                              >
                                #1005
                              </Link>
                            </td>
                            <td>15-05-2020, 10:45pm</td>
                            <td>$50.00</td>
                            <td>
                              <span className="badge status-completed">
                                Completed
                              </span>
                            </td>
                            <td>
                              <Link to="#" className="btn-style">
                                <Download />
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Link
                                to="view-invoice"
                                className="invoice-no"
                              >
                                #1006
                              </Link>
                            </td>
                            <td>15-06-2020, 10:45pm</td>
                            <td>$50.00</td>
                            <td>
                              <span className="badge status-completed">
                                Completed
                              </span>
                            </td>
                            <td>
                              <Link to="#" className="btn-style">
                                <Download />
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Link
                                to="view-invoice"
                                className="invoice-no"
                              >
                                #1007
                              </Link>
                            </td>
                            <td>15-07-2020, 10:45pm</td>
                            <td>$50.00</td>
                            <td>
                              <span className="badge status-completed">
                                Completed
                              </span>
                            </td>
                            <td>
                              <Link to="#" className="btn-style">
                                <Download />
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Link
                                to="view-invoice"
                                className="invoice-no"
                              >
                                #1008
                              </Link>
                            </td>
                            <td>15-08-2020, 10:45pm</td>
                            <td>$50.00</td>
                            <td>
                              <span className="badge status-completed">
                                Completed
                              </span>
                            </td>
                            <td>
                              <Link to="#" className="btn-style">
                                <Download />
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Link
                                to="view-invoice"
                                className="invoice-no"
                              >
                                #1009
                              </Link>
                            </td>
                            <td>15-09-2020, 10:45pm</td>
                            <td>$50.00</td>
                            <td>
                              <span className="badge status-completed">
                                Completed
                              </span>
                            </td>
                            <td>
                              <Link to="#" className="btn-style">
                                <Download />
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Link
                                to="view-invoice"
                                className="invoice-no"
                              >
                                #1010
                              </Link>
                            </td>
                            <td>15-10-2020, 10:45pm</td>
                            <td>$50.00</td>
                            <td>
                              <span className="badge status-completed">
                                Completed
                              </span>
                            </td>
                            <td>
                              <Link to="#" className="btn-style">
                                <Download />
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      {/* Invoice info */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Profile Details */}
          </div>
        </div>
      </div>
      {/* Student Dashboard */}
      <Footer />
    </div>
  );
}
