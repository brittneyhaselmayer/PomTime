import React from 'react';
import Login from './Login';
import Timer from './Timer';
import '../styles/Home.css';

export default function Home() {
	return (
		<div className="homeDiv">
			<Login className="login" />
			<Timer className="timer" />
		</div>
	);
}
