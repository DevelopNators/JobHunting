interface JobSummaryProps {
  title: string;
  role: string;
  description: string;
}
import { Editor } from "primereact/editor";
const JobSummary: React.FC<JobSummaryProps> = ({
  title,
  role,
  description,
}) => {
  return (
    <div
      className="p-4 rounded shadow-md"
      style={{ backgroundColor: "EDF6FF" }}
    >
      <h2 className="text-xl font-semibold mb-2"> {title} </h2>
      <p className="text-gray-700 mb-4">Responsibilities:</p>
      <ul>
        <li>
          <Editor
            className="mt-4"
            value={description}
            readOnly
            headerTemplate={<div className=""></div>}
            theme="bubble" // Sets the theme to 'bubble', which removes borders and header
            style={{
              height: "auto",
              fontSize: "1rem",
              border: "none",
              boxShadow: "none",
            }}
          />
        </li>
      </ul>
    </div>
  );
};

export default JobSummary;
