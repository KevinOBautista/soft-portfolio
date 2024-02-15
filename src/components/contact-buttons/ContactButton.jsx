import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ContactButton = ({ icon }) => {
	const { svgPath, color, link, name, size, viewBox } = icon;
	return (
		<Link
			to={link}
			className={`p-2 text-${color}-900 bg-${color}-200 rounded-full ring-2 outline-none`}
			aria-label={name}
		>
			<motion.svg
				fill="currentColor"
				width={`${size}px`}
				height={`${size}px`}
				viewBox={`0 0 ${viewBox} ${viewBox}`}
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				className="h-full w-full"
				whileHover={{ scale: 0.9 }}
			>
				<path d={svgPath}></path>
			</motion.svg>
		</Link>
	);
};

export default ContactButton;
