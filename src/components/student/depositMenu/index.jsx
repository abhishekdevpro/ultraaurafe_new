import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function DepositMenu({ activeMenu }) {
  return (
    <div className="my-student-list">
      <ul>
        <li>
          <Link
            className={activeMenu === "Dashboard" ? "active" : ""}
            to="/deposit-student-dashboard"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/course-student">Courses</Link>
        </li>
        <li>
          <Link to="/course-wishlist">Wishlists</Link>
        </li>
        <li>
          <Link to="/course-message">Messages</Link>
        </li>
        <li>
          <Link to="/purchase-history">Purchase history</Link>
        </li>
        <li>
          <Link
            className={activeMenu === "Deposit" ? "active" : ""}
            to="/deposit-student"
          >
            Deposit
          </Link>
        </li>
        <li className="mb-0">
          <Link
            className={activeMenu === "Transactions" ? "active" : ""}
            to="/transactions-student"
          >
            Transactions
          </Link>
        </li>
      </ul>
    </div>
  );
}
