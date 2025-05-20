import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Don't render pagination if there's only one page
  if (totalPages <= 1) return null;

  // Function to generate page numbers array
  const getPageNumbers = () => {
    const pageNumbers = [];
    
    // Always show first page
    pageNumbers.push(1);
    
    // Add ellipsis after first page if current page > 3
    if (currentPage > 3) {
      pageNumbers.push('...');
    }
    
    // Calculate range around current page
    let startPage = Math.max(2, currentPage - 1);
    let endPage = Math.min(totalPages - 1, currentPage + 1);
    
    // Adjust if at beginning or end
    if (currentPage <= 3) {
      endPage = Math.min(totalPages - 1, 4);
    }
    
    if (currentPage >= totalPages - 2) {
      startPage = Math.max(2, totalPages - 3);
    }
    
    // Add the range of pages
    for (let i = startPage; i <= endPage; i++) {
      if (!pageNumbers.includes(i)) {
        pageNumbers.push(i);
      }
    }
    
    // Add ellipsis before last page if needed
    if (totalPages > endPage + 1) {
      pageNumbers.push('...');
    }
    
    // Always show last page if totalPages > 1
    if (totalPages > 1 && !pageNumbers.includes(totalPages)) {
      pageNumbers.push(totalPages);
    }
    
    return pageNumbers;
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <div className="card-footer">
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          {/* Previous Button */}
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous page"
            >
              Previous
            </button>
          </li>
          
          {/* Page Numbers */}
          {getPageNumbers().map((page, index) => (
            <li
              key={`page-${index}`}
              className={`page-item ${page === currentPage ? "active" : ""} ${page === '...' ? "disabled" : ""}`}
            >
              {page === '...' ? (
                <span className="page-link">...</span>
              ) : (
                <button
                  className="page-link"
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              )}
            </li>
          ))}
          
          {/* Next Button */}
          <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Next page"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

// PropTypes validation
Pagination.propTypes = {
  /** Current active page number (starting from 1) */
  currentPage: PropTypes.number.isRequired,
  
  /** Total number of pages */
  totalPages: PropTypes.number.isRequired,
  
  /** Callback function when page changes */
  onPageChange: PropTypes.func.isRequired
};

// Default props
Pagination.defaultProps = {
  currentPage: 1,
  totalPages: 1
};

export default Pagination;