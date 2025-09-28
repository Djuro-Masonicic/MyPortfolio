import Link from "next/link";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebook
} from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";


const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/Djuro-Masonicic",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/djuro-masonicic",
  },
  // {
  //   icon: <FaInstagram />,
  //   path: "https://www.instagram.com/djuro_masonicic",
  // },
  // {
  //   icon: <FaFacebook />,
  //   path: "https://www.facebook.com/djuro.masonicic",
  // },
  {
    icon: <FaUpwork />,
    path: "https://www.upwork.com/freelancers/djuromasonicic",
  }
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            target="_blank"
            className={iconStyles}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
