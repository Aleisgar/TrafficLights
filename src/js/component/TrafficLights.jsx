import React, { useState } from "react";

const TrafficLights = () => {
	const [redLight, setColorRed] = useState("");
	const [yellowLight, setColorYellow] = useState("");
	const [greenLight, setColorGreen] = useState("");

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
			
		</div>
	);
};

export default TrafficLights;
