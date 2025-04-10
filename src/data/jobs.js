const jobs = [
    {
      id: 1,
      title: "UX/UI Designer",
      type: "Full-time - Remote",
      location: "Anywhere",
      experience: "2-3 years",
      description: "We're looking for a creative UX/UI Designer to create amazing user experiences for our digital products. You'll work closely with our product and engineering teams to design intuitive interfaces.",
      requirements: "Bachelor's degree in Design or related field, proficiency in Figma/Sketch, portfolio required",
      skills: ["Figma", "UI Design", "UX Research", "Prototyping", "Adobe Creative Suite"],
      featured: true
    },
    {
      id: 2,
      title: "Frontend Developer",
      type: "Full-time - Hybrid",
      location: "San Francisco, CA",
      experience: "3-5 years",
      description: "Join our frontend team to build responsive, performant web applications using modern JavaScript frameworks.",
      requirements: "3+ years experience with React, strong CSS skills, experience with state management",
      skills: ["React", "JavaScript", "TypeScript", "CSS", "Redux"],
      featured: false
    },
    {
      id: 3,
      title: "Backend Developer",
      type: "Full-time - Remote",
      location: "Anywhere",
      experience: "4-6 years",
      description: "Help us build scalable backend services and APIs that power our applications.",
      requirements: "Experience with Node.js, databases, and cloud infrastructure",
      skills: ["Node.js", "Python", "AWS", "SQL", "REST APIs"],
      featured: true
    },
    {
      id: 4,
      title: "DevOps Engineer",
      type: "Contract - Remote",
      location: "Anywhere",
      experience: "5+ years",
      description: "Implement and maintain our CI/CD pipelines and cloud infrastructure.",
      requirements: "AWS/GCP experience, Kubernetes, Terraform, CI/CD tools",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
      featured: false
    },
    {
      id: 5,
      title: "Product Manager",
      type: "Full-time - Onsite",
      location: "New York, NY",
      experience: "5-7 years",
      description: "Lead product development from conception to launch, working with cross-functional teams.",
      requirements: "Proven PM experience, technical background, strong communication skills",
      skills: ["Product Strategy", "Agile", "User Stories", "Roadmapping", "JIRA"],
      featured: true
    },
    {
      id: 6,
      title: "Data Scientist",
      type: "Full-time - Remote",
      location: "Anywhere",
      experience: "3-5 years",
      description: "Analyze complex data sets and build machine learning models to solve business problems.",
      requirements: "Python, SQL, ML frameworks, statistics background",
      skills: ["Python", "Machine Learning", "Pandas", "SQL", "TensorFlow"],
      featured: false
    }
  ];
  
  export default jobs;