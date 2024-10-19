import React, { useState, useEffect } from "react";
import axios from "axios";
import ZoomMeetingModal from "../ZoomMeetingModal";
import { toast } from "react-toastify";

const StudentLiveClassTable = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showMeetingModal, setShowMeetingModal] = useState(false);
  const [activeMeetingUrl, setActiveMeetingUrl] = useState("");

  const studentToken = localStorage.getItem("token");
const adminToken = localStorage.getItem("adminToken");

useEffect(() => {
  fetchClasses();
}, [studentToken, adminToken]);

const fetchClasses = async () => {
  setLoading(true);
  
  const url = adminToken
    ? "https://api.novajobs.us/api/trainers/all-live-class"
    : "https://api.novajobs.us/api/students/my-live-classes";
  
  const tokenToUse = adminToken || studentToken;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `${tokenToUse}`, 
      },
    });

    if (response.data && response.data.data) {
      setClasses(response.data.data);
      setError(null);
    } else {
      setError("No scheduled classes available");
    }
  } catch (error) {
    // Log the actual error for debugging
    console.error("Fetch classes error:", error);
    setError("Failed to fetch data. Please try again.");
  } finally {
    setLoading(false);
  }
};


//   const handleJoin = (liveClass) => {
//     console.log(liveClass,"lc");
//     setActiveMeetingUrl(`https://zoom.us/wc/join/${liveClass.meeting_id}`);
//     setShowMeetingModal(true);
//     const meetingInfoString = liveClass.meeting_info;
// const meetingInfo = JSON.parse(meetingInfoString);

// const passcode = meetingInfo.password || "No passcode available";
// const topic = meetingInfo.topic || "No topic available"; 
// console.log(meetingInfo);
// console.log("Passcode:", passcode);
// console.log("Topic:", topic);

//   };
const handleJoin = (liveClass) => {
    console.log(liveClass, "lc");
  
    // Parse meeting information
    const meetingInfoString = liveClass.meeting_info;
    let meetingInfo;
    try {
      meetingInfo = JSON.parse(meetingInfoString);
    } catch (error) {
      console.error("Invalid meeting info format", error);
      alert("Invalid meeting info format. Please try again.");
      return;
    }
  
    const meetingId = liveClass.meeting_id;
    const passcode = meetingInfo.password || "";

  
    if (!meetingId) {

      toast.error("Meeting ID is missing. Please check the meeting details.");
      return;
    }
  
    if (!passcode) {
      console.log(passcode);
        toast.error("Invalid user or missing password for the meeting. Please check the credentials.");
      return;
    }
  
    // Construct the Zoom meeting URL
    const zoomUrl = `https://zoom.us/wc/${meetingId}/join?pwd=${encodeURIComponent(passcode)}`;
    setActiveMeetingUrl(zoomUrl);
    setShowMeetingModal(true);
  
  };
  

  const handleMeetingClose = () => {
    setShowMeetingModal(false);
    setActiveMeetingUrl("");
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-header text-black">
              <h4 className="mb-0">Scheduled Classes</h4>
            </div>
            <div className="card-body">
              {loading ? (
                <div className="text-center">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : error ? (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              ) : (
                <div className="table-responsive">
                  <table className="table table-hover table-striped">
                    <thead className="table-light">
                      <tr>
                        <th>Title</th>
                        <th>Start Time</th>
                        <th>Duration</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {classes.map((liveClass) => (
                        <tr key={liveClass.id}>
                          <td>{liveClass.title}</td>
                          <td>{new Date(liveClass.start_time).toLocaleString()}</td>
                          <td>{liveClass.duration} minutes</td>
                          <td>
                            <button
                              className="btn btn-success"
                              onClick={() => handleJoin(liveClass)}
                            >
                              Join Now
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <ZoomMeetingModal
        showMeetingModal={showMeetingModal}
        handleMeetingClose={handleMeetingClose}
        activeMeetingUrl={activeMeetingUrl}
      />
    </div>
  );
};

export default StudentLiveClassTable;
