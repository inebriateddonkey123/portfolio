import React, { useEffect } from 'react';

import ProjectHeader from '../UI/ProjectHeader';
import VisitProject from '../UI/VisitProject';

import sketch1 from '../../assets/relay/sketch1.png';
import sketch2 from '../../assets/relay/sketch2.png';
import sketch3 from '../../assets/relay/sketch3.png';
import figma1 from '../../assets/relay/figma1.png';
import figma2 from '../../assets/relay/figma2.png';
import figma3 from '../../assets/relay/figma3.png';
import email from '../../assets/relay/email.png';
import video1 from '../../assets/relay/video1.mp4';
import video2 from '../../assets/relay/video2.mp4';
import video3 from '../../assets/relay/video3.mp4';

const Relay = ({ relayObj }) => {

  const tools = "Figma, Balsamiq, UserTesting";
  const projLink = "https://www.figma.com/proto/W23uSATPnDe20TOBo8gjE1/Project-4?node-id=6%3A5&starting-point-node-id=6%3A5";
  const deliverables = "Interactive Figma Prototype";

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  return (
    <div className='flex flex-col justify-start items-center px-5 md:px-20'>
            <img src={relayObj.imagePath} className="h-72 md:h-120 my-16 rounded-lg" />
            <ProjectHeader tools={tools} projLink={projLink} deliverables={deliverables} />
            <div className='flex flex-col items-start w-full'>
                <h1 className='font-semibold text-4xl my-10'>Relay Web App Design</h1>
                <div className='border-b-8 border-lime-500 w-36 mb-10' />
                <div className='w-full md:w-11/12 mb-5'>
                    <h2>Context</h2>
                    <p>
                      As someone passionate about technology entrepreneurship, Relay grabbed my attention when I was 
                      browsing through YCombinator's startup batch. Relay is a startup that leverages the power of 
                      software to challenge the antiquetted addiction support, "alcohol anonymous", by providing 
                      an online peer support platform. I chose to design for this startup because it tackles an often 
                      neglected problem and combines my passion for early-stage startups and software.
                    </p>
                </div>
                <div className='w-full md:w-11/12 mb-5'>
                    <h2>Goal</h2>
                    <p>
                      The company already has a mobile app so my team aimed to design a web app version of the product 
                      to offer to the founders. 
                    </p>
                </div>
                <div className='w-full md:w-11/12 mb-5'>
                    <h2>Audience</h2>
                    <p>
                      The target audience for the web app is the same as the mobile app, which is people who are struggling 
                      to manage their addictions and are looking for a community to support them. At the same time, since 
                      we intended to offer our designs to the founders, we also accounted for common considerations of startup 
                      founders such as how to lower churn rate and keep people using the platform.
                    </p>
                </div>
                <div className='w-full md:w-11/12 mb-5'>
                    <h2>Design Iterations</h2>
                    <h3>Pre Peer Critique</h3>
                    <p>
                      We first sketched out our ideas for the web app design on Balsamiq after aggregating the best features of 
                      each team member's proposals.
                    </p>
                    <div className='flex flex-col lg:flex-row w-full justify-around items-center my-10'>
                      <img src={sketch1} className="w-80 mx-5 my-5" />
                      <img src={sketch2} className="w-80 mx-5 my-5" />
                      <img src={sketch3} className="w-80 mx-5 my-5" />
                    </div>
                    <p>
                      We then designed the web app on Figma based to replicate our sketches from Balsamiq.
                    </p>
                    <div className='flex flex-col lg:flex-row w-full justify-around items-center my-10'>
                      <img src={figma1} className="w-80 mx-5 my-5" />
                      <img src={figma2} className="w-80 mx-5 my-5" />
                      <img src={figma3} className="w-80 mx-5 my-5" />
                    </div>
                    <h3>Peer Critique and Iteration</h3>
                    <p className='text-lg font-medium'>Critiques</p>
                    <ol className='list-decimal ml-10'>
                      <li>The pink on white theme was difficult to read</li>
                      <li>Empty text bubbles could be misleading</li>
                      <li>Prototype does not demonstrate full use cases</li>
                      <li>Image on front page implies that Relay is a dating app</li>
                      <li>No need for marketing pages when logged in</li>
                    </ol>
                    <p className='text-lg font-medium mt-10'>Changes based on feedback</p>
                    <ol className='list-decimal ml-10'>
                      <li>Added drop shadow to text for readability</li>
                      <li>Added filler text to bubbles</li>
                      <li>Added interaction for multiple addictions and chat sending feature</li>
                      <li>Removed heart from image on front page</li>
                      <li>Removed About Us page from nav bar when logged in</li>
                    </ol>
                </div>
                <div className='w-full md:w-11/12 mb-5'>
                    <h3>User Testing on UserTesting.com</h3>
                    <p className='text-lg font-medium my-5'>Experiment Parameters</p>
                    <p>
                      You are a frequent user of Relay who struggles with porn and alcohol addictions.
                      Today, you want to send a message to your alcohol addiction peers through the Relay
                      desktop website.
                    </p>
                    <p className='text-lg font-medium my-5'>User Instructions</p>
                    <ol className='list-decimal ml-10'>
                      <li>Log into your existing Relay account</li>
                      <li>Switch from your porn addiction dashboard to your alcohol addiction dashboard</li>
                      <li>Send a message to your alcohol addiction peers through the chat room</li>
                      <li>Log out of your account</li>
                    </ol>
                    <p className='text-lg font-medium my-5'>Results</p>
                    <div className='hidden md:flex flex-col items-center'>
                      <video width="500" height="300" className='my-5' controls>
                        <source src={video1} type="video/mp4" />
                      </video>
                      <video width="500" height="300" className='my-5' controls>
                        <source src={video2} type="video/mp4" />
                      </video>
                      <video width="500" height="300" className='my-5' controls>
                        <source src={video3} type="video/mp4" />
                      </video>
                    </div>
                    <div className='flex md:hidden flex-col items-center'>
                      <video width="300" height="180" className='my-5' controls>
                        <source src={video1} type="video/mp4" />
                      </video>
                      <video width="300" height="180" className='my-5' controls>
                        <source src={video2} type="video/mp4" />
                      </video>
                      <video width="300" height="180" className='my-5' controls>
                        <source src={video3} type="video/mp4" />
                      </video>
                    </div>
                </div>
                <div className='w-full md:w-11/12 mb-5'>
                    <h2>Final Delivery</h2>
                    <p>
                      As the culmination of this project, we emailed our designs to the three founders of Relay in the hopes 
                      they will consider them for their web app design.
                    </p>
                    <div className='flex flex-row justify-center'>
                      <img src={email} className='h-72 my-10' />
                    </div>
                    <p>
                      Although we never got a response, the founders read our email <span className='font-bold text-lg bg-lime-200'>38 within 24 hours</span> . Hopefully 
                      we see them implement parts of our design in the future.
                    </p>
                </div>
                <div className='w-full md:w-11/12 mb-5'>
                    <h2>Conclusion</h2>
                    <p>
                        Designing the web app for Relay not only improved my technical skills with interactive Figma 
                        prototyping but the iterative building process also helped me understand user preferences. This 
                        project is the first that I have conducted user testing with so it has also taught me how to 
                        design unbiased experiments and work with feedback.
                    </p>
                </div>
                <div className='flex flex-row justify-center my-10 w-full'>
                    <VisitProject projLink={projLink} />
                </div>
            </div>
        </div>
  )
}

export default Relay;