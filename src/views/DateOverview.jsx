import React from "react";
import "babel-polyfill";

export default class DateOverview extends React.Component {
	render(){
		let date = new Date();
		return(
			<div>
				<h1>Willkommen auf der DateOverview Seite</h1>
			</div>
		);
	}
}