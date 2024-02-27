import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
const Stack = ({ icon, text, path, vB }) => {
	return (
		<motion.div
			whileHover={{
				y: -4,
			}}
			className="stack bg-zinc-900 rounded-lg p-4 flex flex-col justify-center items-center gap-2"
		>
			{icon && <FontAwesomeIcon icon={icon} color="white" size={"xl"} />}
			{path && (
				<svg
					width={"1.5em"}
					height={"1.5em"}
					viewBox={`0 0 ${vB ? vB : "32"} ${vB ? vB : "32"}`}
					xmlns="http://www.w3.org/2000/svg"
					fill="#fff"
				>
					<path d={path} />
				</svg>
			)}
			<p className="text-wrap">{text}</p>
		</motion.div>
	);
};

export default Stack;
