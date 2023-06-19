import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import axios from 'axios';
import Navbar from './components/Navbar/Navbar';
import PropertyList from './components/PropertyList/PropertyList';
import NewPropertyForm from './components/NewPropertyForm/NewPropertyForm';
import Filter from './components/Filter/Filter';
import Login from './components/User/Login';

function App() {
	const [sortBy, setSortBy] = useState('');
	const [priceFilter, setPriceFilter] = useState('');
	const [roomsFilter, setRoomsFilter] = useState('');
	const [cityFilter, setCityFilter] = useState('');
	const [properties, setProperties] = useState([]);

	useEffect(() => {
		//Load houses from json only once
		axios
			.get('/data/properties.json')
			.then(response => {
				setProperties(response.data);
			})
			.catch(error => {
				console.error('Error loading properties from file: ', error);
			});
	}, []);

	const handleNewPropertySubmit = newProperty => {
		setProperties([...properties, newProperty]);
	};

	const handleSortChange = event => {
		setSortBy(event.target.value);
	};

	const handlePriceFilterChange = event => {
		setPriceFilter(event.target.value);
	};

	const handleRoomsFilterChange = event => {
		setRoomsFilter(event.target.value);
	};

	const handleCityFilterChange = event => {
		setCityFilter(event.target.value);
	};

	const filteredProperties = properties
		.filter(property => {
			if (priceFilter && property.price !== parseInt(priceFilter)) {
				return false;
			}

			if (roomsFilter && property.bedrooms !== parseInt(roomsFilter)) {
				return false;
			}

			return !(
				cityFilter &&
				!property.city.toLowerCase().includes(cityFilter.toLowerCase())
			);
		})
		.sort((a, b) => {
			if (sortBy === 'asc') return a.price - b.price;
			if (sortBy === 'desc') return b.price - a.price;
			return 0;
		});

	return (
		<>
			<Routes>
				<Route
					exact
					path="/"
					element={
						<>
							<Navbar />
							<section className="listing-section">
								<PropertyList
									properties={filteredProperties}
								/>
								<Filter
									sortBy={sortBy}
									handleSortChange={handleSortChange}
									priceFilter={priceFilter}
									handlePriceFilterChange={
										handlePriceFilterChange
									}
									roomsFilter={roomsFilter}
									handleRoomsFilterChange={
										handleRoomsFilterChange
									}
									cityFilter={cityFilter}
									handleCityFilterChange={
										handleCityFilterChange
									}
								/>
							</section>
						</>
					}
				/>
				<Route
					path="/add"
					element={
						<NewPropertyForm
							addNewPropertyHandler={handleNewPropertySubmit}
						/>
					}
				/>
				<Route path="/login" element={<Login />} />
			</Routes>
		</>
	);
}

export default App;
