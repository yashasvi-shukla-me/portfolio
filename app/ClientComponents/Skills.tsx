"use client";
import ScrollIntoView from "react-scroll-into-view";
import { useContext, useState } from "react";
import { UserContext } from "../page";

export default function Skills() {
  const [hovered, setHovered] = useState<boolean>(false);
  const { state, dispatch } = useContext(UserContext);

  return (
    <ScrollIntoView selector="#skills">
      <div
        className="flex content-center mb-5"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => dispatch({ type: "skills", payload: "skills" })}
      >
        <hr
          className="text-white my-2 mr-3"
          style={{
            width: hovered ? "80px" : "60px",
            transition: "width 0.3s",
            opacity: state.count === "skills" ? "1" : "0.3",
          }}
        />
        <span
          className="text-white cursor-pointer font-bold"
          style={{ opacity: state.count === "skills" ? "1" : "0.3" }}
        >
          Skills
        </span>
      </div>
    </ScrollIntoView>
  );
}
