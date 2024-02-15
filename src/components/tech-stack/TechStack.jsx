import React from "react";

const TechStack = () => {
	return (
		<div className="tech-stack flex flex-col md:flex-row justify-evenly m-auto mt-20">
			<div className="imgContainer p-4">
				<img src="./proud.svg" alt="" />
			</div>
			<div
				className="flex flex-col justify-center gap-2 pt-3 md:p-0"
				id="stackContainer"
			>
				<h1 className="text-4xl text-center font-semibold">Tech Stack</h1>
				<h3 className="text-center font-medium">Languages:</h3>
				<div className="flex flex-row flex-wrap justify-center" id="languages">
					<img
						src="https://img.shields.io/badge/javascript-%23323330.svg?logo=javascript&logoColor=%23F7DF1E"
						alt="javascript"
					/>
					<img
						src="https://img.shields.io/badge/css3-%231572B6.svg?logo=css3&logoColor=white"
						alt="css"
					/>
					<img
						src="https://img.shields.io/badge/html5-%23E34F26.svg?logo=html5&logoColor=white"
						alt="html"
					/>
					<img
						src="https://img.shields.io/badge/Scala-gray.svg?logo=scala&logoColor=red"
						alt="scala"
					/>
				</div>
				<h3 className="text-center font-medium">JS Framework/Library:</h3>
				<div className="jsframework flex flex-row flex-wrap justify-center">
					<img
						src="https://img.shields.io/badge/react-%2320232a.svg?logo=react&logoColor=%2361DAFB"
						alt=""
					/>
				</div>
				<h3 className="text-center font-medium">CSS Framework/Library: </h3>
				<div className="cssframework flex flex-row flex-wrap justify-center">
					<img
						src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?logo=tailwind-css&logoColor=white"
						alt="tailwind"
					/>
					<img
						src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?logo=bootstrap&logoColor=white"
						alt="bootstrap"
					/>
					<img
						src="https://img.shields.io/badge/SASS-hotpink.svg?logo=SASS&logoColor=white"
						alt="sass"
					/>
				</div>
				<h3 className="text-center font-medium">Database:</h3>
				<div className="database flex flex-row flex-wrap justify-center">
					<img
						src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?logo=mongodb&logoColor=white"
						alt="mongoDB"
					/>
				</div>
			</div>
		</div>
	);
};

export default TechStack;
