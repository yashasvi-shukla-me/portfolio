"use client";

import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import codeforge from "../assets/codeforge.png";
import ames from "../assets/ames.png";
import resume from "../assets/resume.png";
import mlops from "../assets/mlops.png";
import news from "../assets/news.png";
import docs from "../assets/docs.jpeg";
import quiz from "../assets/quiz.jpeg";
import sps from "../assets/sps.jpeg";
import tick from "../assets/tick.jpeg";
import food from "../assets/food.jpeg";
import gemini from "../assets/gemini.jpeg";
import todo from "../assets/todo.png";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Button from "@mui/material/Button";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Image from "next/image";
import About from "../ClientComponents/About";
import Skills from "../ClientComponents/Skills";
import Project from "../ClientComponents/Project";

import React, { useEffect, useContext } from "react";
import { UserContext } from "../page";

const Draken = () => {
  const { dispatch } = useContext(UserContext);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["pro", "exp", "abt"];

      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) return;

        const rect = element.getBoundingClientRect();

        if (
          rect.top <= window.innerHeight * 0.4 &&
          rect.bottom >= window.innerHeight * 0.4
        ) {
          dispatch({ type: id as any, payload: id });
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
            <br></br>
            <h3 className="text-white font-heading">
              Full Stack Engineer building scalable systems and AI
            </h3>
            <p style={{ color: "#7B899D" }}>
              I ship clean, scalable products with strong engineering
              fundamentals. 
            </p>
          </Box>
          <Box className="flex flex-col sm:content-between content-start">
            <Box className="my-10 w-full p-14  flex-col   sm:block ">
              <Project />
              <Skills />
              <About />
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
        <span className=" md:p-14 md:hidden block p-6 text-white cursor-pointer font-bold">
          Projects
        </span>

        <Box id="pro" className="w-full">
          <a href="https://codeforge-theta.vercel.app/">
            <Box
              className="flex flex-col items-start cursor-pointer mb-4 w-full md:p-14 p-6"
              sx={{
                "&:hover": {
                  boxShadow:
                    "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
                  backgroundColor: "rgba(255, 255, 255, 0.008)",
                },
              }}
            >
              <Box
                className="flex flex-col text-white"
                sx={{
                  "@media(max-width:600px)": {
                    display: "flex",
                    flexDirection: "column",
                  },
                }}
              >
                <Image
                  src={codeforge}
                  alt="CodeForge dashboard"
                  className="rounded-xl shadow-2xl mb-6"
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                  }}
                />

                <Box>
                  <div className="flex text-white font-bold text-xl mb-2 gap-2">
                    <p>CodeForge</p>
                    <ArrowOutwardIcon sx={{ color: "#fff" }} />
                  </div>
                  <div>
                    <p className="mb-4 text-lg font-medium">
                      Production-ready online judge platform with real-time
                      execution and scalable architecture.
                    </p>

                    <ul className="text-sm text-gray-400 space-y-2 mb-4">
                      <li>• Secure multi-language execution using Judge0</li>
                      <li>
                        • Scalable full-stack architecture with authentication
                      </li>
                      <li>
                        • Problem tagging, filtering, playlists and submission
                        tracking
                      </li>
                    </ul>

                    <div className="flex gap-2 p-1 my-3 flex-wrap">
                      <Button variant="outlined">Judge0 API</Button>
                      <Button variant="outlined">React</Button>
                      <Button variant="outlined">Node.js</Button>
                      <Button variant="outlined">MongoDB</Button>
                      <Button variant="outlined">Docker</Button>
                    </div>
                  </div>
                </Box>
              </Box>
            </Box>
          </a>

          <a href="https://talentforge-one.vercel.app/">
            <Box
              className="flex flex-col items-start cursor-pointer mb-4 w-full md:p-14 p-6"
              sx={{
                "&:hover": {
                  boxShadow:
                    "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
                  backgroundColor: "rgba(255, 255, 255, 0.008)",
                },
              }}
            >
              <Box
                className="flex flex-col text-white"
                sx={{
                  "@media(max-width:600px)": {
                    display: "flex",
                    flexDirection: "column",
                  },
                }}
              >
                <Image
                  src={resume}
                  alt="TalentForge dashboard"
                  className="rounded-xl shadow-2xl mb-6"
                  style={{
                    width: "100%",
                    height: "280px",
                    objectFit: "cover",
                  }}
                />
                <Box>
                  <div className="flex text-white font-bold text-xl mb-3 gap-2">
                    <p>TalentForge</p>
                    <ArrowOutwardIcon sx={{ color: "#fff" }} />
                  </div>
                  <div>
                    <p className="mb-4 text-lg font-medium">
                      AI-powered resume intelligence platform with ATS matching
                      and skill extraction.
                    </p>

                    <ul className="text-sm text-gray-400 space-y-2 mb-4">
                      <li>
                        • NLP-based skill extraction and semantic matching
                      </li>
                      <li>• Resume scoring engine with role-fit computation</li>
                      <li>
                        • FastAPI backend with scalable model inference pipeline
                      </li>
                      <li>• Dockerized deployment for reproducibility</li>
                    </ul>
                    <div className="flex gap-2 p-1 my-3 flex-wrap">
                      <Button variant="outlined">Machine Learning</Button>
                      <Button variant="outlined">React</Button>
                      <Button variant="outlined">FastAPI</Button>
                      <Button variant="outlined">NLP</Button>
                      <Button variant="outlined">Docker</Button>
                    </div>
                  </div>
                </Box>
              </Box>
            </Box>
          </a>

          <a href="https://modelforge-five.vercel.app/">
            <Box
              className="flex flex-col items-start cursor-pointer mb-4 w-full md:p-14 p-6"
              sx={{
                "&:hover": {
                  boxShadow:
                    "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
                  backgroundColor: "rgba(255, 255, 255, 0.008)",
                },
              }}
            >
              <Box
                className="flex flex-col text-white"
                sx={{
                  "@media(max-width:600px)": {
                    display: "flex",
                    flexDirection: "column",
                  },
                }}
              >
                <Image
                  src={mlops}
                  alt="ModelForge dashboard"
                  className="rounded-xl shadow-2xl mb-6"
                  style={{
                    width: "100%",
                    height: "280px",
                    objectFit: "cover",
                  }}
                />
                <Box>
                  <div className="flex text-white font-bold text-xl mb-3 gap-2">
                    <p>ModelForge</p>
                    <ArrowOutwardIcon sx={{ color: "#fff" }} />
                  </div>
                  <div>
                    <p className="mb-4 text-lg font-medium">
                      Production-grade AutoML and MLOps platform for experiment
                      tracking and model deployment.
                    </p>

                    <ul className="text-sm text-gray-400 space-y-2 mb-4">
                      <li>• Experiment versioning and metric comparison</li>
                      <li>• MLflow-style tracking with persistent storage</li>
                      <li>• Dockerized model deployment pipeline</li>
                      <li>• Scalable FastAPI backend for training workflows</li>
                    </ul>
                    <div className="flex gap-2 p-1 my-3 flex-wrap">
                      <Button variant="outlined">FastAPI</Button>
                      <Button variant="outlined">Python</Button>
                      <Button variant="outlined">Prometheus</Button>
                      <Button variant="outlined">Docker</Button>
                      <Button variant="outlined">MongoDB</Button>
                      <Button variant="outlined">MLflow</Button>
                      <Button variant="outlined">React</Button>
                    </div>
                  </div>
                </Box>
              </Box>
            </Box>
          </a>

          <a href="https://ames-house-price-predict.netlify.app/">
            <Box
              className="flex flex-col items-start cursor-pointer mb-4 w-full md:p-14 p-6"
              sx={{
                "&:hover": {
                  boxShadow:
                    "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
                  backgroundColor: "rgba(255, 255, 255, 0.008)",
                },
              }}
            >
              <Box
                className="flex gap-3 text-white"
                sx={{
                  "@media(max-width:600px)": {
                    display: "flex",
                    flexDirection: "column",
                  },
                }}
              >
                <Image
                  src={ames}
                  alt="Ames House Price Predictor — ML inference dashboard"
                  style={{
                    width: "180px",
                    height: "100px",
                    paddingRight: "30px",
                  }}
                />
                <Box>
                  <div className="flex text-white font-bold mb-2 gap-2">
                    <p>Ames House Price Predictor</p>
                    <ArrowOutwardIcon sx={{ color: "#fff" }} />
                  </div>
                  <div>
                    <p className="mb-4">
                      End-to-end ML application that predicts house prices using
                      the Ames dataset, with production-ready inference via a
                      FastAPI backend and web frontend.
                    </p>
                    <div className="flex gap-2 p-1 my-3 flex-wrap">
                      <Button variant="outlined">ML</Button>
                      <Button variant="outlined">Gradient Boosting</Button>
                      <Button variant="outlined">JavaScript</Button>
                      <Button variant="outlined">FastAPI</Button>
                    </div>
                  </div>
                </Box>
              </Box>
            </Box>
          </a>

          <a href="https://the-chronicles.vercel.app/">
            <Box
              className="flex flex-col items-start cursor-pointer mb-4 w-full md:p-14 p-6"
              sx={{
                "&:hover": {
                  boxShadow:
                    "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
                  backgroundColor: "rgba(255, 255, 255, 0.008)",
                },
              }}
            >
              <Box
                className="flex gap-3 text-white"
                sx={{
                  "@media(max-width:600px)": {
                    display: "flex",
                    flexDirection: "column",
                  },
                }}
              >
                <Image
                  src={news}
                  alt="The Chronicles — news aggregator app interface"
                  style={{
                    width: "180px",
                    height: "100px",
                    paddingRight: "30px",
                  }}
                />
                <Box>
                  <div className="flex text-white font-bold mb-2 gap-2">
                    <p>The Chronicles</p>
                    <ArrowOutwardIcon sx={{ color: "#fff" }} />
                  </div>
                  <div>
                    <p className="mb-4">
                      React-based news aggregator using the News API and React Hooks
                      for real-time updates across multiple categories.
                    </p>
                    <div className="flex gap-2 p-1 my-3 flex-wrap">
                      <Button variant="outlined">News API</Button>
                      <Button variant="outlined">React</Button>
                      <Button variant="outlined">JavaScript</Button>
                    </div>
                  </div>
                </Box>
              </Box>
            </Box>
          </a>

          <a href="https://kanbanix.vercel.app/">
            <Box
              className="flex flex-col items-start cursor-pointer mb-4 w-full md:p-14 p-6"
              sx={{
                "&:hover": {
                  boxShadow:
                    "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
                  backgroundColor: "rgba(255, 255, 255, 0.008)",
                },
              }}
            >
              <Box
                className="flex gap-3 text-white"
                sx={{
                  "@media(max-width:600px)": {
                    display: "flex",
                    flexDirection: "column",
                  },
                }}
              >
                <Image
                  src={todo}
                  alt="Kanbanix — Kanban task board with drag and drop"
                  style={{
                    width: "180px",
                    height: "100px",
                    paddingRight: "30px",
                  }}
                />
                <Box>
                  <div className="flex text-white font-bold mb-2 gap-2">
                    <p>Kanbanix</p>
                    <ArrowOutwardIcon sx={{ color: "#fff" }} />
                  </div>
                  <div>
                    <p className="mb-4">
                      Kanban-style task board with drag-and-drop, inline editing,
                      and local storage persistence in a terminal-inspired UI.
                    </p>
                    <div className="flex gap-2 p-1 my-3 flex-wrap">
                      <Button variant="outlined">Local Storage</Button>
                      <Button variant="outlined">HTML</Button>
                      <Button variant="outlined">CSS</Button>
                      <Button variant="outlined">JavaScript</Button>
                    </div>
                  </div>
                </Box>
              </Box>
            </Box>
          </a>

          <a href="https://probe-five.vercel.app/">
            <Box
              className="flex flex-col items-start cursor-pointer mb-4 w-full md:p-14 p-6"
              sx={{
                "&:hover": {
                  boxShadow:
                    "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
                  backgroundColor: "rgba(255, 255, 255, 0.008)",
                },
              }}
            >
              <Box
                className="flex gap-3 text-white"
                sx={{
                  "@media(max-width:600px)": {
                    display: "flex",
                    flexDirection: "column",
                  },
                }}
              >
                <Image
                  src={quiz}
                  alt="Probe — MCQ quiz platform interface"
                  style={{
                    width: "180px",
                    height: "100px",
                    paddingRight: "30px",
                  }}
                />
                <Box>
                  <div className="flex text-white font-bold mb-2 gap-2">
                    <p>Probe App</p>
                    <ArrowOutwardIcon sx={{ color: "#fff" }} />
                  </div>
                  <div>
                    <p className="mb-4">
                      Online MCQ assessment platform that presents one question at a
                      time with section navigation and real-time scoring.
                    </p>
                    <div className="flex gap-2 p-1 my-3 flex-wrap">
                      <Button variant="outlined">React</Button>
                      <Button variant="outlined">JavaScript</Button>
                      <Button variant="outlined">Bootstrap</Button>
                      <Button variant="outlined">API</Button>
                    </div>
                  </div>
                </Box>
              </Box>
            </Box>
          </a>

          <a href="https://nom-nom-nomad.vercel.app/">
            <Box
              className="flex flex-col items-start cursor-pointer mb-4 w-full md:p-14 p-6"
              sx={{
                "&:hover": {
                  boxShadow:
                    "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
                  backgroundColor: "rgba(255, 255, 255, 0.008)",
                },
              }}
            >
              <Box
                className="flex gap-3 text-white"
                sx={{
                  "@media(max-width:600px)": {
                    display: "flex",
                    flexDirection: "column",
                  },
                }}
              >
                <Image
                  src={food}
                  alt="Nom Nom Nomad — food delivery app UI"
                  style={{
                    width: "180px",
                    height: "100px",
                    paddingRight: "30px",
                  }}
                />
                <Box>
                  <div className="flex text-white font-bold mb-2 gap-2">
                    <p>Nom Nom Nomad</p>
                    <ArrowOutwardIcon sx={{ color: "#fff" }} />
                  </div>
                  <div>
                    <p className="mb-4">
                      React-based food delivery UI built with Vite, demonstrating
                      modern front-end patterns and component architecture.
                    </p>
                    <div className="flex gap-2 p-1 my-3 flex-wrap">
                      <Button variant="outlined">React</Button>
                      <Button variant="outlined">JavaScript</Button>
                      <Button variant="outlined">Hooks</Button>
                    </div>
                  </div>
                </Box>
              </Box>
            </Box>
          </a>

          <a href="https://gemini-clone-taupe.vercel.app/">
            <Box
              className="flex flex-col items-start cursor-pointer mb-4 w-full md:p-14 p-6"
              sx={{
                "&:hover": {
                  boxShadow:
                    "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
                  backgroundColor: "rgba(255, 255, 255, 0.008)",
                },
              }}
            >
              <Box
                className="flex gap-3 text-white"
                sx={{
                  "@media(max-width:600px)": {
                    display: "flex",
                    flexDirection: "column",
                  },
                }}
              >
                <Image
                  src={gemini}
                  alt="Gemini Clone — AI chat interface"
                  style={{
                    width: "180px",
                    height: "100px",
                    paddingRight: "30px",
                  }}
                />
                <Box>
                  <div className="flex text-white font-bold mb-2 gap-2">
                    <p>Gemini Clone</p>
                    <ArrowOutwardIcon sx={{ color: "#fff" }} />
                  </div>
                  <div>
                    <p className="mb-4">
                      Chat interface for the Gemini API—sleek, fast, and
                      customizable—built with React and Vite.
                    </p>
                    <div className="flex gap-2 p-1 my-3 flex-wrap">
                      <Button variant="outlined">React</Button>
                      <Button variant="outlined">JavaScript</Button>
                      <Button variant="outlined">Bootstrap</Button>
                      <Button variant="outlined">Gen AI</Button>
                    </div>
                  </div>
                </Box>
              </Box>
            </Box>
          </a>

          <a href="https://rochambeau-jade.vercel.app/">
            <Box
              className="flex flex-col items-start cursor-pointer mb-4 w-full md:p-14 p-6"
              sx={{
                "&:hover": {
                  boxShadow:
                    "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
                  backgroundColor: "rgba(255, 255, 255, 0.008)",
                },
              }}
            >
              <Box
                className="flex gap-3 text-white"
                sx={{
                  "@media(max-width:600px)": {
                    display: "flex",
                    flexDirection: "column",
                  },
                }}
              >
                <Image
                  src={sps}
                  alt="Rochambeau — rock-paper-scissors game screen"
                  style={{
                    width: "180px",
                    height: "100px",
                    paddingRight: "30px",
                  }}
                />
                <Box>
                  <div className="flex text-white font-bold mb-2 gap-2">
                    <p>Rochambeau</p>
                    <ArrowOutwardIcon sx={{ color: "#fff" }} />
                  </div>
                  <div>
                    <p className="mb-4">
                      Browser-based rock-paper-scissors game with simple,
                      responsive controls.
                    </p>
                    <div className="flex gap-2 p-1 my-3 flex-wrap">
                      <Button variant="outlined">Development</Button>
                      <Button variant="outlined">JavaScript</Button>
                      <Button variant="outlined">HTML</Button>
                      <Button variant="outlined">CSS</Button>
                    </div>
                  </div>
                </Box>
              </Box>
            </Box>
          </a>

          <a href="https://docket-docs.vercel.app/">
            <Box
              className="w-full md:p-14 p-6 flex flex-col items-start cursor-pointer mb-4"
              sx={{
                "&:hover": {
                  boxShadow:
                    "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
                  backgroundColor: "rgba(255, 255, 255, 0.008)",
                },
              }}
            >
              <Box
                className="flex gap-3 text-white"
                sx={{
                  "@media(max-width:600px)": {
                    display: "flex",
                    flexDirection: "column",
                  },
                }}
              >
                <Image
                  src={docs}
                  alt="Docket Docs — note-taking app editor"
                  style={{
                    width: "180px",
                    height: "100px",
                    paddingRight: "30px",
                  }}
                />
                <Box>
                  <div className="flex text-white font-bold mb-2 gap-2">
                    <p>Docket Docs</p>
                    <ArrowOutwardIcon sx={{ color: "#fff" }} />
                  </div>
                  <div>
                    <p className="mb-4">
                      Note-taking app with Framer Motion animations and a clean
                      editor experience, built with React and TypeScript.
                    </p>
                    <div className="flex gap-2 p-1 my-3 flex-wrap">
                      <Button variant="outlined">React</Button>
                      <Button variant="outlined">TypeScript</Button>
                      <Button variant="outlined">Framer Motion</Button>
                      <Button variant="outlined">Tailwind</Button>
                    </div>
                  </div>
                </Box>
              </Box>
            </Box>
          </a>

          <a href="https://noughts-and-crosses-gilt.vercel.app/">
            <Box
              className="w-full md:p-14 p-6 flex flex-col items-start cursor-pointer mb-4"
              sx={{
                "&:hover": {
                  boxShadow:
                    "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
                  backgroundColor: "rgba(255, 255, 255, 0.008)",
                },
              }}
            >
              <Box
                className="flex gap-3 text-white"
                sx={{
                  "@media(max-width:600px)": {
                    display: "flex",
                    flexDirection: "column",
                  },
                }}
              >
                <Image
                  src={tick}
                  alt="Noughts and Crosses — tic-tac-toe game board"
                  style={{
                    width: "180px",
                    height: "100px",
                    paddingRight: "30px",
                  }}
                />
                <Box>
                  <div className="flex text-white font-bold mb-2 gap-2">
                    <p>Noughts and Crosses</p>
                    <ArrowOutwardIcon sx={{ color: "#fff" }} />
                  </div>
                  <div>
                    <p className="mb-4">
                      Classic two-player Tic Tac Toe implemented in vanilla
                      JavaScript.
                    </p>
                    <div className="flex gap-2 p-1 my-3 flex-wrap">
                      <Button variant="outlined">Development</Button>
                      <Button variant="outlined">JavaScript</Button>
                      <Button variant="outlined">HTML</Button>
                      <Button variant="outlined">CSS</Button>
                    </div>
                  </div>
                </Box>
              </Box>
            </Box>
          </a>
        </Box>

        <span className=" md:p-14 md:hidden block p-6 text-white cursor-pointer font-bold">
          Technical Summary
        </span>
        <Box id="exp" className="w-full">
          <a href="https://github.com/yashasvi-shukla-me?tab=repositories">
            <Box
              className="w-full md:p-14 p-6 flex flex-col items-start cursor-pointer mb-4"
              sx={{
                "&:hover": {
                  boxShadow:
                    "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
                  backgroundColor: "rgba(255, 255, 255, 0.008)",
                  width: "100%",
                },
              }}
            >
              <Box
                className="flex gap-3 text-white"
                sx={{
                  "@media(max-width:600px)": {
                    display: "flex",
                    flexDirection: "column",
                  },
                }}
              >
                <p className="w-100 whitespace-nowrap">2019–2026</p>

                <Box>
                  <div className="flex text-white font-bold mb-2 gap-2">
                    <p>Bachelors & Masters · Developer</p>
                    <ArrowOutwardIcon sx={{ color: "#fff" }} />
                    <br></br>
                    <br></br>
                  </div>

                  <div>
                    Languages
                    <div className="flex gap-2 p-1 my-3 flex-wrap">
                      <Button variant="outlined">Python</Button>
                      <Button variant="outlined">JavaScript</Button>
                      <Button variant="outlined">SQL </Button>
                    </div>
                  </div>
                  <div>
                    Backend & APIs
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
                    Databases & MLOps
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
            </Box>
          </a>
        </Box>

        <span className=" md:p-14 md:hidden block p-6 text-white cursor-pointer font-bold">
          About
        </span>

        <Box className="w-full md:p-14 p-4 flex flex-col items-start " id="abt">
          <p style={{ color: "#7B899D" }} className="p-2">
            I completed my schooling in Lucknow, then my graduation, and am
            currently pursuing my master’s degree. I am strengthening my
            foundations in DSA, distributed backend design, and applied machine
            learning while building production-oriented platforms.
          </p>
          <p style={{ color: "#7B899D" }} className="p-2">
            I am a Full-Stack Engineer building scalable web platforms and AI
            driven systems.
          </p>
          <p style={{ color: "#7B899D" }} className="p-2">
            Outside of work, I enjoy basketball, chess, reading, and learning
            guitar.
          </p>
        </Box>

        <a href="/Yashasvi_Shukla_Resume.pdf" target="_blank">
          <Box className="w-full md:p-14 p-6 flex gap-2 mb-4">
            <p className="font-bold text-white cursor-pointer">
              View Full Resume
            </p>
            <ArrowOutwardIcon sx={{ color: "#fff" }} />
          </Box>
        </a>

        <Box className="my-30 w-full md:p-14 p-4 flex gap-6 ">
          <a href="https://github.com/yashasvi-shukla-me" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
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
        </p>
      </Grid>
    </Grid>
  );
};
export default Draken;
