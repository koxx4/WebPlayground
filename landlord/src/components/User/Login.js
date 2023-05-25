import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import './Login.css';

const Login = () => {
	const navigate = useNavigate();
	const { login } = useContext(UserContext);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		login(email, password);
		navigate('/');
	};

	return (
		<div className="login-form-container">
			<h2>Sign in</h2>
			<form className="login-form" onSubmit={handleSubmit}>
				<div className="form-group">
					<label className="label-input">
						Email:
						<input
							className="form-control"
							type="email"
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</label>
				</div>

				<div className="form-group">
					<label className="label-input">
						Password:
						<input
							className="form-control"
							type="password"
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>
					</label>
				</div>

				<button
					type="submit"
					className="btn btn-primary btn-lg"
					onClick={handleSubmit}
				>
					Sign in
				</button>
			</form>
		</div>
	);
};

export default Login;
