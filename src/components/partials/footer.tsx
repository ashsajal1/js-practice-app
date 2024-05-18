import { CiLinkedin, CiTwitter } from "react-icons/ci";
import { LiaGithub } from "react-icons/lia";
import { motion } from 'framer-motion'
export default function Footer() {
  return (
    <motion.footer
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{
        type:'spring',
        duration: 0.5,
        delay: 0
      }}
      className="flex flex-col items-start justify-between p-4 border-t dark:bg-black dark:text-white dark:border-gray-700 w-full">

      <div className="flex w-full justify-between flex-col md:flex-row gap-6">
        <div>
          <h3 className="font-extrabold g-text">Follow us</h3>
          <ul>
            <li><a target="blink" className="flex items-center gap-1" href="https://www.linkedin.com/in/ashsajal/"><CiLinkedin /> Linkedin</a></li>
            <li><a target="blink" className="flex items-center gap-1" href="https://twitter.com/ashsajal1"><CiTwitter /> Twitter</a></li>
            <li><a target="blink" className="flex items-center gap-1" href="https://github.com/ashsajal1"><LiaGithub /> Twitter</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-extrabold g-text">More Projects</h3>
          <ul>
            <li className=""><a href="#">Image Classification</a></li>
            <li><a href="#">Image Classification</a></li>
            <li><a href="#">Image Classification</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-extrabold g-text">More Projects</h3>
          <ul>
            <li className=""><a href="#">Image Classification</a></li>
            <li><a href="#">Image Classification</a></li>
            <li><a href="#">Image Classification</a></li>
          </ul>
        </div>
      </div>

      <p className="text-center w-full mt-6">All rights reserved &copy; {new Date().getFullYear()}</p>
    </motion.footer>
  )
}
