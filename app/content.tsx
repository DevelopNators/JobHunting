import ApplyLink from "./components/job/ApplyLink";
import Designation from "./components/job/Designation";
import HiringDetails from "./components/job/HiringDetails";
import HowToApply from "./components/job/HowtoApply";
import Qualification from "./components/job/Qualification";
import Responsibility from "./components/job/Responsibilities";
import Responsibilities from "./components/job/Responsibilities:";
import Role from "./components/job/Role";
import SkillRequirement from "./components/job/SkillRequirement";
import JobSummary from "./components/job/jobSummary";

const Content = () => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg link-content">
      {/* Job title and date */}
      <h2 className="text-xl font-semibold mb-4">GamesKraft Careers 2024: Fullstack, Data Engineer, DevOps</h2>
      <p className="text-sm text-gray-500 mb-2">Posted on April 7, 2024 by Admin</p>

      {/* Image and job description */}
      <div className="flex flex-col md:flex-row items-center md:space-x-4">
        {/* Image */}
        <div className="md:w-1/2 mb-4 md:mb-0">
          <img src="https://freshershunt.in/wp-content/uploads/2024/04/GamesKraft-768x434.jpeg" alt="GamesKraft" className="w-full rounded-lg shadow-md" />
        </div>

        {/* Job description */}
        <div className="md:w-1/2">
          <p className="text-gray-600">
            {/* Job details */}
            <b>GamesKraft Careers 2024:</b> Hiring freshers for Fullstack, Data Engineer, DevOps. Candidates pursuing Bachelor's or Integrated Master's degree in Engineering are eligible to apply. The detailed eligibility and application process are given below.
          </p>
        </div>
      </div>

      {/* Job summary */}
      <JobSummary />

      {/* Career Detail */}
     

      <HiringDetails/>

      {/* Role  */}
      <Role/>

      {/* responsibilities */}
      <Responsibilities/>


      {/* Qualification */}

      <Qualification/>



      {/* skill reuirement */}
      <SkillRequirement/>

      {/* designation  */}

      <Designation/>

      {/* responsiblity */}

    <Responsibility/>

    {/* how to apply */}
    <HowToApply/>

    {/*Apply link  */}
    <ApplyLink/>

    </div>


  );
};

export default Content;
