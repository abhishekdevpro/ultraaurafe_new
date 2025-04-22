
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from '../../../../assets/Ultra_Aura.png';

const MeetTheExpert = () => {
  // Default data if no props are passed
  const expert = {
    id: "1",
    name: "UltraAura Editorial Team",
    title: "Empowered AI Education.",
    bio: "At UltraAura, our courses are meticulously reviewed by industry experts to ensure the highest quality. We prioritize clarity, skill enhancement, and an easy-to-understand learning experience, providing learners with valuable, industry-relevant knowledge.",
    logo: logo // Replace with your actual logo path
  };

  return (
    <div className="card instructor-sec mt-4 shadow-sm border-0 rounded-lg">
      <div className="card-body p-4">
        <div className="verified-header d-flex align-items-center mb-4">
          <div className="verification-badge me-3">
            <i className="fas fa-check-circle fs-4 text-success"></i>
          </div>
          <h5 className="subs-title m-0 fw-bold" style={{ color: '#1E3A8A' }}>
            Reviewed and Verified by our Experts
          </h5>
          <style>{`
            .verification-badge i {
              animation: pulse 2s infinite;
            }
            @keyframes pulse {
              0% { transform: scale(1); }
              50% { transform: scale(1.1); }
              100% { transform: scale(1); }
            }
          `}</style>
        </div>
        
        <div className="instructor-wrap bg-light p-3 rounded-3 mb-3">
          <div className="d-flex align-items-center flex-wrap">
            <div className="abt-instructor-img me-4 mb-3 mb-md-0">
              <img
                src={expert.logo}
                alt={expert.name}
                className="shadow-sm"
                style={{
                  width: '180px',
                  height: '90px',
                  objectFit: 'contain',
                  borderRadius: '8px',
                  backgroundColor: 'white',
                  padding: '10px'
                }}
              />
            </div>
            <div className="instructor-detail">
              <h5 className="fw-bold mb-2">
                <p className="text-decoration-none" style={{ color: '#1E3A8A' }}>
                  {expert.name}
                </p>
              </h5>
              <p className="text-secondary mb-0 fst-italic">{expert.title}</p>
            </div>
          </div>
        </div>
        
        <div className="expert-bio p-3 border-start border-4 rounded" style={{ borderColor: '#1E3A8A' }}>
            <h4 className='text-bold '>About Our Editorial Team:</h4>
          <p className="mb-0 lh-base" style={{ color: '#4a4a4a', fontSize: '15px' }}>
            {expert.bio}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MeetTheExpert;