"use client";
import React, { useEffect, useState } from "react";
import DevelopNators from "../../../public/developnators1.png"; // Correct image import path
import Image from 'next/image';
import skillup from '../../../public/skillup.png'
const Links = () => {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllLinks = async () => {
    try {
      const data = await fetch(
        " https://developnators.azurewebsites.net/api/JobHunting/GetAllJobsWeb?&IsActive=true&&pageSize=100"
      );
      const response = await data.json();
      setLinks(response.jobs);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching links:", error);
    }
  };

  useEffect(() => {
    getAllLinks();
  }, []);

  return (
    <div className="mt-10 ">
      <div className="links-container">
        <div className="card-data"></div>

        <div
          className="card-data-10"
          style={{
            backgroundColor: "white",
            color: "black",
            textAlign: "center",
          }}
        >
          <div style={{ padding: "5px" }}>
            <h1 style={{ fontWeight: "400" }}>Our Training Program</h1>
            <hr />
          </div>
          <a target="_blank" href="https://developnators.com/skillup">
            <Image
              style={{
                objectFit: "contain",
                width: "100%",
                height: "65%",
                display: "block",
                margin: "0 auto",
              }}
              src={skillup}
              alt="DevelopNators"
            />
            <span className="text-md font-bold italic oswald mb-1">by DEVELOPNATORS</span>
          </a>
        </div>

        <div className="card-data-20"></div>

        <div
          className="links-wrapper card-data-links  "
          style={{
            position: "relative",
            marginBottom: "calc(100px)",
            backgroundColor: "#F7F8F9",
          }}
        >
          {loading ? (
            <>
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
                <span className="loading loading-dots loading-lg"></span>
              </div>
            </>
          ) : (
            <>
              {links.map((res: any, index) => (
                <div
                  style={{
                    display: "flex",
                    marginBottom: "0rem",
                    height: "auto",
                  }}
                  key={index}
                >
                  <a
                    style={{ padding: "1rem", flex: "1" }}
                    className="mt-0"
                    href={res.appyLink}
                  >
                    <span
                      style={{
                        color: "blue",
                        overflow: "scroll",
                        marginTop: "-10px",
                        height: "auto",
                      }}
                    >
                      {res.postTitle}
                    </span>{" "}
                    <hr />
                  </a>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Links;
