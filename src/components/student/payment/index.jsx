import React, { useState } from "react";
import StudentHeader from "../../student/header";
import Footer from "../../footer";
import StudentSideBar from "../sidebar";
import { Link } from "react-router-dom";
import Select from "react-select";
// import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function StudentPayment() {
  const mobileSidebar = useSelector(
    (state) => state.sidebarSlice.expandMenu
  );
  const [setshow] = useState();
  const [ setCountry] = useState(null);
  const options = [
    { label: "Select Country", value: "Select" },
    { label: "India", value: "India" },
    { label: "America", value: "America" },
    { label: "London", value: "London" },
  ];
  const style = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor:mobileSidebar === 'disabled' ? "white":"#000",
      width: "100%",
      height: "40px",
      color: "black",
      minHeight: "44px",
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

  // const handleClose = () => {
  //   setshow(false);
  // };

  const handleShow = () => {
    setshow(true);
  };

  return (
    <div className="main-wrapper">
      <StudentHeader activeMenu={"Payment"} />
      {/* Student Dashboard */}
      <div className="page-content">
        <div className="container">
          <div className="row">
            {/* sidebar */}
            <StudentSideBar activeMenu={"Payment"} />
            {/* sidebar */}

            {/* Profile Details */}
            <div className="col-xl-9 col-md-8">
              <div className="settings-widget profile-details">
                <div className="settings-inner-blk p-0">
                  <div className="profile-heading">
                    <h3>Payment Methods</h3>
                    <p>Primary payment method is used by default</p>
                  </div>
                  <div className="comman-space">
                    <div className="settings-btn-grp hvr-sweep-to-right">


                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#addpaymentMethod"
                        onClick={handleShow}
                       
                      >
                        Add Payment Method
                      </Link>
                    </div>
                    <div className="payment-method-blk">
                      {/* Payment Method */}
                      <div className="payment-list d-flex align-items-center">
                        <div className="me-auto">
                          <h5>Visa ending in 1234</h5>
                          <p>Expires in 10/2021</p>
                        </div>
                        <div>
                          <ul className="grp-action-style inline-inline">
                            <li className="list-inline-item">
                              <Link
                                to="#"
                                className="btn btn-action-style btn-action-primary"
                              >
                                primary
                              </Link>
                            </li>
                            <li className="list-inline-item ">
                              <Link
                                to="#"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Edit"
                                className="btn btn-action-style btn-action-dark "
                              >
                                <i className="fa-regular fa-pen-to-square"></i>
                                {/* <span className="tooltipEdit">Edit</span> */}
                              </Link>
                            </li>
                            <li className="list-inline-item ">
                              <Link
                                to="#"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Make it Primary"
                                className="btn btn-action-style btn-action-method "
                              >
                                <i className="fa-regular fa-credit-card"></i>
                                {/* <span className="tooltipMake">
                                  Make it Primary
                                </span> */}
                              </Link>
                            </li>
                            <li className="list-inline-item ">
                              <Link
                                to="#"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Remove"
                                className="btn btn-action-style btn-action-delete"
                              >
                                <i className="fa-regular fa-trash-can"></i>
                                {/* <span className="tooltipRemove">Remove</span> */}
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* Payment Method */}

                      {/* Payment Method */}
                      <div className="payment-list d-flex align-items-center">
                        <div className="me-auto">
                          <h5>Mastercard ending in 1234</h5>
                          <p>Expires in 10/2021</p>
                        </div>
                        <div>
                          <ul className="grp-action-style inline-inline">
                            <li className="list-inline-item">
                              <Link
                                to="#"
                                className="btn btn-action-style btn-action-primary"
                              >
                                primary
                              </Link>
                            </li>
                            <li className="list-inline-item">
                              <Link
                                to="#"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Edit"
                                className="btn btn-action-style btn-action-dark"
                              >
                                <i className="fa-regular fa-pen-to-square"></i>
                              </Link>
                            </li>
                            <li className="list-inline-item">
                              <Link
                                to="#"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Make it Primary"
                                className="btn btn-action-style btn-action-method"
                              >
                                <i className="fa-regular fa-credit-card"></i>
                              </Link>
                            </li>
                            <li className="list-inline-item">
                              <Link
                                to="#"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Remove"
                                className="btn btn-action-style btn-action-delete"
                              >
                                <i className="fa-regular fa-trash-can"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* Payment Method */}

                      {/* Payment Method */}
                      <div className="payment-list d-flex align-items-center">
                        <div className="me-auto">
                          <h5>Discover ending in 1234</h5>
                          <p>Expires in 10/2021</p>
                        </div>
                        <div>
                          <ul className="grp-action-style inline-inline">
                            <li className="list-inline-item">
                              <Link
                                to="#"
                                className="btn btn-action-style btn-action-primary"
                              >
                                primary
                              </Link>
                            </li>
                            <li className="list-inline-item">
                              <Link
                                to="#"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Edit"
                                className="btn btn-action-style btn-action-dark"
                              >
                                <i className="fa-regular fa-pen-to-square"></i>
                              </Link>
                            </li>
                            <li className="list-inline-item">
                              <Link
                                to="#"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Make it Primary"
                                className="btn btn-action-style btn-action-method"
                              >
                                <i className="fa-regular fa-credit-card"></i>
                              </Link>
                            </li>
                            <li className="list-inline-item">
                              <Link
                                to="#"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Remove"
                                className="btn btn-action-style btn-action-delete"
                              >
                                <i className="fa-regular fa-trash-can"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* Payment Method */}

                      {/* Payment Method */}
                      <div className="payment-list d-flex align-items-center">
                        <div className="me-auto">
                          <h5>American Express ending in 1234</h5>
                          <p>Expires in 10/2021</p>
                        </div>
                        <div>
                          <ul className="grp-action-style inline-inline">
                            <li className="list-inline-item">
                              <Link
                                to="#"
                                className="btn btn-action-style btn-action-primary"
                              >
                                primary
                              </Link>
                            </li>
                            <li className="list-inline-item">
                              <Link
                                to="#"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Edit"
                                className="btn btn-action-style btn-action-dark"
                              >
                                <i className="fa-regular fa-pen-to-square"></i>
                              </Link>
                            </li>
                            <li className="list-inline-item">
                              <Link
                                to="#"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Make it Primary"
                                className="btn btn-action-style btn-action-method"
                              >
                                <i className="fa-regular fa-credit-card"></i>
                              </Link>
                            </li>
                            <li className="list-inline-item">
                              <Link
                                to="#"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Remove"
                                className="btn btn-action-style btn-action-delete"
                              >
                                <i className="fa-regular fa-trash-can"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* Payment Method */}

                      {/* Payment Method */}
                      <div className="payment-list d-flex align-items-center">
                        <div className="me-auto">
                          <h5>Paypal Express ending in 1234</h5>
                          <p>Expires in 10/2021</p>
                        </div>
                        <div>
                          <ul className="grp-action-style inline-inline">
                            <li className="list-inline-item">
                              <Link
                                to="#"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Edit"
                                className="btn btn-action-style btn-action-dark"
                              >
                                <i className="fa-regular fa-pen-to-square"></i>
                              </Link>
                            </li>
                            <li className="list-inline-item">
                              <Link
                                to="#"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Make it Primary"
                                className="btn btn-action-style btn-action-method"
                              >
                                <i className="fa-regular fa-credit-card"></i>
                              </Link>
                            </li>
                            <li className="list-inline-item">
                              <Link
                                to="#"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Remove"
                                className="btn btn-action-style btn-action-delete"
                              >
                                <i className="fa-regular fa-trash-can"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* Payment Method */}
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

      {/* <Modal show={show} onHide={handleClose} centered
      className="modal-styles modal fade"
      id="addpaymentMethod"
      aria-labelledby="addpaymentMethod"
      aria-hidden="true"
      >

      <Modal.Header className="modal-header"  closeButton>
                  <Modal.Title>
                     <h5 className="modal-title">Add New Payment Method</h5>
                  </Modal.Title>
               </Modal.Header>
        <Modal.Body className="modal-body">
      
        <div className="addpaymethod-form add-course-info">
  <form action="#">
    <div className="row">
      <div className="col-lg-12">
        <div className="wallet-method">
          <label className="radio-inline custom_radio me-4">
            <input type="radio" name="optradio" defaultChecked="" />
            <span className="checkmark" /> Credit or Debit card
          </label>
          <label className="radio-inline custom_radio">
            <input type="radio" name="optradio" />
            <span className="checkmark" /> PayPal
          </label>
        </div>
        <div className="input-block">
          <label className="form-control-label">Card Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="XXXX XXXX XXXX XXXX"
          />
        </div>
      </div>
      <div className="col-lg-4">
        <div className="input-block">
          <label className="form-label">Month</label>
          <select className="form-select select" name="sellist1">
            <option>Month</option>
            <option>Brazil</option>
            <option>French</option>
          </select>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="input-block">
          <label className="form-label">Year</label>
          <select className="form-select select" name="sellist1">
            <option>Year</option>
            <option>India</option>
            <option>America</option>
            <option>London</option>
          </select>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="input-block">
          <label className="form-control-label">CVV Code </label>
          <input type="text" className="form-control" placeholder="XXXX" />
        </div>
      </div>
      <div className="col-lg-12">
        <div className="input-block mb-0">
          <label className="form-control-label">Name on Card</label>
          <input type="text" className="form-control" placeholder="Address" />
        </div>
      </div>
    </div>
  </form>
</div>

        </Modal.Body>

        <Modal.Footer className="modal-footer me-auto">
       
  <button type="button" className="btn btn-modal-style btn-theme">
    Save changes
  </button>
  <button
    type="button"
    className="btn btn-modal-style btn-cancel"
    data-bs-dismiss="modal"
    onClick={handleClose}
  >
    Close
  </button>


        </Modal.Footer>
      </Modal> */}

<div
  className="modal-styles modal fade "
  id="addpaymentMethod"
 
  aria-labelledby="addpaymentMethod"
  aria-hidden="true"  
>

  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Add New Payment Method</h5>
        <button
          type="button"
          className="close"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          <i className="fa-regular fa-circle-xmark" />
        </button>
      </div>
      <div className="modal-body">
        <div className="addpaymethod-form add-course-info">
          <form action="#">
            <div className="row">
              <div className="col-lg-12">
                <div className="wallet-method">
                  <label className="radio-inline custom_radio me-4">
                    <input type="radio" name="optradio" defaultChecked="" />
                    <span className="checkmark" /> Credit or Debit card
                  </label>
                  <label className="radio-inline custom_radio">
                    <input type="radio" name="optradio" />
                    <span className="checkmark" /> PayPal
                  </label>
                </div>
                <div className="input-block">
                  <label className="form-control-label">Card Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="XXXX XXXX XXXX XXXX"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="input-block">
                  <label className="form-label">Month</label>
                  <select className="form-select select" name="sellist1">
                    <option>Month</option>
                    <option>Brazil</option>
                    <option>French</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="input-block">
                  <label className="form-label">Year</label>
                  <Select
                              className=" select"
                              name="sellist1"
                              options={options}
                              defaultValue={options[0]}
                              placeholder="Select Country"
                              onChange={setCountry}
                              styles={style}
                            ></Select>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="input-block">
                  <label className="form-control-label">CVV Code </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="XXXX"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="input-block mb-0">
                  <label className="form-control-label">Name on Card</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="modal-footer me-auto">
        <button type="button" className="btn btn-modal-style btn-theme">
          Save changes
        </button>
        <button
          type="button"
          className="btn btn-modal-style btn-cancel"
          data-bs-dismiss="modal"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</div>

      <Footer />
    </div>
  );
}
