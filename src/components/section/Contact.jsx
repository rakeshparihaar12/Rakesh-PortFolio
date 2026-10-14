
import { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() =>
        alert("Oops! Something went wrong. Please try again.")
      );
  };

  const contactDetails = [
    {
      label: "Email",
      value: "rakeshtailor725@gmail.com",
      href: "mailto:rakeshtailor725@gmail.com",
    },
    {
      label: "Phone",
      value: "+91 9549325573",
      href: "tel:+919549325573",
    },
    {
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/rakeshkumar360/",
    },
    {
      label: "GitHub",
      value: "View my projects",
      href: "https://github.com/rakeshparihaar12/",
    }
    // {
    //   label: "LeetCode",
    //   value: "View my solutions",
    //   href: "https://leetcode.com/u/rakesh_kumar_12/",
    // },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <RevealOnScroll>
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12
            bg-linear-to-r from-blue-500 to-cyan-400
            bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

            {/* LEFT: Profile and Contact Details */}
            <div className="w-full min-w-0 rounded-2xl border
              border-white/10 bg-white/5 p-6 sm:p-8">

              <div className="flex flex-col items-center text-center mb-8">
                <img
                  src="/profiolepic.png"
                  alt="PFP"
                  className="w-28 h-28 rounded-full object-cover
                    border-2 border-blue-500 mb-4"
                />

                <h3 className="text-2xl font-bold text-white">
                  Rakesh Kumar
                </h3>

                <p className="text-gray-400 mt-2">
                  Aspiring Software Developer | MERN Stack Developer
                </p>

                <a
                  href="/Rakesh_Kumar_Resume.pdf"
                  download
                  className="mt-5 inline-flex items-center justify-center
                    rounded-lg bg-blue-500 px-5 py-3 text-white
                    font-medium transition hover:bg-blue-600
                    hover:-translate-y-0.5"
                >
                  Download CV
                </a>
              </div>

              <div className="space-y-3">
                {contactDetails.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={
                      ["LinkedIn", "GitHub", "LeetCode"].includes(item.label)
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      ["LinkedIn", "GitHub", "LeetCode"].includes(item.label)
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex flex-col sm:flex-row sm:items-center
                      sm:justify-between gap-1 rounded-lg border
                      border-white/10 bg-black/20 p-4 transition
                      hover:border-blue-500/60 hover:bg-blue-500/10
                      wrap-break-word"
                  >
                    <span className="text-gray-400 text-sm">
                      {item.label}
                    </span>

                    <span className="text-blue-400 text-sm
                      font-medium break-all">
                      {item.value}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* RIGHT: Existing EmailJS Contact Form */}
            <div className="w-full min-w-0 rounded-2xl border
              border-white/10 bg-white/5 p-6 sm:p-8">

              <h3 className="text-2xl font-bold text-white mb-2">
                Send Me a Message
              </h3>

              <p className="text-gray-400 mb-6">
                Have a project or opportunity in mind? Let's talk.
              </p>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-gray-300 mb-2"
                  >
                    Your Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Enter your name"
                    className="w-full min-w-0 bg-white/5 border
                      border-white/10 rounded-lg px-4 py-3 text-white
                      transition focus:outline-none focus:border-blue-500
                      focus:bg-blue-500/5"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-gray-300 mb-2"
                  >
                    Your Email
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="example@gmail.com"
                    className="w-full min-w-0 bg-white/5 border
                      border-white/10 rounded-lg px-4 py-3 text-white
                      transition focus:outline-none focus:border-blue-500
                      focus:bg-blue-500/5"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-gray-300 mb-2"
                  >
                    Your Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={5}
                    placeholder="Write your message..."
                    className="w-full min-w-0 bg-white/5 border
                      border-white/10 rounded-lg px-4 py-3 text-white
                      transition focus:outline-none focus:border-blue-500
                      focus:bg-blue-500/5 resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-3 px-6
                    rounded-lg font-medium transition
                    hover:-translate-y-0.5
                    hover:bg-blue-600
                    hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
