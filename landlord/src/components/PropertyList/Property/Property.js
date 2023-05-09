import React from 'react';
import houseImg1 from '../../../data/house_img_1.jpg';
import houseImg2 from '../../../data/house_img_2.jpg';
import houseImg3 from '../../../data/house_img_3.jpg';
import './Property.css';
import { BiMoneyWithdraw } from 'react-icons/bi';
import { BsGeoAltFill, BsHousesFill } from 'react-icons/bs';
import { MdOutlineDescription } from 'react-icons/md';

const houseImages = [houseImg1, houseImg2, houseImg3];

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

function getRandomHouseImage() {
	return houseImages[getRandomInt(houseImages.length)];
}

function Property({ price, bedrooms, description, address, city, hint = '' }) {
	return (
		<div className="property-card">
			<img
				src={getRandomHouseImage()}
				alt="property"
				className="property-image"
			/>
			<div className="listing-details">
				<p>
					<BsGeoAltFill /> {address + ','} {city}
				</p>
				<p>
					<BsHousesFill /> {bedrooms}
				</p>
				<p>
					<BiMoneyWithdraw /> {price} zł
					<b>{parseInt(price) >= 2500 && ' <-- Aj karamba, drogie!'}</b>
				</p>
				<span>
					{' '}
					<MdOutlineDescription /> {description}
				</span>
				<small>{hint.toUpperCase()}</small>
			</div>
		</div>
	);
}

export default Property;
