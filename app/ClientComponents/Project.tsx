"use client";
import { useState, useContext } from "react";
import { UserContext } from "../page";
import ScrollIntoView from "react-scroll-into-view";
export default function Project() {
  const [hovered, setHovered] = useState<boolean>(false);
  const { state, dispatch } = useContext(UserContext);
  return (
    <ScrollIntoView selector="#pro">
      <div
        className="flex content-center mb-5"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => dispatch({ type: "pro", payload: "pro" })}
      >
        <hr
          className="text-white my-2 mr-3"
          style={{
            width: hovered ? "80px" : "60px",
            transition: "width 0.3s",
            opacity: state.count === "pro" ? "1" : "0.3",
          }}
        />
        <span
          className="text-white cursor-pointer font-bold"
          style={{ opacity: state.count === "pro" ? "1" : "0.3" }}
        >
          Projects
        </span>
      </div>
    </ScrollIntoView>
  );
}
