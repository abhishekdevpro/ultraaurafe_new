import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ScheduleMeeting = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [meetingUrl, setMeetingUrl] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get meeting URL from location state or query params
    const urlParams = new URLSearchParams(location.search);
    const meetingUrlParam = urlParams.get("meetingUrl");

    if (meetingUrlParam) {
      setMeetingUrl(decodeURIComponent(meetingUrlParam));
      setLoading(false);
    } else if (location.state?.meetingUrl) {
      setMeetingUrl(location.state.meetingUrl);
      setLoading(false);
    } else {
      toast.error("No meeting URL provided");
      navigate(-1);
    }
  }, [location, navigate]);

  //   const handleClose = () => {
  //     navigate(-1);
  //   };

  if (loading) {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-3">Loading meeting...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid p-0">
      <div className="row">
        <div className="col-12">
          <div className="">
            {/* Header with close button */}
            {/* <div
              className="position-absolute top-0 start-0 w-100 bg-white border-bottom p-3"
              style={{ zIndex: 1000 }}
            >
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Live Class Meeting</h5>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={handleClose}
                >
                  Close Meeting
                </button>
              </div>
            </div> */}

            {/* Iframe container */}
            <div style={{ marginTop: "80px", height: "calc(100vh - 80px)" }}>
              <iframe
                src={meetingUrl}
                title="Live Class Meeting"
                width="100%"
                height="100%"
                style={{ border: "none" }}
                allow="camera; microphone; fullscreen; display-capture; autoplay"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleMeeting;
