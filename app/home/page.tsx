import { useEffect, useState } from "react";
import Head from "next/head";
import Links from "../components/links/links";
import Link from "next/link";
import { useGlobalState } from '../context/GLobalContext';

const HomePage = () => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(4); 
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [totalJobs, setTotalJobs] = useState(1);
  var catid:any =null
  try{
     var { catid } = useGlobalState();
  }
  catch(err){
     console.log("errr")
  }
  
  const getAllJobs = async () => {
    try {
      const response = await fetch(
        `https://developnators.azurewebsites.net/api/JobHunting/GetAllJobsWeb?IsActive=true&pageNumber=${currentPage}&pageSize=${pageSize}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch jobs");
      }
      const data = await response.json();
      
      setJobs(data.jobs);
      
     
      setTotalJobs(data.totalRecords);
      
      setLoading(false);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const getAllJobsbyCategoryId = async () => {
    setLoading(true)
    try {
      const response = await fetch(
        `https://developnators.azurewebsites.net/api/JobHunting/GetAllJobsWeb?CategoryId=${catid}&IsActive=true&pageNumber=${currentPage}&pageSize=${pageSize}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch jobs");
      }
      const data = await response.json();
      
      setJobs(data.jobs);
      
     
      setTotalJobs(data.totalRecords);
      
      setLoading(false);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  useEffect(() => {
    if (catid) {
      getAllJobsbyCategoryId();
    } else {
      getAllJobs();
    }
  }, [currentPage, pageSize, catid]);
  
  const handleNextPage = () => {
    if (currentPage < Math.ceil(totalJobs / pageSize)) {
      setLoading(true)
      setCurrentPage(currentPage + 1);
      setLoading(false)
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setLoading(true)
      setCurrentPage(currentPage - 1);
      setLoading(false)
    }
  };

  const handlePageSizeChange = (size:any) => {
    setPageSize(size);
    setCurrentPage(1); 
  };
  const totalPages = Math.ceil(totalJobs / pageSize);
  // console.log(totalPages)

  return (
    <div style={{ backgroundColor: "#F7F8F9" ,}}>
      {loading ? (
       <div
       style={{
         display: 'flex',
         flexDirection: 'row',
         justifyContent: 'center',
         alignItems: 'center',
         height: '100vh',
         width:'100%'
       }}
     >
       <span className="loading loading-spinner loading-xs"></span>
       <span className="loading loading-spinner loading-sm"></span>
       <span className="loading loading-spinner loading-md"></span>
       <span className="loading loading-spinner loading-lg"></span>
     </div>
      ) : (
        <div style={{ backgroundColor: "#F7F8F9" }}>
      <p style={{ textAlign: "center", color: "red", fontSize: "1.6rem", position: 'relative', top: "calc(100px + 2rem)" }}>
          <a
            target="_blank"
            href="https://techfynder.com/Fresher-jobs-in-India"
          >
            <h1>
              Top MNCs are Hiring{" "}
              <b style={{ marginLeft: "20px" }}>find the Fresher job in India</b>
            </h1>
          </a>
        </p>

          <div className="home-container">
            <div className="card-style">
              {jobs &&
                jobs.map((data: any) => {
                  return (
                    <div
                      key={data.id}
                      className="card card-side bg-base-100 shadow-x mt-10"
                      data-theme="light"
                    >
                      <figure>
                        <img
                          src={data.cardPhoto}
                          alt="Movie"
                          style={{ height: "30vh", maxHeight: "100%", objectFit: "contain" }}
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title"> {data.postTitle} </h2>
                        <p> {data.qualification} </p>
                        <div className="card-actions justify-end">
                          <Link href={`/job/${data.jobId}`}>
                            <button className="btn btn-primary">more</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
             <div
                style={{ backgroundColor: "grey", padding: "1rem" }}
                className="card-actions mt-10"
              >
                <span onClick={() => handlePreviousPage()} className={currentPage === 1 ? 'disabled' : ''}>prev</span>{" "}
                <span onClick={() => handleNextPage()} className={currentPage === totalPages ? 'disabled' : ''}>next</span>{" "}
                <span>
                  Page {currentPage} of {totalPages}
                </span>
              </div>
            </div>

            <div className="home-linkStyle">
              <Links />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
