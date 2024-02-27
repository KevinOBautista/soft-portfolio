import React, { useState } from "react";
import { motion } from "framer-motion";
import "./portfolio.scss";

const variants = {
	clicked: {
		transition: {
			type: "spring",
			stiffness: 50,
		},
		fill: "rgba(255, 0, 0, 1)",
		scale: 1.05,
	},
	unClicked: {
		transition: {
			type: "spring",
			stiffness: 400,
		},
		fill: "rgba(255, 255, 255, 1)",
		scale: 1,
	},
};

const Project = ({ id, title, description, img, link }) => {
	const [clicked, setClicked] = useState(false);

	return (
		<div className="flex group relative max-w-[90vw]" id={`project-${id}`}>
			<div className="flex flex-col border-2 border-zinc-600 group-hover:border-indigo-500 rounded-lg p-5 group sm:w-96 bg-zinc-900 gap-6 justify-between">
				<div className="top-part">
					<div className="imageContainer flex w-1/4">
						<img src={img} alt="" />
					</div>
					<div className="information flex flex-col gap-2 mt-4">
						<h4 className="text-xl font-semibold">{title}</h4>
						<p>{description}</p>
					</div>
				</div>
				<div className="buttons flex justify-between text-center">
					<motion.a
						href={link}
						className="flex justify-center gap-2 py-2 px-6 border border-3 rounded-lg items-center"
						whileHover={{ scale: 1.05 }}
					>
						Visit{"  "}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
							width="16"
							height="16"
							fill="currentColor"
						>
							<path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
						</svg>
					</motion.a>

					<motion.button
						whileHover={{ scale: 1.05 }}
						onClick={() => setClicked((prev) => !prev)}
						animate={clicked ? "clicked" : "unclicked"}
						variants={variants}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							id="heart"
						>
							<motion.path
								variants={variants}
								fill="rgba(255, 255, 255, 1)"
								d="M6.28001656,3.46389584e-14 C6.91001656,0.0191596721 7.52001656,0.129159672 8.11101656,0.330159672 L8.11101656,0.330159672 L8.17001656,0.330159672 C8.21001656,0.349159672 8.24001656,0.370159672 8.26001656,0.389159672 C8.48101656,0.460159672 8.69001656,0.540159672 8.89001656,0.650159672 L8.89001656,0.650159672 L9.27001656,0.820159672 C9.42001656,0.900159672 9.60001656,1.04915967 9.70001656,1.11015967 C9.80001656,1.16915967 9.91001656,1.23015967 10.0000166,1.29915967 C11.1110166,0.450159672 12.4600166,-0.00984032788 13.8500166,3.46389584e-14 C14.4810166,3.46389584e-14 15.1110166,0.0891596721 15.7100166,0.290159672 C19.4010166,1.49015967 20.7310166,5.54015967 19.6200166,9.08015967 C18.9900166,10.8891597 17.9600166,12.5401597 16.6110166,13.8891597 C14.6800166,15.7591597 12.5610166,17.4191597 10.2800166,18.8491597 L10.2800166,18.8491597 L10.0300166,19.0001597 L9.77001656,18.8391597 C7.48101656,17.4191597 5.35001656,15.7591597 3.40101656,13.8791597 C2.06101656,12.5301597 1.03001656,10.8891597 0.390016562,9.08015967 C-0.739983438,5.54015967 0.590016562,1.49015967 4.32101656,0.269159672 C4.61101656,0.169159672 4.91001656,0.0991596721 5.21001656,0.0601596721 L5.21001656,0.0601596721 L5.33001656,0.0601596721 C5.61101656,0.0191596721 5.89001656,3.46389584e-14 6.17001656,3.46389584e-14 L6.17001656,3.46389584e-14 Z M15.1900166,3.16015967 C14.7800166,3.01915967 14.3300166,3.24015967 14.1800166,3.66015967 C14.0400166,4.08015967 14.2600166,4.54015967 14.6800166,4.68915967 C15.3210166,4.92915967 15.7500166,5.56015967 15.7500166,6.25915967 L15.7500166,6.25915967 L15.7500166,6.29015967 C15.7310166,6.51915967 15.8000166,6.74015967 15.9400166,6.91015967 C16.0800166,7.08015967 16.2900166,7.17915967 16.5100166,7.20015967 C16.9200166,7.18915967 17.2700166,6.86015967 17.3000166,6.43915967 L17.3000166,6.43915967 L17.3000166,6.32015967 C17.3300166,4.91915967 16.4810166,3.65015967 15.1900166,3.16015967 Z"
							></motion.path>
						</svg>
					</motion.button>
				</div>
			</div>
			<div className="w-full sm:w-96 absolute h-full left-2 top-2 border-2 group-hover:border-0 border-zinc-600 group-hover:bg-gradient-to-t from-indigo-500 to-indigo-700 rounded-2xl card-bg overflow-hidden -z-10"></div>
		</div>
	);
};

export default Project;
