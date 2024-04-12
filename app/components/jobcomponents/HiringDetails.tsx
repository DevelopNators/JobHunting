import React from 'react';
import PlaceHolder from './PlaceHolder';

interface jobSummary {
  role:string,
  Jobqualifications:string,
  experience:string,
  batch:string, 
  salary : string ,
  lastDate: string,
  location:string,
  telegramLink:string,
  organizationName:string,

}

const HiringDetails: React.FC<jobSummary> = ( {role,Jobqualifications,experience,batch,salary,lastDate,location,telegramLink,organizationName} ) => {
  return (
    <div className="bg-white shadow-md rounded overflow-hidden">


      <PlaceHolder text = {`${organizationName} ${batch} Details :`}/>
      
      <div className="p-4">
        <div className="flex mb-4">
          <h3 className="text-base font-medium text-gray-800">Job Role:</h3>
          <p className="text-gray-700"> {role && role} </p>
        </div>
        <div className="flex mb-4">
          <h3 className="text-base font-medium text-gray-800">Qualification: </h3>
          <p className="text-gray-700" > {Jobqualifications && Jobqualifications} </p>
        </div>
        <div className="flex mb-4">
          <h3 className="text-base font-medium text-gray-800">Experience:</h3>
          <p className="text-gray-700"> {experience && experience && 'Freshers'} </p>
        </div>
        <div className="flex mb-4">
          <h3 className="text-base font-medium text-gray-800">Batch:</h3>
          <p className="text-gray-700"> {batch && batch  || '2023-2024'} </p>
        </div>
        <div className="flex mb-4">
          <h3 className="text-base font-medium text-gray-800">Salary:</h3>
          <p className="text-gray-700"> {salary && salary } </p>
        </div>
        <div className="flex mb-4">
          <h3 className="text-base font-medium text-gray-800">Job Location:</h3>
          <p className="text-gray-700"> {location &&location} </p>
        </div>
        <div className="flex mb-4">
          <h3 className="text-base font-medium text-gray-800">Last Date:</h3>
          <p className="text-gray-700"> {lastDate && lastDate} </p>
        </div>
      </div>
      <div className="p-4 text-center">
        <a  href={telegramLink} className="text-blue-500 hover:text-blue-700 underline mr-4">Want To Get Free IT/Software Job Alerts on Telegram !! Join from here</a>
        
      </div>
    </div>
  );
};

export default HiringDetails;
