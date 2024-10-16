import React, { useState } from 'react';
import BirthdayList from './components/BirthdayList';
import usersData from './data/users';
import './styles/styles.css';

function App() {
    const [users, setUsers] = useState(usersData);

    const resetBirthdays = () => {
        setUsers([]);
    };

    return (
        <div className="app-container">
            <h1>Birthday Reminder</h1>
            <BirthdayList users={users} />
            <button onClick={resetBirthdays} className="reset-btn">
                Reset
            </button>
        </div>
    );
}

export default App;
