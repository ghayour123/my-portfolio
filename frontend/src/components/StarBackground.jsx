// import React, { useEffect, useState } from "react";

// const StarBackground = () => {
//   const [shootingStars, setShootingStars] = useState([]);

//   const directions = ["top-left", "top-right", "bottom-left", "bottom-right"];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const id = Date.now();
//       const direction =
//         directions[Math.floor(Math.random() * directions.length)];
//       const position = getPositionByDirection(direction);

//       setShootingStars((prev) => [...prev, { id, ...position, direction }]);

//       setTimeout(() => {
//         setShootingStars((prev) => prev.filter((star) => star.id !== id));
//       }, 1200);
//     }, 1800);

//     return () => clearInterval(interval);
//   }, []);

//   const getPositionByDirection = (direction) => {
//     const top = Math.random() * window.innerHeight;
//     const left = Math.random() * window.innerWidth;
//     switch (direction) {
//       case "top-left":
//         return { top, left };
//       case "top-right":
//         return { top, left };
//       case "bottom-left":
//         return { top, left };
//       case "bottom-right":
//         return { top, left };
//       default:
//         return { top, left };
//     }
//   };

//   return (
//     <div className="absolute inset-0 z-0 overflow-hidden">
//       {/* Static Stars */}
//       {[...Array(100)].map((_, i) => (
//         <div
//           key={i}
//           className="absolute w-[2px] h-[2px] bg-white rounded-full"
//           style={{
//             top: `${Math.random() * 100}%`,
//             left: `${Math.random() * 100}%`,
//             opacity: Math.random(),
//             animation: "twinkle 2s infinite ease-in-out"
//           }}
//         />
//       ))}

//       {/* Shooting Stars from all directions */}
//       {shootingStars.map((star) => (
//         <div
//           key={star.id}
//           className={`shooting-star shooting-${star.direction}`}
//           style={{ top: star.top, left: star.left }}
//         />
//       ))}
//     </div>
//   );
// };

// export default StarBackground;
import React, { useEffect, useRef, useState } from "react";

const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);
  const directions = ["top-left", "top-right", "bottom-left", "bottom-right"];

  useEffect(() => {
    // Generate static stars only once
    const totalStars = window.innerWidth < 768 ? 40 : 100;
    const generatedStars = [...Array(totalStars)].map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      opacity: Math.random()
    }));
    setStars(generatedStars);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      const direction =
        directions[Math.floor(Math.random() * directions.length)];
      const position = {
        top: Math.random() * window.innerHeight,
        left: Math.random() * window.innerWidth
      };

      setShootingStars((prev) => [...prev, { id, ...position, direction }]);

      setTimeout(() => {
        setShootingStars((prev) => prev.filter((star) => star.id !== id));
      }, 1200);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      style={{ willChange: "transform" }}
    >
      {/* Static Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute w-[2px] h-[2px] bg-white rounded-full"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            opacity: star.opacity,
            animation: "twinkle 2s infinite ease-in-out"
          }}
        />
      ))}

      {/* Shooting Stars */}
      {shootingStars.map((star) => (
        <div
          key={star.id}
          className={`shooting-star shooting-${star.direction}`}
          style={{ top: star.top, left: star.left }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
