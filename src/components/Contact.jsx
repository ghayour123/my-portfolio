import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { useMotion } from "../lib/motion";

const socials = [
  {
    label: "Email",
    value: "ghayourbaloch12@gmail.com",
    href: "mailto:ghayourbaloch12@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    label: "Phone",
    value: "+92 3057147879",
    href: "tel:+923057147879",
    icon: <FaPhoneAlt />,
  },
  {
    label: "GitHub",
    value: "github.com/ghayour123",
    href: "https://github.com/ghayour123",
    icon: <FaGithub />,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ghayour-mehdi",
    href: "https://linkedin.com/in/ghayour-mehdi",
    icon: <FaLinkedin />,
  },
];

const fields = [
  {
    id: "name",
    label: "Name",
    type: "text",
    placeholder: "Your name",
    autoComplete: "name",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "your.email@example.com",
    autoComplete: "email",
  },
];

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const { reveal } = useMotion();

  const validateForm = () => {
    const next = {};
    if (!formData.name.trim()) next.name = "Name is required";
    else if (formData.name.trim().length < 2) next.name = "Name must be at least 2 characters";
    if (!formData.email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      next.email = "Please enter a valid email address";
    if (!formData.message.trim()) next.message = "Message is required";
    else if (formData.message.trim().length < 10)
      next.message = "Message must be at least 10 characters";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const sendEmail = (event) => {
    event.preventDefault();
    if (!validateForm()) {
      toast.error("Please fix the errors below");
      return;
    }

    setIsSending(true);
    setIsSuccess(false);

    const serviceId = "service_sh5ve64";
    const templateAdmin = "template_k3w5g7x";
    const templateReply = "template_1fep5cc";
    const publicKey = "TntW-OI0DKxxxPAwl";
    const { name, email, message } = formData;

    emailjs
      .send(serviceId, templateAdmin, { name, email, message }, publicKey)
      .then(() => {
        emailjs.send(serviceId, templateReply, { name, email, message }, publicKey);
        toast.success("Message sent successfully!");
        setIsSending(false);
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
        setTimeout(() => setIsSuccess(false), 3000);
      })
      .catch(() => {
        toast.error("Something went wrong. Try again!");
        setIsSending(false);
      });
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative border-t border-line bg-ink">
      <div className="shell section">
        <SectionHeading
          id="contact-heading"
          index="06"
          kicker="Contact"
          title="Let's build something."
          intro="Have a project in mind? Send a message and I'll get back to you."
        />

        <div className="mt-14 grid gap-14 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          <motion.div {...reveal(0.05)} className="min-w-0 lg:col-span-5">
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 border-b border-line py-5"
              >
                <span className="icon-btn flex h-11 w-11 shrink-0 items-center justify-center border border-line text-mist transition-colors duration-300 group-hover:border-gold group-hover:text-gold">
                  {item.icon}
                </span>
                <span className="min-w-0">
                  <span className="meta-label">{item.label}</span>
                  <span className="mt-1 block break-all text-paper transition-colors duration-300 group-hover:text-gold sm:break-normal">
                    {item.value}
                  </span>
                </span>
              </a>
            ))}
            <p className="pt-6 text-sm leading-relaxed text-fog">
              Based in Rawalpindi, Pakistan
              <span className="mx-2 text-gold">/</span>
              Typically replies within 24 hours.
            </p>
          </motion.div>

          <motion.form
            noValidate
            onSubmit={sendEmail}
            {...reveal(0.08)}
            aria-label="Contact form"
            aria-busy={isSending}
            className="min-w-0 lg:col-span-6 lg:col-start-7 lg:border-l lg:border-line lg:pl-12"
          >
            <div className="space-y-7">
              {fields.map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="label">
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    name={field.id}
                    value={formData[field.id]}
                    onChange={handleInputChange}
                    placeholder={field.placeholder}
                    autoComplete={field.autoComplete}
                    disabled={isSending}
                    aria-invalid={Boolean(errors[field.id])}
                    aria-describedby={errors[field.id] ? `${field.id}-error` : undefined}
                    className="field"
                  />
                  {errors[field.id] && (
                    <p id={`${field.id}-error`} role="alert" className="field-error">
                      {errors[field.id]}
                    </p>
                  )}
                </div>
              ))}

              <div>
                <label htmlFor="message" className="label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  disabled={isSending}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className="field"
                />
                {errors.message && (
                  <p id="message-error" role="alert" className="field-error">
                    {errors.message}
                  </p>
                )}
              </div>

              <button type="submit" disabled={isSending} className="btn btn-fill w-full sm:w-auto">
                {isSending ? "Sending..." : isSuccess ? "Sent" : "Send Message"}
              </button>
            </div>
          </motion.form>
        </div>
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
