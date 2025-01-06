import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa';

import Link from "next/link";

const mediaLinks = [
  {
    icon: <FaGithub />,
    path: "https://github.com/AbisAbz"
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/abis-v/"
  },
  {
    icon: <FaWhatsapp />,
    path: "https://wa.me/7034709529"
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/abis_abz/"  // Replace 'yourInstagramHandle' with your actual Instagram username
  }
];


const Social = ({containerStyles,iconStyles}) => {
    return (
        <div className={containerStyles}>
            {mediaLinks.map((item,index)=>(
                 <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link> 
            ))}
        </div>
    )
}

export default Social
