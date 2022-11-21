import React from "react";
import { AnimateSharedLayout } from "framer-motion";

import ProjContent2 from "./ProjContent2";

const proj0 = require('../../assets/proj0.gif');
const proj2 = require('../../assets/proj2.gif');


const itemsList = [
{
	index: 0,
	content: <img src={proj0} width="400" height="400" display= "flex" align-items= "center" alt="PROJETO 0"/>
},
{
	index: 1,
	content: <img src={proj2} width="400" height="400" display= "flex" align-items= "center" alt="PROJETO 2"/>
},

];

const Content = () => {
return (
	<AnimateSharedLayout>
	{}
	{itemsList.map((item) => (
		<ProjContent2 key={item.index} content={item.content} />
	))}
	</AnimateSharedLayout>
);
};
export default Content;