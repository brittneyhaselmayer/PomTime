import React, { useState } from 'react';
import '../styles/Timer.css';

export default function Timer() {
	const [time, setTime] = useState('25:00');
	const [value, setValue] = useState('');
	// console.log(time);

	const getTimeValue = (e) => {
		e.preventDefault();
		e.persist();
		setTime(value);
	};

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	return (
		<div className="timerDiv">
			<h1>{time} Mins</h1>

			<button>Start timer</button>
			<form>
				<input type="text" onChange={(e) => handleChange(e)}></input>
				<button onClick={(e) => getTimeValue(e)}>Set Custom Time</button>
			</form>
		</div>
	);
}
