"use client";

import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import About from "../ClientComponents/About";
import Skills from "../ClientComponents/Skills";
import Project from "../ClientComponents/Project";
import ProjectCards from "../ClientComponents/ProjectCards";
import React, { useEffect, useContext } from "react";
import { UserContext } from "../page";

const sectionPadding = "w-full md:p-14 p-6";

const Draken = () => {
  const { dispatch } = useContext(UserContext);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["abt", "exp", "skills", "pro"];

      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) return;

        const rect = element.getBoundingClientRect();

        if (
          rect.top <= window.innerHeight * 0.4 &&
          rect.bottom >= window.innerHeight * 0.4
        ) {
          dispatch({ type: id as "abt" | "exp" | "skills" | "pro", payload: id });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch]);

  return (
    <Grid container spacing={1}>
      <Grid item xl={6} md={6} lg={6} sm={12} className="relative">
        <div className="static lg:fixed">
          <Box className="w-full md:p-14 p-4 flex flex-col items-start">
            <h1 className="text-white font-heading">Yashasvi Shukla.</h1>
            <br />
            <h3 className="text-white font-heading">
              Full Stack Engineer building scalable systems and AI
            </h3>
            <p style={{ color: "#7B899D" }}>
              I ship clean, scalable products with strong engineering
              fundamentals.
            </p>
          </Box>
          <Box className="flex flex-col sm:content-between content-start">
            <Box className="my-10 w-full p-14 flex-col sm:block">
              <About />
              <Skills />
              <Project />

              <br></br><br></br><br></br><br></br>

              <Box className="my-30 w-full md:p-2 p-4 flex gap-6 mb-10">
          <a
            href="https://github.com/yashasvi-shukla-me"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon className="text-white cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/in/yashasvi-shukla-me/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="text-white cursor-pointer" />
          </a>
          <a href="mailto:yashasvi.shukla.me@gmail.com" aria-label="Email">
            <EmailIcon className="text-white cursor-pointer" />
          </a>
          <a
            href="https://www.instagram.com/ripoffmyshirt/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <InstagramIcon className="text-white cursor-pointer" />
          </a>
          <a
            href="https://www.goodreads.com/user/show/162721733-yashasvi-shukla"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Goodreads"
          >
            <MenuBookIcon className="text-white cursor-pointer" />
          </a>
        </Box>

        {/* <p
          className="w-full p-2 md:text-base text-sm "
          style={{ color: "#7B899D" }}
        >
          Next.js, TypeScript · Deployed on Netlify.
        </p> */}
            </Box>
          </Box>
        </div>
      </Grid>

      <Grid
        item
        xl={6}
        md={6}
        lg={6}
        sm={12}
        style={{ width: "100%", padding: "0px" }}
      >
        <span className="md:p-14 md:hidden block p-6 text-white cursor-pointer font-bold">
          About
        </span>
        <Box id="abt" className={`${sectionPadding} flex flex-col items-start`}>
          <p style={{ color: "#7B899D" }} className="p-2">
            I completed my schooling in Lucknow, then my graduation and masters from Delhi NCR.
             I am strengthening my
            foundations in DSA, distributed backend design and applied machine
            learning while building production-oriented platforms.
          </p>
          <p style={{ color: "#7B899D" }} className="p-2">
            I am a Full-Stack Engineer building scalable web platforms and AI
            driven systems.
          </p>
          <p style={{ color: "#7B899D" }} className="p-2">
            Outside of work, I enjoy basketball, chess, reading and learning
            guitar.
          </p>
        </Box>

        <span className="md:p-14 md:hidden block p-6 text-white cursor-pointer font-bold">
          Experience
        </span>
        <Box id="exp" className={sectionPadding}>
          <div className="flex flex-col gap-4 text-white">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <p className="font-bold">Bachelors &amp; Masters · Developer</p>
              <p style={{ color: "#7B899D" }} className="text-sm">
                2019 – 2026
              </p>
            </div>
            <p style={{ color: "#7B899D" }} className=" leading-relaxed max-w-xl">
              Building full-stack and ML platforms - from online judges and
              resume intelligence to litigation and case management software for legal firms, resource management 
              software for businesses - with a focus on clean and easy customer experience and
              architecture 
            </p>
            <a
              href="https://github.com/yashasvi-shukla-me?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1  font-bold text-white w-fit"
            >
              View repositories
              <ArrowOutwardIcon sx={{ color: "#fff", fontSize: 16 }} />
            </a>
          </div>
        </Box>

        <a href="/Yashasvi_Shukla_Resume.pdf" target="_blank">
          <Box className="w-full md:p-14 p-6 flex gap-2 mb-4">
            <p className="font-bold text-white cursor-pointer">View Full Resume</p>
            <ArrowOutwardIcon sx={{ color: "#fff" }} />
          </Box>
        </a>

        <span className="md:p-14 md:hidden block p-6 text-white cursor-pointer font-bold">
          Technical Summary
        </span>
        <Box id="skills" className={sectionPadding}>
          <Box className="flex flex-col gap-2 text-white">
            <div>
              Languages
              <div className="flex gap-2 p-1 my-3 flex-wrap">
                <Button variant="outlined">Python</Button>
                <Button variant="outlined">JavaScript</Button>
                <Button variant="outlined">SQL</Button>
              </div>
            </div>
            <div>
              Backend &amp; APIs
              <div className="flex gap-2 p-1 my-3 flex-wrap">
                <Button variant="outlined">React</Button>
                <Button variant="outlined">FastAPI</Button>
                <Button variant="outlined">Node.js</Button>
                <Button variant="outlined">Express</Button>
                <Button variant="outlined">Docker</Button>
                <Button variant="outlined">JWT</Button>
              </div>
            </div>
            <div>
              Databases &amp; MLOps
              <div className="flex gap-2 p-1 my-3 flex-wrap">
                <Button variant="outlined">MongoDB</Button>
                <Button variant="outlined">PostgreSQL</Button>
                <Button variant="outlined">MySQL</Button>
                <Button variant="outlined">MLflow</Button>
                <Button variant="outlined">Prometheus</Button>
                <Button variant="outlined">AWS</Button>
              </div>
            </div>
            <div>
              Other
              <div className="flex gap-2 p-1 my-3 flex-wrap">
                <Button variant="outlined">Machine Learning</Button>
                <Button variant="outlined">NLP</Button>
                <Button variant="outlined">Postman</Button>
              </div>
            </div>
          </Box>
        </Box>

        <span className="md:p-14 md:hidden block p-6 text-white cursor-pointer font-bold">
          Projects
        </span>
        <Box id="pro" className={sectionPadding}>
          <ProjectCards />
        </Box>

        

        {/* <Box className="my-30 w-full md:p-14 p-4 flex gap-6">
          <a
            href="https://github.com/yashasvi-shukla-me"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon className="text-white cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/in/yashasvi-shukla-me/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="text-white cursor-pointer" />
          </a>
          <a href="mailto:yashasvi.shukla.me@gmail.com" aria-label="Email">
            <EmailIcon className="text-white cursor-pointer" />
          </a>
          <a
            href="https://www.goodreads.com/user/show/162721733-yashasvi-shukla"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Goodreads"
          >
            <MenuBookIcon className="text-white cursor-pointer" />
          </a>
        </Box>

        <p
          className="w-full p-14 md:text-base text-sm"
          style={{ color: "#7B899D" }}
        >
          Next.js, TypeScript · Deployed on Netlify.
        </p> */}
      </Grid>
    </Grid>
  );
};

export default Draken;
