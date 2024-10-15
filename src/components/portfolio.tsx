"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {motion} from 'framer-motion';
import project from "../assests/project.jpg";
import project1 from "../assests/proj1.jpg";
import project2 from "../assests/proj2.jpg";
import pc from "../assests/pc.png";

function Portfolio() {

  
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true); // Component is mounted on the client side
  }, []);
  if (!isMounted) {
    return null;
  }
  const projects = [
    {
      title: "Portfolio Website",
      desc: "A personal portfolio website showcasing my projects and skills, built with React and styled-components.",
      devstack: "React, Styled-components, JavaScript",
      git: "https://github.com/user/portfolio-website",
      src: project,
    },
    {
      title: "E-commerce Platform",
      desc: "An online store built with Next.js and Firebase, featuring product browsing, shopping cart, and user authentication.",
      devstack: "Next.js, Firebase, Tailwind CSS",
      git: "https://github.com/user/ecommerce-platform",
      src: project1,
    },
    {
      title: "Weather App",
      desc: "A weather forecasting app that provides real-time weather data for any location, using OpenWeather API.",
      devstack: "Vue.js, OpenWeather API, CSS",
      git: "https://github.com/user/weather-app",
      src: project2,
    }
  ];
  


  return (
    <div className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18  mt-52" id="portfolio">
      
      <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold my-12">
        Selected <span className="text-orange-400">Projects</span>
      </h1>

      <div className="px-6 md:px-0 max-w-[1000px] mx-auto mt-40 space-y-24">
        {projects.map((project,index) => (
          <motion.div
          key={index}
          initial={{opacity :0,y:75}}
          whileInView={{opacity: 1,y:0}}
          viewport={{once:true}}
          transition={{duration:0.5, delay:0.25}}
          className={`mt-12 flex flex-col ${index % 2 === 1 ? 
            "md:flex-row-reverse gap-12" : 
            "md:flex-row"}`}
          >
            <div className="space-y-2 max-w-[550px]">
              <h2 className="text-7xl my-4 text-white/70">{`0${index + 1}`}</h2>
              <h2 className="text-4xl">{project.title}</h2>
              <h2 className="text-lg text-white/70 break-words p-4">{project.desc}</h2>
              <h2 className="text-lg text-orange-400 font-semibold">{project.devstack}</h2>
              <div className="w-64 h-[1px] bg-gray-400 my-4">
                <a href={project.git} />
              </div>
            </div>

            <div className="flex justify-center items-center">
              <Image src={project.src} alt={project.title} className="h-[350px] w-[500px] 
              border rounded border-gray-700 object-cover " />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
