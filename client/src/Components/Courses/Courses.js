
import React from 'react';
import img1 from '../CoursePic/img1.png';

const Courses = [
    { 
        id: 1, 
        title: 'Diploma In Industrial Safety Management', 
        description: 'Technology-aided industrial processes that handle large amounts of energy are primarily focused on safety and protecting workers, equipment, the environment, and society. Hence, a well-engineered safety system is essential and this is the purpose of industrial safety. Industrial safety courses can be pursued at many levels after completing 12th with any stream (Science, Commerce, Arts).This is a one-year Industrial safety diploma programme that is offered full-time. The goal of this diploma programme is to provide students with knowledge, skills, and awareness about workplace safety. It also trains them to handle situations involving failures of safety measures.', 
        image: "https://cache.careers360.mobi/media/article_images/2022/8/29/Diploma-In-Industrial-Safety.webp" ,
        eligibility: "ITI, +2, +3, Diploma & B.E/B. Tech (Any Stream)",
        board: "IETE",
        duration: " The Duration of this course is: 1 Year"
    },
    { 
        id: 2, 
        title: 'Diploma in Fire and Safety Management', 
        description: 'Diploma in Fire and Safety Management is a full-time diploma course, the period of this course can vary from 1 to 2 years (usually one). It is an open course that helps students to get better job opportunities  in field as fire and safety officer, health and safety manager. For pursuing Diploma in Fire and Safety Management, Candidates need a qualifying certificate for the 12th-grade examination. Its eligibility guidelines are simple, as compared to other courses. You can go for this course irrespective of the background you had in your senior secondary, that is, science or arts or commerce.', 
        image: 'https://carleton.ca/fse/wp-content/uploads/fse-banner-1.jpg' ,
        eligibility: "ITI, +2, +3, Diploma & B.E/B. Tech (Any Stream)",
        board: "IETE",
        duration: " The Duration of this course is: 1 Year"
    },
    { 
        id: 3, 
        title: 'IOSH-MS', 
        description: 'The IOSH Managing Safely (IOSH-MS) course is designed to provide participants with a comprehensive understanding of health and safety management principles and practices. Covering essential topics such as risk assessment, hazard control, legal compliance, and incident investigation, this course equips individuals with the knowledge and skills needed to ensure workplace safety and promote a culture of health and safety within organizations.  The IOSH-MS course typically spans over three to four days, providing comprehensive training in health and safety management. There are no specific prerequisites for this course, making it suitable for individuals at all levels of an organization.', 
        image: 'https://www.intellelearn.com/resources/wp-content/uploads/2022/02/IOSH.png' ,
        eligibility: "10th Board or Basic English",
        board: "IOSH,UK",
        duration: " The Duration of this course is: 4 Days"
    },
    { 
        id: 4, 
        title: 'NEBOSH-IGC', 
        description: 'NEBOSH International General Certificate (NEBOSH IGC) is a globally recognized qualification designed to provide comprehensive knowledge and understanding of occupational health and safety principles and practices. The course covers essential topics such as risk assessment, hazard identification, control measures, legal requirements, and incident investigation.Eligibility for the NEBOSH IGC course typically includes individuals who have a basic understanding of health and safety concepts and are seeking to enhance their knowledge and skills in this field. There are no specific prerequisites for enrolling in the NEBOSH IGC course, making it suitable for individuals at various levels of an organization, including managers, supervisors, and employees.', 
        image: 'https://5.imimg.com/data5/AS/DF/MY-71753249/nebosh-igc.jpg' ,
        eligibility: "10th Board or Basic English",
        board: "NOBOSH, UK",
        duration: " The Duration of this course is: 1 Year"
    },
    { 
        id: 5, 
        title: 'Safety Auditing and Consultancy', 
        description: 'The "Safety Auditing and Consultancy" course is designed to equip participants with the necessary knowledge and skills to excel in the field of safety auditing and consultancy. The course spans over a period of 12 weeks, comprising both theoretical learning modules and practical hands-on training sessions. This comprehensive course covers a wide array of topics, including risk assessment methodologies, regulatory compliance frameworks, safety management systems, audit planning and execution, corrective action strategies, and effective communication in safety auditing processes.', 
        image: 'https://www.totalika.org/wp-content/uploads/2017/12/safety-audit-1024x683.jpg' 
    },
    { 
        id: 6, 
        title: 'First Aid', 
        description: 'The First Aid course diploma is a comprehensive program designed to equip individuals with the knowledge and skills necessary to provide immediate assistance and care in emergency situations. This course covers a wide range of topics, including basic life support techniques, wound management, CPR, fracture management, and  heart attack and allergic reactions.Eligibility for the First Aid course diploma typically includes individuals who are interested in learning life-saving techniques and are willing to undertake training to become certified first aid providers. There are usually no specific prerequisites for enrolling in the course, making it accessible to people from various backgrounds and professions.', 
        image: 'https://www.redcross.org.nz/assets/Uploads/Images/First-Aid/All-First-Aid-courses/Red-Cross-Adult-Mannequin-7.jpg',
        eligibility: "10th Board or Basic English",
        board: "NSC-Odisha Chapter",
        duration: "The Duration of this course is: 3 Days"
         
    },
    { 
        id: 7, 
        title: 'Diploma in Material Management', 
        description: 'Materials Management is the study of managing raw material, optimum production and delivery of the product to the customer. The course content includes aspects, of logistics, supply chain management, storage management, risk management etc. Courses in Material Management are specialized to give education in handling materials in the inventory of a production or manufacturing company.Since material management is a specialized degree course, it is offered in limited courses like PG Diploma, Diploma, and Certificate courses etc. The duration of diploma courses varies from 1 to 2 years depending upon the institutions that offer the courses.', 
        image: 'https://aztechtraining.com/wp-content/uploads/2023/12/Warehouse-Management-image.jpg' ,
        eligibility: "ITI, +2, +3 (Any Stream)",
        board: "IETE",
        duration: " The Duration of this course is: 6 Months"
    },
    { 
        id: 8, 
        title: 'Lab Technician', 
        description: ' The Lab Technician course is a specialized training program designed to prepare individuals for a career in laboratory science and technology. This course covers a wide range of topics related to laboratory procedures, equipment operation, data analysis, and quality control. Students learn essential skills such as sample collection and handling, laboratory safety protocols, microscope operation, specimen processing, and data recording. Eligibility criteria for the Lab Technician course may vary depending on the institution offering the program. However, it is typically open to individuals who have completed their high school education or equivalent qualification.', 
        image: 'https://cache.careers360.mobi/media/article_images/2022/5/31/Lab-technician-courses-after-10th.webp' ,
        eligibility: " +2, +3 (Science-Chemistry)",
        board: "IETE",
        duration: " The Duration of this course is: 6 Months"
    },
    { 
        id: 9, 
        title: 'Sponsored Course for Scaffolder, Rigger, Fitter, Welder etc.', 
        description: '  The sponsored courses for Scaffolder, Rigger, Fitter, Welder, etc., offer specialized training tailored to individuals seeking to develop skills and expertise in specific trades. These courses cover essential topics such as equipment operation, safety protocols, industry regulations, and practical techniques. The duration of each course may vary based on the specific skills and competencies covered, ranging from a few days to several weeks. These courses are typically open to individuals seeking to enhance their skills or enter the respective trades. Eligibility criteria may vary depending on the course provider and specific requirements.', 
        image: 'https://simianinternational.com/wp-content/uploads/2023/05/Q12.jpg' ,
        eligibility: "Feild Experience",
        board: "IETE, STI",
        duration: "The Duration of this course is: 3 Days"
    },
    { 
        id: 10, 
        title: 'BBS (Behaviour Based Safety)', 
        description: '  Behavior-Based Safety (BBS) is an approach to workplace safety that focuses on observing, analyzing, and modifying the behaviors of employees to prevent accidents and improve overall safety performance. This methodology recognizes that human behavior plays a crucial role in workplace safety and seeks to create a safety culture by addressing and influencing individual actions.Behavior-Based Safety aims to create a proactive safety culture by addressing the human factors that contribute to workplace incidents. It recognizes that by understanding and influencing behaviors, organizations can significantly reduce the risk of accidents and create safer working environments.There are many forms that Behavior-Based Safety can take. Some common examples include: Observation and Feedback: Safety observers regularly observe workers during specific tasks, noting both safe and at-risk behaviors. Observers then provide immediate feedback to individuals, acknowledging safe practices and suggesting improvements for at-risk behaviors.', 
        image: 'https://www.vectorsolutions.com/wp-content/uploads/2020/11/Safety20workers20in20field20with20laptop20pointing20to20horizon-1536x1024.jpg.webp' ,
        eligibility: "Feild Experience",
        board: "IETE",
        duration: "The Duration of this course is: 1 Day"
    },
    { 
        id: 11, 
        title: 'Certificate Course in Industrial Safety Management', 
        description: ' A Certificate Course in Industrial Safety Management is designed to provide participants with the essential knowledge and skills needed to ensure workplace safety within industrial settings. Participants gain an understanding of the importance of industrial safety and its impact on workers well-being, productivity, and organizational success. The course covers relevant laws, regulations, and standards governing workplace safety, ensuring compliance with legal requirements. Participants are trained in delivering effective safety training programs to employees, promoting awareness, and fostering a safety-conscious culture.', 
        image: 'https://iismindia.org/wp-content/uploads/2021/12/Diploma-in-fire-and-safety-management-IISM-%E2%80%93-Indian-Institute-of-safety-and-management.png' ,
        eligibility: "Feild Experience",
        board: "IETE",
        duration: "The Duration of this course is: 4 Days"
    },
    { 
        id: 12, 
        title: 'Certificate Course in Fire & Safety Management', 
        description: '  Behavior-Based Safety (BBS) is an approach to workplace safety that focuses on observing, analyzing, and modifying the behaviors of employees to prevent accidents and improve overall safety performance. This methodology recognizes that human behavior plays a crucial role in workplace safety and seeks to create a safety culture by addressing and influencing individual actions.Behavior-Based Safety aims to create a proactive safety culture by addressing the human factors that contribute to workplace incidents. It recognizes that by understanding and influencing behaviors, organizations can significantly reduce the risk of accidents and create safer working environments.There are many forms that Behavior-Based Safety can take. Some common examples include: Observation and Feedback: Safety observers regularly observe workers during specific tasks, noting both safe and at-risk behaviors. Observers then provide immediate feedback to individuals, acknowledging safe practices and suggesting improvements for at-risk behaviors.', 
        image: 'https://ncvte.ac.in/image/sector/12.jpg' ,
        eligibility: "Feild Experience",
        board: "IETE",
        duration: "The Duration of this course is: 4 Days"
    },
    { 
        id: 13, 
        title: 'Sponsored Course – Fitter, Welder, Gas Cutter, Electrician, AC Technician etc. ', 
        description: '  Behavior-Based Safety (BBS) is an approach to workplace safety that focuses on observing, analyzing, and modifying the behaviors of employees to prevent accidents and improve overall safety performance. This methodology recognizes that human behavior plays a crucial role in workplace safety and seeks to create a safety culture by addressing and influencing individual actions.Behavior-Based Safety aims to create a proactive safety culture by addressing the human factors that contribute to workplace incidents. It recognizes that by understanding and influencing behaviors, organizations can significantly reduce the risk of accidents and create safer working environments.There are many forms that Behavior-Based Safety can take. Some common examples include: Observation and Feedback: Safety observers regularly observe workers during specific tasks, noting both safe and at-risk behaviors. Observers then provide immediate feedback to individuals, acknowledging safe practices and suggesting improvements for at-risk behaviors.', 
        image: 'https://www.betterteam.com/images/electrical-technician-job-description-5184x3456-20201124.jpeg?crop=21:16,smart&width=420&dpr=2&format=pjpg&auto=webp&quality=85' ,
        eligibility: "Feild Experience",
        board: "IETE",
        duration: " The Duration of this course is: 2 Days"
    },
  
    { 
        id: 14, 
        title: '5S Methodology', 
        description: ' The 5S methodology is a systematic approach to workplace organization and standardization, originating from Japanese management practices. The term "5S" stands for five Japanese words: Seiri (Sort), Seiton (Set in Order), Seiso (Shine), Seiketsu (Standardize), and Shitsuke (Sustain).  The 5S methodology is a powerful tool for improving workplace organization, efficiency, safety, and morale. By systematically implementing and sustaining the 5S principles, organizations can create a work environment that fosters productivity, quality, and employee satisfaction.', 
        image: 'https://www.leanproduction.com/static/93cbf416910f51fc331fa4480bf1dc89/9829a/five-s-process-image.webp' ,
        eligibility: "Feild Experience",
        board: "IETE",
        duration: " The Duration of this course is: 1 Day"
    },
    
];

export default Courses;
