"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaAws,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiRazorpay,
  SiTypescript,
} from "react-icons/si";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const work = [
  {
    num: "01",
    name: "Pet Food (E-Commerce)",
    description:
      "Developed a robust e-commerce platform tailored for pet food, offering a user-friendly interface, secure payment integration, and mobile-responsive design. The site ensures seamless browsing, optimized product categorization, and an efficient checkout process to enhance user experience.",
    stack: [
      { name: "html 5" },
      { name: "css3" },
      { name: "node.js" },
      { name: "javascript" },
      { name: "Mongodb" },
      { name: "Bootstrap" },
      { name: "express.js" },
      { name: "RazorPay" },
      { name: "AWS" },
      { name: "EC2" },
      { name: "GitHub" },
    ],
    images: ["/assets/work/Pet-Food.png", "/assets/work/Pet-Food(2).png"],
    live: "http:/mafoods.shop/",
    github: "https://github.com/AbisAbz/Ecommerce-First-Project",
  },
  {
    num: "02",
    name: "Car Washing Website",
    description:
      "Designed and developed a dynamic car washing service platform enabling users to schedule appointments, select packages, and make secure online payments. The website features a mobile-responsive design, real-time slot management, and integration of customer reviews to enhance user experience and engagement.",
    stack: [
      { name: "html 5" },
      { name: "css3" },
      { name: "node.js" },
      { name: "javascript" },
      { name: "express.js" },
      { name: "react.js" },
      { name: "mongodb" },
      { name: "material tailwind" },
      { name: "tailwind css" },
      { name: "GitHub" },
    ],
    images: ["/assets/work/car-washing.png"],
    live: "http:/wax.warrior/",
    github: "https://github.com/AbisAbz/WAX-WARRIORS-Client-Side",
  },
  {
    num: "03",
    name: "Dmax Dental Care",
    description:
      "Developed a comprehensive dental care management platform for DMax Dental Care, featuring patient appointment scheduling, treatment history tracking, and payment processing. The platform enables seamless communication between patients and dental professionals, integrates patient records securely, and simplifies administrative tasks. Additionally, the system provides real-time analytics for staff to manage clinic operations efficiently, ensuring exceptional care delivery.",
    stack: [
      { name: "node.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Next.js" },
      { name: "GitHub" },
    ],
    images: ["/assets/work/Dmax.png"],
    live: "https://dmax.eenth.com/signin?callbackUrl=https%3A%2F%2Fdmax.eenth.com%2Fconsultation",
    github: "https://github.com/AbisAbz?tab=repositories",
  },
  {
    num: "04",
    name: "RealDent Surgical Equipments",
    description:
      "Developed a robust e-commerce platform for RealDent Surgical Equipments, facilitating seamless purchasing and sales operations. The platform streamlines the management of inventory, purchase orders, and sales data, enabling efficient tracking of surgical equipment. Features include secure data integration for supplier and customer records, automated invoice generation, and real-time stock updates. Additionally, the system provides comprehensive analytics, helping administrators monitor sales trends and optimize inventory levels, ensuring a smooth and reliable user experience for both suppliers and customers.",
    stack: [
      { name: "node.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Next.js" },
      { name: "GitHub" },
    ],
    images: ["/assets/work/realDent.png"],
    live: "https://realdent.eenth.com/surgicals",
    github: "https://github.com/AbisAbz?tab=repositories",
  },
];

const iconMap = {
  "html 5": <FaHtml5 className="text-white text-sm" />,
  css3: <FaCss3Alt className="text-white text-sm" />,
  "node.js": <FaNodeJs className="text-white text-sm" />,
  javascript: <FaJsSquare className="text-white text-sm" />,
  "express.js": <FaNodeJs className="text-white text-sm" />,
  "react.js": <FaReact className="text-white text-sm" />,
  mongodb: <SiMongodb className="text-white text-sm" />,
  "material tailwind": <SiTailwindcss className="text-white text-sm" />,
  "tailwind css": <SiTailwindcss className="text-white text-sm" />,
  Bootstrap: <FaBootstrap className="text-white text-sm" />,
  RazorPay: <SiRazorpay className="text-white text-sm" />,
  AWS: <FaAws className="text-white text-sm" />,
  EC2: <FaAws className="text-white text-sm" />,
  GitHub: <BsGithub className="text-white text-sm" />,
  TypeScript: <SiTypescript className="text-white text-sm" />,
  "Next.js": <SiNextdotjs className="text-white text-sm" />,
};

const WorkPage = () => {
  const [project, setProject] = useState(work[0]);

  const handleSlideChange = (swiper) => {
    const currentSlide = swiper.activeIndex;
    setProject(work[currentSlide]);
  };

  return (
    <motion.div
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, ease: "easeIn", duration: 0.4 } }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-16">
          {work.map((project, index) => (
            <div key={index} className="flex flex-col xl:flex-row gap-8">
              <div className="w-full xl:w-[50%] flex flex-col justify-between">
                <div className="flex flex-col gap-[30px]">
                  <div className="text-8xl font-extrabold text-transparent text-outline">
                    {project.num}
                  </div>
                  <h3 className="text-[42px] font-bold text-white">{project.name}</h3>
                  <p className="text-white/60">{project.description}</p>
                  <ul className="flex flex-wrap gap-4 text-accent">
                    {project.stack.map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        {iconMap[item.name]} {item.name}
                      </li>
                    ))}
                  </ul>
                  <div className="border border-white/20"></div>
                  <div className="flex items-center gap-4">
                    {project.live && (
                      <Link href={project.live}>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className="rounded-full bg-white/5 p-4">
                              <BsArrowUpRight className="text-white text-3xl" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Live Project</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Link>
                    )}
                    <Link href={project.github}>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className="rounded-full bg-white/5 p-4">
                            <BsGithub className="text-white text-3xl" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Visit Git</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full xl:w-[50%]">
                <Swiper
                  spaceBetween={10}
                  slidesPerView={1}
                  loop={true}
                  onSlideChange={handleSlideChange}
                >
                  {project.images.map((image, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="relative w-full h-full">
                        <Image
                          loading="lazy"
                          height={340}
                          width={960}
                          src={image}
                          alt={`work-image-${idx}`}
                          className="object-fill"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default WorkPage;
