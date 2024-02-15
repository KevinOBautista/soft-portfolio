import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
const ContactForm = ({ sendEmail, formRef, error, success }) => {
	return (
		<motion.form
			className="flex flex-col gap-3 bg-zinc-700 rounded-lg p-10 "
			ref={formRef}
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ delay: 4, duration: 1 }}
			onSubmit={sendEmail}
		>
			<div className="top-part flex sm:flex-row flex-col justify-around items-center gap-3">
				<div className="name flex flex-col">
					<label name="name">Name</label>
					<input
						className="rounded-lg p-3 text-black"
						type="text"
						required
						placeholder="John Doe"
						name="name"
					></input>
				</div>
				<div className="email flex flex-col">
					<label name="email">Email</label>
					<input
						className="rounded-lg p-3 text-black "
						type="email"
						required
						placeholder="example@gmail.com"
						name="email"
					></input>
				</div>
			</div>
			<div className="message flex flex-col">
				<label name="message">Message</label>
				<textarea
					className="rounded-lg p-3 text-black"
					rows="8"
					placeholder="Hey there!"
					name="message"
				/>
			</div>
			<button
				className=" bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-lg p-4 "
				type="submit"
			>
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
		</motion.form>
	);
};

export default ContactForm;
