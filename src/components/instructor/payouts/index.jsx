import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../footer";
import { InstructorHeader } from "../header";
import InstructorSidebar from "../sidebar";
import Select from "react-select";
import { Download, MoreVertical } from "react-feather";
import { useSelector } from "react-redux";
export default function InstructorPayouts() {
  const mobileSidebar = useSelector(
    (state) => state.sidebarSlice.expandMenu
  );
  const [setDays] = useState(null);
  const [setYear] = useState(null);
  const [setType] = useState(null);
  const options1 = [
    { label: "30 days", value: "30" },
    { label: "20 days", value: "20" },
    { label: "10 days", value: "10" },
  ];
  const options2 = [
    { label: "Oct 2020", value: "Oct2020" },
    { label: "Nov 2020", value: "Nov2020" },
    { label: "Jan 2021", value: "Jan2021" },
  ];
  const options3 = [
    { label: "Cash", value: "cash" },
    { label: "Card", value: "card" },
    { label: "Online", value: "online" },
  ];
  const style = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: mobileSidebar === 'disabled' ? "white":"#131022",
      width: "100%",
      height: "40px",
      color: "black",
      minHeight: "40px",
      border: "1px solid #e9ecef",
      paddingLeft: "5px",
      // This line disable the blue border
      boxShadow: state.isFocused ? 0 : 0,
      borderRadius: state.isSelected ? "0" : "10px",
      fontSize: "14px",
      "&:hover": {
        cursor: "pointer",
      },
      outline: "none",
    }),
    menu: (base) => ({ ...base, marginTop: "0px" }),
    menuList: (base) => ({ ...base, padding: "0" }),
    option: (provided) => ({
      ...provided,
      backgroundColor:  mobileSidebar === 'disabled' ? "#fff" : "#000",
      color:mobileSidebar === 'disabled'? '#000':'#fff',
      fontSize: "14px",
      "&:hover": {
        backgroundColor:mobileSidebar === 'disabled'? "#FFDEDA":"#2b2838",
        // #dddddd
      },
    }),
    indicatorSeparator: (base) => ({
      ...base,
      display: "none",
    }),
    dropdownIndicator: (base, state) => ({
      ...base,
      color: "black",
      transform: state.selectProps.menuIsOpen ? "rotate(-180deg)" : "rotate(0)",
      transition: "250ms",
    }),
  };
  return (
    <div className="main-wrapper">
      <InstructorHeader activeMenu={"Payouts"} />
      {/* Page Wrapper */}
      <div className="page-content">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <InstructorSidebar activeMenu={"Payouts"} />
            {/* Sidebar */}

            {/* Instructor Users */}
            <div className="col-xl-9 col-lg-8 col-md-12">
              <div className="tak-instruct-group">
                <div className="row">
                  <div className="col-md-12">
                    <div className="settings-widget">
                      <div className="settings-inner-blk p-0">
                        <div className="sell-course-head comman-space">
                          <h3>Payout Method</h3>
                          <p>
                            Order Dashboard is a quick overview of all current
                            orders.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="settings-widget">
                      <div className="settings-inner-blk p-0">
                        <div className="comman-space pb-0">
                          <div className="sell-course-head withdraw-history-head border-bottom-0">
                            <h3>Withdraw History</h3>
                          </div>
                          <div className="instruct-search-blk mb-0">
                            <div className="show-filter all-select-blk">
                              <form action="#">
                                <div className="row gx-2 align-items-center">
                                  <div className="col-md-6 col-lg-3 col-item">
                                    <div className="input-block select-form mb-0">
                                      <Select
                                        className=" select"
                                        name="sellist1"
                                        options={options1}
                                        defaultValue={options1[0]}
                                        placeholder="All"
                                        onChange={setDays}
                                        styles={style}
                                      ></Select>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-3 col-item">
                                    <div className="input-block select-form mb-0">
                                      <Select
                                        className=" select"
                                        name="sellist1"
                                        options={options2}
                                        defaultValue={options2[0]}
                                        placeholder="Rating"
                                        onChange={setYear}
                                        styles={style}
                                      ></Select>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-3 col-item">
                                    <div className="input-block select-form mb-0">
                                      <Select
                                        className=" select"
                                        name="sellist1"
                                        options={options3}
                                        defaultValue={options3[0]}
                                        placeholder="Sort"
                                        onChange={setType}
                                        styles={style}
                                      ></Select>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-3 col-item">
                                    <div className="download-widra">
                                      <Link to="#">
                                        <Download
                                          size={16}
                                          className="hoverRed"
                                          color="black"
                                        />
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className="comman-space pb-0">
                          <div className="settings-referral-blk course-instruct-blk  table-responsive">
                            {/* Instructor Users */}
                            <table className="table table-nowrap mb-0">
                              <thead>
                                <tr>
                                  <th>
                                    <div className="form-check instruct-check-list">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="option1"
                                      />
                                    </div>
                                  </th>
                                  <th>ID</th>
                                  <th>DATE</th>
                                  <th>STATUS</th>
                                  <th>AMOUNT</th>
                                  <th>METHOD </th>
                                  <th>&nbsp;</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <div className="form-check instruct-check-list">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="option1"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <Link to="view-invoice">#1061</Link>
                                  </td>
                                  <td>10-05-20</td>
                                  <td>
                                    <span className="badge info-low">Paid</span>
                                  </td>
                                  <td>$1800</td>
                                  <td>Mastercard </td>
                                  <td>
                                    <Link
                                      to="#"
                                      className="hoverRed"
                                    >
                                      <MoreVertical size={16} />
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="form-check instruct-check-list">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="option1"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <Link to="view-invoice">#1051</Link>
                                  </td>
                                  <td>10-05-20</td>
                                  <td>
                                    <span className="badge info-low">Paid</span>
                                  </td>
                                  <td>$1200</td>
                                  <td>Mastercard </td>
                                  <td>
                                    <Link
                                      to="#"
                                      className="hoverRed"
                                    >
                                      <MoreVertical size={16} />
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="form-check instruct-check-list">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="option1"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <Link to="view-invoice">#2061</Link>
                                  </td>
                                  <td>10-05-20</td>
                                  <td>
                                    <span className="badge info-medium">
                                      Pending
                                    </span>
                                  </td>
                                  <td>$1100</td>
                                  <td>Visa</td>
                                  <td>
                                    <Link
                                      to="#"
                                      className="hoverRed"
                                    >
                                      <MoreVertical size={16} />
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="form-check instruct-check-list">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="option1"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <Link to="view-invoice">#1021</Link>
                                  </td>
                                  <td>10-05-20</td>
                                  <td>
                                    <span className="badge info-high">
                                      Cancel
                                    </span>
                                  </td>
                                  <td>$1200</td>
                                  <td>Visa </td>
                                  <td>
                                    <Link
                                      to="#"
                                      className="hoverRed"
                                    >
                                      <MoreVertical size={16} />
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="form-check instruct-check-list">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="option1"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <Link to="view-invoice">#1051</Link>
                                  </td>
                                  <td>10-05-20</td>
                                  <td>
                                    <span className="badge info-low">Paid</span>
                                  </td>
                                  <td>$1500</td>
                                  <td>Mastercard </td>
                                  <td>
                                    <Link
                                      to="#"
                                      className="hoverRed"
                                    >
                                      <MoreVertical size={16} />
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="form-check instruct-check-list">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="option1"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <Link to="view-invoice">#1061</Link>
                                  </td>
                                  <td>10-05-20</td>
                                  <td>
                                    <span className="badge info-low">Paid</span>
                                  </td>
                                  <td>$2200</td>
                                  <td>Visa </td>
                                  <td>
                                    <Link
                                      to="#"
                                      className="hoverRed"
                                    >
                                      <MoreVertical size={16} />
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="form-check instruct-check-list">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="option1"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <Link to="view-invoice">#2061</Link>
                                  </td>
                                  <td>10-05-20</td>
                                  <td>
                                    <span className="badge info-low">Paid</span>
                                  </td>
                                  <td>$3200</td>
                                  <td>Mastercard </td>
                                  <td>
                                    <Link
                                      to="#"
                                      className="hoverRed"
                                    >
                                      <MoreVertical size={16} />
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="form-check instruct-check-list">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="option1"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <Link to="view-invoice">#1161</Link>
                                  </td>
                                  <td>10-05-20</td>
                                  <td>
                                    <span className="badge info-low">Paid</span>
                                  </td>
                                  <td>$1400</td>
                                  <td>Visa </td>
                                  <td>
                                    <Link
                                      to="#"
                                      className="hoverRed"
                                    >
                                      <MoreVertical size={16} />
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="form-check instruct-check-list">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="option1"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <Link to="view-invoice">#3061</Link>
                                  </td>
                                  <td>10-05-20</td>
                                  <td>
                                    <span className="badge info-low">Paid</span>
                                  </td>
                                  <td>$1300</td>
                                  <td>Mastercard </td>
                                  <td>
                                    <Link
                                      to="#"
                                      className="hoverRed"
                                    >
                                      <MoreVertical size={16} />
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="form-check instruct-check-list">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="option1"
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <Link to="view-invoice">#1061</Link>
                                  </td>
                                  <td>10-05-20</td>
                                  <td>
                                    <span className="badge info-high">
                                      Cancel
                                    </span>
                                  </td>
                                  <td>$1200</td>
                                  <td>Mastercard </td>
                                  <td>
                                    <Link
                                      to="#"
                                      className="hoverRed"
                                    >
                                      <MoreVertical size={16} />
                                    </Link>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            {/* Instructor List */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Instructor Dashboard */}
          </div>
        </div>
      </div>
      {/* Page Wrapper */}
      <Footer />
    </div>
  );
}
