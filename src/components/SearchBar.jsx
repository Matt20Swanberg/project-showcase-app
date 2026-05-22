import React, { useState } from "react";

// SearchBar handles project search input and filtering
function SearchBar({ searchTerm, setSearchTerm }) {

    return (
        <section className="search-section">

            {/* Controlled input for searching projects */}
            <input className="search-input" type="text"
                placeholder="Search Projects"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </section>
    );
}

export default SearchBar;