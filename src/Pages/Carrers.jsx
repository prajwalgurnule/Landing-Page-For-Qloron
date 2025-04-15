// import React, { useState, useRef, useEffect } from "react";
// import { Helmet } from "react-helmet-async";
// import { FaArrowRight, FaSearch,FaTrash, FaCheckCircle, FaCheck, FaBriefcase, FaRegClock, FaMapMarkerAlt, FaPaperPlane, FaUser, FaLock, FaSignInAlt, FaUserPlus, FaTimes, FaClock, FaThumbsUp, FaThumbsDown, FaEdit } from "react-icons/fa";
// import { motion } from "framer-motion";
// import emailjs from '@emailjs/browser';

// const CareersPage = () => {
//   const currentUrl = window.location.href;
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedJob, setSelectedJob] = useState(null);
//   const [applicationStep, setApplicationStep] = useState(0);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     collegeEmail: "",
//     personalEmail: "",
//     mobileNo: "",
//     college: "",
//     qualification: "",
//     address: "",
//     department: "",
//     semester: "",
//     skills: "",
//     resume: null
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showLogin, setShowLogin] = useState(false);
//   const [showRegister, setShowRegister] = useState(false);
//   const [loginData, setLoginData] = useState({ email: "", password: "" });
//   const [registerData, setRegisterData] = useState({ 
//     fullName: "", 
//     email: "", 
//     password: "", 
//     confirmPassword: "" 
//   });
//   const [viewAppliedJobs, setViewAppliedJobs] = useState(false);
//   const [appliedJobs, setAppliedJobs] = useState([]);
//   const formRef = useRef();

//   // Sample job data
//   const jobs = [
//     {
//       id: 1,
//       title: "UX/UI Designer",
//       type: "Full-time",
//       location: "Remote",
//       experience: "2-3 years",
//       company: "Qloron Pvt. Ltd",
//       description: "We're looking for a creative UX/UI Designer to join our team and help design products."
//     },
//     {
//       id: 2,
//       title: "Python Developer",
//       type: "Full-time",
//       location: "Hybrid",
//       experience: "7-8 years",
//       company: "Qloron Pvt. Ltd",
//       description: "Seeking an experienced Python developer to work on our backend systems and APIs."
//     },
//     {
//       id: 3,
//       title: "Java Developer",
//       type: "Contract",
//       location: "On-site",
//       experience: "6-7 years",
//       company: "Qloron Pvt. Ltd",
//       description: "Join our team to develop high-performance Java applications for enterprise clients."
//     },
//     {
//       id: 4,
//       title: "DevOps Engineer",
//       type: "Full-time",
//       location: "Remote",
//       experience: "3-7 years",
//       company: "Qloron Pvt. Ltd",
//       description: "Help us build and maintain our cloud infrastructure and CI/CD pipelines."
//     },
//     {
//       id: 5,
//       title: "Graphic Designer",
//       type: "Part-time",
//       location: "Remote",
//       experience: "1-3 years",
//       company: "Qloron Pvt. Ltd",
//       description: "Create stunning visual designs for our marketing materials and digital products."
//     },
//     {
//       id: 6,
//       title: "Full Stack Developer",
//       type: "Full-time",
//       location: "Onsite",
//       experience: "3-5 years",
//       company: "Qloron Pvt. Ltd",
//       description: "Develop and maintain scalable web applications, handling both front-end and back-end development."
//     }    
//   ];

//   // Check if user is logged in on component mount
//   useEffect(() => {
//     const user = localStorage.getItem('careerUser');
//     if (user) {
//       setIsLoggedIn(true);
//       const applied = localStorage.getItem(`appliedJobs_${JSON.parse(user).email}`) || '[]';
//       setAppliedJobs(JSON.parse(applied));
//     }
//   }, []);

//   const filteredJobs = jobs.filter(job => 
//     job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
//     job.description.toLowerCase().includes(searchTerm.toLowerCase())
//   ).filter(job => {
//     if (viewAppliedJobs) {
//       return appliedJobs.some(appliedJob => appliedJob.id === job.id);
//     }
//     return true;
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleLoginChange = (e) => {
//     const { name, value } = e.target;
//     setLoginData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleRegisterChange = (e) => {
//     const { name, value } = e.target;
//     setRegisterData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleFileUpload = (e) => {
//     setFormData(prev => ({ ...prev, resume: e.target.files[0] }));
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // In a real app, you would verify credentials with a backend
//     const users = JSON.parse(localStorage.getItem('careerUsers')) || [];
//     const user = users.find(u => u.email === loginData.email && u.password === loginData.password);
    
//     if (user) {
//       localStorage.setItem('careerUser', JSON.stringify(user));
//       setIsLoggedIn(true);
//       setShowLogin(false);
//       const applied = localStorage.getItem(`appliedJobs_${user.email}`) || '[]';
//       setAppliedJobs(JSON.parse(applied));
//     } else {
//       alert('Invalid credentials. Please try again.');
//     }
//   };

//   const handleRegister = (e) => {
//     e.preventDefault();
//     if (registerData.password !== registerData.confirmPassword) {
//       alert("Passwords don't match!");
//       return;
//     }

//     const users = JSON.parse(localStorage.getItem('careerUsers') || '[]');
    
//     if (users.some(u => u.email === registerData.email)) {
//       alert('User with this email already exists!');
//       return;
//     }

//     const newUser = {
//       fullName: registerData.fullName,
//       email: registerData.email,
//       password: registerData.password
//     };

//     users.push(newUser);
//     localStorage.setItem('careerUsers', JSON.stringify(users));
//     localStorage.setItem('careerUser', JSON.stringify(newUser));
//     setIsLoggedIn(true);
//     setShowRegister(false);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('careerUser');
//     setIsLoggedIn(false);
//     setAppliedJobs([]);
//     setViewAppliedJobs(false);
//   };

//   const handleApply = (job) => {
//     if (!isLoggedIn) {
//       setShowLogin(true);
//       return;
//     }
//     setSelectedJob(job);
//     setApplicationStep(1);
//   };

//   const handleSubmitApplication = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Prepare the email template parameters
//     const templateParams = {
//       to_name: formData.fullName,
//       to_email: formData.personalEmail,
//       job_title: selectedJob.title,
//       company_name: selectedJob.company,
//       full_name: formData.fullName,
//       college_email: formData.collegeEmail,
//       personal_email: formData.personalEmail,
//       mobile_no: formData.mobileNo,
//       college: formData.college,
//       qualification: formData.qualification,
//       address: formData.address,
//       department: formData.department,
//       semester: formData.semester,
//       skills: formData.skills,
//       resume_filename: formData.resume ? formData.resume.name : "Not provided",
//       resume: formData.resume
//     };

//     emailjs.send(
//       'service_6dfg8xu', // YOUR_SERVICE_ID
//       'template_sfxj4op', // YOUR_TEMPLATE_ID
//       templateParams,
//       'v2J5a5xaZFSvqYOsH' // YOUR_PUBLIC_KEY
//     )
//     .then((result) => {
//       console.log(result.text);
      
//       // Save application to localStorage
//       const user = JSON.parse(localStorage.getItem('careerUser'));
//       const appliedJob = {
//         ...selectedJob,
//         applicationDate: new Date().toISOString(),
//         status: 'Under Review',
//         applicationData: formData
//       };
      
//       const updatedAppliedJobs = [...appliedJobs, appliedJob];
//       setAppliedJobs(updatedAppliedJobs);
//       localStorage.setItem(`appliedJobs_${user.email}`, JSON.stringify(updatedAppliedJobs));
      
//       setApplicationStep(4);
//       setIsSuccess(true);
//     }, (error) => {
//       console.log(error.text);
//       alert('Failed to submit application. Please try again later.');
//     })
//     .finally(() => {
//       setIsSubmitting(false);
//     });
//   };

//   const updateApplicationStatus = (jobId, newStatus) => {
//     const user = JSON.parse(localStorage.getItem('careerUser'));
//     const updatedJobs = appliedJobs.map(job => {
//       if (job.id === jobId) {
//         return { ...job, status: newStatus };
//       }
//       return job;
//     });
    
//     setAppliedJobs(updatedJobs);
//     localStorage.setItem(`appliedJobs_${user.email}`, JSON.stringify(updatedJobs));
//   };

//   const getStatusBadge = (status) => {
//     switch (status) {
//       case 'Under Review':
//         return <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm flex items-center"><FaClock className="mr-1" /> {status}</span>;
//       case 'Shortlisted':
//         return <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center"><FaThumbsUp className="mr-1" /> {status}</span>;
//       case 'Selected':
//         return <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm flex items-center"><FaCheck className="mr-1" /> {status}</span>;
//       case 'Rejected':
//         return <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm flex items-center"><FaThumbsDown className="mr-1" /> {status}</span>;
//       default:
//         return <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">{status}</span>;
//     }
//   };

//   const withdrawApplication = (jobId) => {
//     const user = JSON.parse(localStorage.getItem('careerUser'));
//     const updatedJobs = appliedJobs.filter(job => job.id !== jobId);
//     setAppliedJobs(updatedJobs);
//     localStorage.setItem(`appliedJobs_${user.email}`, JSON.stringify(updatedJobs));
//   };
  

//   return (
//     <>
//       <Helmet>
//         <title>Qloron | Careers</title>
//         <meta 
//           name="description" 
//           content="Join our team. Explore exciting career opportunities at Qloron and apply for positions that match your skills." 
//         />
//         <link rel="canonical" href={currentUrl} />
//       </Helmet>

//       {/* Hero Section */}
//       <div className="relative bg-gradient-to-r from-blue-900 to-cyan-800 text-white py-28 overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           {[...Array(8)].map((_, i) => (
//             <motion.div
//               key={i}
//               className={`absolute w-40 h-40 rounded-full mix-blend-overlay ${
//                 i % 2 === 0 ? 'bg-cyan-400' : 'bg-blue-500'
//               }`}
//               style={{
//                 top: `${Math.random() * 100}%`,
//                 left: `${Math.random() * 100}%`,
//               }}
//               animate={{
//                 x: [0, (Math.random() - 0.5) * 100],
//                 y: [0, (Math.random() - 0.5) * 100],
//               }}
//               transition={{
//                 duration: 10 + Math.random() * 20,
//                 repeat: Infinity,
//                 repeatType: "reverse",
//               }}
//             />
//           ))}
//         </div>
        
//         <section className="container relative z-10 text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl md:text-6xl font-bold mb-6"
//           >
//             Join Our <span className="text-cyan-300">Team</span>
//           </motion.h1>
          
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             className="text-xl text-blue-100 max-w-3xl mx-auto mb-8"
//           >
//             Explore exciting career opportunities and help us build the future
//           </motion.p>

//           {isLoggedIn ? (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.6 }}
//               className="flex justify-center gap-4"
//             >
//               <button
//                 onClick={() => setViewAppliedJobs(!viewAppliedJobs)}
//                 className="bg-white text-cyan-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
//               >
//                 {viewAppliedJobs ? 'View All Jobs' : 'View My Applications'}
//               </button>
//               <button
//                 onClick={handleLogout}
//                 className="bg-transparent border border-white text-white px-6 py-2 rounded-lg font-medium hover:bg-white hover:text-cyan-700 transition-colors"
//               >
//                 Logout
//               </button>
//             </motion.div>
//           ) : (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.6 }}
//               className="flex justify-center gap-4"
//             >
//               <button
//                 onClick={() => setShowLogin(true)}
//                 className="bg-white text-cyan-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center"
//               >
//                 <FaSignInAlt className="mr-2" /> Login
//               </button>
//               <button
//                 onClick={() => setShowRegister(true)}
//                 className="bg-transparent border border-white text-white px-6 py-2 rounded-lg font-medium hover:bg-white hover:text-cyan-700 transition-colors flex items-center"
//               >
//                 <FaUserPlus className="mr-2" /> Register
//               </button>
//             </motion.div>
//           )}
//         </section>
//       </div>

//       {/* Jobs Listing Section */}
//       <section className="py-20 bg-gradient-to-b from-white to-blue-50">
//         <div className="container">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//               {viewAppliedJobs ? 'My Job Applications' : 'Current Openings'}
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               {viewAppliedJobs ? 'Track the status of your applications' : 'Find the perfect position that matches your skills and aspirations'}
//             </p>
//           </motion.div>

//           {/* Search Bar */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="mb-12"
//           >
//             <div className="relative max-w-2xl mx-auto">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaSearch className="text-gray-400" />
//               </div>
//               <input
//                 type="text"
//                 placeholder={viewAppliedJobs ? "Search your applications..." : "Search jobs by title or keywords..."}
//                 className="pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 w-full"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>
//           </motion.div>

//           {/* Jobs Grid */}
//           {filteredJobs.length > 0 ? (
//             <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//               {filteredJobs.map((job) => {
//                 const appliedJob = appliedJobs.find(aj => aj.id === job.id);
                
//                 return (
//                   <motion.div
//                     key={job.id}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5 }}
//                     viewport={{ once: true }}
//                     whileHover={{ y: -5 }}
//                     className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 relative"
//                   >
//                     {appliedJob && (
//                       <div className="absolute top-2 right-4">
//                         {getStatusBadge(appliedJob.status)}
//                       </div>
//                     )}
                    
//                     <div className="p-7">
//                       <div className="flex items-center gap-3 mb-4">
//                         <div className="p-3 bg-cyan-100 rounded-lg">
//                           <FaBriefcase className="text-cyan-600 text-xl" />
//                         </div>
//                         <div>
//                           <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
//                           <p className="text-gray-600">{job.type}</p>
//                         </div>
//                       </div>
                      
//                       <div className="flex flex-wrap gap-4 mb-4">
//                         <div className="flex items-center text-gray-600">
//                           <FaRegClock className="mr-2 text-cyan-500" />
//                           <span>{job.experience} experience</span>
//                         </div>
//                         <div className="flex items-center text-gray-600">
//                           <FaMapMarkerAlt className="mr-2 text-blue-500" />
//                           <span>{job.location}</span>
//                         </div>
//                       </div>
                      
//                       <p className="text-gray-600 mb-4 line-clamp-3">{job.description}</p>
                      
//                       {appliedJob ? (
//                         viewAppliedJobs && (
//                           <div className="space-y-4">
//                             <div className="flex justify-between items-center">
//                               <span className="text-sm text-gray-500">Applied on: {new Date(appliedJob.applicationDate).toLocaleDateString()}</span>
//                             </div>
//                             <div className="flex flex-wrap gap-3 items-center">
                              

//                               <button
//                                 onClick={() => updateApplicationStatus(job.id, 'Shortlisted')}
//                                 className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-all duration-200 shadow-sm 
//                                   ${appliedJob.status === 'Shortlisted' 
//                                     ? 'bg-blue-500 text-white' 
//                                     : 'bg-blue-100 text-blue-800 hover:bg-blue-200'}`}
//                               >
//                                 <FaThumbsUp className="text-base" />
//                                 Shortlisted
//                               </button>

//                               <button
//                                 onClick={() => updateApplicationStatus(job.id, 'Selected')}
//                                 className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-all duration-200 shadow-sm 
//                                   ${appliedJob.status === 'Selected' 
//                                     ? 'bg-green-500 text-white' 
//                                     : 'bg-green-100 text-green-800 hover:bg-green-200'}`}
//                               >
//                                 <FaCheck className="text-base" />
//                                 Selected
//                               </button>

//                               <button
//                                 onClick={() => updateApplicationStatus(job.id, 'Rejected')}
//                                 className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-all duration-200 shadow-sm 
//                                   ${appliedJob.status === 'Rejected' 
//                                     ? 'bg-red-500 text-white' 
//                                     : 'bg-red-100 text-red-800 hover:bg-red-200'}`}
//                               >
//                                 <FaThumbsDown className="text-base" />
//                                 Rejected
//                               </button>
//                               <button
//                                 onClick={() => updateApplicationStatus(job.id, 'Under Review')}
//                                 className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-all duration-200 shadow-sm 
//                                   ${appliedJob.status === 'Under Review' 
//                                     ? 'bg-yellow-500 text-white' 
//                                     : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'}`}
//                               >
//                                 <FaClock className="text-base" />
//                                 Under Review
//                               </button>
//                               <button
//                                 onClick={() => withdrawApplication(job.id)}
//                                 className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-all duration-200 shadow-sm bg-gray-200 text-gray-800 hover:bg-gray-300"
//                               >
//                                 <FaTrash className="text-base" />
//                                 Withdraw
//                               </button>
//                             </div>

//                           </div>
//                         )
//                       ) : (
//                         <motion.button
//                           onClick={() => handleApply(job)}
//                           className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
//                           whileHover={{ scale: 1.02 }}
//                           whileTap={{ scale: 0.98 }}
//                         >
//                           Apply Now <FaArrowRight className="ml-2" />
//                         </motion.button>
//                       )}
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           ) : (
//             <div className="text-center py-12">
//               <h3 className="text-xl text-gray-600">
//                 {viewAppliedJobs ? "You haven't applied to any jobs yet" : "No jobs found matching your search"}
//               </h3>
//               {viewAppliedJobs && (
//                 <button
//                   onClick={() => setViewAppliedJobs(false)}
//                   className="mt-4 bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 transition-colors"
//                 >
//                   Browse Jobs
//                 </button>
//               )}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* How It Works Section */}
//       {!viewAppliedJobs && (
//         <section className="py-20 bg-gradient-to-r from-blue-900 to-cyan-800 text-white">
//           <div className="container">
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="text-center mb-16"
//             >
//               <h2 className="text-3xl md:text-4xl font-bold mb-4">
//                 Apply in 3 Easy Steps
//               </h2>
//               <p className=" max-w-2xl mx-auto">
//                 Our simple application process gets you in front of our hiring team quickly
//               </p>
//             </motion.div>
            
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {[
//                 {
//                   title: "Find Your Perfect Role",
//                   description: "Browse our open positions and find the one that matches your skills and interests.",
//                   icon: <FaSearch className="text-3xl" />
//                 },
//                 {
//                   title: "Complete Your Application",
//                   description: "Fill out our simple application form and upload your resume.",
//                   icon: <FaBriefcase className="text-3xl" />
//                 },
//                 {
//                   title: "Hear Back From Us",
//                   description: "Our team will review your application and get back to you promptly.",
//                   icon: <FaCheckCircle className="text-3xl" />
//                 }
//               ].map((step, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1, duration: 0.6 }}
//                   viewport={{ once: true }}
//                   className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
//                 >
//                   <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600 mb-6 mx-auto">
//                     {step.icon}
//                   </div>
//                   <h3 className="text-xl font-bold text-center text-gray-800 mb-3">{step.title}</h3>
//                   <p className="text-gray-600 text-center">{step.description}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Login Modal */}
//       {showLogin && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <motion.div 
//             className="bg-white rounded-xl shadow-xl w-full max-w-md"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//           >
//             <div className="p-6">
//               <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-2xl font-bold text-gray-800">Login to Your Account</h2>
//                 <button 
//                   onClick={() => setShowLogin(false)}
//                   className="text-gray-500 hover:text-gray-700"
//                 >
//                   <FaTimes />
//                 </button>
//               </div>
              
//               <form onSubmit={handleLogin}>
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <FaUser className="text-gray-400" />
//                     </div>
//                     <input
//                       type="email"
//                       name="email"
//                       value={loginData.email}
//                       onChange={handleLoginChange}
//                       className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
//                       required
//                     />
//                   </div>
//                 </div>
                
//                 <div className="mb-6">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Password *</label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <FaLock className="text-gray-400" />
//                     </div>
//                     <input
//                       type="password"
//                       name="password"
//                       value={loginData.password}
//                       onChange={handleLoginChange}
//                       className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
//                       required
//                     />
//                   </div>
//                 </div>
                
//                 <button
//                   type="submit"
//                   className="w-full bg-cyan-600 text-white py-2 px-4 rounded-lg hover:bg-cyan-700 transition-colors flex items-center justify-center"
//                 >
//                   Login <FaSignInAlt className="ml-2" />
//                 </button>
//               </form>
              
//               <div className="mt-4 text-center">
//                 <p className="text-gray-600">Don't have an account? 
//                   <button 
//                     onClick={() => {
//                       setShowLogin(false);
//                       setShowRegister(true);
//                     }}
//                     className="text-cyan-600 hover:text-cyan-700 ml-1 font-medium"
//                   >
//                     Register here
//                   </button>
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       )}

//       {/* Register Modal */}
//       {showRegister && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <motion.div 
//             className="bg-white rounded-xl shadow-xl w-full max-w-md"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//           >
//             <div className="p-6">
//               <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-2xl font-bold text-gray-800">Create an Account</h2>
//                 <button 
//                   onClick={() => setShowRegister(false)}
//                   className="text-gray-500 hover:text-gray-700"
//                 >
//                   <FaTimes />
//                 </button>
//               </div>
              
//               <form onSubmit={handleRegister}>
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
//                   <input
//                     type="text"
//                     name="fullName"
//                     value={registerData.fullName}
//                     onChange={handleRegisterChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
//                     required
//                   />
//                 </div>
                
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <FaUser className="text-gray-400" />
//                     </div>
//                     <input
//                       type="email"
//                       name="email"
//                       value={registerData.email}
//                       onChange={handleRegisterChange}
//                       className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
//                       required
//                     />
//                   </div>
//                 </div>
                
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Password *</label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <FaLock className="text-gray-400" />
//                     </div>
//                     <input
//                       type="password"
//                       name="password"
//                       value={registerData.password}
//                       onChange={handleRegisterChange}
//                       className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
//                       required
//                     />
//                   </div>
//                 </div>
                
//                 <div className="mb-6">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password *</label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <FaLock className="text-gray-400" />
//                     </div>
//                     <input
//                       type="password"
//                       name="confirmPassword"
//                       value={registerData.confirmPassword}
//                       onChange={handleRegisterChange}
//                       className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
//                       required
//                     />
//                   </div>
//                 </div>
                
//                 <button
//                   type="submit"
//                   className="w-full bg-cyan-600 text-white py-2 px-4 rounded-lg hover:bg-cyan-700 transition-colors flex items-center justify-center"
//                 >
//                   Register <FaUserPlus className="ml-2" />
//                 </button>
//               </form>
              
//               <div className="mt-4 text-center">
//                 <p className="text-gray-600">Already have an account? 
//                   <button 
//                     onClick={() => {
//                       setShowRegister(false);
//                       setShowLogin(true);
//                     }}
//                     className="text-cyan-600 hover:text-cyan-700 ml-1 font-medium"
//                   >
//                     Login here
//                   </button>
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       )}

//       {/* Application Modal */}
//       {applicationStep > 0 && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <motion.div 
//             className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.9 }}
//           >
//             {/* Modal Header */}
//             <div className="sticky top-0 bg-white border-b border-gray-200 p-6 z-10">
//               <div className="flex justify-between items-center">
//                 <h2 className="text-2xl font-bold text-gray-800">
//                   Apply for {selectedJob?.title}
//                 </h2>
//                 <button 
//                   onClick={() => {
//                     setApplicationStep(0);
//                     setSelectedJob(null);
//                   }}
//                   className="text-gray-500 hover:text-gray-700"
//                 >
//                   ✕
//                 </button>
//               </div>
//               <p className="text-gray-600">{selectedJob?.type} - {selectedJob?.location}</p>
              
//               {/* Progress Steps */}
//               <div className="flex justify-between mt-6 relative">
//                 <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
//                 {[1, 2, 3].map((step) => (
//                   <div key={step} className="relative z-10 flex flex-col items-center">
//                     <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
//                       applicationStep > step 
//                         ? 'bg-green-500 text-white' 
//                         : applicationStep === step 
//                           ? 'bg-cyan-600 text-white' 
//                           : 'bg-gray-200 text-gray-600'
//                     }`}>
//                       {step}
//                     </div>
//                     <span className={`text-xs mt-2 ${
//                       applicationStep >= step ? 'font-semibold text-gray-800' : 'text-gray-500'
//                     }`}>
//                       {step === 1 ? 'Personal Info' : step === 2 ? 'Documents' : 'Review'}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
            
//             {/* Modal Content */}
//             <div className="p-6">
//               {/* Step 1: Personal Information */}
//               {applicationStep === 1 && (
//                 <motion.div
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <h3 className="text-lg font-semibold text-gray-800 mb-6">Personal Information</h3>
                  
//                   <form>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
//                         <input
//                           type="text"
//                           name="fullName"
//                           value={formData.fullName}
//                           onChange={handleInputChange}
//                           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
//                           required
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">College Email *</label>
//                         <input
//                           type="email"
//                           name="collegeEmail"
//                           value={formData.collegeEmail}
//                           onChange={handleInputChange}
//                           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
//                           required
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Personal Email *</label>
//                         <input
//                           type="email"
//                           name="personalEmail"
//                           value={formData.personalEmail}
//                           onChange={handleInputChange}
//                           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
//                           required
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Mobile No. *</label>
//                         <input
//                           type="tel"
//                           name="mobileNo"
//                           value={formData.mobileNo}
//                           onChange={handleInputChange}
//                           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
//                           required
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">College *</label>
//                         <input
//                           type="text"
//                           name="college"
//                           value={formData.college}
//                           onChange={handleInputChange}
//                           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
//                           required
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Qualification *</label>
//                         <input
//                           type="text"
//                           name="qualification"
//                           value={formData.qualification}
//                           onChange={handleInputChange}
//                           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
//                           required
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Department *</label>
//                         <input
//                           type="text"
//                           name="department"
//                           value={formData.department}
//                           onChange={handleInputChange}
//                           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
//                           required
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Semester *</label>
//                         <input
//                           type="text"
//                           name="semester"
//                           value={formData.semester}
//                           onChange={handleInputChange}
//                           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
//                           required
//                         />
//                       </div>
//                     </div>
                    
//                     <div className="mb-6">
//                       <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
//                       <textarea
//                         name="address"
//                         value={formData.address}
//                         onChange={handleInputChange}
//                         rows="3"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
//                         required
//                       ></textarea>
//                     </div>
                    
//                     <div className="mb-6">
//                       <label className="block text-sm font-medium text-gray-700 mb-1">Skills *</label>
//                       <textarea
//                         name="skills"
//                         value={formData.skills}
//                         onChange={handleInputChange}
//                         rows="2"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
//                         placeholder="List your skills separated by commas"
//                         required
//                       ></textarea>
//                     </div>
                    
//                     <div className="flex justify-end">
//                       <button
//                         type="button"
//                         onClick={() => setApplicationStep(2)}
//                         className="bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 transition-colors flex items-center"
//                       >
//                         Continue <FaArrowRight className="ml-2" />
//                       </button>
//                     </div>
//                   </form>
//                 </motion.div>
//               )}
              
//               {/* Step 2: Documents */}
//               {applicationStep === 2 && (
//                 <motion.div
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <h3 className="text-lg font-semibold text-gray-800 mb-6">Upload Documents</h3>
                  
//                   <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center mb-6">
//                     <div className="flex flex-col items-center justify-center">
//                       <FaBriefcase className="text-4xl text-cyan-500 mb-4" />
//                       <p className="text-gray-600 mb-2">Click to upload</p>
//                       <p className="text-sm text-gray-500 mb-4">PDF or DOC (MAX. 10MB)</p>
                      
//                       <label className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition-colors cursor-pointer">
//                         Select File
//                         <input
//                           type="file"
//                           className="hidden"
//                           onChange={handleFileUpload}
//                           accept=".pdf,.doc,.docx"
//                         />
//                       </label>
//                     </div>
//                   </div>
                  
//                   {formData.resume && (
//                     <div className="bg-gray-50 p-4 rounded-lg mb-6 flex justify-between items-center">
//                       <div>
//                         <p className="font-medium text-gray-800">{formData.resume.name}</p>
//                         <p className="text-sm text-gray-500">
//                           {(formData.resume.size / 1024 / 1024).toFixed(2)} MB
//                         </p>
//                       </div>
//                       <button 
//                         onClick={() => setFormData(prev => ({ ...prev, resume: null }))}
//                         className="text-red-500 hover:text-red-700"
//                       >
//                         Remove
//                       </button>
//                     </div>
//                   )}
                  
//                   <div className="flex justify-between">
//                     <button
//                       onClick={() => setApplicationStep(1)}
//                       className="text-gray-600 hover:text-gray-800 px-4 py-2 rounded-lg border border-gray-300 hover:border-gray-400 transition-colors"
//                     >
//                       Back
//                     </button>
//                     <button
//                       onClick={() => setApplicationStep(3)}
//                       disabled={!formData.resume}
//                       className={`px-6 py-2 rounded-lg flex items-center ${
//                         formData.resume 
//                           ? 'bg-cyan-600 text-white hover:bg-cyan-700' 
//                           : 'bg-gray-300 text-gray-500 cursor-not-allowed'
//                       } transition-colors`}
//                     >
//                       Continue <FaArrowRight className="ml-2" />
//                     </button>
//                   </div>
//                 </motion.div>
//               )}
              
//               {/* Step 3: Review */}
//               {applicationStep === 3 && (
//                 <motion.div
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <h3 className="text-lg font-semibold text-gray-800 mb-6">Review Your Application</h3>
                  
//                   <div className="bg-gray-50 rounded-xl p-6 mb-6">
//                     <h4 className="font-bold text-gray-800 mb-4">Personal Information</h4>
                    
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//                       <div>
//                         <p className="text-sm text-gray-500">Full Name</p>
//                         <p className="font-medium">{formData.fullName}</p>
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-500">College Email</p>
//                         <p className="font-medium">{formData.collegeEmail}</p>
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-500">Personal Email</p>
//                         <p className="font-medium">{formData.personalEmail}</p>
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-500">Mobile No.</p>
//                         <p className="font-medium">{formData.mobileNo}</p>
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-500">College</p>
//                         <p className="font-medium">{formData.college}</p>
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-500">Qualification</p>
//                         <p className="font-medium">{formData.qualification}</p>
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-500">Department</p>
//                         <p className="font-medium">{formData.department}</p>
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-500">Semester</p>
//                         <p className="font-medium">{formData.semester}</p>
//                       </div>
//                     </div>
                    
//                     <div className="mb-4">
//                       <p className="text-sm text-gray-500">Address</p>
//                       <p className="font-medium">{formData.address}</p>
//                     </div>
                    
//                     <div>
//                       <p className="text-sm text-gray-500">Skills</p>
//                       <p className="font-medium">{formData.skills}</p>
//                     </div>
//                   </div>
                  
//                   <div className="bg-gray-50 rounded-xl p-6 mb-6">
//                     <h4 className="font-bold text-gray-800 mb-4">Documents</h4>
//                     {formData.resume ? (
//                       <div className="flex items-center">
//                         <FaBriefcase className="text-cyan-500 mr-3" />
//                         <div>
//                           <p className="font-medium">{formData.resume.name}</p>
//                           <p className="text-sm text-gray-500">
//                             {(formData.resume.size / 1024 / 1024).toFixed(2)} MB
//                           </p>
//                         </div>
//                       </div>
//                     ) : (
//                       <p className="text-gray-500">No document uploaded</p>
//                     )}
//                   </div>
                  
//                   <div className="flex justify-between">
//                     <button
//                       onClick={() => setApplicationStep(2)}
//                       className="text-gray-600 hover:text-gray-800 px-4 py-2 rounded-lg border border-gray-300 hover:border-gray-400 transition-colors"
//                     >
//                       Back
//                     </button>
//                     <button
//                       onClick={handleSubmitApplication}
//                       disabled={isSubmitting}
//                       className={`px-6 py-2 rounded-lg flex items-center ${
//                         isSubmitting 
//                           ? 'bg-gray-400 cursor-not-allowed' 
//                           : 'bg-cyan-600 text-white hover:bg-cyan-700'
//                       } transition-colors`}
//                     >
//                       {isSubmitting ? 'Submitting...' : 'Submit Application'}
//                       {!isSubmitting && <FaPaperPlane className="ml-2" />}
//                     </button>
//                   </div>
//                 </motion.div>
//               )}
              
//               {/* Step 4: Application Submitted */}
//               {applicationStep === 4 && (
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.3 }}
//                   className="text-center py-8"
//                 >
//                   <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                     <FaCheck className="text-green-500 text-3xl" />
//                   </div>
                  
//                   <h3 className="text-2xl font-bold text-gray-800 mb-4">Application Submitted!</h3>
//                   <p className="text-gray-600 mb-6">
//                     Thank you for applying to the <span className="font-semibold">{selectedJob?.title}</span> position at our company. 
//                     We've received your application and will review it carefully.
//                   </p>
//                   <p className="text-gray-600 mb-8">
//                     We'll contact you via email at <span className="font-semibold">{formData.personalEmail}</span> within 5-7 business days.
//                   </p>
                  
//                   <button
//                     onClick={() => {
//                       setApplicationStep(0);
//                       setSelectedJob(null);
//                       setFormData({
//                         fullName: "",
//                         collegeEmail: "",
//                         personalEmail: "",
//                         mobileNo: "",
//                         college: "",
//                         qualification: "",
//                         address: "",
//                         department: "",
//                         semester: "",
//                         skills: "",
//                         resume: null
//                       });
//                     }}
//                     className="bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 transition-colors"
//                   >
//                     Close
//                   </button>
//                 </motion.div>
//               )}
//             </div>
//           </motion.div>
//         </div>
//       )}
//     </>
//   );
// };

// export default CareersPage;


import React, { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { FaArrowRight, FaSearch, FaTrash, FaCheckCircle, FaCheck, FaBriefcase, FaRegClock, FaMapMarkerAlt, FaPaperPlane, FaUser, FaLock, FaSignInAlt, FaUserPlus, FaTimes, FaClock, FaThumbsUp, FaThumbsDown, FaEdit } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

const CareersPage = () => {
  const currentUrl = window.location.href;
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicationStep, setApplicationStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    collegeEmail: "",
    personalEmail: "",
    mobileNo: "",
    college: "",
    qualification: "",
    address: "",
    department: "",
    semester: "",
    skills: "",
    resume: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [authData, setAuthData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: ""
  });
  const [authError, setAuthError] = useState("");
  const [viewAppliedJobs, setViewAppliedJobs] = useState(false);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const formRef = useRef();

  // Sample job data
  const jobs = [
    {
      id: 1,
      title: "UX/UI Designer",
      type: "Full-time",
      location: "Remote",
      experience: "2-3 years",
      company: "Qloron Pvt. Ltd",
      description: "We're looking for a creative UX/UI Designer to join our team and help design products."
    },
    {
      id: 2,
      title: "Python Developer",
      type: "Full-time",
      location: "Hybrid",
      experience: "7-8 years",
      company: "Qloron Pvt. Ltd",
      description: "Seeking an experienced Python developer to work on our backend systems and APIs."
    },
    {
      id: 3,
      title: "Java Developer",
      type: "Contract",
      location: "On-site",
      experience: "6-7 years",
      company: "Qloron Pvt. Ltd",
      description: "Join our team to develop high-performance Java applications for enterprise clients."
    },
    {
      id: 4,
      title: "DevOps Engineer",
      type: "Full-time",
      location: "Remote",
      experience: "3-7 years",
      company: "Qloron Pvt. Ltd",
      description: "Help us build and maintain our cloud infrastructure and CI/CD pipelines."
    },
    {
      id: 5,
      title: "Graphic Designer",
      type: "Part-time",
      location: "Remote",
      experience: "1-3 years",
      company: "Qloron Pvt. Ltd",
      description: "Create stunning visual designs for our marketing materials and digital products."
    },
    {
      id: 6,
      title: "Full Stack Developer",
      type: "Full-time",
      location: "Onsite",
      experience: "3-5 years",
      company: "Qloron Pvt. Ltd",
      description: "Develop and maintain scalable web applications, handling both front-end and back-end development."
    }    
  ];

  // Check if user is logged in on component mount
  useEffect(() => {
    const user = localStorage.getItem('careerUser');
    if (user) {
      setIsLoggedIn(true);
      const applied = localStorage.getItem(`appliedJobs_${JSON.parse(user).email}`) || '[]';
      setAppliedJobs(JSON.parse(applied));
    }
  }, []);

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    job.description.toLowerCase().includes(searchTerm.toLowerCase())
  ).filter(job => {
    if (viewAppliedJobs) {
      return appliedJobs.some(appliedJob => appliedJob.id === job.id);
    }
    return true;
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e) => {
    setFormData(prev => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleAuthChange = (e) => {
    const { name, value } = e.target;
    setAuthData(prev => ({ ...prev, [name]: value }));
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    setAuthError("");

    if (authMode === "register") {
      // Handle registration
      if (authData.password !== authData.confirmPassword) {
        setAuthError("Passwords don't match!");
        return;
      }

      const users = JSON.parse(localStorage.getItem('careerUsers')) || [];
      
      if (users.some(u => u.email === authData.email)) {
        setAuthError('User with this email already exists!');
        return;
      }

      const newUser = {
        fullName: authData.fullName,
        email: authData.email,
        password: authData.password
      };

      users.push(newUser);
      localStorage.setItem('careerUsers', JSON.stringify(users));
      localStorage.setItem('careerUser', JSON.stringify(newUser));
      setIsLoggedIn(true);
      const applied = localStorage.getItem(`appliedJobs_${newUser.email}`) || '[]';
      setAppliedJobs(JSON.parse(applied));
    } else {
      // Handle login
      const users = JSON.parse(localStorage.getItem('careerUsers')) || [];
      const user = users.find(u => u.email === authData.email && u.password === authData.password);
      
      if (user) {
        localStorage.setItem('careerUser', JSON.stringify(user));
        setIsLoggedIn(true);
        const applied = localStorage.getItem(`appliedJobs_${user.email}`) || '[]';
        setAppliedJobs(JSON.parse(applied));
      } else {
        setAuthError('Invalid credentials. Please try again.');
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('careerUser');
    setIsLoggedIn(false);
    setAppliedJobs([]);
    setViewAppliedJobs(false);
    setAuthMode("login");
    setAuthData({
      email: "",
      password: "",
      confirmPassword: "",
      fullName: ""
    });
  };

  const handleApply = (job) => {
    if (!isLoggedIn) return;
    setSelectedJob(job);
    setApplicationStep(1);
  };

  const handleSubmitApplication = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare the email template parameters
    const templateParams = {
      to_name: formData.fullName,
      to_email: formData.personalEmail,
      job_title: selectedJob.title,
      company_name: selectedJob.company,
      full_name: formData.fullName,
      college_email: formData.collegeEmail,
      personal_email: formData.personalEmail,
      mobile_no: formData.mobileNo,
      college: formData.college,
      qualification: formData.qualification,
      address: formData.address,
      department: formData.department,
      semester: formData.semester,
      skills: formData.skills,
      resume_filename: formData.resume ? formData.resume.name : "Not provided",
      resume: formData.resume
    };

    emailjs.send(
      'service_6dfg8xu', // YOUR_SERVICE_ID
      'template_sfxj4op', // YOUR_TEMPLATE_ID
      templateParams,
      'v2J5a5xaZFSvqYOsH' // YOUR_PUBLIC_KEY
    )
    .then((result) => {
      console.log(result.text);
      
      // Save application to localStorage
      const user = JSON.parse(localStorage.getItem('careerUser'));
      const appliedJob = {
        ...selectedJob,
        applicationDate: new Date().toISOString(),
        status: 'Under Review',
        applicationData: formData
      };
      
      const updatedAppliedJobs = [...appliedJobs, appliedJob];
      setAppliedJobs(updatedAppliedJobs);
      localStorage.setItem(`appliedJobs_${user.email}`, JSON.stringify(updatedAppliedJobs));
      
      setApplicationStep(4);
      setIsSuccess(true);
    }, (error) => {
      console.log(error.text);
      alert('Failed to submit application. Please try again later.');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  const updateApplicationStatus = (jobId, newStatus) => {
    const user = JSON.parse(localStorage.getItem('careerUser'));
    const updatedJobs = appliedJobs.map(job => {
      if (job.id === jobId) {
        return { ...job, status: newStatus };
      }
      return job;
    });
    
    setAppliedJobs(updatedJobs);
    localStorage.setItem(`appliedJobs_${user.email}`, JSON.stringify(updatedJobs));
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Under Review':
        return <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm flex items-center"><FaClock className="mr-1" /> {status}</span>;
      case 'Shortlisted':
        return <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center"><FaThumbsUp className="mr-1" /> {status}</span>;
      case 'Selected':
        return <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm flex items-center"><FaCheck className="mr-1" /> {status}</span>;
      case 'Rejected':
        return <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm flex items-center"><FaThumbsDown className="mr-1" /> {status}</span>;
      default:
        return <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">{status}</span>;
    }
  };

  const withdrawApplication = (jobId) => {
    const user = JSON.parse(localStorage.getItem('careerUser'));
    const updatedJobs = appliedJobs.filter(job => job.id !== jobId);
    setAppliedJobs(updatedJobs);
    localStorage.setItem(`appliedJobs_${user.email}`, JSON.stringify(updatedJobs));
  };

  if (!isLoggedIn) {
    return (
      <>
        <Helmet>
          <title>Qloron | Careers Login</title>
          <meta 
            name="description" 
            content="Login to access career opportunities at Qloron." 
          />
          <link rel="canonical" href={currentUrl} />
        </Helmet>

        {/* Authentication Modal */}
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div 
            className="bg-white rounded-xl shadow-xl w-full max-w-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  {authMode === "login" ? "Login to Continue" : "Create Career Account"}
                </h2>
                <p className="text-gray-600">
                  {authMode === "login" 
                    ? "Sign in to view and apply for jobs" 
                    : "Create an account to start your career journey with us"}
                </p>
              </div>

              {authError && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                  {authError}
                </div>
              )}

              <form onSubmit={handleAuthSubmit}>
                {authMode === "register" && (
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                      value={authData.fullName}
                      onChange={handleAuthChange}
                      required
                    />
                  </div>
                )}

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-1">Email *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUser className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                      value={authData.email}
                      onChange={handleAuthChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-1">Password *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaLock className="text-gray-400" />
                    </div>
                    <input
                      type="password"
                      name="password"
                      className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                      value={authData.password}
                      onChange={handleAuthChange}
                      required
                    />
                  </div>
                </div>

                {authMode === "register" && (
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-medium mb-1">Confirm Password *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaLock className="text-gray-400" />
                      </div>
                      <input
                        type="password"
                        name="confirmPassword"
                        className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                        value={authData.confirmPassword}
                        onChange={handleAuthChange}
                        required
                      />
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition-colors flex items-center justify-center mb-4"
                >
                  {authMode === "login" ? "Login" : "Register"}
                  {authMode === "login" ? <FaSignInAlt className="ml-2" /> : <FaUserPlus className="ml-2" />}
                </button>

                <div className="text-center text-sm text-gray-600">
                  {authMode === "login" ? (
                    <>
                      Don't have an account?{' '}
                      <button
                        type="button"
                        className="text-cyan-600 hover:text-cyan-800 font-medium"
                        onClick={() => setAuthMode("register")}
                      >
                        Register
                      </button>
                    </>
                  ) : (
                    <>
                      Already have an account?{' '}
                      <button
                        type="button"
                        className="text-cyan-600 hover:text-cyan-800 font-medium"
                        onClick={() => setAuthMode("login")}
                      >
                        Login
                      </button>
                    </>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Qloron | Careers</title>
        <meta 
          name="description" 
          content="Join our team. Explore exciting career opportunities at Qloron and apply for positions that match your skills." 
        />
        <link rel="canonical" href={currentUrl} />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-cyan-800 text-white py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-40 h-40 rounded-full mix-blend-overlay ${
                i % 2 === 0 ? 'bg-cyan-400' : 'bg-blue-500'
              }`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, (Math.random() - 0.5) * 100],
                y: [0, (Math.random() - 0.5) * 100],
              }}
              transition={{
                duration: 10 + Math.random() * 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
        
        <section className="container relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Join Our <span className="text-cyan-300">Team</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto mb-8"
          >
            Explore exciting career opportunities and help us build the future
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-4"
          >
            <button
              onClick={() => setViewAppliedJobs(!viewAppliedJobs)}
              className="bg-white text-cyan-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              {viewAppliedJobs ? 'View All Jobs' : 'View My Applications'}
            </button>
            <button
              onClick={handleLogout}
              className="bg-transparent border border-white text-white px-6 py-2 rounded-lg font-medium hover:bg-white hover:text-cyan-700 transition-colors"
            >
              Logout
            </button>
          </motion.div>
        </section>
      </div>

      {/* Jobs Listing Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {viewAppliedJobs ? 'My Job Applications' : 'Current Openings'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {viewAppliedJobs ? 'Track the status of your applications' : 'Find the perfect position that matches your skills and aspirations'}
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder={viewAppliedJobs ? "Search your applications..." : "Search jobs by title or keywords..."}
                className="pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </motion.div>

          {/* Jobs Grid */}
          {filteredJobs.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredJobs.map((job) => {
                const appliedJob = appliedJobs.find(aj => aj.id === job.id);
                
                return (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 relative"
                  >
                    {appliedJob && (
                      <div className="absolute top-2 right-4">
                        {getStatusBadge(appliedJob.status)}
                      </div>
                    )}
                    
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-cyan-100 rounded-lg">
                          <FaBriefcase className="text-cyan-600 text-xl" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
                          <p className="text-gray-600">{job.type}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center text-gray-600">
                          <FaRegClock className="mr-2 text-cyan-500" />
                          <span>{job.experience} experience</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <FaMapMarkerAlt className="mr-2 text-blue-500" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">{job.description}</p>
                      
                      {appliedJob ? (
                        viewAppliedJobs && (
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-500">Applied on: {new Date(appliedJob.applicationDate).toLocaleDateString()}</span>
                            </div>
                            <div className="flex flex-wrap gap-3 items-center">
                              <button onClick={() => updateApplicationStatus(job.id, 'Shortlisted')}
                                className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-all duration-200 shadow-sm 
                                  ${appliedJob.status === 'Shortlisted' 
                                    ? 'bg-blue-500 text-white' 
                                    : 'bg-blue-100 text-blue-800 hover:bg-blue-200'}`}
                              >
                                <FaThumbsUp className="text-base" />
                                Shortlisted
                              </button>

                              <button
                                onClick={() => updateApplicationStatus(job.id, 'Selected')}
                                className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-all duration-200 shadow-sm 
                                  ${appliedJob.status === 'Selected' 
                                    ? 'bg-green-500 text-white' 
                                    : 'bg-green-100 text-green-800 hover:bg-green-200'}`}
                              >
                                <FaCheck className="text-base" />
                                Selected
                              </button>

                              <button
                                onClick={() => updateApplicationStatus(job.id, 'Rejected')}
                                className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-all duration-200 shadow-sm 
                                  ${appliedJob.status === 'Rejected' 
                                    ? 'bg-red-500 text-white' 
                                    : 'bg-red-100 text-red-800 hover:bg-red-200'}`}
                              >
                                <FaThumbsDown className="text-base" />
                                Rejected
                              </button>
                              <button
                                onClick={() => updateApplicationStatus(job.id, 'Under Review')}
                                className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-all duration-200 shadow-sm 
                                  ${appliedJob.status === 'Under Review' 
                                    ? 'bg-yellow-500 text-white' 
                                    : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'}`}
                              >
                                <FaClock className="text-base" />
                                Under Review
                              </button>
                              <button
                                onClick={() => withdrawApplication(job.id)}
                                className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-all duration-200 shadow-sm bg-gray-200 text-gray-800 hover:bg-gray-300"
                              >
                                <FaTrash className="text-base" />
                                Withdraw
                              </button>
                            </div>
                          </div>
                        )
                      ) : (
                        <motion.button
                          onClick={() => handleApply(job)}
                          className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Apply Now <FaArrowRight className="ml-2" />
                        </motion.button>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl text-gray-600">
                {viewAppliedJobs ? "You haven't applied to any jobs yet" : "No jobs found matching your search"}
              </h3>
              {viewAppliedJobs && (
                <button
                  onClick={() => setViewAppliedJobs(false)}
                  className="mt-4 bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 transition-colors"
                >
                  Browse Jobs
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* How It Works Section */}
      {!viewAppliedJobs && (
        <section className="py-20 bg-gradient-to-r from-blue-900 to-cyan-800 text-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Apply in 3 Easy Steps
              </h2>
              <p className=" max-w-2xl mx-auto">
                Our simple application process gets you in front of our hiring team quickly
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Find Your Perfect Role",
                  description: "Browse our open positions and find the one that matches your skills and interests.",
                  icon: <FaSearch className="text-3xl" />
                },
                {
                  title: "Complete Your Application",
                  description: "Fill out our simple application form and upload your resume.",
                  icon: <FaBriefcase className="text-3xl" />
                },
                {
                  title: "Hear Back From Us",
                  description: "Our team will review your application and get back to you promptly.",
                  icon: <FaCheckCircle className="text-3xl" />
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600 mb-6 mx-auto">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-center text-gray-800 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-center">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Application Modal */}
      {applicationStep > 0 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div 
            className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 z-10">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">
                  Apply for {selectedJob?.title}
                </h2>
                <button 
                  onClick={() => {
                    setApplicationStep(0);
                    setSelectedJob(null);
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <p className="text-gray-600">{selectedJob?.type} - {selectedJob?.location}</p>
              
              {/* Progress Steps */}
              <div className="flex justify-between mt-6 relative">
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
                {[1, 2, 3].map((step) => (
                  <div key={step} className="relative z-10 flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      applicationStep > step 
                        ? 'bg-green-500 text-white' 
                        : applicationStep === step 
                          ? 'bg-cyan-600 text-white' 
                          : 'bg-gray-200 text-gray-600'
                    }`}>
                      {step}
                    </div>
                    <span className={`text-xs mt-2 ${
                      applicationStep >= step ? 'font-semibold text-gray-800' : 'text-gray-500'
                    }`}>
                      {step === 1 ? 'Personal Info' : step === 2 ? 'Documents' : 'Review'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Modal Content */}
            <div className="p-6">
              {/* Step 1: Personal Information */}
              {applicationStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-6">Personal Information</h3>
                  
                  <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">College Email *</label>
                        <input
                          type="email"
                          name="collegeEmail"
                          value={formData.collegeEmail}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Personal Email *</label>
                        <input
                          type="email"
                          name="personalEmail"
                          value={formData.personalEmail}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Mobile No. *</label>
                        <input
                          type="tel"
                          name="mobileNo"
                          value={formData.mobileNo}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">College *</label>
                        <input
                          type="text"
                          name="college"
                          value={formData.college}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Qualification *</label>
                        <input
                          type="text"
                          name="qualification"
                          value={formData.qualification}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Department *</label>
                        <input
                          type="text"
                          name="department"
                          value={formData.department}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Semester *</label>
                        <input
                          type="text"
                          name="semester"
                          value={formData.semester}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        rows="3"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                        required
                      ></textarea>
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Skills *</label>
                      <textarea
                        name="skills"
                        value={formData.skills}
                        onChange={handleInputChange}
                        rows="2"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                        placeholder="List your skills separated by commas"
                        required
                      ></textarea>
                    </div>
                    
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() => setApplicationStep(2)}
                        className="bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 transition-colors flex items-center"
                      >
                        Continue <FaArrowRight className="ml-2" />
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}
              
              {/* Step 2: Documents */}
              {applicationStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-6">Upload Documents</h3>
                  
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center mb-6">
                    <div className="flex flex-col items-center justify-center">
                      <FaBriefcase className="text-4xl text-cyan-500 mb-4" />
                      <p className="text-gray-600 mb-2">Click to upload</p>
                      <p className="text-sm text-gray-500 mb-4">PDF or DOC (MAX. 10MB)</p>
                      
                      <label className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition-colors cursor-pointer">
                        Select File
                        <input
                          type="file"
                          className="hidden"
                          onChange={handleFileUpload}
                          accept=".pdf,.doc,.docx"
                        />
                      </label>
                    </div>
                  </div>
                  
                  {formData.resume && (
                    <div className="bg-gray-50 p-4 rounded-lg mb-6 flex justify-between items-center">
                      <div>
                        <p className="font-medium text-gray-800">{formData.resume.name}</p>
                        <p className="text-sm text-gray-500">
                          {(formData.resume.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                      <button 
                        onClick={() => setFormData(prev => ({ ...prev, resume: null }))}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <button
                      onClick={() => setApplicationStep(1)}
                      className="text-gray-600 hover:text-gray-800 px-4 py-2 rounded-lg border border-gray-300 hover:border-gray-400 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setApplicationStep(3)}
                      disabled={!formData.resume}
                      className={`px-6 py-2 rounded-lg flex items-center ${
                        formData.resume 
                          ? 'bg-cyan-600 text-white hover:bg-cyan-700' 
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      } transition-colors`}
                    >
                      Continue <FaArrowRight className="ml-2" />
                    </button>
                  </div>
                </motion.div>
              )}
              
              {/* Step 3: Review */}
              {applicationStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-6">Review Your Application</h3>
                  
                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <h4 className="font-bold text-gray-800 mb-4">Personal Information</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <p className="text-sm text-gray-500">Full Name</p>
                        <p className="font-medium">{formData.fullName}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">College Email</p>
                        <p className="font-medium">{formData.collegeEmail}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Personal Email</p>
                        <p className="font-medium">{formData.personalEmail}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Mobile No.</p>
                        <p className="font-medium">{formData.mobileNo}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">College</p>
                        <p className="font-medium">{formData.college}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Qualification</p>
                        <p className="font-medium">{formData.qualification}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Department</p>
                        <p className="font-medium">{formData.department}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Semester</p>
                        <p className="font-medium">{formData.semester}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm text-gray-500">Address</p>
                      <p className="font-medium">{formData.address}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500">Skills</p>
                      <p className="font-medium">{formData.skills}</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <h4 className="font-bold text-gray-800 mb-4">Documents</h4>
                    {formData.resume ? (
                      <div className="flex items-center">
                        <FaBriefcase className="text-cyan-500 mr-3" />
                        <div>
                          <p className="font-medium">{formData.resume.name}</p>
                          <p className="text-sm text-gray-500">
                            {(formData.resume.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                    ) : (
                      <p className="text-gray-500">No document uploaded</p>
                    )}
                  </div>
                  
                  <div className="flex justify-between">
                    <button
                      onClick={() => setApplicationStep(2)}
                      className="text-gray-600 hover:text-gray-800 px-4 py-2 rounded-lg border border-gray-300 hover:border-gray-400 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleSubmitApplication}
                      disabled={isSubmitting}
                      className={`px-6 py-2 rounded-lg flex items-center ${
                        isSubmitting 
                          ? 'bg-gray-400 cursor-not-allowed' 
                          : 'bg-cyan-600 text-white hover:bg-cyan-700'
                      } transition-colors`}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                      {!isSubmitting && <FaPaperPlane className="ml-2" />}
                    </button>
                  </div>
                </motion.div>
              )}
              
              {/* Step 4: Application Submitted */}
              {applicationStep === 4 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-center py-8"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaCheck className="text-green-500 text-3xl" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Application Submitted!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for applying to the <span className="font-semibold">{selectedJob?.title}</span> position at our company. 
                    We've received your application and will review it carefully.
                  </p>
                  <p className="text-gray-600 mb-8">
                    We'll contact you via email at <span className="font-semibold">{formData.personalEmail}</span> within 5-7 business days.
                  </p>
                  
                  <button
                    onClick={() => {
                      setApplicationStep(0);
                      setSelectedJob(null);
                      setFormData({
                        fullName: "",
                        collegeEmail: "",
                        personalEmail: "",
                        mobileNo: "",
                        college: "",
                        qualification: "",
                        address: "",
                        department: "",
                        semester: "",
                        skills: "",
                        resume: null
                      });
                    }}
                    className="bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 transition-colors"
                  >
                    Close
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default CareersPage;