import React, { useEffect } from 'react';

import ProjectHeader from '../UI/ProjectHeader';
import VisitProject from '../UI/VisitProject';

import lofiphone from "../../assets/Snoking/lofi-phone.jpg";
import lofitablet from "../../assets/Snoking/lofi-tablet.jpg";
import lofiweb from "../../assets/Snoking/lofi-web.jpg";
import VDG1 from "../../assets/Snoking/Visual-Design-Guide-1.png";
import VDG2 from "../../assets/Snoking/Visual-Design-Guide-2.png";

const Snoking = ({ snokingObj }) => {

    const tools = "Figma, HTML/CSS, TailwindCSS";
    const projLink = "https://inebriateddonkey123.github.io/snoking-redesigned/";
    const deliverables = "lo-fi sketch, hi-fi wireframe, visual design guide, redesigned webpage";

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    return (
        <div className='flex flex-col justify-start items-center px-5 md:px-20'>
            <img src={snokingObj.imagePath} className="h-72 md:h-120 my-16 rounded-lg" />
            <ProjectHeader tools={tools} projLink={projLink} deliverables={deliverables} />
            <div className='flex flex-col items-start w-full'>
                <h1 className='font-semibold text-4xl my-10'>Sno-king Hockey Home Page Redesigned</h1>
                <div className='border-b-8 border-lime-500 w-36 mb-10' />
                <div className='w-full md:w-11/12 mb-5'>
                    <h2>Context</h2>
                    <p>
                        As a former player in Snoking Ice Hockey Association, I feel a sense of gratitude towards 
                        the organization. Therefore, I chose to redesign Snoking's website to help it attract new 
                        members and help grow the hockey community in Seattle. Hockey played a large role in my childhood 
                        so designing a project for Snoking Hockey was a great opportunity to apply asethtic design to a 
                        personal passion.
                    </p>
                </div>
                <div className='w-full md:w-11/12 mb-5'>
                    <h2>Problem</h2>
                    <p>
                        The website's layout lacks hierarchy and contradicts users' conceptual models by having 
                        distracting elements scattered throughout it. It prevents new users from locating the information 
                        they seek and impairs returning visitors from navigating to familiar locations. 
                    </p>
                </div>
                <div className='w-full md:w-11/12 mb-5'>
                    <h2>Audience</h2>
                    <p>
                        The target audience for this web page are mostly parents of young children looking to 
                        enroll their kids in the local hockey programs. Their major considerations are the site's
                        navigability and learnability. Secondary users are returning visitors such as teen players 
                        and member parents seeking routine information. The design of the website should thus 
                        consider the demands of different users in its hierarchy and layout.
                    </p>
                </div>
                <div className='w-full md:w-11/12 mb-5'>
                    <h2>Redesign Process</h2>
                    <p>
                        I started with the low-fi wireframe sketches of the general layout of the website, focusing on the 
                        primary problem of improving the site hierarchy.
                    </p>
                    <div className='flex flex-col md:flex-row w-full justify-around items-center my-10'>
                        <img src={lofiphone} className="h-72 lg:h-80" />
                        <img src={lofitablet} className="h-72 lg:h-80" />
                        <img src={lofiweb} className="h-72 lg:h-80" />
                    </div>
                    <p>
                        Then I laid out the visual design guides before applying it to the layout outlined by the lo-fi sketches to 
                        a hi-fi wireframe and prototype on Figma.
                    </p>
                    <div className='flex flex-col md:flex-row w-full justify-around items-center my-10'>
                        <img src={VDG1} className="h-56 py-5 lg:h-64" />
                        <img src={VDG2} className="h-56 py-5 lg:h-64" />
                    </div>
                    <div className='flex flex-row justify-center mb-10'>
                        <iframe width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fuo8wwomOjgh6lPLMEUGRQP%2FResponsive-Redesign-(UI%252FUX-Proj-2)%3Fpage-id%3D0%253A1%26node-id%3D1%253A2%26viewport%3D273%252C379%252C0.07%26scaling%3Dcontain" allowFullScreen />
                    </div>
                    <p>
                        Finally, I redesigned the webpage to replicate the hi-fi prototype using simply HTML and CSS.
                    </p>
                </div>
                <div className='w-full md:w-11/12 mb-5'>
                    <h2>Lessons Learned</h2>
                    <p>
                        Surprisingly, the peer reviews I received reflected a preference for a more detailed page over the minimalistic 
                        approach I took with the redesign. I realized that the reason was because people preferred to have to click less 
                        to find additional information and have all the content available to them on one page.
                    </p>
                </div>
                <div className='w-full md:w-11/12 mb-5'>
                    <h2>Conclusion</h2>
                    <p>
                        From a technical perspective, I learned how to apply breakpoints to build responsive websites and use Figma 
                        to build interactive prototypes. From a design perspective, I learned about website hierarchy and the impact 
                        of design choices on user memorability, learnability, and efficiency.
                    </p>
                </div>
                <div className='flex flex-row justify-center my-10 w-full'>
                    <VisitProject projLink={projLink} />
                </div>
            </div>
        </div>
    )
}

export default Snoking;