import React from 'react';

function BirthdayCard({ user }) {
    return (
        <div className="birthday-card">
            <img src={user.image} alt={user.name} className="user-image" />
            <div className="user-details">
                <h2>{user.name}</h2>
                <p>Age: {user.age}</p>
                <p>Birthday: {user.Birthday}</p>
            </div>
        </div>
    );
}

export default BirthdayCard;
