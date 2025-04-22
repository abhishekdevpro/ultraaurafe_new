
import React, { useState, useEffect } from "react";
import Footer from "../footer";
import axios from 'axios';
import { AdminHeader } from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import { toast } from "react-toastify";

export const AddStudentForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    password: '',
    country_id: '',
    state_id: '',
    city_id: '',
    qualification_id: '',
  });

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [qualifications, setQualifications] = useState([]);


  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://api.novajobs.us/api/students/countries"
        );
        setCountries(response.data.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  useEffect(() => {
    if (formData.country_id) {
      const fetchStates = async () => {
        try {
          const response = await axios.get(
            `https://api.novajobs.us/api/students/stats/${formData.country_id}`
          );
          setStates(response.data.data);
        } catch (error) {
          console.error("Error fetching states:", error);
        }
      };
      fetchStates();
    }
  }, [formData.country_id]);

  useEffect(() => {
    if (formData.state_id) {
      const fetchCities = async () => {
        try {
          const response = await axios.get(
            `https://api.novajobs.us/api/students/cities/${formData.state_id}`
          );
          setCities(response.data.data);
        } catch (error) {
          console.error("Error fetching cities:", error);
        }
      };
      fetchCities();
    }
  }, [formData.state_id]);

  useEffect(() => {
    const fetchQualifications = async () => {
      try {
        const response = await axios.get(
          "https://api.novajobs.us/api/students/qualifications"
        );
        setQualifications(response.data.data);
      } catch (error) {
        console.error("Error fetching qualifications:", error);
      }
    };
    fetchQualifications();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Convert ID fields to numbers
    if (['country_id', 'state_id', 'city_id', 'qualification_id'].includes(name)) {
      setFormData({ ...formData, [name]: value ? parseInt(value, 10) : '' });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://api.novajobs.us/api/uaadmin/student',
        formData,
        {
          headers: {
            Authorization: localStorage.getItem('adminToken'),
          },
        }
      );
      console.log('Student added successfully:', response.data.message);
      toast.success(`${response.data.message}`)
      // Reset form or show success message
    } catch (error) {
      console.error('Error adding student:', error);
      toast.error("Error adding student")
      // Show error message
    }
  };

//   return (
//     <div className="main-wrapper">
//       <AdminHeader />
//       <div className="breadcrumb-bar breadcrumb-bar-info">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12 col-12">
//               <div className="breadcrumb-list">
//                 <h2 className="breadcrumb-title">Admin Dashboard</h2>
//                 <nav aria-label="breadcrumb" className="page-breadcrumb">
//                 </nav>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="page-content">
//         <div className="container">
//           <div className="row">
//             <AdminSidebar />
//             <div className="col-xl-9 col-lg-9">
//               <div className="row justify-content-center">
//                 <FormContainer>
//                   <h2>Add New Student</h2>
//                   <StyledForm onSubmit={handleSubmit}>
//                     <FormGroup>
//                       <Label htmlFor="first_name">First Name</Label>
//                       <Input
//                         type="text"
//                         id="first_name"
//                         name="first_name"
//                         value={formData.first_name}
//                         onChange={handleChange}
//                         required
//                       />
//                     </FormGroup>
//                     <FormGroup>
//                       <Label htmlFor="last_name">Last Name</Label>
//                       <Input
//                         type="text"
//                         id="last_name"
//                         name="last_name"
//                         value={formData.last_name}
//                         onChange={handleChange}
//                         required
//                       />
//                     </FormGroup>
//                     <FormGroup>
//                       <Label htmlFor="email">Email</Label>
//                       <Input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                       />
//                     </FormGroup>
//                     <FormGroup>
//                       <Label htmlFor="phone">Phone</Label>
//                       <Input
//                         type="tel"
//                         id="phone"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         required
//                       />
//                     </FormGroup>
//                     <FormGroup>
//                       <Label htmlFor="password">Password</Label>
//                       <Input
//                         type="password"
//                         id="password"
//                         name="password"
//                         value={formData.password}
//                         onChange={handleChange}
//                         required
//                       />
//                     </FormGroup>
//                     <FormGroup>
//                       <Label htmlFor="country_id">Country</Label>
//                       <Select
//                         id="country_id"
//                         name="country_id"
//                         value={formData.country_id}
//                         onChange={handleChange}
//                         required
//                       >
//                         <option value="">Select Country</option>
//                         {countries.map((country) => (
//                           <option key={country.id} value={country.id}>
//                             {country.name}
//                           </option>
//                         ))}
//                       </Select>
//                     </FormGroup>
//                     <FormGroup>
//                       <Label htmlFor="state_id">State</Label>
//                       <Select
//                         id="state_id"
//                         name="state_id"
//                         value={formData.state_id}
//                         onChange={handleChange}
//                         required
//                       >
//                         <option value="">Select State</option>
//                         {states.map((state) => (
//                           <option key={state.id} value={state.id}>
//                             {state.name}
//                           </option>
//                         ))}
//                       </Select>
//                     </FormGroup>
//                     <FormGroup>
//                       <Label htmlFor="city_id">City</Label>
//                       <Select
//                         id="city_id"
//                         name="city_id"
//                         value={formData.city_id}
//                         onChange={handleChange}
//                         required
//                       >
//                         <option value="">Select City</option>
//                         {cities.map((city) => (
//                           <option key={city.id} value={city.id}>
//                             {city.name}
//                           </option>
//                         ))}
//                       </Select>
//                     </FormGroup>
//                     <FormGroup>
//                       <Label htmlFor="qualification_id">Qualification</Label>
//                       <Select
//                         id="qualification_id"
//                         name="qualification_id"
//                         value={formData.qualification_id}
//                         onChange={handleChange}
//                         required
//                       >
//                         <option value="">Select Qualification</option>
//                         {qualifications.map((qualification) => (
//                           <option key={qualification.id} value={qualification.id}>
//                             {qualification.name}
//                           </option>
//                         ))}
//                       </Select>
//                     </FormGroup>
//                     <SubmitButton type="submit">Add Student</SubmitButton>
//                   </StyledForm>
//                 </FormContainer>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
return (
    <div className="main-wrapper">
      <AdminHeader />
      <div className="breadcrumb-bar breadcrumb-bar-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="breadcrumb-list">
                <h2 className="breadcrumb-title">Admin Dashboard</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-content">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3">
            <AdminSidebar />
            </div>
            <div className="col-xl-9 col-lg-9">
              <div className="settings-widget card-details">
                <div className="settings-menu p-0">
                  <div className="profile-heading">
                    <h3>Add New Student</h3>
                    <p>Enter the details of the new student</p>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="checkout-form settings-wrap">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-block">
                            <label className="form-label">First Name</label>
                            <input
                              type="text"
                              className="form-control"
                              name="first_name"
                              value={formData.first_name}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block">
                            <label className="form-label">Last Name</label>
                            <input
                              type="text"
                              className="form-control"
                              name="last_name"
                              value={formData.last_name}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block">
                            <label className="form-label">Email</label>
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block">
                            <label className="form-label">Phone</label>
                            <input
                              type="tel"
                              className="form-control"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block">
                            <label className="form-label">Password</label>
                            <input
                              type="password"
                              className="form-control"
                              name="password"
                              value={formData.password}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block">
                            <label className="form-label">Country</label>
                            <select
                              className="form-select"
                              name="country_id"
                              value={formData.country_id}
                              onChange={handleChange}
                              required
                            >
                              <option value="">Select Country</option>
                              {countries.map((country) => (
                                <option key={country.id} value={country.id}>
                                  {country.name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block">
                            <label className="form-label">State</label>
                            <select
                              className="form-select"
                              name="state_id"
                              value={formData.state_id}
                              onChange={handleChange}
                              required
                            >
                              <option value="">Select State</option>
                              {states.map((state) => (
                                <option key={state.id} value={state.id}>
                                  {state.name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block">
                            <label className="form-label">City</label>
                            <select
                              className="form-select"
                              name="city_id"
                              value={formData.city_id}
                              onChange={handleChange}
                              required
                            >
                              <option value="">Select City</option>
                              {cities.map((city) => (
                                <option key={city.id} value={city.id}>
                                  {city.name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-block">
                            <label className="form-label">Qualification</label>
                            <select
                              className="form-select"
                              name="qualification_id"
                              value={formData.qualification_id}
                              onChange={handleChange}
                              required
                            >
                              <option value="">Select Qualification</option>
                              {qualifications.map((qualification) => (
                                <option key={qualification.id} value={qualification.id}>
                                  {qualification.name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <button type="submit" className="btn btn-primary">
                            Add Student
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );

};

export default AddStudentForm;