import React from 'react';
import BirthdayCard from './BirthdayCard';

function BirthdayList({ users }) {
    return (
        <div className="birthday-list">
            <p>Total Birthdays: {users.length}</p>
            {users.map(user => (
                <BirthdayCard key={user.id} user={user} />
            ))}
        </div>
    );
}

export default BirthdayList;
