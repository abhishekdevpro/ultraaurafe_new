export const plans = [
  {
    plan_id: "2",
    id: "freemium",
    name: "Explore",
    price: "18.95",
    isPopular: true,
    isDark: false,
    features: [
      "AI Resume + Cover Letter Builder",
      "Profile Listing",
      "Search & Apply to Jobs",
      "All-in-One Career Dashboard",
      "AI Skill Tests",
      "Community Access",
      "Practice interview Beta (included)",
      <span key="explore-edtech" className="flex items-center gap-1">
        Unlimited Access to Edtech{" "}
        <a
          href="https://ultraaura.education/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://ultraaura.education/static/media/Ultra_Aura.cabb61de498b919d72f4.png"
            alt="UltraAura"
            className="h-2 w-5 inline-block"
            style={{ height: "2rem", width: "auto", display: "inline-block", color: "white" }}
          />
        </a>
      </span>,
    ],
  },
  {
    plan_id: "3",
    id: "elevate",
    name: "Elevate",
    price: "38.95",
    isPopular: false,
    isDark: false,
    features: [
      "Everything in Explore, plus",
      "Job Suggestions",
      "ATS & Resume Score",
      "Priority Job alerts",
      "Certifications by UltraAura",
      "Practice interview Beta (included)",
      <span key="elevate-edtech" className="d-inline-flex align-items-center gap-11">
        Unlimited Access to Edtech{" "}
        <a
          href="https://ultraaura.education/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://ultraaura.education/static/media/Ultra_Aura.cabb61de498b919d72f4.png"
            alt="UltraAura"
            className="h-2 w-5 inline-block"
            style={{ height: "2rem", width: "auto", display: "inline-block" }}
          />
        </a>
      </span>,
    ],
  },
  {
    plan_id: "4",
    id: "promax",
    name: "Excel",
    price: "78.95",
    isPopular: false,
    isDark: false,
    features: [
      "Everything in Elevate, plus",
      "Connect to Trainer",
      "Connect to Career Coach / Trainer",
      "Manage Documents",
      "More AI Credits",
      "Chat with HR’s*",
      "Verified Certifications by UltraAura",
      "Practice interview Beta (included)",
      <span key="excel-edtech" className="flex items-center gap-1">
        Unlimited Access to Edtech{" "}
        <a
          href="https://ultraaura.education/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://ultraaura.education/static/media/Ultra_Aura.cabb61de498b919d72f4.png"
            alt="UltraAura"
            className="h-2 w-5 inline-block"
            style={{ height: "2rem", width: "auto", display: "inline-block" }}
          />
        </a>
      </span>,
    ],
  },
  {
    plan_id: "5",
    id: "ultraelite",
    name: "Elite ",
    price: "148.95",
    isPopular: true,
    isDark: true,
    features: [
      "Excel Plus Unlimited",
      <span key="elite-id" style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        Centralized HyperVSolutions ID
        <i
          className="fa fa-info"
          style={{ fontSize: "0.875rem", color: "yellow", cursor: "pointer", marginLeft: "4px" }}
          title="Single Sign-On for all services"
        ></i>
      </span>,
      "Expert Resume & Cover Letter Creation",
      "AI Credits",
      "Physical & Verified Certification Copies",
      "Job Placement Assistance",
      "Personalized Career Guidance",
      "Priority Job Applies",
      "Practice interview Beta (included)",
      <span key="elite-edtech" className="flex items-center gap-1">
        Unlimited Access to Edtech{" "}
        <a
          href="https://ultraaura.education/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://ultraaura.education/static/media/Ultra_Aura.cabb61de498b919d72f4.png"
            alt="UltraAura"
            className="h-2 w-5 inline-block"
            style={{ height: "2rem", width: "auto", display: "inline-block", color: "white" }}
          />
        </a>
      </span>,
    ],
  },
];
