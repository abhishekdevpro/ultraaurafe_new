import React, { useState } from "react";
import Footer from "../../footer";
import { InstructorHeader } from "../header";
import { course28, course29, course30 } from "../../imagepath";
import Chart from "react-apexcharts";
import { initialSettings } from "../../common/dateRangePicker";
import DateRangePicker from "react-bootstrap-daterangepicker";
import InstructorSidebar from "../sidebar";
import { Link } from "react-router-dom";

const InstructorEarnings = () => {
  const [chartOptions] = useState({
    series: [
      {
        name: "Earnings",
        data: [25, 40, 30, 55, 25, 35, 25, 50, 20, 40, 20, 50],
      },
    ],
    chart: {
      height: 273,
      type: "area",
      zoom: {
        enabled: false,
      },
    },
    colors: ["#FF4667"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: "",
      align: "left",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      min: 10,
      max: 60,
      tickAmount: 5,
      labels: {
        formatter: (val) => {
          return val / 1 + "K";
        },
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
    },
  });
  return (
    <div className="main-wrapper">
      <InstructorHeader />
      <div className="page-content">
        <div className="container">
          <div className="row">
          <InstructorSidebar />
            {/* Instructor Dashboard */}
            <div className="col-xl-9 col-lg-8 col-md-12">
              <div className="settings-widget card-details">
                <div className="settings-menu p-0">
                  <div className="profile-heading">
                    <h3>Earnings</h3>
                  </div>
                  <div className="checkout-form instructor-earnings-card">
                    {/* Dashboard Grid */}
                    <div className="row justify-content-center">
                      <div className="col-lg-4 col-md-6 d-flex">
                        <div className="card dash-info flex-fill">
                          <div className="card-body">
                            <h5>Revenue</h5>
                            <h2>$467</h2>
                            <p>Earning this month</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 d-flex">
                        <div className="card dash-info flex-fill">
                          <div className="card-body">
                            <h5>Students Enrollments</h5>
                            <h2>12000</h2>
                            <p>New this month</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 d-flex">
                        <div className="card dash-info flex-fill">
                          <div className="card-body">
                            <h5>Courses Ratings</h5>
                            <h2>4.8</h2>
                            <p>Rating this month</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="earning-chart-header">
                          <h5>Earnings by Year</h5>
                          <div className="icon-form mb-0">
                            <span className="form-icon">
                              <i className="bx bx-calendar-edit" />
                            </span>
                            <DateRangePicker initialSettings={initialSettings}>
                              <input
                                type="text"
                                className="form-control bookingrange"
                              />
                            </DateRangePicker>
                          </div>
                        </div>
                        <div className="chart-body">
                          <div id="earnigs_chart">
                            <Chart
                              options={chartOptions}
                              series={chartOptions.series}
                              type={chartOptions.chart.type}
                              height={chartOptions.chart.height}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Dashboard Grid */}
                  </div>
                </div>
              </div>
              <div className="settings-widget card-details">
                <div className="settings-menu p-0">
                  <div className="profile-heading">
                    <h3>Best Selling Courses</h3>
                  </div>
                  <div className="checkout-form">
                    <div className="table-responsive custom-table">
                      {/* Referred Users*/}
                      <table className="table table-nowrap mb-0">
                        <thead>
                          <tr>
                            <th>Courses</th>
                            <th>Sales</th>
                            <th>Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="sell-table-group d-flex align-items-center">
                                <div className="sell-group-img">
                                  <Link to="/course-details">
                                    <img
                                      src={course28}
                                      className="img-fluid "
                                      alt="Img"
                                    />
                                  </Link>
                                </div>
                                <div className="sell-tabel-info">
                                  <p>
                                    <Link to="/course-details">
                                      Build Responsive Websites with HTML5 and
                                      CSS3
                                    </Link>
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>35</td>
                            <td>4,620</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="sell-table-group d-flex align-items-center">
                                <div className="sell-group-img">
                                  <Link to="/course-details">
                                    <img
                                      src={course29}
                                      className="img-fluid "
                                      alt="Img"
                                    />
                                  </Link>
                                </div>
                                <div className="sell-tabel-info">
                                  <p>
                                    <Link to="/course-details">
                                      C# Developers Double Your Coding with
                                      Visual Studio
                                    </Link>
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>35</td>
                            <td>4,620</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="sell-table-group d-flex align-items-center">
                                <div className="sell-group-img">
                                  <Link to="/course-details">
                                    <img
                                      src={course30}
                                      className="img-fluid "
                                      alt="Img"
                                    />
                                  </Link>
                                </div>
                                <div className="sell-tabel-info">
                                  <p>
                                    <Link to="/course-details">
                                      Information About UI/UX Design Degree
                                    </Link>
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>35</td>
                            <td>4,620</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
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
            {/* /Instructor Dashboard */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InstructorEarnings;
