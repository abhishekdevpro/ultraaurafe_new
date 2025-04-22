import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const FullPageLoader = () => (
    <div
        className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
        style={{
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            zIndex: 9999,
            backdropFilter: 'blur(5px)',
        }}
    >
        <div className="text-center">
            <div
                className="spinner-border"
                style={{
                    width: '5rem',
                    height: '5rem',
                    borderWidth: '0.5rem',
                    color: '#007bff',
                    animationDuration: '1.2s',
                }}
                role="status"
            >
                <span className="visually-hidden">Loading...</span>
            </div>
            <div
                className="mt-4 fw-bold text-primary fs-4"
                style={{
                    color: '#007bff',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                }}
            >
                Loading...
            </div>
        </div>
    </div>
);

export default FullPageLoader;