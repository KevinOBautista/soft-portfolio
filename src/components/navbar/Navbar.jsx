import React from "react";
import { motion } from "framer-motion";
import ContactButtonList from "../contact-buttons/ContactButtonList";

const Navbar = () => {
	return (
		<div className="navbar flex w-full justify-between py-4 px-2 sm:px-8 lg:px-16 bg-zinc-700 items-center">
			<motion.h2
				className="text-indigo-500 text-xl font-medium text-2xl tracking-widest"
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
			>
				KEVIN BAUTISTA
			</motion.h2>
			<ContactButtonList size="20" />
		</div>
	);
};

export default Navbar;
