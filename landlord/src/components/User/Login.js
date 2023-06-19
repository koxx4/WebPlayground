import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logInWithGoogle, logInWithGithub } from '../../Firebase/UserService';
import { BsGoogle, BsGithub } from 'react-icons/bs';
import './Login.css';

const Login = () => {
	const navigate = useNavigate();

	const handleGoogleLogin = e => {
		e.preventDefault();
		logInWithGoogle().then(() => {
			navigate('/');
		});
	};

	const handleGithubLogin = e => {
		e.preventDefault();
		logInWithGithub().then(() => {
			navigate('/');
		});
	};

	return (
		<div className="login-form-container">
			<button
				type="button"
				className="btn btn-outline-dark btn-lg"
				onClick={handleGoogleLogin}
			>
				<BsGoogle /> Sign in with Google
			</button>
			<button
				type="button"
				className="btn btn-outline-dark btn-lg"
				onClick={handleGithubLogin}
			>
				<BsGithub /> Sign in with GitHub
			</button>
		</div>
	);
};

export default Login;
