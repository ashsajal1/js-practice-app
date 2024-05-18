import { CiLinkedin, CiTwitter } from "react-icons/ci";
import { LiaGithub } from "react-icons/lia";
import { motion } from 'framer-motion'
export default function Footer() {
  return (
    <motion.footer
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{
        type: 'spring',
        duration: 0.5,
        delay: 0
      }}
      className="flex flex-col gap-6 items-start justify-between p-4 border-t dark:bg-black dark:text-white dark:border-gray-700 w-full">

      <div className="flex w-full justify-between flex-col md:flex-row gap-6">
        <div className="md:w-1/3 w-3/4">
          <h3 className="font-extrabold g-text">About</h3>
          <p className="">The project is built as a side project by Ashfiquzzaman Sajal. It is open source and you can contrubute by adding new questions or enhance the UI design.</p>
        </div>

        <div className="w-1/3">
          <h3 className="font-extrabold g-text">Follow us</h3>
          <ul>
            <li><a target="blink" className="flex items-center gap-1" href="https://www.linkedin.com/in/ashsajal/"><CiLinkedin /> Linkedin</a></li>
            <li><a target="blink" className="flex items-center gap-1" href="https://twitter.com/ashsajal1"><CiTwitter /> Twitter</a></li>
            <li><a target="blink" className="flex items-center gap-1" href="https://github.com/ashsajal1"><LiaGithub /> Github</a></li>
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
