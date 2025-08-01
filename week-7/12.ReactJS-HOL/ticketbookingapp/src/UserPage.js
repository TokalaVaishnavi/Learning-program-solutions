import React from "react";

const UserPage = () => {
  const flights = [
    { id: 1, from: "Hyderabad", to: "Mumbai", price: 4000 },
    { id: 2, from: "Delhi", to: "Chennai", price: 5500 },
    { id: 3, from: "Bangalore", to: "Pune", price: 3000 },
  ];

  const handleBooking = (flight) => {
    alert(`Ticket booked from ${flight.from} to ${flight.to} for ₹${flight.price}`);
  };

  return (
    <div>
      <h2>User View - Book Flights</h2>
      <ul>
        {flights.map((flight) => (
          <li key={flight.id}>
            {flight.from} to {flight.to} - ₹{flight.price} &nbsp;
            <button onClick={() => handleBooking(flight)}>Book</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPage;
