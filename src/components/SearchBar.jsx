import React, { useState } from "react";

function SearchBar({ searchTerm, setSearchTerm }) {

    console.log(searchTerm);
    
    return (
        <section className="search-section">
            <input className="search-input" type="text"
                placeholder="Search Projects"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </section>
    );
}

export default SearchBar;