import React from "react";
import { AnimateSharedLayout } from "framer-motion";
import Welcome from "./Welcome";
import "./App.css";

// This is an example of animating shared layouts
// using react and framer-motion library.
const itemsList = [
{
	index: 0,
	content: `Motion components are DOM primitives
optimised for 60fps animation and gestures.`
},
{
	index: 1,
	content: `Motion can animate:
	Numbers: 0, 10 etc.
	Strings containing numbers: "0vh", "10px" etc.`
},
{
	index: 2,
	content: `Transform properties are accelerated by the GPU,
	and therefore animate smoothly. `
}
];

const Content = () => {
return (
	// The framer-motion component to wrap Item component to animate it
	<AnimateSharedLayout>
	{/* Mapping through itemList array to render layouts*/}
	{itemsList.map((item) => (
		<Welcome key={item.index} content={item.content} />
	))}
	</AnimateSharedLayout>
);
};

export default Content;
