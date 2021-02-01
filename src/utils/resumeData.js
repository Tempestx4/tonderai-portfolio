import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

export default {
  name: "Tonderai Mavindidze",
  title: "Full stack developer",
  email: "mavindidzetonderai@yahoo.com",
  socials: {
    Github: {
      link: "https://github.com/Tempestx4",
      text: "MyGithub",
      icon: <GitHubIcon />,
    },
    Linkedin: {
      link: "https://www.linkedin.com/in/tonderai-mavindidze-783476168/",
      text: "MyLinkedIn",
      icon: <LinkedInIcon />,
    },
  },
  about: "I'm a recent computer science graduate currently training to be full stack developer with futureproof. Thanks to my experience from work and university, I have gained a broad understanding of IT from networking and Data mining to Artificial Intelligence and Software Engineering. In my most recent role I worked as a service desk technical analyst. In that role I would assist clients with their technical issues, ranging from issues with printers and outlook to account management on active directory and profile rebuilds. I am now looking forward to developing my skills in software development further especially the back-end aspect of full stack development.",
  experience: [
    {
      title: "Trainee Fullstack Developer - Futureproof",
      date: "November 2020 - Present",
      desc: "I trained as a software developer with Futureproof. On the course I started from the fundamentals of software development to developing programs and applications using Javascript, Html, Python and PostgreSQL."
    },
    {
      title: "Service Desk Technical Analyst - CGI",
      date: "June 2020 - October 2020",
      desc: "Working as on the CGI service desk, I offered technical support for CGI’s clients. I would support clients using the Windows OS as well as some bespoke applications used by the clients. My daily duties mainly revolved around troubleshooting client’s issues and noting tickets for second line teams."
    },
    {
      title: "Graduate Software Developer - Mtech Computers",
      date: "November 2019 - March 2020",
      desc: " I used InterSystems Cache to support the Backend of the AMO software suite, an all-in-one business management suite of applications. My daily duties there mainly consisted of developing programs that would produce database reports for clients."
    }
  ],

  education: [
    {
      title: "University of Hull",
      date: "2016 - 2019",
      desc: "BSc Computer Science."
    },
    {
      title: "Sandwell College",
      date: "2014 – 2016",
      desc: "BTEC Extended Level 3 in IT."
    },
    {
      title: "Sandwell College",
      date: "2013 - 2014",
      desc: " BTEC Level 3 in Business"
    }
  ], 
};
