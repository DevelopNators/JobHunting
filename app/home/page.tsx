"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import Links from "../components/links/links";
import Link from "next/link";
import { useGlobalState } from "../context/GLobalContext";
import { NextSeo } from 'next-seo';
const dateFormatter = new Intl.DateTimeFormat("en-US", {
  day: "numeric",
  month: "short",
  year: "numeric",
});
const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [totalJobs, setTotalJobs] = useState(1);
  var catid: any = null;
  
  try {
    var { catid } = useGlobalState();
   
  } catch (err) {
    console.log("errr");
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
    setLoading(true);
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
      setLoading(true);
      setCurrentPage(currentPage + 1);
      setLoading(false);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setLoading(true);
      setCurrentPage(currentPage - 1);
      setLoading(false);
    }
  };

  const handlePageSizeChange = (size: any) => {
    setPageSize(size);
    setCurrentPage(1);
  };
  const totalPages = Math.ceil(totalJobs / pageSize);
  // console.log(totalPages)

  return (
    <div style={{ backgroundColor: "#F7F8F9" }}>
     


      {loading ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100%",
          }}
        >
         
          <span
            style={{ width: "80px" }}
            className="loading loading-spinner loading-lg"
          ></span>
        </div>
      ) : (
        <div className="main-back">
          <p
            style={{
              textAlign: "center",
              color: "red",
              padding: "0em 1em",
              fontSize: "1.2rem",
              position: "relative",
              top: "calc(100px + 2rem)",
            }}
          >
            <h5 className="caveat">
              Exciting Opportunities Await! Top Multinational Companies are on
              the lookout for fresh talent in India,
              <br /> and Jobhuntings is your gateway to these thrilling career
              prospects!
            </h5>
          </p>

          <div className="home-container">
            <div className="card-style">
              {jobs &&
                jobs.map((data: any) => {
                  return (
                    <div
                      key={data.id}
                      className="card card-side bg-base-100 shadow-x mt-10"
                      style={{ boxShadow: "0px 0px 20px 0px #ff7f7f42" }}
                      data-theme="light"
                    >
                      <figure>
                        <img
                          src={data.cardPhoto}
                          alt="Movie"
                          style={{
                            height: "auto",
                            maxHeight: "100%",
                            objectFit: "fill",
                          }}
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title"> {data.postTitle} </h2>
                        <p className="text-sm">
                          {" "}
                          {dateFormatter.format(new Date(data.createdDate))}
                        </p>
                        <p> {data.qualification} </p>
                        <p>
                          <b>{data.salary}</b>
                        </p>
                        <div className="card-actions justify-end">
                          <Link href={`/job/${data.jobId}`}>
                            <button
                              type="button"
                              className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                            >
                              Find More
                            </button>
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
                <span
                  onClick={() => handlePreviousPage()}
                  className={currentPage === 1 ? "disabled" : ""}
                >
                  prev
                </span>{" "}
                <span
                  onClick={() => handleNextPage()}
                  className={currentPage === totalPages ? "disabled" : ""}
                >
                  next
                </span>{" "}
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


 function generateMetadata(){
  return{
   title : 'Home page'
  }
}