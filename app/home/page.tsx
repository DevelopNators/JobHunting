
'use client'
import { useState } from 'react';
import Head from 'next/head';
import Links from '../components/links/links';

export default function Home() {
  // State to track the current page
  const [currentPage, setCurrentPage] = useState(1);

  // Function to handle next page
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  // Function to handle previous page
  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

//   data-theme="light"
  return (
    <div style={{backgroundColor:'#F7F8F9'}}>
   <p style={{textAlign:'center', color:'red', fontSize:'1.6rem'}}>  
    <a  target="_blank" href  = "https://techfynder.com/Fresher-jobs-in-India">   <h1> Top mncs are Hiring  <b style={{marginLeft:'20px'}}> find the Fresheres job in india </b></h1> </a>
   </p>
    <div className='home-container'  >

       

        
      <div className='card-style '>
        
        <div className=" card card-side bg-base-100 shadow-xl" data-theme="light">
          <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">more</button>
            </div>
          </div>
        </div>

        <div className="card card-side bg-base-100 shadow-xl mt-10" data-theme="light">
          <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">more</button>
            </div>
          </div>
        </div>

        <div className="card card-side bg-base-100 shadow-xl mt-10" data-theme="light">
          <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">more</button>
            </div>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl mt-10" data-theme="light">
          <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">more</button>
            </div>
          </div>
        </div>

        <div style={{ padding: '10rem', backgroundColor: 'white', marginTop: '10rem', boxShadow: '2px 2px 2px 2px grey', borderRadius:'0.6rem' }}>
            
        </div>


        <div className=" bg-base-100 shadow-xl mt-10 p-5 " data-theme="light" >
            <span> 
                <span>
                    prev 
                </span>
                <span style={{marginLeft:'20px'}}> 
                    next
                </span>
            </span>
        </div >

      </div>

      <div className='home-linkStyle'>
       
       
        <Links />
      </div>
      </div>

    
    </div>
  );
}
