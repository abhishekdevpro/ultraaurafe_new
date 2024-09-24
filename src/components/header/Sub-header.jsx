import React from 'react';

const SubHeader = () => {
  const content = `
    Update: Partners added - SCOPE - Empowering Citizens of South Florida...
    Innovative education and employment program for a stronger Hallandale Beach community ||
    AGI Tax Experts - Launch your career with AGI Tax Experts! Comprehensive training 
    and placement opportunities available through our portal.
  `;

  // Inline styles for the component
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      padding: '10px 0',
      background: 'linear-gradient(to right, #e3f2fd, #fff)',
      borderBottom: '1px solid #ddd',
      overflow: 'hidden',
      position: 'relative', // Make the container relative for absolute positioning of text
    },
    newsButton: {
      backgroundColor: '#004d40',
      color: 'white',
      fontSize: '16px',
      fontWeight: 'bold',
      padding: '8px 16px',
      borderRadius: '5px',
      marginRight: '20px',
      zIndex: 1, // Ensure the button appears above the text
    },
    scrollingText: {
      display: 'inline-block',
      animation: 'scroll 50s linear infinite',
      whiteSpace: 'nowrap', // Prevent wrapping so the text scrolls continuously
      position: 'absolute', // Position absolutely to allow scrolling
      left: '50%', // Start at the center of the container
      transform: 'translateX(-50%)', // Center the text by moving it left by half its width
    },
  };

  return (
    <>
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); } /* Start at the center */
            100% { transform: translateX(-100%); } /* Scroll completely to the left */
          }
        `}
      </style>
      <div style={styles.container}>
        <div style={styles.newsButton}>Updates</div>
        <div style={styles.scrollingText}>
          <span>{content}</span>
        </div>
      </div>
    </>
  );
};

export default SubHeader;
