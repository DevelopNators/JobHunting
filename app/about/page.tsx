import React from 'react';
import Image from 'next/image';
import  {data} from '../../data/data'
import { NextSeo } from 'next-seo';
export default function About() {
  return (
    <div  className="about-page p-8 main-back " style={{color:'black',paddingTop: '6rem'}} data-theme="light">
       <NextSeo
    title="About Page"
    description="Display all jobs here"
    openGraph={{
        title: 'About  Page',
        description: 'About Us',
        images: [
            {
                url: 'https://jobhuntings.developnators.com/about',
                alt: 'about page',
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

      <h1 className="text-4xl font-bold ">Passion meet success.</h1>
      <p className="text-lg mb-6 p-2">
        At Our Company, we're passionate about providing high-quality drinks
        and creating memorable experiences for our customers. Our mission is to
        elevate your beverage enjoyment to new heights.
      </p>
      <p className="text-lg mb-6 p-2">
        Our journey began with a simple idea: to craft exceptional beverages
        that not only quench thirst but also tantalize taste buds. With our
        commitment to quality and innovation, we've grown into a beloved brand
        known for our diverse selection of drinks and impeccable service.
      </p>
      <p className="text-lg mb-6 p-2">
        Whether you're craving a refreshing iced tea on a hot summer day or
        indulging in a cozy cup of coffee on a chilly morning, we've got
        something for everyone. From classic favorites to creative concoctions,
        our menu is designed to delight and inspire.
      </p>
      <p className="text-lg mb-6 p-2">
        Beyond our delicious drinks, we're dedicated to fostering a welcoming
        atmosphere where every customer feels valued and appreciated. We believe
        that great service is just as important as great taste, which is why
        our team goes above and beyond to ensure your experience is nothing
        short of exceptional.
      </p>
      <div className="carousel carousel-end rounded-box" data-theme="light">
            <div className="carousel-item">
            {data.map((item, index) => (
      <div key={index} className="carousel-item">
        <img height="400px" width="400px" src={item.url} alt="Drink" className="rounded" />
      </div>
      ))}

        </div>

       

      </div>
    </div>
  );
}
