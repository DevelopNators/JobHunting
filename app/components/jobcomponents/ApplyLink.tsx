import React, { useState } from "react";
import ReportModal from "./ReportModal";

interface ApplyLinkProps {
  appyLink?: string;
}

const ApplyLink: React.FC<ApplyLinkProps> = ({ appyLink }) => {
  const [reportModalOpen, setReportModalOpen] = useState(false);

  const handleReportClick = () => {
    setReportModalOpen(true);
  };

  if (!appyLink) {
    return null;
  }

  return (
    <div>
     
      <div
        style={{
          marginTop: "100px",
          // boxShadow: "1px 1px 1px 1px grey",
          borderRadius: "5rem",
        }}
        data-theme="light"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "10px",
            color: "white",
            background:
              "linear-gradient(to right, rgb(116 89 255), rgb(255 77 228))",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "2rem",
          }}
        >
          <a
            target="_blank"
            style={{ color: "blue", cursor: "pointer" }}
            href={appyLink}
          >
            <h1 style={{ color: "white", fontWeight: "bold" }}>Apply Link</h1>
          </a>
        </div>

      
      </div>
      <div className="flex justify-between mt-3">
        <p style={{ color: "black" }}>
          If the link is not working, kindly report.
        </p>
        <button
          onClick={handleReportClick}
          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
        >
          Report
        </button>
      </div>  <ReportModal
          isOpen={reportModalOpen}
          onClose={() => setReportModalOpen(false)}
        />
    </div>
  );
};

export default ApplyLink;
