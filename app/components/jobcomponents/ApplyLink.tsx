import React from 'react';

interface AppyLinkProps {
    appyLink?: string;
}

const ApplyLink: React.FC<AppyLinkProps> = ({ appyLink }) => {
    if (!appyLink) {
        return null; // If appyLink is not provided, return null to render nothing
    }

    return (
        <div   style={{ marginTop: '100px',  boxShadow:'1px 1px 1px 1px grey'}}  data-theme="light"  >
            <div style={{ display: 'flex', gap: '10px' }}>
                <h1 style={{ color: 'black', fontWeight: 'bold' }}>Apply Link</h1>
                <a  target='_blank' style={{color:'blue'}} href={appyLink} >Link</a>
            </div>
        </div>
    );
};

export default ApplyLink;
