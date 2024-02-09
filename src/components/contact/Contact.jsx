import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

const Contact = () => {
	const formRef = useRef();
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("service_rc5ormf", "template_lxnrnmf", formRef.current, {
				publicKey: "btKwEMTse4Duope78",
			})
			.then(
				() => {
					setSuccess(true);
				},
				(error) => {
					setError(true);
				}
			);
	};

	return (
		<div className="contact flex flex-col gap-5 m-auto">
			<h1 className="text-center text-5xl font-bold p-2">Get In Touch</h1>
			<div className="form-container flex flex-row justify-evenly gap-3 pt-20 items-center">
				<div className="image-container">
					<img src="./message_sent.svg" alt="" />
				</div>
				<form
					className="flex flex-col gap-3 bg-zinc-700 rounded-lg p-10"
					onSubmit={sendEmail}
					ref={formRef}
				>
					<div className="top-part flex sm:flex-row flex-col justify-around items-center gap-3">
						<div className="name flex flex-col">
							<label htmlFor="name">Name</label>
							<input
								className="rounded-lg p-3"
								type="text"
								required
								placeholder="John Doe"
								name="name"
							></input>
						</div>
						<div className="email flex flex-col">
							<label htmlFor="email">Email</label>
							<input
								className="rounded-lg p-3"
								type="email"
								required
								placeholder="example@gmail.com"
								name="email"
							></input>
						</div>
					</div>
					<div className="message flex flex-col">
						<label htmlFor="message">Message</label>
						<textarea
							className="rounded-lg p-3"
							rows="8"
							placeholder="Hey there!"
							name="message"
						/>
					</div>
					<button className=" bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-lg p-4">
						<FontAwesomeIcon icon={faPaperPlane} /> Submit
					</button>
					{error && (
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 1 }}
							className="alert-error"
						>
							There has been an error sending your message!
						</motion.div>
					)}
					{success && (
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 1 }}
							className="alert-success"
						>
							Your message has been sent. Thank you!
						</motion.div>
					)}
				</form>
			</div>
		</div>
	);
};

export default Contact;
