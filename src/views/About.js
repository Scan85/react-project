import React from "react";
import "babel-polyfill";

export default class About extends React.Component{
	render(){
		return (
			<div>
				<h1>Über dieses Projekt.</h1>
				<ul>
					<li>Spielwiese</li>
					<li>Shop</li>
					<li>Lernfeld</li>
				</ul>
			</div>
		)
	}
}