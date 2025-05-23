// export const plans = [
// {
//   id: "freemium",
//   name: "Freemium",
//   price: "0",
//   isPopular: false,
//   isDark: false,
//   features: [
//     "Job Search",
//     "Job Apply",
//     "AI Dashboard",
//     "Limited AI Resume Builder",
//     "Access to Free Courses",
//     "Profile Listing",
//   ],
// },
//     {
//       id: "elevate",
//       name: "Elevate",
//       price: "18.95",
//       isPopular: true,
//       isDark: false,
//       features: [
//         "Everything in Freemium",
//         "Advanced Job Search",
//         "Advanced AI Resume Builder",
//         "Access to Advanced Courses",
//         "AI Skill Test",
//         "Access to Nova Jobs"
//       ],
//     },
//     {
//       id: "promax",
//       name: "Pro Max",
//       price: "48.95",
//       isPopular: false,
//       isDark: false,
//       features: [
//         "Everything in Elevate",
//         "Career coach interactions",
//         "Certification included",
//         "Access to Nova Jobs"
//       ],
//     },
//     {
//       id: "ultraelite",
//       name: "Ultra Elite",
//       price: "98.95",
//       isPopular: false,
//       isDark: true,
//       features: [
//         "Everything in Pro Max",
//         "Trainer access (as needed)",
//         "Certification included (after course request & eligibility)",
//         "Access to Nova Jobs"
//       ],
//     },
//   ];

export const plans = [
  {
    id: "freemium",
    name: "Freemium",
    price: "0",
    isPopular: false,
    isDark: false,
    features: [
      "Job Search",
      "Job Apply",
      "AI Dashboard",
      "Limited AI Resume Builder",

      "Profile Listing",
      <span className="flex items-center gap-1" key="novajobs">
        Access to{" "}
        <a
          href="https://novajobs.us/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://apiwl.novajobs.us/novaJobs/226/logo/NovaUS.649f79957e5090a75022.png"
            alt="Nova Jobs"
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
    price: "18.95",
    isPopular: true,
    isDark: false,
    features: [
      "Everything in Freemium",
      "Advanced Job Search",
      "Advanced AI Resume Builder",
      // "Access to Advanced Courses",
      "AI Skill Test",
      <span className="flex items-center gap-1" key="novajobs">
        Access to{" "}
        <a
          href="https://novajobs.us/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://apiwl.novajobs.us/novaJobs/226/logo/NovaUS.649f79957e5090a75022.png"
            alt="Nova Jobs"
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
    name: "Pro Max",
    price: "48.95",
    isPopular: false,
    isDark: false,
    features: [
      "Everything in Elevate",
      "Limited Career coach interaction",
      "Certification included",
      <span className="flex items-center gap-1" key="novajobs">
        Access to{" "}
        <a
          href="https://novajobs.us/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://apiwl.novajobs.us/novaJobs/226/logo/NovaUS.649f79957e5090a75022.png"
            alt="Nova Jobs"
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
    name: "Ultra Elite",
    price: "98.95",
    isPopular: false,
    isDark: true,
    features: [
      "Everything in Pro Max",
      "One on One Trainer Access",
      "Verified Certifications",
      <span className="flex items-center gap-1" key="novajobs">
        Access to{" "}
        <a
          href="https://novajobs.us/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://apiwl.novajobs.us/novaJobs/226/logo/NovaUS.649f79957e5090a75022.png"
            alt="Nova Jobs"
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
