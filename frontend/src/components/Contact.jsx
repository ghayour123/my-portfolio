import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StarBackground from "./StarBackground";

const Contact = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setIsSuccess(false);

    const serviceId = "service_q051p8g";
    const templateAdmin = "template_k3w5g7x";
    const templateReply = "template_1fep5cc";
    const publicKey = "TntW-OI0DKxxxPAwl";

    const form = formRef.current;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    emailjs
      .send(serviceId, templateAdmin, { name, email, message }, publicKey)
      .then(() => {
        emailjs.send(
          serviceId,
          templateReply,
          { name, email, message },
          publicKey
        );

        toast.success(
          <div className="flex items-center gap-2">
            <span className="text-green-400 text-xl">✅</span>
            <span>Message sent successfully!</span>
          </div>
        );

        setIsSending(false);
        setIsSuccess(true);
        form.reset();
        setTimeout(() => setIsSuccess(false), 3000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast.error(
          <div className="flex items-center gap-2">
            <span className="text-red-500 text-xl">❌</span>
            <span>Something went wrong. Try again!</span>
          </div>
        );
        setIsSending(false);
      });
  };

  return (
    <section
      id="contact"
      className="relative py-20 bg-[#11071F] text-white px-6 overflow-hidden z-10"
    >
      {/* 🌌 Starry Background */}
      <div className="absolute inset-0 z-0">
        <StarBackground />
      </div>

      <style>
        {`
          input:-webkit-autofill,
          textarea:-webkit-autofill {
            transition: background-color 5000s ease-in-out 0s;
            -webkit-text-fill-color: white !important;
            box-shadow: 0 0 0px 1000px #100724 inset !important;
          }

          @keyframes pop {
            0% {
              transform: scale(0.8);
              opacity: 0;
            }
            50% {
              transform: scale(1.1);
              opacity: 1;
            }
            100% {
              transform: scale(1);
            }
          }
        `}
      </style>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 glow-title"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>

        <motion.p
          className="text-gray-400 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Have a project or question? Let’s talk. Drop a message below and I'll
          get back to you as soon as possible.
        </motion.p>

        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-[#1c0f33] p-8 rounded-2xl shadow-xl max-w-xl mx-auto space-y-6 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Aura glow */}
          <div className="absolute -inset-1.5 rounded-3xl bg-purple-500 blur-2xl opacity-10 z-0"></div>

          <div className="relative z-10">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full bg-[#100724] p-4 rounded-lg text-white placeholder-gray-400 border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div className="relative z-10">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full bg-[#100724] p-4 rounded-lg text-white placeholder-gray-400 border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div className="relative z-10">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className="w-full bg-[#100724] p-4 rounded-lg text-white placeholder-gray-400 border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            ></textarea>
          </div>

          <div className="relative z-10">
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 transition-all w-full py-3 rounded-lg font-semibold flex justify-center items-center"
              disabled={isSending}
            >
              {isSending ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : isSuccess ? (
                <motion.svg
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="w-6 h-6 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  style={{ animation: "pop 0.5s ease" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </motion.svg>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </motion.form>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
};

export default Contact;
