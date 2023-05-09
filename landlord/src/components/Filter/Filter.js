import React from 'react';

function Filter(props) {
	const {
		sortBy,
		handleSortChange,
		priceFilter,
		handlePriceFilterChange,
		roomsFilter,
		handleRoomsFilterChange,
		cityFilter,
		handleCityFilterChange,
	} = props;

	return (
		<form className="filter-form">
			<div className="form-group">
				<label>
					Sort by price:
					<select
						className="form-control"
						value={sortBy}
						onChange={handleSortChange}
					>
						<option value="">Select</option>
						<option value="asc">Ascending</option>
						<option value="desc">Descending</option>
					</select>
				</label>
			</div>

			<div className="form-group">
				<label>
					Filter by price:
					<input
						className="form-control"
						type="number"
						value={priceFilter}
						min="0"
						onChange={handlePriceFilterChange}
					/>
				</label>
			</div>

			<div className="form-group">
				<label>
					Filter by number of rooms:
					<input
						className="form-control"
						type="number"
						value={roomsFilter}
						min="0"
						onChange={handleRoomsFilterChange}
					/>
				</label>
			</div>

			<div className="form-group">
				<label>
					Filter by city:
					<input
						className="form-control"
						type="text"
						value={cityFilter}
						onChange={handleCityFilterChange}
					/>
				</label>
			</div>
		</form>
	);
}

export default Filter;
