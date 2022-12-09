import React, { useEffect } from 'react';

import ProjectHeader from '../UI/ProjectHeader';
import VisitProject from '../UI/VisitProject';

import remove from '../../assets/ultimatexi/remove.png';
import error from '../../assets/ultimatexi/error.png';
import success from '../../assets/ultimatexi/success.png';
import profilefiller from '../../assets/ultimatexi/profilefiller.png';
import cursor from '../../assets/ultimatexi/cursor.png';

const Ultimatexi = ({ ultimatexiObj }) => {

  const tools = "React.js, TailwindCSS";
  const projLink = "https://inebriateddonkey123.github.io/wc-ultimate-team/";
  const deliverables = "React Web App";

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  return (
    <div className='flex flex-col justify-start items-center px-5 md:px-20'>
            <img src={ultimatexiObj.imagePath} className="h-72 md:h-120 my-16 rounded-lg" />
            <ProjectHeader tools={tools} projLink={projLink} deliverables={deliverables} />
            <div className='flex flex-col items-start w-full'>
                <h1 className='font-semibold text-4xl my-10'>Pick Your World Cup Ultimate XI</h1>
                <div className='border-b-8 border-lime-500 w-36 mb-10' />
                <div className='w-full md:w-11/12 mb-5'>
                    <h2>Context</h2>
                    <p>
                      As a massive football fan, I thought it'd be the perfect opportunity to celebrate 
                      the start of World Cup 2022 with this project. In a World Cup filled with so many 
                      exciting players, it would be interesting to see which players people value 
                      and choose to include in their ultimate team of 11 players.
                    </p>
                </div>
                <div className='w-full md:w-11/12 mb-5'>
                    <h2>Goal</h2>
                    <p>
                      The goal of the project is for the user to pick the best 11 players possible within their 
                      budget range of $80 and then share it with their friends as a form of entertainment. 
                    </p>
                </div>
                <div className='w-full md:w-11/12 mb-5'>
                    <h2>Fun Fact</h2>
                    <p>
                      All the player data were manually obtained because FIFA is corrupt and even charges for an API of 
                      World Cup players. On the bright side, it was fun to price the players, although now I have a newfound 
                      appreciation for the people in charge of pricing at fantasy sports platforms. 
                    </p>
                </div>
                <div className='w-full md:w-11/12 mb-5'>
                    <h2>Usability Considerations</h2>
                    <ol className='list-decimal ml-10'>
                      <li className='my-5'>
                        I added alerts so that users are notified when they submit an input to the site. Depending 
                        on the color of the alert, the user can see if they have successfully completed what they intended 
                        or have failed and then act according to the feedback.
                      </li>
                      <div className='flex flex-col lg:flex-row w-full justify-evenly items-center my-5'>
                        <img src={success} className="h-64" />
                        <img src={error} className="h-64" />
                      </div>
                      <li className='my-5'>
                        Since actions are appropriate under specific situations, I configured the buttons such that they 
                        are only available when the appropriate and disabled with a not-allowed cursor when the user tries to 
                        engage with it otherwise.
                      </li>
                      <div className='flex flex-row w-full justify-center'>
                        <img src={cursor} className='h-64 rounded-lg shadow-lg shadow-slate-600 my-5' />
                      </div>
                      <li className='my-5'>
                        The remove functionality accommodates for human errors, essentially acting as a back button. Since 
                        humans make mistakes, this allow them to correct their mistake. By having both the functionality add 
                        and remove players from their team, users can commit to an idea and adjust accordingly without having 
                        to restart when they diverge from their original plan.
                      </li>
                      <div className='flex flex-row w-full justify-center'>
                        <img src={remove} className="h-64 rounded-lg shadow-lg shadow-slate-600 my-5" />
                      </div>
                      <li className='my-5'>
                        Given the volume of players, I did not gather images for all of them. Rather than leaving their images 
                        as errors, I error checked the image path so that players without images can have placeholder images. 
                        This improves the asthetics of the site as well as convey validity.
                      </li>
                      <div className='flex flex-row justify-center'>
                        <img src={profilefiller} className="h-64 rounded-lg shadow-lg shadow-slate-600 my-5" />
                      </div>
                    </ol>
                </div>
                <div className='w-full md:w-11/12 mb-5'>
                    <h2>Conclusion</h2>
                    <p>
                        Through this project, I learned how to dynamically work with large data sets, render different object attribute 
                        types, and manage state across multiple component layers. I also gained experience in designing for the user 
                        experience by adding consideration for common usability principles. Overall, this project allowed me to tangibly 
                        manifest my passion for football and the World Cup.
                    </p>
                </div>
                <div className='flex flex-row justify-center my-10 w-full'>
                    <VisitProject projLink={projLink} />
                </div>
            </div>
        </div>
  )
}

export default Ultimatexi;