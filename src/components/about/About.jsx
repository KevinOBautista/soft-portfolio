import React from "react";
import { motion } from "framer-motion";
import {
	faBootstrap,
	faCss3,
	faFigma,
	faGit,
	faGithub,
	faHtml5,
	faJs,
	faNodeJs,
	faReact,
	faSass,
} from "@fortawesome/free-brands-svg-icons";
import Stack from "./Stack";

const variants = {
	initial: {
		x: "-95vw",
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

const About = () => {
	return (
		<div className="relative">
			<h1 className="text-center text-4xl md:text-6xl font-bold tracking-wider md:py-4 relative">
				About Me
			</h1>
			<motion.div
				className="about flex flex-col md:flex-row justify-evenly items-center gap-2 "
				variants={variants}
				whileInView="animate"
				initial="initial"
			>
				<div className="card flex flex-col rounded-xl items-center md:w-1/3 p-20">
					<div className="imgContainer w-28 md:w-64">
						<img
							src="./kevcircled.jpg"
							alt=""
							className="rounded-full border-4 "
						/>
					</div>
					<p className="mt-5 ">
						I'm Kevin Bautista, a passionate and versatile professional in the
						realms of software development and graphic design. With a
						deep-rooted love for creating meaningful and visually appealing
						digital experiences, I bring a unique blend of technical expertise
						and artistic flair to every project.
					</p>
				</div>
				{/* <h1 className="text-center text-4xl font-bold tracking-wider pb-4">
				Tech Stack
			</h1> */}
				<div className="tech-stack flex flex-col gap-4 mt-2 md:mt-5 justify-center items-center">
					<div className="frameworks">
						<h2 className="text-xl md:text-3xl font-semibold tracking-wide pb-4 text-center">
							Languages | Frameworks
						</h2>
						<div className="grid grid-cols-3 md:grid-cols-4 gap-2">
							<Stack icon={faJs} text={"Javascript"} />
							<Stack icon={faCss3} text={"CSS"} />
							<Stack icon={faHtml5} text={"HTML5"} />
							<Stack icon={faReact} text={"React"} />
							<Stack icon={faNodeJs} text={"NodeJS"} />
							<Stack
								vB={"24"}
								text={"Express"}
								path={
									"M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"
								}
							/>
							<Stack
								path={
									"M24.295 9.929c-0.010 0.155-0.082 0.292-0.191 0.387l-0.001 0.001c-0.131 0.143-0.306 0.243-0.504 0.278l-0.005 0.001c-0.028 0.004-0.061 0.007-0.094 0.007h-0c-0.001 0-0.003 0-0.004 0-0.312 0-0.58-0.189-0.694-0.46l-0.002-0.005c-0.030-0.221 0.33-0.388 0.701-0.44s0.764 0.011 0.794 0.231zM14.385 10.443c-0.121 0.311-0.418 0.528-0.766 0.528-0.004 0-0.007-0-0.011-0h0.001c-0 0-0 0-0 0-0.036 0-0.070-0.003-0.105-0.007l0.004 0c-0.261-0.047-0.483-0.191-0.63-0.392l-0.002-0.003c-0.082-0.094-0.132-0.219-0.132-0.354 0-0 0-0.001 0-0.001v0c0.012-0.077 0.055-0.143 0.115-0.185l0.001-0.001c0.152-0.084 0.334-0.133 0.528-0.133 0.083 0 0.164 0.009 0.242 0.026l-0.007-0.001c0.395 0.055 0.803 0.242 0.764 0.523zM25.403 18.086l-0.107-0.134-0.044-0.055c0.457-0.846 0.725-1.853 0.725-2.921 0-0.488-0.056-0.962-0.162-1.418l0.008 0.042c-0.070-0.453-0.111-0.976-0.111-1.508 0-0.007 0-0.014 0-0.021v0.001c0.023-0.501 0.076-0.97 0.158-1.429l-0.010 0.066c0.089-0.464 0.14-0.998 0.14-1.544 0-0.051-0-0.101-0.001-0.151l0 0.008c0.012-0.049 0.019-0.104 0.019-0.162 0-0.027-0.002-0.053-0.004-0.079l0 0.003c-0.4-1.58-1.151-2.949-2.168-4.073l0.007 0.008c-0.911-1.068-2.031-1.929-3.3-2.523l-0.060-0.025c0.696-0.149 1.496-0.234 2.316-0.234 0.075 0 0.15 0.001 0.225 0.002l-0.011-0c0.045-0.001 0.097-0.002 0.15-0.002 2.378 0 4.496 1.109 5.866 2.838l0.012 0.016c0.028 0.036 0.056 0.077 0.080 0.12l0.003 0.005c0.904 1.694-0.345 7.842-3.732 13.172zM25.117 9.322c-0.016 0.455-0.064 0.886-0.14 1.307l0.008-0.055c-0.078 0.425-0.134 0.931-0.157 1.445l-0.001 0.025c-0 0.017-0 0.036-0 0.056 0 0.567 0.042 1.124 0.124 1.668l-0.008-0.061c0.085 0.377 0.134 0.809 0.134 1.254 0 0.763-0.144 1.493-0.407 2.162l0.014-0.040c-0.076-0.131-0.155-0.289-0.224-0.453l-0.011-0.029c-0.066-0.159-0.209-0.416-0.406-0.77-0.769-1.38-2.571-4.611-1.649-5.929 0.474-0.678 1.676-0.707 2.722-0.579zM24.406 20.907c-0.051-1.039 0.336-1.148 0.746-1.263q0.085-0.023 0.169-0.051c0.050 0.044 0.105 0.087 0.162 0.125l0.005 0.003c0.62 0.273 1.342 0.431 2.102 0.431 0.592 0 1.161-0.096 1.693-0.274l-0.038 0.011c-0.344 0.293-0.736 0.544-1.16 0.738l-0.031 0.013c-0.644 0.264-1.391 0.429-2.173 0.454l-0.010 0c-0.119 0.018-0.256 0.029-0.395 0.029-0.386 0-0.754-0.080-1.087-0.224l0.018 0.007zM23.293 22.933c-0.021 0.221-0.045 0.47-0.077 0.745l-0.182 0.548c-0.014 0.040-0.022 0.086-0.023 0.134v0c0.001 0.027 0.001 0.058 0.001 0.089 0 0.355-0.053 0.699-0.151 1.022l0.006-0.025c-0.116 0.389-0.196 0.84-0.223 1.305l-0.001 0.016c-0.052 1.684-1.355 3.047-3.008 3.194l-0.013 0.001c-1.894 0.406-2.23-0.621-2.526-1.527q-0.045-0.142-0.096-0.283c-0.16-0.652-0.252-1.401-0.252-2.171 0-0.36 0.020-0.715 0.059-1.065l-0.004 0.043c0.006-0.128 0.009-0.279 0.009-0.43 0-1.026-0.154-2.016-0.441-2.948l0.019 0.071q0.008-0.55 0.024-1.114c0-0.003 0-0.008 0-0.012 0-0.046-0.007-0.090-0.020-0.132l0.001 0.003c-0.014-0.1-0.033-0.188-0.058-0.273l0.003 0.013c-0.141-0.521-0.496-0.941-0.964-1.164l-0.011-0.005c-0.176-0.088-0.384-0.14-0.605-0.14-0.104 0-0.205 0.011-0.302 0.033l0.009-0.002c0.128-0.47 0.26-0.854 0.412-1.228l-0.026 0.073 0.066-0.177c0.074-0.2 0.167-0.407 0.266-0.626 0.546-1.124 0.865-2.445 0.865-3.841 0-0.938-0.144-1.842-0.411-2.692l0.017 0.063c-0.183-1.108-1.135-1.943-2.281-1.943-0.18 0-0.356 0.021-0.524 0.060l0.016-0.003c-0.796 0.104-1.516 0.338-2.171 0.682l0.035-0.017q-0.124 0.063-0.245 0.13c0.091-2.147 0.896-4.090 2.181-5.615l-0.012 0.014c0.118-0.119 0.242-0.232 0.37-0.338l0.009-0.007c0.069-0.014 0.13-0.042 0.182-0.081l-0.001 0.001c0.893-0.654 2.014-1.047 3.227-1.047 0.097 0 0.193 0.002 0.288 0.007l-0.013-0.001c0.526 0.008 1.034 0.044 1.534 0.108l-0.067-0.007c2.043 0.393 3.787 1.463 5.032 2.963l0.011 0.014c0.748 0.869 1.354 1.887 1.766 2.998l0.022 0.069c-0.257-0.069-0.552-0.109-0.856-0.109-0.983 0-1.868 0.416-2.49 1.081l-0.002 0.002c-1.24 1.773 0.679 5.215 1.601 6.869 0.169 0.303 0.315 0.565 0.361 0.676 0.26 0.601 0.587 1.118 0.98 1.577l-0.007-0.008c0.087 0.109 0.171 0.214 0.236 0.306-0.501 0.144-1.401 0.478-1.319 2.146-0.015 0.195-0.053 0.558-0.104 1.018-0.054 0.269-0.098 0.597-0.123 0.93l-0.002 0.028zM14.091 17.219l-0.066 0.176c-0.137 0.328-0.279 0.745-0.397 1.172l-0.019 0.081c-0.893-0.013-1.695-0.395-2.261-1.001l-0.002-0.002c-0.632-0.667-1.020-1.57-1.020-2.564 0-0.198 0.015-0.392 0.045-0.582l-0.003 0.021c0.097-0.72 0.153-1.551 0.153-2.396 0-0.502-0.020-0.999-0.058-1.491l0.004 0.065c-0.006-0.107-0.012-0.201-0.015-0.275 0.805-0.611 1.824-0.98 2.929-0.98 0.132 0 0.262 0.005 0.391 0.015l-0.017-0.001c0.554 0.129 0.971 0.588 1.037 1.153l0.001 0.006c0.238 0.728 0.375 1.566 0.375 2.435 0 1.266-0.291 2.464-0.809 3.532l0.021-0.048c-0.105 0.233-0.204 0.453-0.289 0.682zM11.474 22.203c-0.205-0.052-0.385-0.128-0.549-0.227l0.009 0.005c0.172-0.073 0.375-0.134 0.585-0.173l0.019-0.003c1.604-0.33 1.851-0.563 2.392-1.25 0.124-0.157 0.264-0.336 0.459-0.553 0.040-0.045 0.072-0.099 0.091-0.159l0.001-0.003c0.213-0.189 0.34-0.137 0.546-0.052 0.227 0.125 0.395 0.336 0.46 0.587l0.001 0.007c0.023 0.065 0.037 0.139 0.037 0.217 0 0.125-0.035 0.242-0.095 0.341l0.002-0.003c-0.645 0.882-1.676 1.449-2.839 1.449-0.4 0-0.785-0.067-1.144-0.191l0.025 0.007zM3.967 15.846c-0.651-1.985-1.181-4.34-1.494-6.764l-0.021-0.199c-0.061-0.322-0.095-0.693-0.095-1.071 0-1.806 0.789-3.427 2.041-4.537l0.006-0.005c2.295-1.623 6.048-0.676 7.633-0.163l-0.012 0.012c-1.535 1.872-2.466 4.292-2.466 6.928 0 0.090 0.001 0.18 0.003 0.27l-0-0.013c-0 0.103 0.008 0.249 0.020 0.449 0.033 0.41 0.052 0.888 0.052 1.371 0 0.802-0.052 1.592-0.154 2.367l0.010-0.091c-0.033 0.206-0.051 0.444-0.051 0.686 0 1.231 0.482 2.35 1.269 3.177l-0.002-0.002q0.151 0.158 0.315 0.297c-0.433 0.464-1.375 1.49-2.377 2.696-0.709 0.853-1.199 0.689-1.36 0.636-0.685-0.368-1.222-0.939-1.538-1.631l-0.009-0.022c-0.684-1.252-1.286-2.708-1.73-4.232l-0.039-0.157zM30.445 19.403c-0.019-0.057-0.043-0.106-0.072-0.151l0.002 0.003c-0.174-0.329-0.596-0.427-1.259-0.29-2.066 0.426-2.866 0.164-3.156-0.024 1.617-2.452 2.918-5.292 3.751-8.326l0.049-0.209c0.339-1.313 0.997-4.403 0.153-5.913-0.059-0.112-0.122-0.208-0.192-0.298l0.003 0.004c-1.563-1.955-3.948-3.196-6.623-3.196-0.076 0-0.152 0.001-0.227 0.003l0.011-0c-0.042-0.001-0.091-0.001-0.141-0.001-1.342 0-2.633 0.22-3.838 0.625l0.085-0.025q-0.321-0.060-0.645-0.102c-0.488-0.093-1.053-0.151-1.631-0.16l-0.008-0c-0.083-0.004-0.18-0.006-0.278-0.006-1.315 0-2.538 0.394-3.557 1.071l0.024-0.015c-1.071-0.401-5.984-2.056-9.025 0.098-1.489 1.27-2.426 3.147-2.426 5.244 0 0.405 0.035 0.802 0.102 1.188l-0.006-0.041c0.335 2.698 0.879 5.126 1.632 7.461l-0.079-0.284c0.493 1.716 1.103 3.201 1.852 4.6l-0.061-0.124c0.433 0.984 1.182 1.764 2.116 2.225l0.026 0.012c0.168 0.049 0.361 0.078 0.561 0.078 0.742 0 1.392-0.391 1.756-0.979l0.005-0.009c1.001-1.204 1.987-2.282 2.43-2.758 0.502 0.279 1.097 0.451 1.731 0.471l0.006 0 0.001 0.005q-0.158 0.188-0.309 0.382c-0.424 0.538-0.512 0.649-1.875 0.93-0.388 0.080-1.418 0.292-1.433 1.014-0 0.004-0 0.008-0 0.013 0 0.147 0.043 0.284 0.117 0.399l-0.002-0.003c0.312 0.395 0.751 0.678 1.254 0.788l0.015 0.003c0.399 0.13 0.859 0.205 1.335 0.205 1.1 0 2.106-0.398 2.884-1.058l-0.006 0.005c-0.024 0.418-0.037 0.908-0.037 1.401 0 1.753 0.171 3.467 0.496 5.125l-0.027-0.167c0.382 1.373 1.616 2.367 3.084 2.38h0.002c0.369-0.003 0.726-0.046 1.070-0.124l-0.033 0.006c1.919-0.171 3.431-1.705 3.567-3.619l0.001-0.012c0.188-1.088 0.502-3.593 0.673-5.125 0.008-0.065 0.034-0.123 0.072-0.171l-0.001 0.001c0.001-0.001 0.087-0.059 0.534 0.038l0.055 0.009 0.317 0.028 0.019 0.001c0.095 0.004 0.207 0.007 0.319 0.007 1.024 0 2.002-0.2 2.895-0.564l-0.051 0.018c0.805-0.373 2.256-1.29 1.993-2.087z"
								}
								text={"PostgreSQL"}
							/>
							<Stack
								vB={"16"}
								path={
									"M.5 2.75a2.25 2.25 0 114.28.97l1.345 1.344.284-.284a2.25 2.25 0 013.182 0l.284.284 1.344-1.344a2.25 2.25 0 111.06 1.06l-1.343 1.345.284.284a2.25 2.25 0 010 3.182l-.284.284 1.344 1.344a2.25 2.25 0 11-1.06 1.06l-1.345-1.343-.284.284a2.25 2.25 0 01-3.182 0l-.284-.284-1.344 1.344a2.25 2.25 0 11-1.06-1.06l1.343-1.345-.284-.284a2.25 2.25 0 010-3.182l.284-.284L3.72 4.781A2.25 2.25 0 01.5 2.75zM2.75 2a.75.75 0 100 1.5.75.75 0 000-1.5zm0 10.5a.75.75 0 100 1.5.75.75 0 000-1.5zm9.75.75a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM13.25 2a.75.75 0 100 1.5.75.75 0 000-1.5zM7.47 5.841a.75.75 0 011.06 0L10.16 7.47a.75.75 0 010 1.06L8.53 10.16a.75.75 0 01-1.06 0L5.84 8.53a.75.75 0 010-1.06L7.47 5.84z"
								}
								text={"RESTful API"}
							/>
							<Stack icon={faBootstrap} text={"Bootstrap"} />
							<Stack
								path="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"
								text={"Tailwind"}
							/>
							<Stack icon={faSass} text={"Sass"} />
							<Stack
								text={"MongoDB"}
								path={
									"M15.821 23.185s0-10.361 0.344-10.36c0.266 0 0.612 13.365 0.612 13.365-0.476-0.056-0.956-2.199-0.956-3.005zM22.489 12.945c-0.919-4.016-2.932-7.469-5.708-10.134l-0.007-0.006c-0.338-0.516-0.647-1.108-0.895-1.732l-0.024-0.068c0.001 0.020 0.001 0.044 0.001 0.068 0 0.565-0.253 1.070-0.652 1.409l-0.003 0.002c-3.574 3.034-5.848 7.505-5.923 12.508l-0 0.013c-0.001 0.062-0.001 0.135-0.001 0.208 0 4.957 2.385 9.357 6.070 12.115l0.039 0.028 0.087 0.063q0.241 1.784 0.412 3.576h0.601c0.166-1.491 0.39-2.796 0.683-4.076l-0.046 0.239c0.396-0.275 0.742-0.56 1.065-0.869l-0.003 0.003c2.801-2.597 4.549-6.297 4.549-10.404 0-0.061-0-0.121-0.001-0.182l0 0.009c-0.003-0.981-0.092-1.94-0.261-2.871l0.015 0.099z"
								}
							/>
						</div>
					</div>
					<div className="tools ">
						<h2 className="text-xl md:text-3xl font-semibold tracking-wide pb-4 text-center">
							Tools
						</h2>

						<div className="grid grid-cols-3 md:grid-cols-4 gap-2">
							<Stack
								text="Photoshop"
								vB={"512"}
								path="M426.333,0.5H85.667C38.825,0.5,0.5,38.825,0.5,85.667v340.667c0,46.842,38.325,85.167,85.167,85.167
		h340.667c46.842,0,85.167-38.325,85.167-85.167V85.667C511.5,38.825,473.175,0.5,426.333,0.5z M245.329,260.524
		c-17.736,17.736-45.611,26.065-77.103,26.065c-8.326,0-15.927-0.365-21.72-1.451v91.945h-44.159V136.363
		c15.927-2.895,38.009-5.069,68.05-5.069c32.582,0,56.473,6.878,72.039,19.911c14.48,11.947,23.89,31.131,23.89,53.936
		C266.325,228.309,259.086,247.492,245.329,260.524z M337.981,380.706c-21.358,0-40.542-5.069-53.574-12.31l8.687-32.216
		c10.135,6.154,29.322,12.671,45.249,12.671c19.545,0,28.236-7.964,28.236-19.549c0-11.943-7.239-18.099-28.96-25.7
		c-34.391-11.947-48.866-30.769-48.505-51.403c0-31.131,25.7-55.383,66.604-55.383c19.549,0,36.562,5.069,46.695,10.496
		l-8.687,31.493c-7.602-4.342-21.721-10.135-37.285-10.135c-15.928,0-24.615,7.602-24.615,18.46c0,11.224,8.326,16.655,30.77,24.618
		c31.854,11.582,46.696,27.871,47.058,53.937C409.653,357.539,384.678,380.706,337.981,380.706z M221.8,206.95
		c0,28.598-20.273,44.887-53.574,44.887c-9.049,0-16.289-0.362-21.72-1.809v-82.534c4.708-1.085,13.395-2.171,25.704-2.171
		C202.979,165.323,221.8,179.803,221.8,206.95z"
							/>
							<Stack
								text="VSCode"
								path="M11.72,18.685,4.837,23.869,2,22.922,9,16,2,9.077,4.837,8.13l6.883,5.184,11.433-11.3L30,4.922V27.077l-6.847,2.909ZM15.287,16l7.865,5.923V10.076Z"
							/>
							<Stack text={"Figma"} icon={faFigma} />
							<Stack text="Git" icon={faGit} />
							<Stack text="GitHub" icon={faGithub} />
							<Stack
								text="npm"
								vB={"16"}
								path="M1 2.88462C1 1.84377 1.84377 1 2.88462 1H13.1154C14.1562 1 15 1.84377 15 2.88462V13.1154C15 14.1562 14.1562 15 13.1154 15H2.88462C1.84377 15 1 14.1562 1 13.1154V2.88462ZM2.88462 2.61538C2.73592 2.61538 2.61538 2.73592 2.61538 2.88462V13.1154C2.61538 13.2641 2.73592 13.3846 2.88462 13.3846H8.53846V6.38462C8.53846 5.93854 8.90008 5.57692 9.34615 5.57692C9.79223 5.57692 10.1538 5.93854 10.1538 6.38462V13.3846H13.1154C13.2641 13.3846 13.3846 13.2641 13.3846 13.1154V2.88462C13.3846 2.73592 13.2641 2.61538 13.1154 2.61538H2.88462Z"
							/>
							<Stack
								text={"Mocha"}
								vB={"24"}
								path={
									"M13.325 0c-.907 1.116-2.442 2.302-.768 4.814.558.628.838 1.953.768 2.372 0 0 2.512-1.464.977-4.116-.907-1.395-1.326-2.582-.977-3.07zm-2.79 2.582c-.628.767-1.605 1.535-.489 3.279.35.349.489 1.256.489 1.535 0 0 1.673-.978.627-2.792-.628-.907-.906-1.743-.627-2.022zm-5.094 6a.699.699 0 0 0-.697.698c0 2.372.349 10.535 3.837 14.512.14.139.28.208.489.208h5.86c.21 0 .35-.069.489-.208 3.488-3.908 3.837-12.07 3.837-14.512a.7.7 0 0 0-.698-.699H12zm2.023 2.163h9.21c.349 0 .697.278.697.697 0 1.953-.348 7.465-2.72 10.326-.21.14-.35.208-.559.208H9.976a.633.633 0 0 1-.488-.208c-2.372-2.79-2.652-8.373-2.722-10.326 0-.35.28-.697.698-.697zm8.792 4.744s-.071.627-1.745 1.255c-2.303.837-6.348.28-6.348.28.349 1.465.906 2.86 1.743 3.907.07.14.28.209.419.209h3.489c.14 0 .279-.07.418-.209 1.186-1.395 1.745-3.558 2.024-5.442z"
								}
							/>
							<Stack
								text={"Chai"}
								vB={"24"}
								path={
									"M22.224 5.831 12.23.061a.462.462 0 0 0-.462 0l-9.992 5.77a.462.462 0 0 0-.231.4v11.538c0 .165.088.318.23.4l9.993 5.77a.462.462 0 0 0 .462 0l9.993-5.77a.462.462 0 0 0 .23-.4V6.231a.462.462 0 0 0-.23-.4zm-.63 11.707L12 23.078l-9.593-5.539V6.462L12 .923l9.593 5.539v11.076zM11.295 8.186c.387-.277.792-.497 1.213-.659s.843-.243 1.263-.243c.26 0 .502.038.727.113.225.076.42.185.584.328s.294.32.39.532c.094.212.142.454.142.727 0 .329-.065.656-.195.98-.13.325-.304.625-.522.902s-.47.52-.756.727-.582.357-.89.448l-.136-.227a2.087 2.087 0 0 0 .5-.35 2.275 2.275 0 0 0 .39-.484c.108-.18.19-.37.25-.571a2.19 2.19 0 0 0 .087-.614c0-.238-.035-.463-.104-.675a1.626 1.626 0 0 0-.305-.555 1.426 1.426 0 0 0-.496-.373 1.602 1.602 0 0 0-.679-.136c-.311 0-.597.06-.856.182-.26.12-.494.284-.701.49s-.389.44-.542.707a4.874 4.874 0 0 0-.383.837 5.617 5.617 0 0 0-.23.886 4.292 4.292 0 0 0 .007 1.675c.055.285.138.567.246.844.108.277.242.538.402.785.16.247.345.463.555.649a2.583 2.583 0 0 0 .7.445c.258.11.539.165.841.165.208 0 .41-.028.607-.084a2.987 2.987 0 0 0 .568-.228 3.21 3.21 0 0 0 .516-.337 3.967 3.967 0 0 0 .451-.422l.215.208c-.19.25-.417.492-.679.723a5.543 5.543 0 0 1-.847.617 4.624 4.624 0 0 1-.95.428 3.21 3.21 0 0 1-.984.16 2.41 2.41 0 0 1-.892-.166c-.28-.11-.536-.26-.77-.448s-.442-.409-.626-.662c-.183-.253-.34-.522-.467-.808s-.225-.58-.292-.883-.101-.599-.101-.889c0-.42.07-.851.21-1.295s.335-.874.582-1.291.537-.813.873-1.185a6.721 6.721 0 0 1 1.084-.973z"
								}
							/>
						</div>
					</div>
				</div>
				<div className="background absolute bg-gradient-to-r from-indigo-500 to-indigo-600 w-full min-h-[90%] md:min-h-[500px] left-0 -z-10 -skew-y-3 box-border block"></div>
			</motion.div>
		</div>
	);
};

export default About;
