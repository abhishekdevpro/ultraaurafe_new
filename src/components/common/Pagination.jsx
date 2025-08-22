// import PropTypes from "prop-types";
// import React from "react";

// const Pagination = ({ currentPage, totalPages, onPageChange }) => {
//   if (totalPages <= 1) return null;

//   const pages = [];
//   const maxVisiblePages = 5;
//   let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
//   let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

//   if (endPage - startPage + 1 < maxVisiblePages) {
//     startPage = Math.max(1, endPage - maxVisiblePages + 1);
//   }

//   pages.push(
//     <li
//       key="prev"
//       className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
//     >
//       <button
//         className="page-link"
//         onClick={() => onPageChange(currentPage - 1)}
//         disabled={currentPage === 1}
//       >
//         Previous
//       </button>
//     </li>
//   );

//   if (startPage > 1) {
//     pages.push(
//       <li key={1} className="page-item">
//         <button className="page-link" onClick={() => onPageChange(1)}>
//           1
//         </button>
//       </li>
//     );
//     if (startPage > 2) {
//       pages.push(
//         <li key="ellipsis1" className="page-item disabled">
//           <span className="page-link">...</span>
//         </li>
//       );
//     }
//   }

//   for (let i = startPage; i <= endPage; i++) {
//     pages.push(
//       <li
//         key={i}
//         className={`page-item ${currentPage === i ? "active" : ""}`}
//       >
//         <button className="page-link" onClick={() => onPageChange(i)}>
//           {i}
//         </button>
//       </li>
//     );
//   }

//   if (endPage < totalPages) {
//     if (endPage < totalPages - 1) {
//       pages.push(
//         <li key="ellipsis2" className="page-item disabled">
//           <span className="page-link">...</span>
//         </li>
//       );
//     }
//     pages.push(
//       <li key={totalPages} className="page-item">
//         <button className="page-link" onClick={() => onPageChange(totalPages)}>
//           {totalPages}
//         </button>
//       </li>
//     );
//   }

//   pages.push(
//     <li
//       key="next"
//       className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}
//     >
//       <button
//         className="page-link"
//         onClick={() => onPageChange(currentPage + 1)}
//         disabled={currentPage === totalPages}
//       >
//         Next
//       </button>
//     </li>
//   );

//   return (
//     <nav aria-label="Pagination">
//       <ul className="pagination justify-content-center">{pages}</ul>
//     </nav>
//   );
// };

// export default Pagination;
// Pagination.propTypes = {
//   currentPage: PropTypes.number.isRequired,
//   totalPages: PropTypes.number.isRequired,
//   onPageChange: PropTypes.func.isRequired,
// };
import PropTypes from "prop-types";
import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const pages = [];
  const maxVisiblePages = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  // Previous button
  pages.push(
    <li
      key="prev"
      className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
    >
      <button
        className="page-link"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
    </li>
  );

  // First page + ellipsis
  if (startPage > 1) {
    pages.push(
      <li key={1} className="page-item d-none d-md-block">
        <button className="page-link" onClick={() => onPageChange(1)}>
          1
        </button>
      </li>
    );
    if (startPage > 2) {
      pages.push(
        <li key="ellipsis1" className="page-item disabled d-none d-md-block">
          <span className="page-link">...</span>
        </li>
      );
    }
  }

  // Main page numbers
  for (let i = startPage; i <= endPage; i++) {
    pages.push(
      <li
        key={i}
        className={`page-item ${currentPage === i ? "active" : ""} d-none d-md-block`}
      >
        <button className="page-link" onClick={() => onPageChange(i)}>
          {i}
        </button>
      </li>
    );
  }

  // Last page + ellipsis
  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      pages.push(
        <li key="ellipsis2" className="page-item disabled d-none d-md-block">
          <span className="page-link">...</span>
        </li>
      );
    }
    pages.push(
      <li key={totalPages} className="page-item d-none d-md-block">
        <button className="page-link" onClick={() => onPageChange(totalPages)}>
          {totalPages}
        </button>
      </li>
    );
  }

  // Next button
  pages.push(
    <li
      key="next"
      className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}
    >
      <button
        className="page-link"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </li>
  );

  return (
    <nav aria-label="Pagination">
      <ul className="pagination justify-content-center flex-wrap">
        {pages}

        {/* Mobile-friendly compact info */}
        <li className="page-item d-md-none disabled mx-2">
          <span className="page-link">
            {currentPage} / {totalPages}
          </span>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
