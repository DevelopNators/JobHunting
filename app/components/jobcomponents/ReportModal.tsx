import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReportModal: React.FC<ReportModalProps> = ({ isOpen, onClose }) => {
  const [linkWorking, setLinkWorking] = useState(true); // By default, assume the link is working
  const [remarks, setRemarks] = useState(""); // State to store remarks

  const handleSubmit = () => {
    toast.success('Link reported successfully!');

    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-50 overflow-auto bg-black bg-opacity-30 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white rounded-lg p-8 w-96">
          <h2 className="text-2xl font-bold mb-4">Broken Link ?</h2>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              checked={!linkWorking}
              onChange={(e) => setLinkWorking(!e.target.checked)}
              className="mr-2"
            />
            <label>Link is not working</label>
          </div>
          <div className=" items-center mb-4">
            <label className="mr-2">Remarks</label>
            <textarea
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              rows={3}
            />
          </div>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default ReportModal;
