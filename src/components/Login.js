import React from 'react';
import '../styles/Login.css';

export default function Login() {
	return (
		<>
			<form className="loginForm">
				<label>Username:</label>
				<input type="text" placeholder="Usename"></input>

				<label>Password:</label>
				<input type="password" placeholder="Password"></input>
				<button>Log In</button>
			</form>
		</>
	);
}
