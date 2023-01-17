import React, { useState } from 'react';
import FilterUsers from './FilterUsers';
import Users from './Users';


const UsersDropdown = () => {
    const [selectedOption, setSelectedOption] = useState("following");  // <-- set the default value here
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    }

    return (
        <div>
            <select className="dropdown" value={selectedOption} onChange={handleChange}>
                <option value="" disabled>Filter Users</option>
                <option value="following">Following</option>
                <option value="everyone">All Users</option>
                
            </select>
            {selectedOption === "everyone" && <FilterUsers />}
            {selectedOption === "following" && <Users />}
        </div>
    );
}

export default UsersDropdown;