import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ProjContent from "./ProjContent";

const Content = ({ content }) => {

	const url = {ProjContent}

	return (
		<motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }}exit={{ opacity: 0 }}>
			<img src={url} alt="urlApi"/>
			<div className="row">{content}</div>
		</motion.div>
	);
};

const ProjContent2 = ({ content }) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleOpen = () => setIsOpen(!isOpen);

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

export default ProjContent2;