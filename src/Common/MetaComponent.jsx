import React from "react";
import PropTypes from "prop-types";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function MetaComponent({ meta }) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{meta?.title || "UltraAura.Education"}</title>
        <meta name="description" content={meta?.description || "Empower Your Learning Journey"} />
      </Helmet>
    </HelmetProvider>
  );
}

// Prop validation
MetaComponent.propTypes = {
  meta: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};

// Default props
MetaComponent.defaultProps = {
  meta: {
    title: "UltraAura.Education",
    description: "Empower Your Learning Journey",
  },
};
