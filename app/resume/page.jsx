"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";
//about data
const about = {
  title: "About me",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Đuro Masoničić",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+382) 67 444 884",
    },
    {
      fieldName: "Experience",
      fieldValue: "4+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Serbian",
    },
    {
      fieldName: "Email",
      fieldValue: "djuromas@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Serbian",
    },
  ],
};

//experience data
const experience = {
  //
  icon: "",
  title: "My experience",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  items: [
    {
      company: "Crnogorski Telekom",
      postion: "Full Stack Developer",
      duration: "2021 - Present",
    },
    {
      company: "Freelancer",
      postion: "Full Stack Developer",
      duration: "2024 - Present",
    },
  ],
};

const education = {
  //
  icon: "",
  title: "My education",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  items: [
    {
      institution: "University of Mediterranean, Montenegro",
      degree: "Bachelor of Software Engineering",
      duration: "2018 - 2022",
    },
    {
      institution: "Udemy",
      degree: "Angular Frontend Developer",
      duration: "2023",
    },
    {
      institution: "Udemy",
      degree: "CSS Flexbox",
      duration: "2023",
    },
    {
      institution: "Google",
      degree: "Digital Marketing",
      duration: "2021",
    },
  ],
};

const skills = {
  title: "My skills",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaFigma />, name: "Figma" },
  ],
};

const Resume = ({}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              experience
            </TabsContent>
            <TabsContent value="education" className="w-full">
              education
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              skills
            </TabsContent>
            <TabsContent value="about" className="w-full">
              about
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
