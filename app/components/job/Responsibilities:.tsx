import PlaceHolder from "./PlaceHolder";

const Responsibilities = () => {
  return (
    <div className="responsibilities">
      {/* <div
        className="mt-10 p-2"
        style={{
          background: "linear-gradient(to right, #0044b3, #0066ff) ",
          borderRadius: "0.6rem",
        }}
      >
        <h1 className="text-2xl font-semibold text-white">
          Responsibility
        </h1>
      </div> */}

      <PlaceHolder text="Responsibility"/>
      <div className="pl-4 mt-4">
        <ul className="list-disc">
          <li>
            Collaborate with product managers, designers, and other stakeholders
            to understand project requirements and translate them into technical
            specifications.
          </li>
          <li>
            Design, develop, and test software solutions using industry best
            practices and technologies.
          </li>
          <li>
            Develop flowcharts, layouts, and documentation to identify
            requirements and solutions.
          </li>
          <li>
            Participate in code reviews to ensure code quality, performance, and
            scalability.
          </li>
          <li>
            Develop software verification plans and quality assurance
            procedures.
          </li>
          <li>
            Develop product specifications and determine operational
            feasibility.
          </li>
          <li>Document and maintain software functionality.</li>
          <li>Troubleshoot, debug, and upgrade existing systems.</li>
          <li>Ensure software is updated with the latest features.</li>
        </ul>
      </div>
    </div>
  );
};

export default Responsibilities;
