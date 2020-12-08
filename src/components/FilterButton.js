import React from "react";

const FilterButton = () => {
    return(
    <button type="button" clasName="btn toggle-btn" aria-pressed="true">
        <span className="visually-hidden"> Show </span>
        <span> all </span>
        <span className="visually-hidden"> tasks</span>
    </button>
    )
}

export default FilterButton;