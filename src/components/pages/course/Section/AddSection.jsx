
import React, { useState} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../../../footer";
import CourseHeader from "../header";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import FeatherIcon from 'feather-icons-react';
import { debounce } from "lodash";

// Styled components
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem

  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;

const Title = styled.h2`
  margin: 0;
  font-size: 24px;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  font-size: 18px;

  }
`;

const ButtonGroup = styled.ul`
  display: flex;
  gap: 0.25rem;
  list-style: none;
  padding: 0;
  margin: 0;

  & > li {
    margin-left: 10px;

    @media (max-width: 768px) {
      margin-left: 0;

    }
  }

  & > li > a {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    font-size: 16px;
    text-decoration: none;
    color: #fff;

    &.btn-primary {
      background-color: #007bff;
      border: none;
    }

    &.btn-black {
      background-color: #000;
      border: none;
    }

    @media (max-width: 768px) {
      padding: 2px;
      justify-content: center;
      font-size: 5px;
      gap:1rem;

      & > span {
        display: none; /* Hide text on smaller screens */
      }
    }
  }

  & > li > a > svg {
    margin-right: 8px;

    @media (max-width: 768px) {
      margin-right: 0;
    }
  }
`;


const AddSection = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [sectionData, setSectionData] = useState({
    section_name: sessionStorage.getItem("section_name") || "",
    section_objective: sessionStorage.getItem("section_objective") || "",
  });

 

  const handleInputChange = (e) => {
    setSectionData({ ...sectionData, [e.target.name]: e.target.value });
  };

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setSectionData({ ...sectionData, section_objective: data });
  };

  // const handleSave = debounce(async () => {
  //   try {
  //     const token = localStorage.getItem("trainerToken") || localStorage.getItem('adminToken') || localStorage.getItem('vendorToken');
  //     const response = await axios.post(
  //       `https://api.novajobs.us/api/trainers/${id}/section`,
  //       sectionData,
  //       {
  //         headers: {
  //           Authorization: token,
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     console.log("Section saved successfully:", response.data.data);
  //     toast.success('Section created successfully!');
      
  //     // Clear session storage after successful save
  //     // sessionStorage.removeItem("section_name");
  //     // sessionStorage.removeItem("section_objective");

  //     setTimeout(() => {
  //       navigate(`/course-details/${id}`);
  //     }, 2000); // Navigate after 2 seconds
  //   } catch (error) {
  //     console.error("Error saving section:", error);
  //     toast.error('Failed to create section. Please try again.');
  //   }
  // });
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = debounce(async () => {
    if (isLoading) return; // Prevent multiple clicks

    setIsLoading(true);
    try {
      const token = localStorage.getItem("trainerToken") || localStorage.getItem('adminToken') || localStorage.getItem('vendorToken');
      const response = await axios.post(
        `https://api.novajobs.us/api/trainers/${id}/section`,
        sectionData,
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Section saved successfully:", response.data.data);
      toast.success('Section created successfully!');

      setTimeout(() => {
        navigate(`/course-details/${id}`);
      }, 2000); // Navigate after 2 seconds
    } catch (error) {
      console.error("Error saving section:", error);
      toast.error('Failed to create section. Please try again.');
    } finally {
      setIsLoading(false);
    }
  });

  return (
    <div className="main-wrapper">
      <CourseHeader activeMenu={"AddSection"} />
      

      <section className="page-content course-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
            <HeaderWrapper>
      <Title>Add New Section</Title>
      <ButtonGroup>
        
        <li>
          <Link to={`/course-details/${id}`} className="btn btn-primary">
            <FeatherIcon icon="list" />
            <span>Section-List</span>
          </Link>
        </li>
        <li>
          <Link to={`/course-details/${id}`} className="btn btn-black">
            <FeatherIcon icon="arrow-left" />
            <span>Back</span>
          </Link>
        </li>
      </ButtonGroup>
    </HeaderWrapper>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="widget-set">
                  <div className="widget-content multistep-form">
                    <div className="add-course-info">
                      <div className="add-course-inner-header">
                        <h4>Section Information</h4>
                      </div>
                      <div className="add-course-form">
                        <form action="#">
                          <div className="input-block">
                            <label className="add-course-label">Section Name</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter section name"
                              name="section_name"
                              value={sectionData.section_name}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="input-block mb-0">
                            <label className="add-course-label">Section Objective</label>
                            <div id="editor">
                              <CKEditor
                                editor={ClassicEditor}
                                onChange={handleEditorChange}
                                data={sectionData.section_objective}
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="widget-btn">
                      <button 
      onClick={handleSave} 
      disabled={isLoading}
      className="btn btn-primary"
    >
      {isLoading ? (
        <>
          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
          Saving...
        </>
      ) : (
        'Save'
      )}
    </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AddSection;
