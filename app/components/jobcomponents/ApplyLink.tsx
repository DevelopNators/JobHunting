import React from "react";

interface AppyLinkProps {
  appyLink?: string;
}

const ApplyLink: React.FC<AppyLinkProps> = ({ appyLink }) => {
  if (!appyLink) {
    return null; // If appyLink is not provided, return null to render nothing
  }

  return (
    <div
      style={{
        marginTop: "100px",
        boxShadow: "1px 1px 1px 1px grey",
        borderRadius: "5 rem",
      }}
      data-theme="light"
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
          padding: "10px",
          color: "white",
          background:
            "linear-gradient(to right, rgb(116 89 255), rgb(255 77 228))",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "0 rem",
        }}
      >
        <a target="_blank" style={{ color: "blue" }} href={appyLink}>
          <h1 style={{ color: "white", fontWeight: "bold" }}>Apply Link</h1>
        </a>
      </div>
    </div>
  );
};

export default ApplyLink;
