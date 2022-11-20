import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Content = ({ content }) => {

const url = "https://media.geeksforgeeks.org/wp-content/cdn-uploads/" +
	"20200817185016/gfg_complete_logo_2x-min.png"

return (
	<motion.div
	layout
	initial={{ opacity: 0 }}
	animate={{ opacity: 1 }}
	exit={{ opacity: 0 }}
	>
	<img
		src={url}
		alt="geeksforgeeks"
	/>
	<div className="row">{content}</div>
	</motion.div>
);
};

const Welcome = ({ content }) => {
// React useState hook is used to manage the state of 'isOpen'
// that in turn toggles shared layout, user clicks on
const [isOpen, setIsOpen] = useState(false);

// Utility function to set 'isOpen' '!'(not) of its last value
const toggleOpen = () => setIsOpen(!isOpen);

const url = "https://yt3.ggpht.com/ytc/AAUvwnjJqZG9PvGfC3GoV" +
	"27UlohMeBLxyUdhs9hUbc-Agw=s900-c-k-c0x00ffffff-no-rj"

return (
	<motion.li
	layout
	title="Click to reveal"
	onClick={toggleOpen}
	initial={{ borderRadius: [25] }}
	>
	<motion.div className="avatar" layout>
		{" "}
		<img
		src={url}
		alt="gfg"
		/>{" "}
	</motion.div>
	<br />
	<AnimatePresence>{isOpen && <Content content={content} />}
	</AnimatePresence>
	</motion.li>
);
};

export default Welcome;
