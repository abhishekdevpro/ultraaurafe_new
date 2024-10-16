import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { toast } from 'react-toastify';

const LiveClassTable = () => {
  const [error, setError] = useState(null);
  console.log(setError);

  // Simulating a fetch error for demonstration
  useEffect(() => {
    // Simulate fetching data (for demonstration purposes)
    const simulateFetch = () => {
      // Uncomment this line to simulate an error
      // setError('Failed to fetch data. Please try again.');
    };

    simulateFetch();
  }, []);

  return (
    <div className="empty-table">
      <div className="dashboard-title">
        <h4>Scheduled Classes</h4>
      </div>
      <div className="table-responsive custom-table">
        <table className="table table-nowrap mb-0">
          <thead>
            <tr>
              <th>Title</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {error ? (
              <tr>
                <td colSpan="4">{error}</td>
              </tr>
            ) : (
              <tr>
                <td colSpan="4">No scheduled classes available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LiveClassTable;
