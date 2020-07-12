import React from 'react';

const FilterForm = ({
    nameFilter, 
    handleNameFilterChange
}) => (
    <div>
        Filter with: <input value={nameFilter} onChange={handleNameFilterChange} />
    </div>
);
export default FilterForm;