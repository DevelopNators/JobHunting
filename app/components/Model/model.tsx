import React, { useState } from 'react';

interface ModelProps {
  show: boolean;
  setShowModel: React.Dispatch<React.SetStateAction<boolean>>;
}

const Model: React.FC<ModelProps> = ({ show, setShowModel }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you can handle form submission, for now just log the values
    console.log('Email:', email);
    console.log('Name:', name);
    console.log('Feedback:', feedback);
    // Close the modal after form submission
    handleClose();
  };

  const handleClose = () => {
    setEmail('');
    setName('');
    setFeedback('');
    setShowModel(false);
  };

  return (
    <dialog className={show ? `block fixed inset-0 flex items-center justify-center` : `hidden`} style={{ background: 'transparent' }}>
      <div className="modal-box bg-white p-8 rounded-lg shadow-lg">
        <h3  className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <div className="modal-action">
          <form onSubmit={handleSubmit} className="w-full max-w-sm">
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
              <button type="submit" className="btn btn-primary">Submit</button>
              <button type="button" onClick={handleClose} className="btn btn-secondary">Close</button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Model;
