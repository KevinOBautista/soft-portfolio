import React from "react";
import "./hero.scss";
import { motion } from "framer-motion";

const textVarients = {
	initial: {
		x: -500,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.1,
		},
	},
};

const Hero = () => {
	return (
		<div className="hero overflow-hidden relative h-full">
			<div className="coin flex flex-col md:flex-row p-3 md:justify-between m-3 w-full h-full items-center ">
				<motion.div
					className="title flex text-center flex-col"
					variants={textVarients}
					initial="initial"
					animate="animate"
				>
					<h4 className="flex font-semibold tracking-wider text-3xl items-center justify-center">
						Hi, I'm Kevin Bautista
					</h4>
					<motion.h2
						className="flex font-bold text-6xl tracking-widest text-zinc-50"
						variants={textVarients}
					>
						Web Developer & Graphic Designer
					</motion.h2>
					<motion.div
						className="buttons flex justify-center py-4 gap-2"
						variants={textVarients}
					>
						<motion.a
							href="#Portfolio"
							className="p-3 rounded-md bg-gradient-to-r from-indigo-500 to-indigo-600 text-slate-800 tracking-wide font-semibold shadow-md"
							id="latest"
							varients={textVarients}
							whileHover={{ scale: 0.95 }}
						>
							See latest works
						</motion.a>
						<motion.a
							href="#Contact"
							className="p-3 rounded-md bg-gradient-to-r from-indigo-500 to-indigo-600 text-slate-800 tracking-wide font-semibold shadow-md"
							varients={textVarients}
							whileHover={{ scale: 0.95 }}
						>
							Contact Me
						</motion.a>
					</motion.div>
				</motion.div>
				<div className="imageContainer flex justify-center align-center  w-full">
					<motion.img
						src="./programming.svg"
						alt=""
						whileHover={{
							scale: 0.9,
							transition: {
								repeat: Infinity,
								repeatType: "mirror",
								duration: 1,
							},
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
