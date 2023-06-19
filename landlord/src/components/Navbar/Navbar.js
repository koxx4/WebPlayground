/* eslint-disable jsx-a11y/anchor-is-valid */
import './Navbar.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsHousesFill } from 'react-icons/bs';
import { useUser, logOut } from '../../Firebase/UserService';

function Navbar() {
	const navigate = useNavigate();
	const user = useUser();

	const handleAddNewClick = () => {
		navigate('/add');
	};

	const handleLoginRedirect = () => {
		navigate('/login');
	};

	const handleLogout = () => {
		logOut();
	};


	return (
		<nav className="navbar">
			<h1 className="brand-title">
				<BsHousesFill />
				Buy a house
			</h1>
			<div className="button-container">
				<button className="btn" onClick={handleAddNewClick}>
					Add new property
				</button>
				<a
					role="button"
					className="btn btn-secondary"
					href="https://youtu.be/dQw4w9WgXcQ"
				>
					Lorem ipsum
				</a>
				{user ? (
					<>
						<button
							className="btn btn-outline-light"
							onClick={handleLogout}
						>
							Sign out
						</button>
						<div className="user-logged">
							You're signed in as {user.displayName}
						</div>
					</>
				) : (
					<button
						className="btn btn-outline-light"
						onClick={handleLoginRedirect}
					>
						Sign in
					</button>
				)}
			</div>
		</nav>
	);
}

export default Navbar;
