// import React, { useState, useEffect } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import axios from 'axios';

// // Import your images
// import { People,Icon1,Icon2,Play } from '../../../imagepath';

// const InstructorCard = ({ trainerID }) => {
//     const [trainer, setTrainer] = useState(null);
  
//     useEffect(() => {
//       const fetchTrainer = async () => {
//         try {
//           const response = await axios.get(`https://api.novajobs.us/api/trainers/trainer-profile/${trainerID}`);
//           console.log(response)
//           setTrainer(response.data.data);
//         } catch (error) {
//           console.error('Error fetching trainer data:', error);
//         }
//       };
  
//       fetchTrainer();
//     }, [trainerID]);
  
//     if (!trainer) {
//       return <div>Loading...</div>;
//     }
  
//     return (
//       <div className="card instructor-sec">
//         <div className="card-body">
//           <h5 className="subs-title">About the instructor</h5>
//           <div className="instructor-wrap">
//             <div className="about-instructor">
//               <div className="abt-instructor-img">
//                 <Link to={`/instructor/instructor-profile/${trainerID}`}>
//                   <img src={trainer.profileImage} alt={trainer.name} className="img-fluid" />
//                 </Link>
//               </div>
//               <div className="instructor-detail">
//                 <h5><Link to={`/instructor/instructor-profile/${trainerID}`}>{trainer.name}</Link></h5>
//                 <p>{trainer.title}</p>
//               </div>
//             </div>
//             <div className="rating">
//               {[...Array(5)].map((_, index) => (
//                 <i key={index} className={`fas fa-star ${index < Math.floor(trainer.rating) ? 'filled' : ''} me-1`} />
//               ))}
//               <span className="d-inline-block average-rating">{trainer.rating} Instructor Rating</span>
//             </div>
//           </div>
//           <div className="course-info d-flex align-items-center">
//             <div className="cou-info">
//               <img src={Play} alt="" />
//               <p>{trainer.coursesCount} Courses</p>
//             </div>
//             <div className="cou-info">
//               <img src={Icon1} alt="" />
//               <p>{trainer.lessonsCount}+ Lesson</p>
//             </div>
//             <div className="cou-info">
//               <img src={Icon2} alt="" />
//               <p>{trainer.totalDuration}</p>
//             </div>
//             <div className="cou-info">
//               <img src={People} alt="" />
//               <p>{trainer.studentsEnrolled} students enrolled</p>
//             </div>
//           </div>
//           <p>{trainer.shortBio}</p>
//           <p>{trainer.skills}</p>
//           <p>Available for:</p>
//           <ul>
//             {trainer.availability.map((item, index) => (
//               <li key={index}>{item}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     );
//   };
  

// export default InstructorCard;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'; // Removed 'useParams'
// import axios from 'axios';

// // Import your images
// import { Play } from '../../../imagepath';
// // Removed Icon1, Icon2, People as they are not used in this file

// const InstructorCard = ({ trainerID }) => {
//   const [trainer, setTrainer] = useState(null);

//   useEffect(() => {
//     const fetchTrainer = async () => {
//       try {
//         const response = await axios.get(`https://api.novajobs.us/api/trainers/trainer-profile/${trainerID}`);
//         console.log(response)
//         setTrainer(response.data.data.trainer);
//       } catch (error) {
//         console.error('Error fetching trainer data:', error);
//       }
//     };

//     fetchTrainer();
//   }, [trainerID]);

//   if (!trainer) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="card instructor-sec">
//       <div className="card-body">
//         <h5 className="subs-title">About the instructor</h5>
//         <div className="instructor-wrap">
//           <div className="about-instructor">
//             <div className="abt-instructor-img">
//               <Link to={`/instructor/instructor-profile/${trainerID}`}>
//                 <img src={trainer.profileImage} alt={trainer.name} className="img-fluid" />
//               </Link>
//             </div>
//             <div className="instructor-detail">
//               <h5><Link to={`/instructor/instructor-profile/${trainerID}`}>{trainer.name}</Link></h5>
//               <p>{trainer.title}</p>
//             </div>
//           </div>
//           <div className="rating">
//             {[...Array(5)].map((_, index) => (
//               <i key={index} className={`fas fa-star ${index < Math.floor(trainer.rating) ? 'filled' : ''} me-1`} />
//             ))}
//             <span className="d-inline-block average-rating">{trainer.rating} Instructor Rating</span>
//           </div>
//         </div>
//         <div className="course-info d-flex align-items-center">
//           <div className="cou-info">
//             <img src={Play} alt="" />
//             <p>{trainer.coursesCount} Courses</p>
//           </div>
//           <div className="cou-info">
//             <img src={Icon1} alt="" />
//             <p>{trainer.lessonsCount}+ Lesson</p>
//           </div>
//           <div className="cou-info">
//             <img src={Icon2} alt="" />
//             <p>{trainer.totalDuration}</p>
//           </div>
//           <div className="cou-info">
//             <img src={People} alt="" />
//             <p>{trainer.studentsEnrolled} students enrolled</p>
//           </div>
//         </div>
//         <p>{trainer.shortBio}</p>
//         <p>{trainer.skills}</p>
//         <p>Available for:</p>
//         <ul>
//           {trainer.availability.map((item, index) => (
//             <li key={index}>{item}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default InstructorCard;
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';

const InstructorCard = ({ trainerID }) => {
  const [trainer, setTrainer] = useState(null);

  useEffect(() => {
    const fetchTrainer = async () => {
      try {
        const response = await axios.get(`https://api.novajobs.us/api/trainers/trainer-profile/${trainerID}`);
        console.log(response);
        setTrainer(response.data.data.trainer);
      } catch (error) {
        console.error('Error fetching trainer data:', error);
      }
    };

    fetchTrainer();
  }, [trainerID]);

  if (!trainer) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card instructor-sec">
      <div className="card-body">
        <h5 className="subs-title">About the instructor</h5>
        <div className="instructor-wrap">
          <div className="about-instructor">
            <div className="abt-instructor-img">
              <Link to={`/instructor/instructor-profile/${trainerID}`}>
                <img src={`https://api.novajobs.us/${trainer.photo}`} alt={`${trainer.first_name} ${trainer.last_name}`} className="img-fluid" />
              </Link>
            </div>
            <div className="instructor-detail">
              <h5><Link to={`/instructor/instructor-profile/${trainerID}`}>{trainer.first_name} {trainer.last_name}</Link></h5>
              <p>{trainer.jobtitle || 'Instructor'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add PropTypes validation
InstructorCard.propTypes = {
  trainerID: PropTypes.string.isRequired, // Validate trainerID prop
};

export default InstructorCard;
