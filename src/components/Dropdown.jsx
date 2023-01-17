import React, { useState } from 'react';
import FilterCat from './Filters/FilterCat';
import FilterDog from './Filters/FilterDog';
import FilterBird from './Filters/FilterBird';
import FilterEveryone from './Filters/FilterEveryone'
import Posts from './Posts';
import FilterOther from './Filters/FilterOther';


const Dropdown = () => {
    const [selectedOption, setSelectedOption] = useState("friends");  // <-- set the default value here
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    }

    return (
        <div>
            <select className="dropdown" value={selectedOption} onChange={handleChange}>
                <option value="" disabled>Filter Posts</option>
                <option value="friends">My Feed</option>
                <option value="everyone">All Posts</option>
                <option value="cat">Cat Posts</option>
                <option value="dog">Dog Posts</option>
                <option value="bird">Bird Posts</option>
                <option value="other">Other</option>
            </select>
            {selectedOption === "everyone" && <FilterEveryone />}
            {selectedOption === "friends" && <Posts />}
            {selectedOption === "cat" && <FilterCat />}
            {selectedOption === "dog" && <FilterDog />}
            {selectedOption === "bird" && <FilterBird />}
            {selectedOption === "other" && <FilterOther />}
        </div>
    );
}

export default Dropdown;