import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Content = ({ content }) => {

	const url = "https://media.geeksforgeeks.org/wp-content/cdn-uploads/" +
		"20200817185016/gfg_complete_logo_2x-min.png"

	return (
		<motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }}exit={{ opacity: 0 }}>
			<img src={url} alt="geeksforgeeks"/>
			<div className="row">{content}</div>
		</motion.div>
	);
};

const Welcome = ({ content }) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleOpen = () => setIsOpen(!isOpen);

	const url = "https://cdn-icons-png.flaticon.com/512/1946/1946429.png"

	return (
		<motion.li layout title="Click to reveal" onClick={toggleOpen} initial={{ borderRadius: [25] }}>
			<motion.div className="avatar" layout>
				<div className="name-project">
					<div className="main-header">Projeto</div>
				</div>
			</motion.div>
			<br />
			<AnimatePresence>{isOpen && <Content content={content} />}
			</AnimatePresence>
		</motion.li>
	);
};

export default Welcome;
