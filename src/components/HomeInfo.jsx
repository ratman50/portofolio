import React from "react";
import { Link } from "react-router-dom";
import { arrow, sene } from "../assets/icons";
const InfoBox = ({ text, link, btnText }) => (
     <div className="info-box">
          <p className="font-medium sm:text-xl text-center ">{text}</p>
          <Link className="neo-brutalism-white neo-btn" to={link}>
               {btnText}
               <img src={arrow} className="w-4 h-4 object-contain" />
          </Link>
     </div>
);
const renderContent = {
     1: (
          <h1 className="sm:text-xl sm:leading-snug  neo-brutalism-blue py-4 px-8 text-white mx-5 ">
               Hi, I am <span className="font-semibold">Pape Mactar NDIAYE</span> 👋
               <p className="flex gap-2">
                    A Full-stack developer from <img className="w-5 text-center" src={sene} />
               </p>
          </h1>
     ),
     2: (
          <InfoBox
               text="Worked with many companies and picked up  many skills along the way"
               link="/about"
               btnText="Learn More"
          />
     ),
     3: (
          <InfoBox
               text="led multiple  projects to succes over the years. Curious about the impact"
               link="/projects"
               btnText="Visit my portfolio"
          />
     ),
     4: (
          <InfoBox
               text="Need a project done or looking for a dev? I'm just a few keystrokes away"
               link="/contact"
               btnText="Let's talk"
          />
     ),
};

const HomeInfo = ({ currentStage }) => {
     return renderContent[currentStage] || null;
};

export default HomeInfo;
