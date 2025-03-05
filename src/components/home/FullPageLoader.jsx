import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const FullPageLoader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <div 
            className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center" 
            style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.2)', // Reduced opacity white background
                zIndex: 9999,
                backdropFilter: 'blur(5px)' // Added subtle blur effect
            }}
        >
            <div className="text-center">
                <div 
                    className="spinner-border" 
                    style={{ 
                        width: "5rem", 
                        height: "5rem", 
                        borderWidth: "0.5rem", 
                        color: "#007bff", // Bootstrap primary blue
                        animationDuration: '1.2s' // Slightly slower animation
                    }} 
                    role="status"
                >
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div 
                    className="mt-4 fw-bold text-primary fs-4"
                    style={{
                        color: '#007bff', 
                        textShadow: '1px 1px 2px rgba(0,0,0,0.1)' // Subtle text shadow
                    }}
                >
                    Loading...
                </div>
            </div>
        </div>
    );
};

export default FullPageLoader;