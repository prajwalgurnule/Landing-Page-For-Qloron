import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

// Mobile Development Technologies
const mobileTech = [
  {
    name: "React Native",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
    bgColor: "#FFFFFF",
    textColor: "#61DAFB"
  },
  {
    name: "Java",
    image: "https://qloron.com/assets/java-B1cugfie.svg",
    bgColor: "#FFFFFF",
    textColor: "#049EF4"
  },
  {
    name: "Kotlin",
    image: "https://qloron.com/assets/kotlin-DU8Eh2UU.svg",
    bgColor: "#FFFFFF",
    textColor: "#339933"
  },
  {
    name: "Flutter",
    image: "https://qloron.com/assets/flutter-BGBtcDqw.svg",
    bgColor: "#FFFFFF",
    textColor: "#02569B"
  },
  {
    name: "Ionic",
    image: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='50'%20height='50'%20viewBox='0%200%2050%2050'%20fill='none'%3e%3cpath%20d='M50%2025C50%2038.8071%2038.8071%2050%2025%2050C11.1929%2050%200%2038.8071%200%2025C0%2011.1929%2011.1929%200%2025%200C38.8071%200%2050%2011.1929%2050%2025ZM4.47619%2025C4.47619%2036.335%2013.665%2045.5238%2025%2045.5238C36.335%2045.5238%2045.5238%2036.335%2045.5238%2025C45.5238%2013.665%2036.335%204.47619%2025%204.47619C13.665%204.47619%204.47619%2013.665%204.47619%2025Z'%20fill='%23478AFF'/%3e%3ccircle%20cx='24.9998'%20cy='25.0001'%20r='8.33333'%20fill='%23478AFF'/%3e%3ccircle%20cx='40.0002'%20cy='7.49992'%20r='3.66667'%20fill='%23478AFF'%20stroke='white'/%3e%3c/svg%3e",
    bgColor: "#FFFFFF",
    textColor: "#FFCA28"
  },
  {
    name: "Dart",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Dart-logo.png/1024px-Dart-logo.png",
    bgColor: "#FFFFFF",
    textColor: "#0083C9"
  }
];

// Web Development Technologies
const webTech = [
  {
    name: "HTML",
    image: "https://qloron.com/assets/html-BYrraOFD.svg",
    bgColor: "#FFFFFF",
    textColor: "#E44D26"
  },
  {
    name: "CSS",
    image: "https://qloron.com/assets/css-CcNQHZyi.svg",
    bgColor: "#FFFFFF",
    textColor: "#264DE4"
  },
  {
    name: "JavaScript",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png",
    bgColor: "#FFFFFF",
    textColor: "#F0DB4F"
  },
  {
    name: "React",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
    bgColor: "#FFFFFF",
    textColor: "#61DAFB"
  },
  {
    name: "Angular",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png",
    bgColor: "#FFFFFF",
    textColor: "#DD0031"
  },
  {
    name: "TypeScript",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
    bgColor: "#FFFFFF",
    textColor: "#3178C6"
  },
  {
    name: "Material Design",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Material_Design_Logo.svg/1200px-Google_Material_Design_Logo.svg.png",
    bgColor: "#FFFFFF",
    textColor: "#757575"
  },
  {
    name: ".NET",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1200px-.NET_Core_Logo.svg.png",
    bgColor: "#FFFFFF",
    textColor: "#512BD4"
  }
];

// Desktop Development Technologies
const desktopTech = [
  {
    name: "Angular",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png",
    bgColor: "#FFFFFF",
    textColor: "#B52E31"
  },
  {
    name: "Java",
    image: "https://qloron.com/assets/java-B1cugfie.svg",
    bgColor: "#FFFFFF",
    textColor: "#007396"
  },
  {
    name: "React",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
    bgColor: "#FFFFFF",
    textColor: "#61DAFB"
  },
  {
    name: ".NET",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1200px-.NET_Core_Logo.svg.png",
    bgColor: "#FFFFFF",
    textColor: "#512BD4"
  }
];

// Backend Development Technologies
const backendTech = [
  {
    name: "Node.js",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png",
    bgColor: "#FFFFFF",
    textColor: "#339933"
  },
  {
    name: "PHP",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png",
    bgColor: "#FFFFFF",
    textColor: "#777BB4"
  },
  {
    name: "Python",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
    bgColor: "#FFFFFF",
    textColor: "#3776AB"
  },
  {
    name: "SQL",
    image: "https://qloron.com/assets/sql-ghJHJqla.svg",
    bgColor: "#FFFFFF",
    textColor: "#336791"
  },
  {
    name: "MongoDB",
    image: "https://qloron.com/assets/mongodb-BhtmPpQi.svg",
    bgColor: "#FFFFFF",
    textColor: "#47A248"
  },
  {
    name: "Java",
    image: "https://qloron.com/assets/java-B1cugfie.svg",
    bgColor: "#FFFFFF",
    textColor: "#007396"
  },
  {
    name: ".NET",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1200px-.NET_Core_Logo.svg.png",
    bgColor: "#FFFFFF",
    textColor: "#512BD4"
  },
  {
    name: "Spring Boot",
    image: "https://www.clipartmax.com/png/middle/117-1171017_spring-logo-spring-framework-logo.png",
    bgColor: "#FFFFFF",
    textColor: "#339933"
  }
];

// Technology Card Component
const TechCard = ({ tech }) => {
  return (
    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={250}>
      <motion.div
        whileHover={{ scale: 1.07 }}
        className="relative flex flex-col items-center p-6 rounded-2xl border border-gray-200 hover:shadow-2xl transition-all duration-300 backdrop-blur-md bg-white/30 hover:bg-white/60"
        style={{
          backgroundColor: `${tech.bgColor}20`,
        }}
      >
        {/* Glow effect */}
        {/* <div
          className="absolute -z-10 w-full h-full rounded-2xl"
          style={{
            background: `radial-gradient(circle at center, ${tech.textColor}22 0%, transparent 70%)`
          }}
        ></div> */}

        {/* Logo */}
        <div className="w-20 h-20 mb-4 bg-white rounded-full flex items-center justify-center p-2 shadow-md">
          <img
            src={tech.image}
            alt={tech.name}
            className="w-full h-full object-contain"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE5IDEzSDEzVjE5SDE1VjE1SDE5VjEzTTIxIDIxSDNWM0gyMVYyMU0xOSA5VjVIMTVWOUgxOU0xMyA5VjVIOVY5SDEzTTkgMTVWMTlIMTNWMTVIOVoiLz48L3N2Zz4=";
            }}
          />
        </div>

        {/* Name */}
        <span
          className="text-sm px-3 py-1 rounded-full font-semibold tracking-wide uppercase shadow-sm"
          style={{
            color: tech.textColor,
            backgroundColor: "#ffffffaa",
            backdropFilter: "blur(4px)"
          }}
        >
          {tech.name}
        </span>
      </motion.div>
    </Tilt>
  );
};

// Export all components and data
export { TechCard, mobileTech, webTech, desktopTech, backendTech };