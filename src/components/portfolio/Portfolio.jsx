import React from "react";
import Project from "./project";
import { motion } from "framer-motion";

const portfolioVarient = {
	initial: {
		x: -500,
		y: 100,
		opacity: 0,
	},
	animate: {
		x: 0,
		y: 0,
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.1,
		},
	},
};

const Portfolio = () => {
	return (
		<motion.div
			className="portfolio flex flex-col w-full items-center"
			variants={portfolioVarient}
			initial="initial"
			whileInView="animate"
		>
			<motion.h2
				className="tracking-widest text-2xl p-4 font-semibold"
				variants={portfolioVarient}
			>
				CREATIONS:
			</motion.h2>
			<div className="projects flex flex-wrap gap-8 sm:gap-10 justify-center">
				<Project
					id={1}
					title="Trees"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem est fugiat, eum maxime aut numquam expedita velit amet molestias quibusdam, distinctio totam assumenda doloribus quae fuga voluptate. Eveniet, nihil!"
					img="https://raw.githubusercontent.com/KevinOBautista/restaurant-reservation/main/assets/dashboard.PNG"
					link="#Contact"
				/>
				<Project
					id={2}
					title="Test2"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem est fugiat, eum maxime aut numquam expedita velit amet molestias quibusdam, distinctio totam assumenda doloribus quae fuga voluptate. Eveniet, nihil!"
					img="https://raw.githubusercontent.com/KevinOBautista/restaurant-reservation/main/assets/dashboard.PNG"
					link="#test"
				/>
				<Project
					id={3}
					title="Test3"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem est fugiat, eum maxime aut numquam expedita velit amet molestias quibusdam, distinctio totam assumenda doloribus quae fuga voluptate. Eveniet, nihil!"
					img="https://raw.githubusercontent.com/KevinOBautista/restaurant-reservation/main/assets/dashboard.PNG"
					link="#test"
				/>
				<Project
					id={4}
					title="Test4"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem est fugiat, eum maxime aut numquam expedita velit amet molestias quibusdam, distinctio totam assumenda doloribus quae fuga voluptate. Eveniet, nihil!"
					img="https://raw.githubusercontent.com/KevinOBautista/restaurant-reservation/main/assets/dashboard.PNG"
					link="#test"
				/>
				<Project
					id={5}
					title="Test5"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem est fugiat, eum maxime aut numquam expedita velit amet molestias quibusdam, distinctio totam assumenda doloribus quae fuga voluptate. Eveniet, nihil!"
					img="https://raw.githubusercontent.com/KevinOBautista/restaurant-reservation/main/assets/dashboard.PNG"
					link="#test"
				/>
				<Project
					id={6}
					title="Test6"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem est fugiat, eum maxime aut numquam expedita velit amet molestias quibusdam, distinctio totam assumenda doloribus quae fuga voluptate. Eveniet, nihil!"
					img="https://raw.githubusercontent.com/KevinOBautista/restaurant-reservation/main/assets/dashboard.PNG"
					link="#test"
				/>
				<Project
					id={7}
					title="Test7"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem est fugiat, eum maxime aut numquam expedita velit amet molestias quibusdam, distinctio totam assumenda doloribus quae fuga voluptate. Eveniet, nihil!"
					img="https://raw.githubusercontent.com/KevinOBautista/restaurant-reservation/main/assets/dashboard.PNG"
					link="#test"
				/>
				<Project
					id={8}
					title="Test8"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem est fugiat, eum maxime aut numquam expedita velit amet molestias quibusdam, distinctio totam assumenda doloribus quae fuga voluptate. Eveniet, nihil!"
					img="https://raw.githubusercontent.com/KevinOBautista/restaurant-reservation/main/assets/dashboard.PNG"
					link="#test"
				/>
			</div>
		</motion.div>
	);
};

export default Portfolio;
