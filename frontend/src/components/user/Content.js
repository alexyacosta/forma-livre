import React from "react";
import { AnimateSharedLayout } from "framer-motion";
import Welcome from "./Welcome";

const itemsList = [
{
	index: 0,
	content: `Motion components are DOM primitives
optimised for 60fps animation and gestures.`
},
{
	index: 1,
	content: `https://assets2.domestika.org/course-images/000/012/182/12182-big.gif`
},

];

const Content = () => {
return (
	<AnimateSharedLayout>
	{/* Mapping through itemList array to render layouts*/}
	{itemsList.map((item) => (
		<Welcome key={item.index} content={item.content} />
	))}
	</AnimateSharedLayout>
);
};

export default Content;
