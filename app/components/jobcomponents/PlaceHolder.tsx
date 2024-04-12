import React from 'react';

interface PropInterface {
    text: string;
}

const PlaceHolder: React.FC<PropInterface> = ({ text }) => {
    // Log the text to ensure it's passed correctly
   

    return (
        <div className="mt-10 p-2" style={{ background: 'linear-gradient(to right, #0044b3, #0066ff)', borderRadius: '0.6rem' }}>
            {/* Check computed styles and inspect the element in browser dev tools */}
            <h1 className="text-2xl font-semibold text-white">{text}</h1>
        </div>
    );
};

export default PlaceHolder;

