import React from 'react';

const CompanyLogo = ({ company }) => {
    const { name, logoUrl } = company;

    return (
        <div className="company-logo">
            <img src={logoUrl} alt={name} />
            <p>{name}</p>
        </div>
    );
}

export default CompanyLogo;
