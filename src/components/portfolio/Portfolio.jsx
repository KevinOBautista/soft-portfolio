import React from "react";
import Project from "./Project";
import { motion } from "framer-motion";

const portfolioVarient = {
	initial: {
		x: "-95vw",
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
			className="portfolio flex flex-col w-full items-center py-10"
			variants={portfolioVarient}
			initial="initial"
			whileInView="animate"
		>
			<motion.h2
				className="tracking-wider text-3xl md:text-4xl p-4 font-semibold py-10"
				variants={portfolioVarient}
			>
				CREATIONS:
			</motion.h2>
			<div className="projects flex flex-wrap gap-8 sm:gap-10 justify-center">
				<Project
					id={1}
					title="Restaurant Reservation"
					description="This web application allows restaurant admistrators to make reservations for their restaurants, making the process of creating reservations and seating them convenient."
					img="./resres.png"
					link="https://github.com/KevinOBautista/restaurant-reservation"
				/>
				<Project
					id={2}
					title="Study Deck"
					description="Study Deck is a dynamic and user-friendly platform dedicated to simplifying the creation, study, and management of flashcards. Whether you're a student aiming to elevate your learning or a professional seeking enhanced knowledge retention, Study Deck offers a seamless solution for personalized and efficient learning."
					img="./studydeck1.png"
					link="https://github.com/KevinOBautista/Study-Deck"
				/>
				<Project
					id={3}
					title="Will You Be My Valentine"
					description={`A playful and interactive way to ask that special someone the big question this Valentine's Day. Hosted as a GitHub Page, this project offers a unique blend of creativity and technology to make your Valentine's Day proposal unforgettable with your upcoming plans.`}
					img="./vday.png"
					link="https://github.com/KevinOBautista/valentine-page"
				/>
				<Project
					id={4}
					title="MetroBus Administrator"
					description="A web-based application designed to simplify the creation, management, and monitoring of bus route sheets. This application allows users to create detailed route sheets, including information about customers, dispatchers, dates, and support drivers assigned to each passenger after reaching a specific stop."
					img="./metrobuslogo.png"
					link="https://github.com/KevinOBautista/MetroBus"
				/>
			</div>
		</motion.div>
	);
};

export default Portfolio;
