import React from "react";
import { AnimateSharedLayout } from "framer-motion";

import ProjContent2 from "./ProjContent2";

//const url = {https://assets2.domestika.org/course-images/000/012/182/12182-big.gif}

const itemsList = [
{
	index: 0,
	content: `Motion components are DOM primitives
optimised for 60fps animation and gestures.`
},
{
	index: 1,
	content: '´oi´'
},

];

const ProjContent = () => {
return (
	<AnimateSharedLayout>
	{itemsList.map((item) => (
		<ProjContent key={item.index} content={item.content} />
	))}
    < ProjContent2 />
	</AnimateSharedLayout>
);
};

export default ProjContent;