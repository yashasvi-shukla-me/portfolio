"use client";
import ScrollIntoView from "react-scroll-into-view";
import { useState, useContext } from "react";
import { UserContext } from "../page";
export default function About() {
  const [hovered, setHovered] = useState<boolean>(false);

  const { state, dispatch } = useContext(UserContext);

  console.log(`state is ${state.count}`);

  return (
    <ScrollIntoView selector="#abt">
      <div
        className="flex content-center mb-5"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => dispatch({ type: "abt", payload: "abt" })}
      >
        <hr
          className="text-white my-2 mr-3"
          style={{
            width: hovered ? "80px" : "60px",
            transition: "width 0.3s",
            opacity: state.count === "abt" ? "1" : "0.3",
          }}
        />
        <span
          className="text-white cursor-pointer font-bold"
          style={{ opacity: state.count === "abt" ? "1" : "0.3" }}
        >
          About
        </span>
      </div>
    </ScrollIntoView>
  );
}
