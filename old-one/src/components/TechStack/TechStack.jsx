import React from "react";
import "./TechStack.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaPhp,
  FaLaravel,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import {
  SiMysql,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

import { DiLinux } from "react-icons/di";
import { FaTools } from "react-icons/fa";

function TechStack() {
  return (
    <div className="techStack">
      <h2 className="techStackTitle">
        <FaTools className="iconTitle" />
        Technologies & Outils
      </h2>

      <div className="techCategory">
        <h3>Langages</h3>
        <div className="techIcons">
          <div className="techItem">
            <FaHtml5 className="icon" /> HTML
          </div>
          <div className="techItem">
            <FaCss3Alt className="icon" /> CSS
          </div>
          <div className="techItem">
            <FaJs className="icon" /> JavaScript
          </div>
          <div className="techItem">
            <FaPython className="icon" /> Python
          </div>
          <div className="techItem">
            <FaPhp className="icon" /> PHP
          </div>
        </div>
      </div>

      <div className="techCategory">
        <h3>Frameworks & Librairies</h3>
        <div className="techIcons">
          <div className="techItem">
            <FaReact className="icon" /> React
          </div>
          <div className="techItem">
            <FaLaravel className="icon" /> Laravel
          </div>
          <div className="techItem">
            <FaNodeJs className="icon" /> Node.js
          </div>
        </div>
      </div>

      <div className="techCategory">
        <h3>Bases de données</h3>
        <div className="techIcons">
          <div className="techItem">
            <SiMysql className="icon" /> MySQL
          </div>
          <div className="techItem">
            <SiMongodb className="icon" /> MongoDB
          </div>
          <div className="techItem">
            <SiPostgresql className="icon" /> PostgreSQL
          </div>
        </div>
      </div>

      <div className="techCategory">
        <h3>Outils</h3>
        <div className="techIcons">
          <div className="techItem">
            <FaGitAlt className="icon" /> Git
          </div>
          <div className="techItem">
            <FaDocker className="icon" /> Docker
          </div>
          <div className="techItem">
            <DiLinux className="icon" /> Linux
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
