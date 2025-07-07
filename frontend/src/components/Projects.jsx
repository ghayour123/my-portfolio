// import React from "react";
// import { motion } from "framer-motion";
// import StarBackground from "./StarBackground";

// const projects = [
//   {
//     title: "Chatting App (Real-Time)",
//     type: "Featured Project",
//     description:
//       "A real-time web chatting app with authentication, Socket.io integration, and persistent chat storage using MongoDB.",
//     image: "/assets/chat-app2.png ",

//     reverse: false
//   },
//   {
//     title: "Skill Hub",
//     type: "Featured Project",
//     description:
//       "A dynamic online learning platform offering interactive courses, user enrollment, and real-time progress tracking for skill development.",
//     image: "/assets/skill-hub.PNG",
//     reverse: true
//   }
// ];

// const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="bg-[#11071F] py-20 px-4 text-white relative overflow-hidden"
//     >
//       {/* Star background behind content */}
//       <div className="absolute inset-0 z-0">
//         <StarBackground />
//       </div>

//       <motion.h2
//         className="text-4xl md:text-5xl font-bold text-center mb-12 glow-title relative z-10"
//         initial={{ opacity: 0, y: -40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         viewport={{ once: true }}
//       >
//         Personal Projects
//       </motion.h2>

//       <div className="space-y-24 max-w-6xl mx-auto relative z-10">
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             className={`flex flex-col lg:flex-row ${
//               project.reverse ? "lg:flex-row-reverse" : ""
//             } items-center justify-between
//             bg-gradient-to-br from-[#1b1029] via-[#1f0f2f] to-[#1c0c26]
//             rounded-3xl p-6 lg:p-10 gap-10 group transition-all
//             duration-300 hover:shadow-purple-500/40 shadow-xl`}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
//           >
//             {/* Image with glow */}
//             <motion.div
//               className="relative w-full lg:w-[42%] max-w-md"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//             >
//               <div className="absolute -inset-4 bg-purple-600 rounded-3xl blur-3xl opacity-30 z-0 transition duration-500 group-hover:opacity-60"></div>
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="relative rounded-xl z-10 shadow-lg object-cover transition-transform duration-500"
//               />
//             </motion.div>

//             {/* Text Content */}
//             <motion.div
//               className="lg:w-[50%] text-white space-y-4 z-10"
//               initial={{ x: project.reverse ? -50 : 50, opacity: 0 }}
//               whileInView={{ x: 0, opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <p className="text-sm text-purple-400 font-semibold uppercase">
//                 {project.type}
//               </p>
//               <h3 className="text-2xl font-bold">{project.title}</h3>
//               <p className="text-sm text-gray-300 leading-relaxed">
//                 {project.description}
//               </p>
//               <div className="flex space-x-4 pt-2">
//                 <img src="/assets/reactjs.png" className="w-6 h-6" />
//                 <img src="/assets/nodejs.png" className="w-6 h-6" />
//               </div>
//             </motion.div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;

import React, { useState } from "react";
import { motion } from "framer-motion";
import StarBackground from "./StarBackground";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const projects = [
  {
    title: "Smart Donors (Blood Donation Platform)",
    type: "Featured Project",
    description:
      "A smart blood donation management platform enabling real-time donor-recipient matching, secure registrations, and streamlined donation tracking.",
    images: [
      "/assets/smart-d2.jpg",
      "/assets/smart-d3.jpg",
      "/assets/smart-d4.jpg",
      "/assets/smart-d5.jpeg",
      "/assets/smart-d6.jpg",
      "/assets/smart-d7.jpg",
      "/assets/smart-d8.jpg"
    ],
    reverse: false
  },
  {
    title: "Skill Hub",
    type: "Featured Project",
    description:
      "A dynamic online learning platform offering interactive courses, user enrollment, and real-time progress tracking for skill development.",
    images: [
      "/assets/skill-hub.PNG",
      "/assets/skill-h2.PNG",
      "/assets/skill-h3.PNG"
    ],
    reverse: true
  },
  {
    title: "eCommerce website",
    type: "Featured Project",
    description:
      "A modern eCommerce platform offering seamless product browsing, secure checkout, and real-time order management for an enhanced shopping experience.",
    images: [
      "/assets/admin-s1.PNG",
      "/assets/admin-s2.PNG",
      "/assets/admin-s3.PNG",
      "/assets/admin-s4.PNG"
    ],
    reverse: false
  }
];

const Projects = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (images, index) => {
    const formatted = images.map((img) => ({ src: img }));
    setSelectedImages(formatted);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section
      id="projects"
      className="bg-[#11071F] py-20 px-4 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <StarBackground />
      </div>

      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-12 glow-title relative z-10"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Personal Projects
      </motion.h2>

      <div className="space-y-24 max-w-6xl mx-auto relative z-10">
        {projects.map((project, projectIndex) => (
          <motion.div
            key={projectIndex}
            className={`flex flex-col lg:flex-row ${
              project.reverse ? "lg:flex-row-reverse" : ""
            } items-center justify-between 
            bg-gradient-to-br from-[#1b1029] via-[#1f0f2f] to-[#1c0c26] 
            rounded-3xl p-6 lg:p-10 gap-10 group transition-all 
            duration-300 hover:shadow-purple-500/40 shadow-xl`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: projectIndex * 0.2
            }}
          >
            {/* Image Slider with click-to-lightbox */}
            <motion.div
              className="relative w-full lg:w-[42%] max-w-md"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute -inset-4 bg-purple-600 rounded-3xl blur-3xl opacity-30 z-0 transition duration-500 group-hover:opacity-60"></div>

              <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={10}
                slidesPerView={1}
                className="relative rounded-xl overflow-hidden z-10 shadow-lg"
              >
                {project.images.map((img, imgIndex) => (
                  <SwiperSlide key={imgIndex}>
                    <img
                      src={img}
                      alt={`${project.title} Screenshot ${imgIndex + 1}`}
                      className="rounded-xl w-full object-cover h-64 lg:h-80 cursor-pointer"
                      onClick={() => openLightbox(project.images, imgIndex)}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>

            {/* Text Content */}
            <motion.div
              className="lg:w-[50%] text-white space-y-4 z-10"
              initial={{ x: project.reverse ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-sm text-purple-400 font-semibold uppercase">
                {project.type}
              </p>
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {project.description}
              </p>
              <div className="flex space-x-4 pt-2">
                <img
                  src="/assets/reactjs.png"
                  alt="React"
                  className="w-6 h-6"
                />
                <img
                  src="/assets/nodejs.png"
                  alt="Node.js"
                  className="w-6 h-6"
                />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={selectedImages}
          index={currentImageIndex}
        />
      )}
    </section>
  );
};

export default Projects;
