import React, { useState, useEffect } from 'react';

import ProjectHeader from '../UI/ProjectHeader';
import VisitProject from '../UI/VisitProject';
import Alert from '../UI/Alert';

import harkiveSQ from '../../assets/harkive/harkiveSQ.png';
import harkiveprofile from '../../assets/harkive/harkiveprofile.png';
import harkiveoverview from '../../assets/harkive/harkiveoverview.png';
import userdata from '../../assets/harkive/userdata.png';
import waitlist from '../../assets/harkive/waitlist.png';
import landingpage from '../../assets/harkive/landingpage.png';

const Harkive = ({ harkiveObj }) => {

    const [showAlert, setShowAlert] = useState(false);

    const tools = "Figma, React.js, Node.js, Express.js, MongoDB, Mongoose, Heroku";
    const projLink = null;
    const deliverables = "Figma wireframe, Full-stack web app (In Progress)";

    useEffect(() => {
        if (!showAlert) {
            window.scrollTo(0, 0);
        }
    })

    const alertHandler = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 5000);
    }

    return (
        <div className='flex flex-col justify-start items-center px-5 md:px-20'>
            {showAlert && <Alert type="error" text="Project Unfinished" />}
            <img src={harkiveObj.imagePath} className="h-72 md:h-120 my-16 rounded-lg" />
            <ProjectHeader tools={tools} showAlert={alertHandler} projLink={projLink} deliverables={deliverables} />
            <div className='flex flex-col items-start w-full'>
                <h1 className='font-semibold text-4xl my-10'>Harkive</h1>
                <div className='border-b-8 border-lime-500 w-36 mb-10' />
                <div className='w-full md:w-11/12 mb-5'>
                    <h2>Context</h2>
                    <p>
                        As someone who loves to learn by reading nonfiction, I often ask experts I meet about how they 
                        obtained their knowledge, particularly the resources they've consumed to do so. They usually tell 
                        me to "just go down the rabbit hole", leaving me as clueless as I started. Therefore, I wanted to 
                        build a system that incentivizes experts to democratize the resources they used so that 
                        others can learn more efficiently.
                    </p>
                </div>
                <div className='w-full md:w-11/12 mb-5'>
                    <h2>Goal</h2>
                    <p>
                        I am building Harkive as a tool to pay experts to share their resources. Similar to Twitch which 
                        helps gamers monitize off their passion for gaming, Harkive empowers learners to monitize off their curiosity. 
                        Earners upload the content they've read, watched, and listend to, and other people pay them to access 
                        those resources.
                    </p>
                </div>
                <div className='w-full md:w-11/12 mb-5'>
                    <h2>Audience</h2>
                    <p>
                        The platform primarily caters to college students and young professionals eager to expand their 
                        knowledge repertoire and seeking personal growth.
                    </p>
                </div>
                <div className='w-full md:w-11/12'>
                    <h2>Design and Build Process</h2>
                    <h3>Figma Wireframes</h3>
                    <div className='flex flex-row w-full justify-center my-10'>
                        <img src={harkiveprofile} className='h-64 md:h-80' />
                    </div>
                    <p>
                        I chose to organize the dashboard as modular blocks based on topic. To maximize the dashboard viewport, 
                        I also designed the profile sections as a retractable slider so that the focus of the dashboard is on the 
                        modules.
                    </p>
                    <div className='flex flex-row w-full justify-around items-center my-10'>
                        <img src={harkiveSQ} className='h-52 md:h-72' />
                        <img src={harkiveoverview} className='h-52 md:h-72' />
                    </div>
                    <p className='my-10'>
                        The share queue is the intermediate hold for recommendations from others before the receiver approve them for 
                        their own list. It is designed minimalistically such that users only see the basic information about the 
                        recommendation, namely the type and name of the source and the choice to accept or reject the recommendation. 
                        The overview on the other hand provides a more detailed description of each module's content.
                    </p>
                    <h3>Testing with Landing Page</h3>
                    <div className='flex flex-col md:flex-row justify-evenly items-center w-full'>
                        <img src={landingpage} className='h-52 md:h-56 lg:h-72 my-5' />
                        <img src={waitlist} className='h-60 md:h-56 lg:h-72 my-5' />
                    </div>
                    <p className='my-10'>
                        After designing the interface, I built a landing page using Wix and launched it on LinkedIn with a join waitlist
                        call-to-action. 
                    </p>
                    <h3>User Interviews</h3>
                    <div className='flex flex-row justify-center w-full'>
                        <img src={userdata} className='h-72 md:h-80 my-5' />
                    </div>
                    <p className='my-10'>
                        To understand the behavior and needs of my users, I conducted user interviews with 30 people. I asked them 
                        questions regarding how they learn, difficulties they face, and existing ways that they've tried to solve their 
                        problems. I then categorized them above to help me form user archtypes (for the sake of anonymity, I've omitted 
                        their names).
                    </p>
                    <h3>Building Process</h3>
                    <p className='my-10'>
                        I chose to use the MERN stack to build the actual web app because it is a popular web dev stack for small scale 
                        projects with a great developer community to get help from. Since I am using Harkive also as a tool to improve my 
                        full stack skills, I sought tools that are commonly used so that issues I am likely to face have already been 
                        encountered and solved by others.
                    </p>
                </div>
                <div className='w-full md:w-11/12 mb-5'>
                    <h2>Conclusion</h2>
                    <p>
                        While Harkive is unfinished, I've already learned immensely from building it. Not only have I gained 
                        experience building a MERN stack app, I also got to practice talking to potential users, understanding 
                        their needs, and making decisions with that data.
                    </p>
                </div>
                <div className='flex flex-row justify-center my-10 w-full'>
                    <VisitProject projLink={projLink} showAlert={alertHandler} />
                </div>
            </div>
        </div>
    )
}

export default Harkive;