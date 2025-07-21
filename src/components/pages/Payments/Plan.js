export const plans = [
  {
    id: "freemium",
    name: "Explore",
    price: "18.95",
    isPopular: false,
    isDark: false,
    features: [
      // "Discover your potential",
      "AI Resume + Cover Letter Builder",
      "Profile Listing",
      "Search & Apply to Jobs",
      "All-in-One Career Dashboard",
      "AI Skill Tests",

      "Community Access",

      // "Access to Free C "Profile Listing",
      <span className="flex items-center gap-1" key="novajobs">
        Unlimited Access to{" "}
        <a
          href="https://novajobs.us/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://apiwl.novajobs.us/novaJobs/226/logo/NovaUS.649f79957e5090a75022.png"
            alt="Novajobs"
            className="h-2 w-5 inline-block"
            style={{
              height: "2rem",
              width: "auto",
              display: "inline-block",
              color: "white",
            }}
          />
        </a>
      </span>,
    ],
  },
  {
    id: "elevate",
    name: "Elevate",
    price: "38.95",
    isPopular: false,
    isDark: false,
    features: [
      // "Rise with purpose and power",
      "Everything in Explore, plus",
      "Job Suggestions",
      // "Resume Score",
      "ATS & Resume Score",
      "Priority Job alerts",
      // "Access to UltraAura+",
      // "Resume writeup By Experts",
      // "Connect to Career Coach",
      // "Profile Analytics*",
      "Certifications by UltraAura",
      // "Unlimited Access to UltraAura",
      // "Access to all courses",
      <span className="flex items-center gap-1" key="novajobs">
        Unlimited Access to{" "}
        <a
          href="https://novajobs.us/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://apiwl.novajobs.us/novaJobs/226/logo/NovaUS.649f79957e5090a75022.png"
            alt="NovaJobs"
            className="h-2 w-5 inline-block"
            style={{
              height: "2rem",
              width: "auto",
              display: "inline-block",
              color: "white",
            }}
          />
        </a>
      </span>,
    ],
  },
  {
    id: "promax",
    name: "Excel",
    price: "78.95",
    isPopular: true,
    isDark: false,
    features: [
      // "Master your skills. Dominate your field",
      "Everything in Elevate, plus",
      "Connect to Trainer",
      "Connect to Career Coach / Trainer",
      "Manage Documents",
      "More AI Credits",
      "Chat with HR’s*",
      "Verified Certifications by UltraAura",
      // "Unlimited Access to UltraAura"

      <span className="flex items-center gap-1" key="novajobs">
        Unlimited Access to{" "}
        <a
          href="https://novajobs.us/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://apiwl.novajobs.us/novaJobs/226/logo/NovaUS.649f79957e5090a75022.png"
            alt="UltraAura"
            className="h-2 w-5 inline-block"
            style={{
              height: "2rem",
              width: "auto",
              display: "inline-block",
            }}
          />
        </a>
      </span>,
    ],
  },
  {
    id: "ultraelite",
    name: "Elite",
    price: "148.95",
    isPopular: true,
    isDark: true,
    features: [
      "Excel Plus Unlimited",
      <span
        key="Elite"
        style={{ display: "flex", alignItems: "center", gap: "4px" }}
      >
        Centralized HyperVSolutions ID
        <i
          className="fa fa-info"
          style={{
            fontSize: "0.875rem",
            color: "#ed8936",
            cursor: "pointer",
            marginLeft: "4px",
          }}
          title="Single Sign-On for all services"
        ></i>
      </span>,
      "Expert Resume & Cover Letter Creation",
      "AI Credits",
      "Physical & Verified Certification Copies",
      "Job Placement Assistance",
      "Personalized Career Guidance",
      "Priority Job Applies",
      <span className="flex items-center gap-1" key="novajobs">
        Unlimited Access to{" "}
        <a
          href="https://novajobs.us/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://apiwl.novajobs.us/novaJobs/226/logo/NovaUS.649f79957e5090a75022.png"
            alt="UltraAura"
            className="h-2 w-5 inline-block"
            style={{
              height: "2rem",
              width: "auto",
              display: "inline-block",
              color: "white",
            }}
          />
        </a>
      </span>,
    ],
  },
];
