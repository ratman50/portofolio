import { skills } from "../constants";

const About = () => {
     return (
          <section className="max-container ">
               <h1 className="head-text">
                    Hello, I'm{" "}
                    <span className="blue-gradient_text font-semibold drop-shadow">
                         Pape Mactar NDIAYE
                    </span>{" "}
               </h1>
               <div className="mt-5 flex flex-col gap-3 text-slate-500">
                    <p>
                         Full-stack developer based in Senegal, specialized in the field of ICT
                         (Information and Communication Technology), while constantly seeking
                         knowledge and keeping up with the latest advancements.
                    </p>
               </div>
               <div className="py-10 flex flex-col">
                    <h3 className="subhead-text">My Skills</h3>
                    <div className="mt-16 flex flex-wrap gap-12">
                         {skills.map((skill) => (
                              <div className=" block-container w-20 h-20">
                                   <div className="btn-back rounded-xl" />
                                   <div className="btn-front rounded-xl flex justify-center items-center ">
                                        <img
                                             className="w-1/2 h-1/2 object-contain"
                                             src={skill.imageUrl}
                                             alt={skill.name}
                                        />
                                   </div>
                              </div>
                         ))}
                    </div>
               </div>
               <div className="py-16">
                    <h3 className="subhead-text">Work Experience</h3>
                    <div className="mt-5 flex flex-col gap-3 text-slate-500">
                         <p>
                            I am knowledgeable about many new technologies that can improve the daily lives of users.
                         </p>
                    </div>
                    <div className="mt-12 flex">
                      
                    </div>
               </div>
          </section>
     );
};

export default About;
