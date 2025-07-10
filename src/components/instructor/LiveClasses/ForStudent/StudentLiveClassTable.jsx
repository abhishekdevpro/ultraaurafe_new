import React, { useState, useEffect } from "react";
import axios from "axios";
import ZoomMeetingModal from "../ZoomMeetingModal";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const StudentLiveClassTable = () => {
  const navigate = useNavigate();
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showMeetingModal, setShowMeetingModal] = useState(false);
  const [activeMeetingUrl, setActiveMeetingUrl] = useState("");
  // const [passcode, setPasscode] = useState(" ");

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
    console.log(tokenToUse, "ttuuu");

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
    if (liveClass.meeting_join_url) {
      // Navigate to ScheduleMeeting page with the meeting URL
      navigate("/student/schedule-meeting", {
        state: { meetingUrl: liveClass.meeting_join_url },
      });
    } else {
      toast.error("Meeting URL not available");
    }
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
                          <td>
                            {new Date(liveClass.start_time).toLocaleString()}
                          </td>
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
        // passcode={passcode}
      />
    </div>
  );
};

export default StudentLiveClassTable;
