/* eslint-disable jsx-a11y/anchor-is-valid */
import './Navbar.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsHousesFill } from 'react-icons/bs';

function Navbar() {
	const navigate = useNavigate();

	const handleAddNewClick = () => {
		navigate('/add');
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
			</div>
		</nav>
	);
}

export default Navbar;
