import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function CourseMenu({ activeMenu }) {
  return (
    <div className="my-student-list">
      <ul>
        <li>
          <Link
            className={activeMenu === "Courses" ? "active" : ""}
            to="/course-student"
          >
            Courses
          </Link>
        </li>
        <li>
          <Link
            className={activeMenu === "Wishlists" ? "active" : ""}
            to="/course-wishlist"
          >
            Wishlists
          </Link>
        </li>
        <li>
          <Link
            className={activeMenu === "Messages" ? "active" : ""}
            to="/course-message"
          >
            Messages
          </Link>
        </li>
        <li>
          <Link
            className={activeMenu === "Purchase" ? "active" : ""}
            to="/purchase-history"
          >
            Purchase history
          </Link>
        </li>
      </ul>
    </div>
  );
}
