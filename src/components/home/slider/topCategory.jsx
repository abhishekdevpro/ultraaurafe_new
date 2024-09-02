import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing

const TopCategory = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate(); // Initialize navigate for routing

  // Fetch data from API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://api.novajobs.us/api/trainers/course-level");
        const data = await response.json();
        if (data.code === 200) {
          setCategories(data.data); // Store the fetched data
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleCardClick = (category) => {
    const queryParams = new URLSearchParams();
    if (category) queryParams.append("course_level_id", category.id);

    navigate(`/course-list?${queryParams.toString()}`); // Use navigate for routing
  };

  // Inline styles
  const cardStyle = {
    cursor: 'pointer',
    transition: 'transform 0.3s, box-shadow 0.3s',
  };

  const imageStyle = {
    transition: 'transform 0.3s', // Smooth transition for image hover effect
  };

  const handleMouseEnter = (e) => {
    // Apply hover effect to image
    e.currentTarget.querySelector('img').style.transform = 'scale(1.1)';
  };

  const handleMouseLeave = (e) => {
    // Remove hover effect from image
    e.currentTarget.querySelector('img').style.transform = 'scale(1)';
  };

  const settings = {
    items: 2,
    margin: 25,
    dots: true,
    nav: true,
    navText: [
      '<i className="fas fa-arrow-left"></i>',
      '<i className="fas fa-arrow-right"></i>',
    ],
    loop: true,
    responsiveClass: true,
    responsive: {
      0: { items: 1, margin: 25 },
      768: { items: 3, margin: 25 },
      1170: { items: 4, margin: 25 },
    },
  };

  return (
    <section className="section how-it-works">
      <div className="container">
        <div className="section-header aos" data-aos="fade-up">
          <div className="section-sub-head">
            <h2>Explore Levels as per your needs</h2>
          </div>
        </div>
        <div className="section-text aos" data-aos="fade-up">
          <p>
            Discover specialized learning paths tailored to every stage of your journey, from undergraduates to professionals. Ultra Aura also offers targeted programs in home care and special needs education, empowering you to achieve your unique goals.
          </p>
        </div>
        <OwlCarousel {...settings} className="owl-carousel mentoring-course owl-theme aos" data-aos="fade-up">
          {categories.map((category) => (
            <div
              className="feature-box text-center shadow"
              key={category.id}
              onClick={() => handleCardClick(category)}
              style={cardStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="feature-bg">
                <div className="feature-header">
                  <div className="feature-icon">
                    <img
                      src={category.image_url}
                      alt={category.name}
                      style={imageStyle} // Apply initial image style
                    />
                  </div>
                  <div className="feature-cont">
                    <div className="feature-text">{category.name}</div>
                   
                  </div>
                </div>
                
                <p className="">{category.students_counts} {" "}Students</p>
                    <p className="">{category.course_counts}{" "} Courses</p>
                    <p className="">{category.trainer_counts} {" "}Instructors</p>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default TopCategory;
