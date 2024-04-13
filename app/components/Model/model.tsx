'use client'
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ModelProps {
  show: boolean;
  setShowModel: React.Dispatch<React.SetStateAction<boolean>>;
}

const Model: React.FC<ModelProps> =   ({ show, setShowModel }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
   
    // console.log('Email:', email);
    // console.log('Name:', name);
    // console.log('Feedback:', feedback);
    
    handleClose();
  };

    const SubmitFeedback = async () => {
      try {
        const response = await fetch("https://developnators.azurewebsites.net/api/FeedBack/AddFeedBack",{
          method:'POST',
          
            headers:{'Content-Type' : 'application/json'},
            body: JSON.stringify({
              email: email,
              phone: '', 
              topic: name,
              message: feedback,
              feedbackFromUrl: 0, 
              type: 'Feedback' 
            })
        });
       
        if (response.ok) {
          
         
          toast.success('Feedback submitted successfully!');
        } else {
          toast.warn('Failed to sumbit Feedback');
        }
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  

  
  
  

  const handleClose = () => {
    setEmail('');
    setName('');
    setFeedback('');
    setShowModel(false);
  };

  return (
    <> 
    <ToastContainer />
 
    <dialog className={show ? `block fixed inset-0 flex items-center justify-center` : `hidden`} style={{ background: 'transparent' }}>
      
  <div className="modal-box bg-white p-8 rounded-lg shadow-lg">
    <h3 style={{ color: 'black', textAlign: 'center' }} className="font-bold text-lg">FeedbackForm!</h3>
    <div className="modal-action flex items-center justify-center" >
      <form onSubmit={handleSubmit} className="w-full max-w-sm" style={{ width: '80vw' }}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            className="input input-bordered w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            className="input input-bordered w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">Feedback</label>
          <textarea
            id="feedback"
            placeholder="Your feedback"
            className="input input-bordered w-full h-24 resize-none"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="flex justify-between">
          <button type="submit" className="btn btn-primary" onClick={()=>SubmitFeedback()}   >Submit</button>
          <button type="button" onClick={handleClose} className="btn btn-secondary">Close</button>
        </div>
      </form>
    </div>
  </div>
</dialog>
</>

  );
};

export default Model;
