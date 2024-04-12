import PlaceHolder from "./PlaceHolder";
import { Editor } from 'primereact/editor';
interface ResponsibilityProps {
  description: string;
}

const Responsibility: React.FC<ResponsibilityProps> = ({ description }) => {
  return (
    <>
      <PlaceHolder text="Responsibility-" />
      <div className="pl-4 mt-4">
        <ul style={{ color: "black" }} className="list-disc">
        
           <Editor headerTemplate={<></>} className="mt-4"  value={description} readOnly style={{ height: 'auto' ,fontSize:'1rem'}} />
        </ul>
      </div>
    </>
  );
};

export default Responsibility;
