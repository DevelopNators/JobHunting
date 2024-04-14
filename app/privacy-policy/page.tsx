import Script from "next/script";
import Links from "../components/links/links";
import { NextSeo } from "next-seo";

const PrivacyPolicy = () => {
  let measurementId ='G-64SHT6GEGF'
  return (
    <div data-theme="light">
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
    title="privacy   Page"
    description="Display all jobs here"
    openGraph={{
        title: 'privacy  Page',
        description: 'our privacy policy',
        images: [
            {
                url: 'https://jobhuntings.developnators.com/',
                alt: 'privacy Image',
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
      <div className="term-container">
        <div
          className="term-services mt-6"
          style={{ position: "relative", marginTop: "calc(130px)" }}
        >
          <h1 style={{ fontWeight: "bolder" }}>
            Privacy Policy of Job Huntings by Developnators
          </h1>
          <p>Updated on : 14th April 2024</p>
          <br />
          <p>
            Developnators operates the jobhuntings.developnators.com website,
            which provides the SERVICE.
          </p>

          <p>
            This page is used to inform website visitors regarding our policies
            with the collection, use, and disclosure of Personal Information if
            anyone decided to use our Service, the jobhuntings website.
          </p>

          <p>
            If you choose to use our Service, then you agree to the collection
            and use of information in relation with this policy. The Personal
            Information that we collect are used for providing and improving the
            Service. We will not use or share your information with anyone
            except as described in this Privacy Policy.
          </p>

          <p>
            The terms used in this Privacy Policy have the same meanings as in
            our Terms and Conditions, which is accessible at
            jobhuntings.developnators.com, unless otherwise defined in this
            Privacy Policy.
          </p>

          <h2 style={{ fontWeight: "bolder" }}>
            Information Collection and Use
          </h2>

          <p>
            For a better experience while using our Service, we may require you
            to provide us with certain personally identifiable information,
            including but not limited to your name, phone number, and postal
            address. The information that we collect will be used to contact or
            identify you.
          </p>

          <h2 style={{ fontWeight: "bolder" }}>Log Data</h2>

          <p>
            We want to inform you that whenever you visit our Service, we
            collect information that your browser sends to us that is called Log
            Data. This Log Data may include information such as your computer's
            Internet Protocol ("IP") address, browser version, pages of our
            Service that you visit, the time and date of your visit, the time
            spent on those pages, and other statistics.
          </p>

          <h2 style={{ fontWeight: "bolder" }}>Cookies</h2>

          <p>
            Cookies are files with small amount of data that is commonly used an
            anonymous unique identifier. These are sent to your browser from the
            website that you visit and are stored on your computer's hard drive.
          </p>

          <p>
            Our website uses these "cookies" to collection information and to
            improve our Service. You have the option to either accept or refuse
            these cookies, and know when a cookie is being sent to your
            computer. If you choose to refuse our cookies, you may not be able
            to use some portions of our Service.
          </p>

          <h2 style={{ fontWeight: "bolder" }}>Service Providers</h2>

          <p>
            We may employ third-party companies and individuals due to the
            following reasons:
          </p>

          <ul>
            <li>To facilitate our Service;</li>
            <li>To provide the Service on our behalf;</li>
            <li>To perform Service-related services; or</li>
            <li>To assist us in analyzing how our Service is used.</li>
          </ul>

          <p>
            We want to inform our Service users that these third parties have
            access to your Personal Information. The reason is to perform the
            tasks assigned to them on our behalf. However, they are obligated
            not to disclose or use the information for any other purpose.
          </p>

          <h2 style={{ fontWeight: "bolder" }}>Security</h2>

          <p>
            We value your trust in providing us your Personal Information, thus
            we are striving to use commercially acceptable means of protecting
            it. But remember that no method of transmission over the internet,
            or method of electronic storage is 100% secure and reliable, and we
            cannot guarantee its absolute security.
          </p>

          <h2 style={{ fontWeight: "bolder" }}>Links to Other Sites</h2>

          <p>
            Our Service may contain links to other sites. If you click on a
            third-party link, you will be directed to that site. Note that these
            external sites are not operated by us. Therefore, we strongly advise
            you to review the Privacy Policy of these websites. We have no
            control over, and assume no responsibility for the content, privacy
            policies, or practices of any third-party sites or services.
          </p>

          <p>Children's Privacy</p>

          <p>
            Our Services do not address anyone under the age of 13. We do not
            knowingly collect personal identifiable information from children
            under 13. In the case we discover that a child under 13 has provided
            us with personal information, we immediately delete this from our
            servers. If you are a parent or guardian and you are aware that your
            child has provided us with personal information, please contact us
            so that we will be able to do necessary actions.
          </p>

          <h2 style={{ fontWeight: "bolder" }}>
            Changes to This Privacy Policy
          </h2>

          <p>
            We may update our Privacy Policy from time to time. Thus, we advise
            you to review this page periodically for any changes. We will notify
            you of any changes by posting the new Privacy Policy on this page.
            These changes are effective immediately, after they are posted on
            this page.
          </p>

          <p>
            Our Privacy Policy was created with the help of the{" "}
            <a href="https://www.privacypolicytemplate.net">
              Privacy Policy Template
            </a>
            .
          </p>

          <h2 style={{ fontWeight: "bolder" }}>Contact Us</h2>

          <p>
            If you have any questions or suggestions about our Privacy Policy,
            do not hesitate to contact us.
          </p>
        </div>
        <div
          className="home-linkStyle"
          style={{ position: "relative", marginTop: "calc(90px)" }}
        >
          <Links />
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};
export default PrivacyPolicy;
