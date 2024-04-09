import React from 'react';
import PlaceHolder from './PlaceHolder';



const HiringDetails = () => {
  return (
    <div className="bg-white shadow-md rounded overflow-hidden">


      <PlaceHolder text = "GamesKraft Careers 2024 Hiring Details:"/>
      
      <div className="p-4">
        <div className="flex mb-4">
          <h3 className="text-base font-medium text-gray-800">Job Role:</h3>
          <p className="text-gray-700">Fullstack, Data Engineer, DevOps</p>
        </div>
        <div className="flex mb-4">
          <h3 className="text-base font-medium text-gray-800">Qualification:</h3>
          <p className="text-gray-700">Bachelor or Integrated Masters degree in Engineering degree</p>
        </div>
        <div className="flex mb-4">
          <h3 className="text-base font-medium text-gray-800">Experience:</h3>
          <p className="text-gray-700">Freshers</p>
        </div>
        <div className="flex mb-4">
          <h3 className="text-base font-medium text-gray-800">Batch:</h3>
          <p className="text-gray-700">Final Year student</p>
        </div>
        <div className="flex mb-4">
          <h3 className="text-base font-medium text-gray-800">Salary:</h3>
          <p className="text-gray-700">32 LPA</p>
        </div>
        <div className="flex mb-4">
          <h3 className="text-base font-medium text-gray-800">Job Location:</h3>
          <p className="text-gray-700">Bengaluru</p>
        </div>
        <div className="flex mb-4">
          <h3 className="text-base font-medium text-gray-800">Last Date:</h3>
          <p className="text-gray-700">ASAP</p>
        </div>
      </div>
      <div className="p-4 text-center">
        <a href="#" className="text-blue-500 hover:text-blue-700 underline mr-4">Want To Get Free IT/Software Job Alerts on Telegram !! Join from here</a>
        
      </div>
    </div>
  );
};

export default HiringDetails;
