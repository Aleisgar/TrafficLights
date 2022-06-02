import React, { useState } from "react";

const TrafficLights = () => {
	const [redLight, setColorRed] = useState("");
	const [yellowLight, setColorYellow] = useState("");
	const [greenLight, setColorGreen] = useState("");

	let colorCycle = "";
	const iluminaRojo = () => {
		redLight === "" ? setColorRed("Resplandor") : setColorRed("");
	};
	const iluminaAmarillo = () => {
		yellowLight === "" ? setColorYellow("Resplandor") : setColorYellow("");
	};
	const iluminaVerde = () => {
		greenLight === "" ? setColorGreen("Resplandor") : setColorGreen("");
	};

	const myFunction = () => {
		colorCycle = setInterval(iluminaRojo, 1000);
		colorCycle = setInterval(iluminaAmarillo, 2000);
		colorCycle = setInterval(iluminaVerde, 3000);
	};
	return (
		<div className="wrapper">
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
			<button
				className="btnCycle"
				onClick={
					myFunction //para no tener que escribir cada una de las funciones tantas veces
					//setColorRed("Resplandor")
					// setColorRed(""),
					// 	setColorYellow("Resplandor"),
					// 	setColorYellow(""),
					// 	setColorGreen("Resplandor");
				}>
				Click me
			</button>
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
