"use client";
import React, { useCallback, useEffect, useState } from "react";
import Head from "next/head"; // Import Head for SEO and metadata
import Links from "../../components/links/links";

import JobSummary from "@/app/components/jobcomponents/jobSummary";
import HiringDetails from "@/app/components/jobcomponents/HiringDetails";
import Role from "@/app/components/jobcomponents/Role";
import Responsibility from "@/app/components/jobcomponents/Responsibilities";
import Qualification from "@/app/components/jobcomponents/Qualification";
import SkillRequirement from "@/app/components/jobcomponents/SkillRequirement";
import Designation from "@/app/components/jobcomponents/Designation";
import HowToApply from "@/app/components/jobcomponents/HowtoApply";
import ApplyLink from "@/app/components/jobcomponents/ApplyLink";
import Script from "next/script";
import { NextSeo } from "next-seo";
const dateFormatter = new Intl.DateTimeFormat("en-US", {
  day: "numeric",
  month: "short",
  year: "numeric",
});
const Jobs = ({ params }: { params: { jobid: string } }) => {
  const Jobid = params.jobid;
  const [singlejob, setSingleJob] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [time, setTime] = useState(false);

  const showLink = () => {
    setTimeout(() => {
      setTime(true);
    }, 4000);
  };
  showLink();

  const GetSingleJob = useCallback(async () => {
    try {
      const response = await fetch(
        `https://developnators.azurewebsites.net/api/JobHunting/GetJobWeb/${Jobid}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch job");
      }
      const data = await response.json();
      setSingleJob(data);
      setLoading(false);
      // console.log("data",data )
    } catch (error) {
      console.error("Error fetching job:", error);
    }
  }, [Jobid]);

  useEffect(() => {
    let isMounted = true;

    const fetchSingleJob = async () => {
      try {
        await GetSingleJob();
      } catch (error) {
        console.error("Error fetching single job:", error);
      }
    };

    fetchSingleJob();

    return () => {
      isMounted = false;
    };
  }, [GetSingleJob]);

  const [shouldApplyStyle, setShouldApplyStyle] = useState(false);

  useEffect(() => {
    const checkWindowWidth = () => {
      setShouldApplyStyle(window.innerWidth > 520);
    };

    checkWindowWidth();

    window.addEventListener("resize", checkWindowWidth);

    return () => {
      window.removeEventListener("resize", checkWindowWidth);
    };
  }, []);
  let measurementId ='G-64SHT6GEGF'

  return (
    <div>

         <Script   strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}></Script>
      <Script id="google-analytics" strategy="afterInteractive">
    {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${measurementId}');
    `}
</Script>
<NextSeo
    title="Home Page"
    description="Display all jobs here"
    openGraph={{
        title: 'single job Page',
        description: 'Display all jobs here',
        images: [
            {
                url: 'https://jobhuntings.developnators.com/',
                alt: 'Homepage Image',
            },
        ],
    }}
    additionalMetaTags={[
        {
            name: 'keywords',
            content: 'jobs, employment, career',
        },
        {
            name: 'robots',
            content: 'index,follow',
        },
        {
            name: 'author',
            content: 'Your Name or Company Name',
        },
        {
            name: 'language',
            content: 'English',
        },
        {
            name: 'revisit-after',
            content: '7 days',
        },
        {
            name: 'rating',
            content: 'general',
        },
        {
            name: 'distribution',
            content: 'global',
        },
        {
            name: 'geo.region',
            content: 'US-NY', 
        },
        {
            name: 'geo.placename',
            content: 'New York', 
        },
        {
            name: 'geo.position',
            content: '40.7128;-74.0060', 
        },
        {
            name: 'ICBM',
            content: '40.7128, -74.0060', 
        },
        {
            name: 'og:type',
            content: 'website',
        },
    ]}
/>
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
        <div className="main-back" >
          <p
            style={{
              textAlign: "center",
              color: "red",
              fontSize: "1rem",
              position: "relative",
              top: "calc(100px)",
              padding: "0rem 2rem",
              backgroundColor: "#F7F8F9",
            }}
          >
            <h1 className="caveat">
              🚀 Dive into a world of endless possibilities, where your skills
              meet their perfect match.<br/> Start your journey today with
              Jobhuntings and unlock a future filled with growth, success, and
              fulfillment! Don't miss out—your dream job awaits!
            </h1>
          </p>
          <Head>
            <title>Jobs Page</title>
            <meta
              name="description"
              content="Your job listings page description"
            />
          </Head>

          <div
            style={{
              display: "flex",
              position: "relative",
              top: "calc(100px)",
              padding: "2rem",
              backgroundColor: "#F7F8F9",
            }}
            className="link-content"
            data-theme="light"
          >
            <div
              style={{ flex: "1", marginRight: shouldApplyStyle ? "20px" : 0 }}
              className="container"
            >
              <h1>
                <b>{singlejob?.postTitle}</b>
              </h1>

              <p className="text-sm text-gray-500 mb-2">
                Posted on{" "}
                {dateFormatter.format(new Date(singlejob.createdDate))} by Admin
              </p>

              <div className="flex flex-col md:flex-row items-center md:space-x-4">
                <div className="md:w-1/2 mb-4 md:mb-0">
                  <img
                    src={singlejob?.cardPhoto}
                    alt="Organization"
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
                <div className="md:w-1/2">
                  <p className="text-gray-600">
                    <b>{singlejob?.organizationName}</b>{" "}
                    {singlejob?.short_Description}
                  </p>
                </div>
              </div>

              <JobSummary
                title={singlejob?.jobRole}
                role={singlejob?.jobRole}
                description={singlejob?.job_Description}
              />
              <HiringDetails
                role={singlejob?.jobRole}
                Jobqualifications={singlejob?.qualification}
                experience={singlejob?.experience}
                batch={singlejob?.batch}
                salary={singlejob?.salary}
                lastDate={singlejob?.lastApplyDate}
                location={singlejob?.jobLocation}
                telegramLink={singlejob?.telegramGroupLink}
                organizationName={singlejob?.organizationName}
              />
              <Role
                role={singlejob?.jobRole}
                organizationName={singlejob?.organizationName}
                batch={singlejob?.batch}
              />
              <Responsibility description={singlejob?.job_Description} />
              <Qualification
                batch={singlejob?.batch}
                Jobqualifications={singlejob?.qualification}
              />

              <Designation
                title={singlejob?.organizationName}
                role={singlejob?.jobRole}
                description={singlejob?.job_Description}
              />
              <h1 className="my-3">
                <b>ABOUT {singlejob?.organizationName}</b>
              </h1>
              <p className="mb-2">{singlejob?.aboutOrganization}</p>
              <HowToApply
                appyInstructions={singlejob?.appyInstructions}
                organizationName={singlejob?.organizationName}
              />
              {time && <ApplyLink appyLink={singlejob?.appyLink} />}
            </div>

            {shouldApplyStyle ? (
              <div style={{ flex: "0 0 30%", maxWidth: "100%" }}>
                <Links />
              </div>
            ) : (
              <Links />
            )}
          </div>

          <style jsx>{`
            @media only screen and (max-width: 768px) {
              .link-content > div:first-child {
                margin-right: 0;
              }
            }
          `}</style>
        </div>
      )}
      
   
      
    </div>
  );
};

export default Jobs;
