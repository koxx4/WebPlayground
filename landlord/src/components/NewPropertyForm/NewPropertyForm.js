import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewPropertyForm.css';

function AddProperty({ addNewPropertyHandler }) {
	const navigate = useNavigate();
	const [validationMessage, setValidationMessage] = useState('');
	const [city, setCity] = useState('');
	const [address, setAddress] = useState('');
	const [bedrooms, setBedrooms] = useState('');
	const [price, setPrice] = useState('');
	const [description, setDescription] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		if (!city || !address || !bedrooms || !price || !description) {
			setValidationMessage('Wypełnij wszystkie pola!');
			return;
		}

		setValidationMessage('');
		const newProperty = {
			address: address,
			city: city,
			bedrooms: parseInt(bedrooms),
			price: parseInt(price),
			description: description,
			hint: 'Ogłoszenie dodane przez ciebie',
		};

		addNewPropertyHandler(newProperty);
		navigate('/');
	};

	return (
		<div className="container new-prop-form-container">
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label className="property">
						City:
						<input
							className="form-control"
							type="text"
							value={city}
							onChange={event => setCity(event.target.value)}
						/>
					</label>
				</div>

				<div className="form-group">
					<label className="property">
						Address:
						<input
							className="form-control"
							type="text"
							value={address}
							onChange={event => setAddress(event.target.value)}
						/>
					</label>
				</div>

				<div className="form-group">
					<label className="property">
						Number of bedrooms:
						<input
							className="form-control"
							type="number"
							value={bedrooms}
							min="0"
							onChange={event => setBedrooms(event.target.value)}
						/>
					</label>
				</div>

				<div className="form-group">
					<label className="property">
						Price:
						<input
							className="form-control"
							type="number"
							value={price}
							min="0"
							onChange={event => setPrice(event.target.value)}
						/>
					</label>
				</div>

				<div className="form-group">
					<label className="property">
						Description:
						<textarea
							className="form-control"
							rows={10}
							value={description}
							onChange={event => setDescription(event.target.value)}
						/>
					</label>
				</div>
				<h3 className="error-text">{validationMessage}</h3>
				<br></br>
				<button
					type="submit"
					className="btn btn-primary"
					onClick={handleSubmit}
				>
					Add
				</button>
				<br></br>
				<div className="form-group"></div>
				<a href="/">Return to main menu</a>
			</form>
		</div>
	);
}

export default AddProperty;
