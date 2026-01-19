import React from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import codeforge from "../assets/codeforge.png";
import ames from "../assets/ames.png";
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

const Draken = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xl={6} md={6} lg={6} sm={12} className="relative">
        <div className="static lg:fixed">
          <Box className="w-full md:p-14 p-4 flex flex-col items-start">
            <h1 className="text-white">Yashasvi Shukla</h1>
            <br></br>
            <h3 className="text-white">
              A Web Developer with Python toppings !
            </h3>
            <p style={{ color: "#7B899D" }}>
              I build pixel-perfect, engaging, and accessible digital
              experiences.
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

        <a href="https://github.com/yashasvi-shukla-me/CodeForge">
          <Box
            className="flex flex-col items-start cursor-pointer mb-4 w-full md:p-14 p-6"
            id="project"
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
                src={codeforge}
                alt="codeforge"
                style={{
                  width: "180px",
                  height: "100px",
                  paddingRight: "30px",
                }}
              />
              <Box>
                <div className="flex text-white font-bold mb-2 gap-2">
                  <p>CodeForge</p>
                  <ArrowOutwardIcon sx={{ color: "#fff" }} />
                </div>
                <div>
                  <p className="mb-4">
                    CodeForge is a full-stack coding and online judge platform
                    inspired by LeetCode. Here users add, run, and solve
                    programming problems in many languages with real-time code
                    execution. It uses the Judge0 API to compile and run code.
                  </p>
                  <div className="flex gap-2 p-1 my-3 flex-wrap">
                    <Button variant="outlined">React JS</Button>
                    <Button variant="outlined">JavaScript</Button>
                    <Button variant="outlined">Hooks </Button>
                  </div>
                </div>
              </Box>
            </Box>
          </Box>
        </a>

        <a href="https://ames-house-price-predict.netlify.app/">
          <Box
            className="flex flex-col items-start cursor-pointer mb-4 w-full md:p-14 p-6"
            id="project"
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
                alt="ames.png"
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
                    An end to end machine learning application that predicts
                    house prices using the Ames Housing dataset. The project
                    goes beyond a Kaggle notebook and demonstrates
                    production-ready ML inference, exposed via a FastAPI backend
                    and consumed by a browser-based frontend.
                  </p>
                  <div className="flex gap-2 p-1 my-3 flex-wrap">
                    <Button variant="outlined">React JS</Button>
                    <Button variant="outlined">JavaScript</Button>
                    <Button variant="outlined">Hooks </Button>
                  </div>
                </div>
              </Box>
            </Box>
          </Box>
        </a>

        <a href="https://nom-nom-nomad.vercel.app/">
          <Box
            className="flex flex-col items-start cursor-pointer mb-4 w-full md:p-14 p-6"
            id="project"
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
                alt="food"
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
                    Indulge effortlessly with our React-based food delivery app
                    crafted with Vite. Seamlessly navigate through login,
                    signup, payment features and cart system.
                  </p>
                  <div className="flex gap-2 p-1 my-3 flex-wrap">
                    <Button variant="outlined">React JS</Button>
                    <Button variant="outlined">JavaScript</Button>
                    <Button variant="outlined">Hooks </Button>
                  </div>
                </div>
              </Box>
            </Box>
          </Box>
        </a>

        <a href="https://gemini-clone-taupe.vercel.app/">
          <Box
            className="flex flex-col items-start cursor-pointer mb-4 w-full md:p-14 p-6"
            id="project"
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
                alt="gemini"
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
                    Ask away your questions and do not leave until satisfied. A
                    sleek, fast, and customizable Gemini protocol client crafted
                    with React and Vite.
                  </p>
                  <div className="flex gap-2 p-1 my-3 flex-wrap">
                    <Button variant="outlined">React JS</Button>
                    <Button variant="outlined">JavaScript</Button>
                    <Button variant="outlined">Bootstrap </Button>
                  </div>
                </div>
              </Box>
            </Box>
          </Box>
        </a>

        <a href="https://kanbanix.vercel.app/">
          <Box
            className="flex flex-col items-start cursor-pointer mb-4 w-full md:p-14 p-6"
            id="project"
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
                alt="todo"
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
                    It is a Kanban board with a Matrix-style background,
                    offering intuitive drag-and-drop, editing and deleting task
                    management in a terminal-like interface.
                  </p>
                  <div className="flex gap-2 p-1 my-3 flex-wrap">
                    <Button variant="outlined">HTML5</Button>
                    <Button variant="outlined">CSS3</Button>
                    <Button variant="outlined">JavaScript (ES6)</Button>
                  </div>
                </div>
              </Box>
            </Box>
          </Box>
        </a>

        <a href="https://github.com/YASHasvi-SHUkla/theChronicles">
          <Box
            className="flex flex-col items-start cursor-pointer mb-4 w-full md:p-14 p-6"
            id="project"
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
                alt="news"
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
                    Stay informed with our React-powered news app, leveraging
                    the News API and React Hooks for real-time updates. Explore
                    diverse news categories seamlessly.
                  </p>
                  <div className="flex gap-2 p-1 my-3 flex-wrap">
                    <Button variant="outlined">React JS</Button>
                    <Button variant="outlined">JavaScript</Button>
                    <Button variant="outlined">Bootstrap </Button>
                  </div>
                </div>
              </Box>
            </Box>
          </Box>
        </a>

        <a href="https://probe-five.vercel.app/">
          <Box
            className="flex flex-col items-start cursor-pointer mb-4 w-full md:p-14 p-6"
            id="project"
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
                alt="quiz"
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
                    Probe is an online MCQ Test platform in which, showing one
                    question at a time in front of the user. Including features
                    like question navigation and real time scores.
                  </p>
                  <div className="flex gap-2 p-1 my-3 flex-wrap">
                    <Button variant="outlined">React JS</Button>
                    <Button variant="outlined">JavaScript</Button>
                    <Button variant="outlined">Bootstrap </Button>
                    <Button variant="outlined">API </Button>
                  </div>
                </div>
              </Box>
            </Box>
          </Box>
        </a>

        <a href="https://rochambeau-jade.vercel.app/">
          <Box
            className="flex flex-col items-start cursor-pointer mb-4 w-full md:p-14 p-6"
            id="project"
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
                alt="sps"
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
                    Compete against the computer in a battle of wits and luck.
                    With intuitive controls and engaging gameplay.
                  </p>
                  <div className="flex gap-2 p-1 my-3 flex-wrap">
                    <Button variant="outlined">Development</Button>
                    <Button variant="outlined">JavaScript</Button>
                    <Button variant="outlined">HTML CSS </Button>
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
                alt="docs"
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
                    Experience seamless note-taking with our Docs Note app,
                    enhanced with Framer Motion (in making)
                  </p>
                  <div className="flex gap-2 p-1 my-3 flex-wrap">
                    <Button variant="outlined">React JS</Button>
                    <Button variant="outlined">TypeScript</Button>
                    <Button variant="outlined">Framer Motion </Button>
                    <Button variant="outlined">Tailwind </Button>
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
                alt="tick"
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
                    Implemented a classic online Tic Tac Toe game using merely
                    JavaScript.
                  </p>
                  <div className="flex gap-2 p-1 my-3 flex-wrap">
                    <Button variant="outlined">Development</Button>
                    <Button variant="outlined">Javascript</Button>
                    <Button variant="outlined">HTML CSS </Button>
                  </div>
                </div>
              </Box>
            </Box>
          </Box>
        </a>

        <span className=" md:p-14 md:hidden block p-6 text-white cursor-pointer font-bold">
          Skills
        </span>
        <a href="https://github.com/yyyashasviiiii?tab=repositories">
          <Box
            className="w-full md:p-14 p-6 flex flex-col items-start cursor-pointer mb-4"
            id="exp"
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
              <p className="w-100 whitespace-nowrap">2019-2026</p>

              <Box>
                <div className="flex text-white font-bold mb-2 gap-2">
                  <p>Post Grad, Grad. Developer</p>
                  <ArrowOutwardIcon sx={{ color: "#fff" }} />
                  <br></br>
                  <br></br>
                </div>

                <div>
                  Languages
                  <div className="flex gap-2 p-1 my-3 flex-wrap">
                    <Button variant="outlined">C++</Button>
                    <Button variant="outlined">JavaScript</Button>
                    <Button variant="outlined">Python </Button>
                    <Button variant="outlined">TypeScript</Button>
                  </div>
                </div>
                <div>
                  Web Technologies
                  <div className="flex gap-2 p-1 my-3 flex-wrap">
                    <Button variant="outlined">React JS</Button>
                    <Button variant="outlined">Bootstrap</Button>
                    <Button variant="outlined">Git</Button>
                    <Button variant="outlined">Node JS</Button>
                    <Button variant="outlined">Tailwind css</Button>
                  </div>
                </div>
                <div>
                  Other
                  <div className="flex gap-2 p-1 my-3 flex-wrap">
                    <Button variant="outlined">Windows</Button>
                    <Button variant="outlined">VS Code</Button>
                    <Button variant="outlined">Commamnd Line Tools </Button>
                    <Button variant="outlined">SQL</Button>
                    <Button variant="outlined">Postman</Button>
                    <Button variant="outlined">Linux</Button>
                    <Button variant="outlined">Github</Button>
                  </div>
                </div>
              </Box>
            </Box>
          </Box>
        </a>

        <span className=" md:p-14 md:hidden block p-6 text-white cursor-pointer font-bold">
          About
        </span>
        <Box
          className="w-full md:p-14 p-4 flex flex-col items-start "
          id="about"
        >
          <p style={{ color: "#7B899D" }} className="p-2">
            I completed my schooling from Lucknow then did my graduation and
            currently pursuing my masters. I am strengthening my foundations in
            DSA, distributed backend design, and applied machine learning while
            building production oriented platforms.
          </p>
          <p style={{ color: "#7B899D" }} className="p-2">
            My Engineering made me forget everything. I am a Full-Stack Engineer
            building scalable web platforms and AI driven systems.
          </p>
          <p style={{ color: "#7B899D" }} className="p-2">
            I play basketball, guitar and mouth organ. I like to play chess and
            read books.
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
          <a href="https://github.com/yashasvi-shukla-me" target="_blank">
            <GitHubIcon className="text-white cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/in/yashasvi-shukla-me/"
            target="_blank"
          >
            <LinkedInIcon className="text-white cursor-pointer" />
          </a>
          <a
            href="https://www.goodreads.com/user/show/162721733-yashasvi-shukla"
            target="_blank"
          >
            <MenuBookIcon className="text-white cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/ripoffmyshirt/" target="_blank">
            <InstagramIcon className="text-white cursor-pointer" />
          </a>
        </Box>

        <p
          className="w-full p-14 md:text-base text-sm"
          style={{ color: "#7B899D" }}
        >
          Made on Visual Studio. Deployed using (ChatGPT) on Netlify
        </p>
      </Grid>
    </Grid>
  );
};
export default Draken;
