import PlaceHolder from "./PlaceHolder";

interface  roleInter {
  role:string ,
  organizationName : string,
  batch:string
}

const Role : React.FC<roleInter>  = ({role, organizationName,batch}) => {
    return (
      <div className="">
        {/* <div className="mt-10 p-2" style={{ background: 'linear-gradient(to right, #0044b3, #0066ff)', borderRadius: '0.6rem' }}>
          <span className="text-2xl font-semibold text-white">GamesKraft Careers 2024 Hiring Details: <span className="text-lg font-semibold text-white">Software Engineer - Full Stack</span> </span>
          
        </div> */}
        <PlaceHolder text= {`${organizationName} ${batch}: ${role} `}/>
      </div>
    );
  };
  
  export default Role;
  