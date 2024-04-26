import React from 'react';

const StudentProfile = ({ student }) => {
    const { name, photoUrl, id, degreeProgram, graduationYear, contactEmail } = student;

    return (
        <div className="student-profile">
            {photoUrl && <img src={photoUrl} alt={name} />}
            <h2>{name}</h2>
            <p>Student ID: {id}</p>
            <p>Degree Program: {degreeProgram}</p>
            <p>Graduation Year: {graduationYear}</p>
            {contactEmail && <p>Contact Email: {contactEmail}</p>}
        </div>
    );
}

export default StudentProfile;
