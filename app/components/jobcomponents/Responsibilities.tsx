import PlaceHolder from "./PlaceHolder";
import { Editor } from "primereact/editor";
interface ResponsibilityProps {
  description: string;
}

const Responsibility: React.FC<ResponsibilityProps> = ({ description }) => {
  return (
    <>
      <PlaceHolder text="Responsibility-" />
      <div className="pl-4 mt-4">
        <ul style={{ color: "black" }} className="list-disc">
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
        </ul>
      </div>
    </>
  );
};

export default Responsibility;
