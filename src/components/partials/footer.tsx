import { CiLinkedin, CiTwitter } from "react-icons/ci";
import { LiaGithub } from "react-icons/lia";
import { FaReact, FaNodeJs, FaVuejs } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: <CiLinkedin className="text-xl" />,
    url: "https://www.linkedin.com/in/ashsajal/",
    color: "hover:text-blue-600 dark:hover:text-blue-400",
  },
  {
    name: "Twitter",
    icon: <CiTwitter className="text-xl" />,
    url: "https://twitter.com/ashsajal1",
    color: "hover:text-sky-500 dark:hover:text-sky-400",
  },
  {
    name: "GitHub",
    icon: <LiaGithub className="text-xl" />,
    url: "https://github.com/ashsajal1",
    color: "hover:text-gray-800 dark:hover:text-gray-300",
  },
];

const projects = [
  {
    name: "React Projects",
    icon: <FaReact className="text-blue-500" />,
    url: "https://github.com/ashsajal1?tab=repositories&q=react",
    description: "Collection of React applications",
  },
  {
    name: "Vue.js Apps",
    icon: <FaVuejs className="text-green-500" />,
    url: "https://github.com/ashsajal1?tab=repositories&q=vue",
    description: "Vue.js applications and components",
  },
  {
    name: "Node.js APIs",
    icon: <FaNodeJs className="text-green-500" />,
    url: "https://github.com/ashsajal1?tab=repositories&q=node",
    description: "Backend services and APIs",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 w-full"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              About JS Practice
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              A comprehensive platform for practicing JavaScript and other
              programming languages through interactive coding challenges and
              interview questions. Developed with ❤️ by Ashfiquzzaman Sajal.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors ${link.color}`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["Home", "Interview", "Practice", "Tutorial"].map(
                (item, index) => (
                  <motion.li
                    key={item}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                  >
                    <Link
                      to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                      className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 text-sm transition-colors flex items-center"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                      {item}
                    </Link>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          {/* Projects */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h3>
            <ul className="space-y-4">
              {projects.map((project, index) => (
                <motion.li
                  key={project.name}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start space-x-3"
                  >
                    <div className="flex-shrink-0 mt-1">{project.icon}</div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {project.description}
                      </p>
                    </div>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Stay Updated
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Subscribe to get notified about new features and updates.
            </p>
            <form className="space-y-3">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {currentYear} JS Practice App. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                Contact
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
