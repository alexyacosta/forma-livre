import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Content = ({ content }) => {
	return (
		<motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
			<div className="row">{content}</div>
		</motion.div>
	);
};

const ProjContent2 = ({ content }) => {
	const add = require('../../assets/add.png');
	const del = require('../../assets/delete.png');
	const edit = require('../../assets/edit.png');
	const save = require('../../assets/save.png');
	const share = require('../../assets/share.png');
	const [isOpen, setIsOpen] = useState(false);
	const toggleOpen = () => setIsOpen(!isOpen);

	return (
		<motion.li layout title="Click to reveal" onClick={toggleOpen} initial={{ borderRadius: [25] }}>
			<motion.div className="avatar" layout>
				<div className="name-project">
					Projeto
					<br />
					<div className="main">
						<Link to={"/novo"}>
							<img src={add} width="30" height="30" alt="urlApi" />
						</Link>
						<img src={del} width="30" height="30" alt="urlApi" />
						<img src={edit} width="30" height="30" alt="urlApi" />
						<img src={save} width="30" height="30"  alt="urlApi" />
						<img src={share} width="30" height="30"alt="urlApi" />
					</div>
				</div>
			</motion.div>
			<AnimatePresence>{isOpen && <Content content={content} />}
			</AnimatePresence>
		</motion.li>
	);
};

export default ProjContent2;
