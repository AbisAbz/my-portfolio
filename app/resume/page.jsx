"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { delay, motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const about = {
  title: "about me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus architecto, eveniet sunt mollitia incidunt fuga modi accusamus!",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Minhaj mm",
    },
    {
      fieldName: "Phone",
      fieldValue: "+91 9946631792",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Email",
      fieldValue: "minhaj9946@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "English,Malayalam,Tamil",
    },
  ],
};

const experience = {
  icon: "",
  title: "My experience",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est corrupti, magni et qui cumque cum ullam voluptatum?",
  items: [
    {
      company: "Freelancer",
      position: "Full Stack Developer",
      duration: "2023 -2024",
    },
    {
      company: "Freelancer",
      position: "Full Stack Developer",
      duration: "2023 -2024",
    },
    {
      company: "Freelancer",
      position: "Full Stack Developer",
      duration: "2023 -2024",
    },
    {
      company: "Freelancer",
      position: "Full Stack Developer",
      duration: "2023 -2024",
    },
  ],
};
const education = {
  icon: "",
  title: "My education",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est corrupti, magni et qui cumque cum ullam voluptatum?",
  items: [
    {
      institution: "Bootcamp",
      degree: "Full Stack Developer",
      duration: "2023 -2024",
    },
    {
      institution: "Freelancer",
      degree: "Full Stack Developer",
      duration: "2023 -2024",
    },
    {
      institution: "Freelancer",
      degree: "Full Stack Developer",
      duration: "2023 -2024",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus vero quos ipsum dolorum facilis, eos nulla consequatur.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css3",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css js",
    },
  ],
};

const page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experince</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">

            {/* Experince */}

            <TabsContent value='experience' className="w-full">
              <div className="flex flex-col gap-[20px] text-center xl:text-left">
                <h3 className="text-2xl font-bold">{experience.title}</h3>
                <p className="max-w-[500px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[350px] ">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[10px] ">
                    {experience.items.map((item, index) => (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>

                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}

            <TabsContent value='education' className="w-full">
              <div className="flex flex-col gap-[20px] text-center xl:text-left">
                <h3 className="text-2xl font-bold">{education.title}</h3>
                <p className="max-w-[500px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[350px] ">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[10px] ">
                    {education.items.map((item, index) => (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>

                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}

            <TabsContent value='skills' className="w-full h-full">
              <div className="flex flex-col gap-[30px] ">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-2xl font-bold">{skills.title}</h3>
                  <p className="max-w-[500px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4  xl:gap-[30px] ">
                  {skills.skillList.map((item, index) => (
                    <li key={index} >
                     <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="bg-[#232329] gap-1 h-[150px] w-full rounded-lg flex justify-center items-center group">
                          <div className="text-6xl group-hover:accent transition-all duration-500 group-hover:text-accent">{item.icon}</div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="capitalize">{item.name}</p>
                        </TooltipContent>
                      </Tooltip>
                     </TooltipProvider>
                    
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default page;
