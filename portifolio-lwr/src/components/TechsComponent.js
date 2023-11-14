import React from "react";

import image_node from "./../images/nodejs-original.svg";
import image_typescript from "./../images/typescript-original.svg";
import image_nestjs from "./../images/nestjs.svg";

function TechsComponent() {
  return (
    <div class="stacks-content">
      <h3>Techs :</h3>
      <div class="stacks">
        <ul>
          <li>
            <img src={image_node} alt="html-icon" />
          </li>
          <li>
            <img src={image_typescript} alt="typescript-icon" />
          </li>
          <li>
            <img
              align="center"
              height="30"
              width="40"
              alt="docker-icon"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg"
            />
          </li>
          <li>
            <img
              align="center"
              height="30"
              width="40"
              alt="react-icon"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
            />
          </li>
          <li>
            <img
              align="center"
              height="30"
              width="40"
              src={image_nestjs}
              alt="nestjs-icon"
            />
          </li>
          <li>
            <img
              align="center"
              height="30"
              width="40"
              alt="adonijs-icon"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/adonisjs/adonisjs-original.svg"
            />
          </li>
          <li>
            <img
              align="center"
              height="30"
              width="40"
              alt="java-icon"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
            />
          </li>
          <li>
            <img
              align="center"
              height="30"
              width="40"
              alt="mysql-icon"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-plain.svg"
            />
          </li>
          <li>
            <img
              align="center"
              height="30"
              width="40"
              alt="postgresql-icon"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg"
            />
          </li>
          <li>
            <img
              align="center"
              height="30"
              width="40"
              alt="php-icon"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
            />
          </li>
          <li>
            <img
              align="center"
              height="30"
              width="40"
              alt="flutter-icon"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg"
            />
          </li>
          <li>
            <img
              align="center"
              height="30"
              width="40"
              alt="html-icon"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
            />
          </li>
          <li>
            <img
              align="center"
              height="30"
              width="40"
              alt="css-icon"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
            />
          </li>
          <li>
            <img
              align="center"
              height="30"
              width="40"
              alt="c-icon"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
            />
          </li>
          <li>
            <img
              align="center"
              height="30"
              width="40"
              alt="nodejs-icon"
              src="https://raw.githubusercontent.com/jmnote/z-icons/master/svg/cpp.svg"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TechsComponent;
