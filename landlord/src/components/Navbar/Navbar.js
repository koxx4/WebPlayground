/* eslint-disable jsx-a11y/anchor-is-valid */
import './Navbar.css';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsHousesFill } from 'react-icons/bs';
import { UserContext } from '../User/UserContext';

function Navbar() {
	const navigate = useNavigate();
	const { loggedInUser, logout } = useContext(UserContext);

	const handleAddNewClick = () => {
		navigate('/add');
	};

	const handleLoginRedirect = () => {
		navigate('/login');
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
				{loggedInUser ? (
					<>
						<button
							className="btn btn-outline-light"
							onClick={logout}
						>
							Sign out
						</button>
						<div className="user-logged">
							You're signed in as {loggedInUser.firstName}{' '}
							{loggedInUser.lastName}. You logged total{' '}
							{loggedInUser.loginCount} times.
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
