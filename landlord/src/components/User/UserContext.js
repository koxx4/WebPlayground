import React, { createContext, useState } from 'react';
import users from '../../data/users.json';

const UserContext = createContext();

const UserProvider = ({ children }) => {
	let userFormLocalStorage = null;
	try {
		userFormLocalStorage = JSON.parse(localStorage.getItem('user_session'));
	} catch (error) {
		console.error('Error getting user from local storage', error);
	}
	const [loggedInUser, setLoggedInUser] = useState(userFormLocalStorage);

	const login = (email, password) => {
		const user = users.find(
			user => user.email === email && user.password === password
		);

		if (user) {
			user.loginCount++;
			localStorage.setItem('user_session', JSON.stringify(user));
			setLoggedInUser(user);
		}
	};

	const logout = () => {
		localStorage.removeItem('user_session');
		setLoggedInUser(null);
	};

	return (
		<UserContext.Provider value={{ loggedInUser, login, logout }}>
			{children}
		</UserContext.Provider>
	);
};

export { UserContext, UserProvider };
