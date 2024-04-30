import PlaceHolder from "./PlaceHolder";

import { Editor } from "primereact/editor";

interface ApplyInstruction {
  appyInstructions: string;
  organizationName: string;
}
const HowToApply: React.FC<ApplyInstruction> = ({
  appyInstructions,
  organizationName,
}) => {
  return (
    <>
      <PlaceHolder text={`How to Apply For ${organizationName}  Hiring?`} />
      <h2 style={{ color: "black" }}>
        {/* <Editor  headerTemplate={<div className=""></div>}  className="mt-4" value={appyInstructions} readOnly style={{ height: 'auto', fontSize:'1rem' }} /> */}

        <Editor
          onTextChange={(e: any) => {
            e.editor.toolbar.remove();
          }}
          value={appyInstructions}
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
      </h2>
    </>
  );
};
export default HowToApply;
