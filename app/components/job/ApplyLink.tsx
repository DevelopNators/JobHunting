import React from 'react';

const links = [
    { title: "Apply Link Fullstack", href: "link_to_fullstack" },
    { title: "Apply Link Data Engineer", href: "link_to_data_engineer" },
    { title: "Apply Link DevOps Engineer", href: "link_to_devops_engineer" },
    { title: "Click Here to Join WhatsApp Group", href: "https://chat.whatsapp.com/B9CPqLz6lQF5jMPUSLxw9I" }
];

const ApplyLink = () => {
    return (
        <>
            {links.map((link, index) => (
                <div key={index} style={{ marginTop: '100px' }}>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <h1 style={{ color: 'black', fontWeight: 'bold' }}>{link.title}</h1>
                        <a href={link.href}>Link</a>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ApplyLink;
