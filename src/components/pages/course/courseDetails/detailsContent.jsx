
import React, { useState, useEffect } from "react";
import axios from "axios";
import {  useParams } from 'react-router-dom';
// import FeatherIcon from "feather-icons-react";

import InstructorCard from "./InstructorCard";
import CourseContent from "./CourseContent";
import SidebarSection from "./SidebarSection";

const DetailsContent = ({courseFeatureData}) => {
  console.log(courseFeatureData,"FDDDD")
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // const [open, setOpen] = useState({});
  const {courseid} = useParams()

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const token = localStorage.getItem("trainerToken");
          const url = token
            ? `https://api.novajobs.us/api/students/course-details/${courseid}`
            : `https://api.novajobs.us/api/students/course-details/${courseid}`;
          const headers = token ? { Authorization: token } : {};
          
          const response = await axios.get(url, { headers });
          console.log(response.data.data.trainer_id,"cdd")
        if (response.data.data) {
          setCourseData(response.data.data);
        } else {
          setError("No course content available at this time.");
        }
      } catch (error) {
        console.error("Error fetching course data:", error);
        setError("Error loading course data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourseData();
  }, [courseid]);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="alert alert-warning">{error}</div>;
  }

  if (!courseData || !courseData.section_response || courseData.section_response.length === null) {
    return <div className="alert alert-info">No course content available at this time.</div>;
  }



  console.log(courseData,"kkkk")
 
  return (
    <>
      <section className="page-content course-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
           
              <CourseContent courseData={courseData}/>
              {/* /Course Content */}

            
              <InstructorCard trainerID={courseData.trainer_id}/>
             
              {/* Comment */}
              <div className="card comment-sec">
                <div className="card-body">
                  <h5 className="subs-title">Post A comment</h5>
                  <form action='#'>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-block">
                          <input type="text" className="form-control" placeholder="Full Name" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-block">
                          <input type="email" className="form-control" placeholder="Email" />
                        </div>
                      </div>
                    </div>
                    <div className="input-block">
                      <input type="email" className="form-control" placeholder="Subject" />
                    </div>
                    <div className="input-block">
                      <textarea rows={4} className="form-control" placeholder="Your Comments" defaultValue={""} />
                    </div>
                    <div className="submit-section">
                      <button className=" submit-btn" type="submit">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
              {/* /Comment */}
            </div>

           
            {console.log(courseid,'dasd')}
            <SidebarSection courseId={courseid}  courseData={courseData} courseFeatureData={courseFeatureData} />
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailsContent;