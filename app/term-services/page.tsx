import Script from "next/script";
import Links from "../components/links/links";
import { NextSeo } from "next-seo";

const TermAndService = () => {
  let measurementId ='G-64SHT6GEGF'

  return (
    <div  data-theme="light"   >

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
    title="term-services Page"
    description="Display all jobs here"
    openGraph={{
        title: 'term-services Pag',
        description: 'term andd services',
        images: [
            {
                url: 'https://jobhuntings.developnators.com/term-services',
                alt: 'term and  services',
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

      
      
      <div className="term-container" style={{ display: "flex", width: "100%", height:'auto', justifyContent: "center" }}>
      <div className="term-services mt-6" style= {{ position: 'relative', marginTop: 'calc(120px)'}}  >
      <h1  style={{ textAlign: "center", fontSize: "2.5rem", fontWeight: "bold" }}>OUR TERM AND SERVICES</h1>
          <h2>Disclaimer</h2>
          <p>
            We want to make your experience with Job Hunters as smooth and transparent as possible. Please take a moment to read through our Terms of Service. By using Job Hunters, you agree to comply with these terms.
          </p>
          <hr />
          <h2>Information Provider</h2>
          <p>
            - We are an information provider for job openings and are not associated with any company/agency/agent whose jobs are posted on Job Hunters.
            <br />
            - All logos are trademarks of their respective owners.
            <br />
            - Users should verify all information on the official authority website regarding company/salary/qualification/last date before applying for any jobs.
          </p>
          <hr />
          <h2>Guarantees and Warranties</h2>
          <p>
            - Job Hunters offers no guarantee nor warranties that there will be a satisfactory response or any response at all.
            <br />
            - We neither guarantee nor offer any warranty about the credentials, bonafides, status, or otherwise of the prospective employer/organization.
            <br />
            - Job Hunters will not be held liable for the loss of any data, technical or otherwise, acts of god, as well as reasons beyond our control.
          </p>
          <hr />
          <h2>User Representation</h2>
          <p>
            - By using Job Hunters, the user represents that they are not a minor and are not under any legal or other disability that limits their ability to comply with these terms.
            <br />
            - The user further represents that they are not purchasing the products/services for resale to others without Job Hunters' prior written consent.
          </p>
          <hr />
          <h2>Termination</h2>
          <p>
            - The user agreement between a user/subscriber and Job Hunters will be treated as terminated in certain events as agreed upon by the parties mutually.
          </p>
          <hr />
          <h2>Educate Yourself Against Fraud/Scams</h2>
          <p>
            - We encourage you to educate yourself against the most common kinds of Internet and Email frauds.
            <br />
            - Phishing and spoofing are two types of email scams. Please be cautious and verify the authenticity of any emails you receive.
            <br />
            - For more information about protecting yourself against Phishing scams, visit: <a href="http://www.antiphishing.org/consumer_recs.html">Anti-Phishing Working Group</a>.
          </p>
        </div>

        <div className="home-linkStyle" style={{position: 'relative', marginTop: 'calc(90px)'}}>
          <Links />
        </div>
      </div>
    </div>
  );
};
export default TermAndService;
