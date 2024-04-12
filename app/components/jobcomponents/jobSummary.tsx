interface JobSummaryProps {
  title: string;
  role: string;
  description: string;
}
import { Editor } from 'primereact/editor';
const JobSummary: React.FC<JobSummaryProps> = ({ title, role, description }) => {
  return (
    <div className="p-4 rounded shadow-md" style={{ backgroundColor: 'EDF6FF' }}>
      <h2 className="text-xl font-semibold mb-2"> {title} </h2>
      <p className="text-gray-700 mb-4">Responsibilities:</p>
      <ul>
       <li>
        
       <Editor   headerTemplate={<></>} className='mt-4' value={description} readOnly style={{ height: 'auto',  fontSize:'1.1rem'}} />
       </li>
       
      </ul>
    </div>
  );
};

export default JobSummary;
