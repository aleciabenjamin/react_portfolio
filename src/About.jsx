import React from "react";
import { UndrawMindfulness } from 'react-undraw-illustrations';

const About = () => {
    return (
            <div className="content-wrapper">
                <div className="flex flex-wrap mb-4">
                    <div className="w-full lg:w-1/4 md:w-1/2">
                        <UndrawMindfulness primaryColor='#f0c543' height= '250px'/>
                    </div>
                    <div className="w-full lg:w-3/4 md:w-1/2">
                        <h1 className="content-text">About Me</h1>
                        <p className="content-text">“People find me to be an upbeat, self-motivated team player with excellent communication skills.
                        For the past several years I have worked in lead qualification, telemarketing, and customer service in the technology industry. My experience includes successfully calling people in director-level positions of technology departments and developing viable leads. I have a track record of maintaining a consistent call and activity volume and consistently achieving the top 10 percent in sales, and I can do the same thing for your company.”</p>
                    </div>
                    <div className="flex items-center justify-between leading-none p-2 md:p-4">
                
                    {/* <button className="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded">
                        Previous Employment
                        <Link to="/employment">Previous Employment</Link>
                        </button>
                        <button className="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded">
                        Education 
                        </button> */}
                    
                    
                    
                    </div>
                </div>
             </div>
    );
}
    
export default About