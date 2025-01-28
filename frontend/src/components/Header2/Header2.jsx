import React, { useEffect } from "react";
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css";
// import "https://cdnjs.cloudflare.com/ajax/libs/inter-ui/3.19.3/inter.css";
// import gsap from "gsap";
import "./Header2.css"; // Optional, if you'd like to move the styles to a separate CSS file.

const Navigation = () => {
  useEffect(() => {
    const navElement = document.querySelector("nav");

    const activeElement = document.createElement("div");
    activeElement.classList.add("active-element");

    const getOffsetLeft = (element) => {
      const elementRect = element.getBoundingClientRect();

      return (
        elementRect.left -
        navElement.getBoundingClientRect().left +
        (elementRect.width - activeElement.offsetWidth) / 2
      );
    };

    navElement.appendChild(activeElement);

    const activeButton = navElement.querySelector("ul li.active button");

    // document.fonts.ready.then(() => {
    //   gsap.set(activeElement, {
    //     x: getOffsetLeft(activeButton),
    //   });
    //   gsap.to(activeElement, {
    //     "--active-element-show": "1",
    //     duration: 0.2,
    //   });
    // });

    navElement.querySelectorAll("ul li button").forEach((button, index) => {
      button.addEventListener("click", () => {
        const active = navElement.querySelector("ul li.active");
        const oldIndex = [...active.parentElement.children].indexOf(active);

        if (
          index === oldIndex ||
          navElement.classList.contains("before") ||
          navElement.classList.contains("after")
        ) {
          return;
        }

        const x = getOffsetLeft(button);
        const direction = index > oldIndex ? "after" : "before";
        const spacing = Math.abs(x - getOffsetLeft(active));

        navElement.classList.add(direction);
        active.classList.remove("active");
        button.parentElement.classList.add("active");

        // gsap.set(activeElement, {
        //   rotateY: direction === "before" ? "180deg" : "0deg",
        // });

        // gsap.to(activeElement, {
        //   keyframes: [
        //     {
        //       "--active-element-width": `${
        //         spacing > navElement.offsetWidth - 60
        //           ? navElement.offsetWidth - 60
        //           : spacing
        //       }px`,
        //       duration: 0.3,
        //       ease: "none",
        //       onStart: () => {
        //         createSVG(activeElement);

        //         gsap.to(activeElement, {
        //           "--active-element-opacity": 1,
        //           duration: 0.1,
        //         });
        //       },
        //     },
        //     {
        //       "--active-element-scale-x": "0",
        //       "--active-element-scale-y": ".25",
        //       "--active-element-width": "0px",
        //       duration: 0.3,
        //       onStart: () => {
        //         gsap.to(activeElement, {
        //           "--active-element-mask-position": "40%",
        //           duration: 0.5,
        //         });
        //         gsap.to(activeElement, {
        //           "--active-element-opacity": 0,
        //           delay: 0.45,
        //           duration: 0.25,
        //         });
        //       },
        //       onComplete: () => {
        //         activeElement.innerHTML = "";
        //         navElement.classList.remove("before", "after");
        //         activeElement.removeAttribute("style");
        //         gsap.set(activeElement, {
        //           x: getOffsetLeft(button),
        //           "--active-element-show": "1",
        //         });
        //       },
        //     },
        //   ],
        // });

        // gsap.to(activeElement, {
        //   x,
        //   "--active-element-strike-x": "-50%",
        //   duration: 0.6,
        //   ease: "none",
        // });
      });
    });

    const createSVG = (element) => {
      element.innerHTML = `
      <svg viewBox="0 0 116 5" preserveAspectRatio="none" class="beam">
        <path d="M0.5 2.5L113 0.534929C114.099 0.515738 115 1.40113 115 2.5C115 3.59887 114.099 4.48426 113 4.46507L0.5 2.5Z" fill="url(#gradient-beam)"/>
        <defs>
          <linearGradient id="gradient-beam" x1="2" y1="2.5" x2="115" y2="2.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="#6AAAFF"/>
            <stop offset="1" stop-color="white"/>
          </linearGradient>
        </defs>
      </svg>
      <div class="strike">
        <svg viewBox="0 0 114 12" preserveAspectRatio="none">
          <g fill="none" stroke="white" stroke-width="0.75" stroke-linecap="round">
            <path d="M113.5 6.5L109.068 8.9621..." />
          </g>
        </svg>
      </div>`;
    };
  }, []);

  return (
    <nav>
      <ul>
        <li className="active">
          <button>Animation</button>
        </li>
        <li>
          <button>Branding</button>
        </li>
        <li>
          <button>Illustration</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
