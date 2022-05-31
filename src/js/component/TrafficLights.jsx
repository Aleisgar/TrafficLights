import React, { useState } from "react";

const TrafficLights = () => {
	const [redLight, setColorRed] = useState("");
	const [yellowLight, setColorYellow] = useState("");
	const [greenLight, setColorGreen] = useState("");

	return (
		<div className="container">
			<div
				className={"red " + redLight}
				onClick={() => {
					setColorRed("Resplandor");
					setColorYellow("");
					setColorGreen("");
				}}></div>
			<div
				className={"yellow " + yellowLight}
				onClick={() => {
					setColorRed("");
					setColorYellow("Resplandor");
					setColorGreen("");
				}}></div>
			<div
				className={"green " + greenLight}
				onClick={() => {
					setColorRed("");
					setColorYellow("");
					setColorGreen("Resplandor");
				}}></div>
		</div>
	);
};

export default TrafficLights;

// function cambiarColor() {
// 	color === "Resplandor" ? setColor("") : setColor("Resplandor");
// }
// function cambiarColor2() {
// 	color === "Resplandor" ? setColor("") : setColor("Resplandor");
// }
// function cambiarColor3() {
// 	color === "Resplandor" ? setColor("") : setColor("Resplandor");
// }

{
	/* <div className={"light red " + color} onClick={cambiarColor}></div>
			<div
				className={"light yellow " + color}
				onClick={cambiarColor2}></div>
			<div
				className={"light green " + color}
				onClick={cambiarColor3}></div> */
}
