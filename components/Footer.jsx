import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
const Footer = () => {
  return (
    <footer className="text-black p-4 mt-8 text-center">
      <div className="flex justify-center items-center">
        <a
          href="https://github.com/amuuo-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 hover:text-blue-800"
        >
          <FaGithub className="text-2xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/anthony-muuo/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2  hover:text-blue-800"
        >
          <FaLinkedinIn className="text-2xl" />
        </a>
        <a
          href="https://amuuo-dev.hashnode.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2  hover:text-blue-800"
        >
          <SiHashnode className="text-2xl" />
        </a>
      </div>
      <div className="mt-2">&copy; {new Date().getFullYear()} Anthony Muuo</div>
    </footer>
  );
};

export default Footer;
